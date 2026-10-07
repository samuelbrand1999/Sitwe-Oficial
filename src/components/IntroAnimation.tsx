import React, { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'active' | 'exit' | 'done'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = 'hidden';

    // Phase 1 -> 2: Reveal logo
    const tEnter = setTimeout(() => {
      setPhase('active');
    }, 150);

    // Progress counter ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve
        const step = prev < 50 ? 6 : prev < 85 ? 10 : 14;
        return Math.min(100, prev + step);
      });
    }, 30);

    // Trigger exit transition
    const tExit = setTimeout(() => {
      setPhase('exit');
    }, 1100);

    // Complete and unmount
    const tComplete = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem('db_intro_seen', '1');
      } catch {}
      onComplete();
    }, 1550);

    return () => {
      clearTimeout(tEnter);
      clearTimeout(tExit);
      clearTimeout(tComplete);
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (phase !== 'exit' && phase !== 'done') {
      setPhase('exit');
      setTimeout(() => {
        setPhase('done');
        document.body.style.overflow = '';
        try {
          sessionStorage.setItem('db_intro_seen', '1');
        } catch {}
        onComplete();
      }, 400);
    }
  };

  if (phase === 'done') return null;

  const isExiting = phase === 'exit';
  const isActive = phase === 'active' || phase === 'exit';

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070707] cursor-pointer select-none transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      aria-label="Animação de introdução - Clique para pular"
    >
      {/* Ambient Radial Spotlight */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 35%, transparent 70%)',
        }}
      />

      {/* Center Content: Brand Logo & Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glow halo behind logo */}
        <div
          className={`absolute -inset-10 bg-white/5 rounded-full blur-3xl transition-all duration-1000 pointer-events-none ${
            isActive ? 'opacity-80 scale-110' : 'opacity-0 scale-75'
          }`}
        />

        {/* Logo Icon with Cinematic Entrance */}
        <div
          className={`relative w-28 h-28 sm:w-36 sm:h-36 mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActive
              ? 'opacity-100 scale-100 blur-0 translate-y-0'
              : 'opacity-0 scale-90 blur-md translate-y-4'
          }`}
        >
          <img
            src="/logo_intro_trans.png"
            alt="Dantes Brandão"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Studio Signature Typography */}
        <div
          className={`transition-all duration-1000 delay-200 ease-out ${
            isActive
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-3 blur-sm'
          }`}
        >
          <h1
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="text-sm sm:text-base font-semibold tracking-[0.32em] text-white uppercase mb-2"
          >
            Dantes Brandão
          </h1>
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-neutral-400">
            Web Design · Direção de Arte
          </p>
        </div>

        {/* Minimalist Progress Indicator */}
        <div
          className={`mt-10 flex flex-col items-center transition-opacity duration-700 delay-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Thin Progress Track */}
          <div className="w-36 sm:w-48 h-[1.5px] bg-neutral-800 relative overflow-hidden mb-3">
            <div
              className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Tabular Percentage Counter */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 tracking-wider">
            <span>CARREGANDO</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-300 tabular-nums">
              {String(progress).padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>

      {/* Discreet Skip Prompt */}
      <div
        className={`absolute bottom-8 z-10 transition-opacity duration-700 delay-500 text-[10px] font-mono tracking-widest uppercase text-neutral-400 hover:text-white ${
          isActive ? 'opacity-70 hover:opacity-100' : 'opacity-0'
        }`}
      >
        <span>Clique em qualquer lugar para pular</span>
      </div>
    </div>
  );
};
