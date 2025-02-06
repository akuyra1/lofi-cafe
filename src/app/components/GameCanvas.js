'use client';

import { useEffect, useRef } from 'react';
import { Application, Graphics } from 'pixi.js';

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application();
    // Initialize the application
    app.init({ width: 2000, height: 1000, background: 0x23395D }).then(() => {
      // Append the canvas to the DOM
      if (canvasRef.current) {
        canvasRef.current.appendChild(app.view);
      }

      // Draw a simple rectangle
    //   const rect = new Graphics();
    //   rect.beginFill(0xFF0000);
    //   rect.drawRect(100, 100, 50, 50);
    //   rect.endFill();
    //   app.stage.addChild(rect);
    });

    // Cleanup on unmount
    return () => {
      app.destroy(true, true);
    };
  }, []);
    // app.renderer.resize(window.innerWidth, window.innerHeight);

  return <div ref={canvasRef} style={{ width: '2000px', height: '1000px' }} />;
}
