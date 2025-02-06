'use client';

import React, { useState, useEffect } from 'react';

export default function HUD() {
  const [coffeeBeans, setCoffeeBeans] = useState(0);

  useEffect(() => {
    // Basic "idle" increment
    const interval = setInterval(() => {
      setCoffeeBeans(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 20,
      left: 20,
      color: '#fff',
      fontSize: '1.2rem'
    }}>
      Coffee Beans: {coffeeBeans}
    </div>
  );
}
