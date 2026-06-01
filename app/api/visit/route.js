import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'visits.json');

export async function GET() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    
    // Get today's visits specifically
    const today = new Date().toISOString().split('T')[0];
    const todayVisits = parsedData.dailyVisits[today] || 0;

    return NextResponse.json({
      totalVisits: parsedData.totalVisits,
      todayVisits: todayVisits,
      dailyVisits: parsedData.dailyVisits
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error reading visits data' }, { status: 500 });
  }
}

export async function POST() {
  try {
    let parsedData = { totalVisits: 0, dailyVisits: {} };
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      parsedData = JSON.parse(data);
    }

    const today = new Date().toISOString().split('T')[0];

    // Increment total visits
    parsedData.totalVisits += 1;

    // Increment today's visits
    if (parsedData.dailyVisits[today]) {
      parsedData.dailyVisits[today] += 1;
    } else {
      parsedData.dailyVisits[today] = 1;
    }

    fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2), 'utf8');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to log visit:", error);
    return NextResponse.json({ message: 'Error updating visits data' }, { status: 500 });
  }
}
