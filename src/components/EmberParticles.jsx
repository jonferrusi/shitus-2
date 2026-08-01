import { useMemo } from 'react';

export default function EmberParticles({ count = 22 }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 10,
        drift: `${(Math.random() - 0.5) * 80}px`,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-0 rounded-full bg-amber-400 animate-ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            boxShadow: '0 0 6px 2px rgba(232,137,43,0.8)',
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            '--drift': e.drift,
          }}
        />
      ))}
    </div>
  );
}
