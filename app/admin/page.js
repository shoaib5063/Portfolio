'use client';

import { useEffect, useState } from 'react';
import { FaUsers, FaCalendarDay } from 'react-icons/fa';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalVisits: 0, todayVisits: 0, dailyVisits: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/visit')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch stats", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 lg:py-24 max-w-4xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="flex items-center relative">
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
          <span className="w-fit text-white p-2 px-5 text-2xl rounded-md uppercase font-bold" style={{background: '#0b1a13', border: '1px solid #00ff8833', color: '#00ff88', textShadow: '0 0 10px #00ff8866'}}>
            Admin Dashboard
          </span>
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Total Visits Card */}
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-2xl border transition-all duration-300 hover:scale-[1.02]"
             style={{background: 'linear-gradient(145deg, #0b1a13, #070d0b)', borderColor: '#1a3d2b', boxShadow: '0 10px 30px -10px rgba(0,255,136,0.1)'}}>
          <FaUsers size={48} style={{color: '#00e5ff'}} className="mb-4" />
          <h3 className="text-xl text-gray-400 font-medium mb-2 uppercase tracking-wider">Total Visitors</h3>
          {loading ? (
            <div className="h-12 w-24 rounded-md animate-pulse" style={{background: '#1a3d2b'}}></div>
          ) : (
            <p className="text-5xl font-bold" style={{color: '#00ff88', textShadow: '0 0 16px #00ff8866'}}>
              {stats.totalVisits.toLocaleString()}
            </p>
          )}
        </div>

        {/* Daily Visits Card */}
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-2xl border transition-all duration-300 hover:scale-[1.02]"
             style={{background: 'linear-gradient(145deg, #0b1a13, #070d0b)', borderColor: '#1a3d2b', boxShadow: '0 10px 30px -10px rgba(0,255,136,0.1)'}}>
          <FaCalendarDay size={48} style={{color: '#00e5ff'}} className="mb-4" />
          <h3 className="text-xl text-gray-400 font-medium mb-2 uppercase tracking-wider">Visits Today</h3>
          {loading ? (
            <div className="h-12 w-24 rounded-md animate-pulse" style={{background: '#1a3d2b'}}></div>
          ) : (
            <p className="text-5xl font-bold" style={{color: '#00ff88', textShadow: '0 0 16px #00ff8866'}}>
              {stats.todayVisits.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      <div className="mt-16 border rounded-lg overflow-hidden" style={{borderColor: '#1a3d2b', background: '#070d0b'}}>
        <div className="px-6 py-4 border-b" style={{borderColor: '#1a3d2b', background: '#0b1a13'}}>
          <h4 className="text-lg font-semibold" style={{color: '#00ff88'}}>Recent Daily Breakdown</h4>
        </div>
        <div className="p-6">
          {loading ? (
            <p className="text-gray-400 text-center">Loading statistics...</p>
          ) : Object.keys(stats.dailyVisits).length > 0 ? (
            <ul className="space-y-3">
              {Object.entries(stats.dailyVisits)
                .sort((a, b) => new Date(b[0]) - new Date(a[0])) // Sort newest first
                .slice(0, 10) // Show last 10 days
                .map(([date, count]) => (
                <li key={date} className="flex justify-between items-center py-2 border-b last:border-0" style={{borderColor: '#1a3d2b'}}>
                  <span className="text-gray-300 font-mono">{date}</span>
                  <span className="font-bold bg-[#0b1a13] px-3 py-1 rounded" style={{color: '#00e5ff', border: '1px solid #1a3d2b'}}>
                    {count} visits
                  </span>
                </li>
              ))}
            </ul>
          ) : (
             <p className="text-gray-400 text-center">No daily statistics available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
