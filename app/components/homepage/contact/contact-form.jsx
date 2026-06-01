"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError({ ...error, email: true });
      return;
    }

    setError({ ...error, required: false });

    try {
      setIsLoading(true);
      await axios.post('/api/contact', userInput);

      toast.success("Message sent successfully!");
      setStatus({ text: "Message sent successfully!", type: "success" });
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const message = error?.response?.data?.message || 'Failed to send message. Please try again later.';
      toast.error(message);
      setStatus({ text: message, type: "error" });
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <p className="font-medium mb-5 text-xl uppercase" style={{color: '#00ff88', textShadow: '0 0 12px #00ff8866'}}>Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border p-3 lg:p-5" style={{borderColor: '#1a3d2b', background: '#0b1a13'}}>
        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="w-full border rounded-md px-3 py-2 ring-0 outline-0 transition-all duration-300" style={{background: '#070d0b', borderColor: '#1a3d2b'}}
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => {
                setStatus({ text: "", type: "" });
                setUserInput({ ...userInput, name: e.target.value });
              }}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="w-full border rounded-md px-3 py-2 ring-0 outline-0 transition-all duration-300" style={{background: '#070d0b', borderColor: '#1a3d2b'}}
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => {
                setStatus({ text: "", type: "" });
                setUserInput({ ...userInput, email: e.target.value });
              }}
              onBlur={(e) => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(e.target.value) });
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="w-full border rounded-md px-3 py-2 ring-0 outline-0 transition-all duration-300" style={{background: '#070d0b', borderColor: '#1a3d2b'}}
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => {
                setStatus({ text: "", type: "" });
                setUserInput({ ...userInput, message: e.target.value });
              }}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">
              All fields are required!
            </p>}
            {status.text && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {status.text}
              </p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:no-underline md:font-semibold"
              style={{background: 'linear-gradient(to right, #00ff88, #00b4d8)', color: '#070d0b', fontWeight: 700}}
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Sending Message...</span>:
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;