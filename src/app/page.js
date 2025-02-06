'use client'
import GameCanvas from './components/GameCanvas';
import HUD from './components/HUD';

export default function HomePage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <GameCanvas />
      <HUD />
    </div>
  );
}
