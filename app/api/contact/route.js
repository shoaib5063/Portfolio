import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
};

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: `Portfolio <${process.env.EMAIL_ADDRESS}>`, 
    to: process.env.EMAIL_ADDRESS, 
    subject: `New Message From ${name}`, 
    text: message, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error);
    const rawMessage = error?.message || 'Email service failed.';
    if (rawMessage.includes('Invalid login') || rawMessage.includes('BadCredentials')) {
      throw new Error('Invalid Gmail credentials. Use a valid Gmail App Password for GMAIL_PASSKEY and ensure EMAIL_ADDRESS is correct.');
    }
    throw new Error(rawMessage);
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      return NextResponse.json({
        success: false,
        message: 'Email service is not configured. Please check your environment variables.',
      }, { status: 500 });
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    const emailSuccess = await sendEmail(payload, message);
    let telegramSuccess = false;
    let telegramStatus = 'skipped';

    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, message);
      telegramStatus = telegramSuccess ? 'sent' : 'failed';
    }

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: token && chat_id
          ? telegramSuccess
            ? 'Message sent successfully via email and Telegram.'
            : 'Message sent via email, but Telegram notification failed.'
          : 'Message sent successfully via email.',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    }, { status: 500 });
  } catch (error) {
    const message = error?.message || 'Server error occurred.';
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      message,
    }, { status: 500 });
  }
};