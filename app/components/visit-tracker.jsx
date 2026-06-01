'use client';

import { useEffect, useRef } from 'react';

export default function VisitTracker() {
  const hasLoggedVisit = useRef(false);

  useEffect(() => {
    // Ensure we only log the visit once per session load to avoid double-counting in React Strict Mode
    if (!hasLoggedVisit.current) {
      hasLoggedVisit.current = true;
      
      fetch('/api/visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).catch(err => console.error('Failed to log visit:', err));
    }
  }, []);

  return null; // This component doesn't render anything visually
}
