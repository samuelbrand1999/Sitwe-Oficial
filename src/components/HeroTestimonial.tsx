import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Loader2
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import karenImg from '../assets/images/project_karen_patricia_1790974541073.jpg';

interface HeroTestimonialProps {
  onViewProject?: (projectId: string) => void;
}

export const HeroTestimonial: React.FC<HeroTestimonialProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(62.5);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  // Sync mute state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (hasEnded) {
      video.currentTime = 0;
      setHasEnded(false);
    }

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    const video = videoRef.current;
    if (!bar || !video || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = pct * duration;

    video.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-20 lg:py-28 border-b border-neutral-800/60 bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mobile Header: Placed above the video on small/medium screens */}
        <div className="lg:hidden mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Depoimento da Karen, Psicóloga Clínica
          </h2>
        </div>

        {/* Editorial Layout: Video Player + Quote Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left/Main Column: Large Video Presentation */}
          <ScrollReveal duration={1} delay={0.05} yOffset={28} className="lg:col-span-7">
            <div
              className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/11] bg-black border border-neutral-800 overflow-hidden group select-none shadow-2xl"
              onMouseEnter={() => setControlsVisible(true)}
              onMouseLeave={() => isPlaying && setControlsVisible(false)}
            >
              {/* Ambient atmospheric background blur (using video poster colors) */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center filter blur-2xl opacity-40 scale-125 pointer-events-none transition-opacity duration-700"
                style={{ backgroundImage: `url(/videos/capa_karen.jpg), url(${karenImg})` }}
                aria-hidden="true"
              />

              {/* Real HTML5 Video element */}
              <video
                ref={videoRef}
                playsInline
                preload="none"
                poster="/videos/capa_karen.jpg"
                onClick={togglePlay}
                onTimeUpdate={() => {
                  if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime);
                  }
                }}
                onLoadedMetadata={() => {
                  if (videoRef.current && videoRef.current.duration) {
                    setDuration(videoRef.current.duration);
                  }
                }}
                onWaiting={() => setIsBuffering(true)}
                onPlaying={() => {
                  setIsBuffering(false);
                  setIsPlaying(true);
                  setHasEnded(false);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setHasEnded(true);
                  setControlsVisible(true);
                }}
                className="relative z-10 w-full h-full object-contain cursor-pointer transition-transform duration-500"
              >
                {/* Universal web-optimized stream */}
                <source src="/videos/depoimento_karen_h264.mp4" type="video/mp4" />
                <source src="/videos/depoimento_karen.mp4" type="video/mp4" />
                {/* Direct remote HostGator origin fallback */}
                <source
                  src="https://dantesbrandao.com.br/video/VID_20260927_071311_660_bsl.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>

              {/* High-fidelity Cover Image Overlay prior to playback */}
              {!isPlaying && currentTime === 0 && (
                <img
                  src="/videos/capa_karen.jpg"
                  alt="Capa do depoimento de Karen Patrícia"
                  className="absolute inset-0 z-15 w-full h-full object-contain pointer-events-none transition-opacity duration-300"
                />
              )}

              {/* Scrim overlay for controls visibility */}
              <div
                className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ${
                  isPlaying && !controlsVisible
                    ? 'opacity-0'
                    : 'bg-gradient-to-t from-black/90 via-black/20 to-black/60 opacity-100'
                }`}
              />

              {/* Top Bar Time */}
              <div
                className={`absolute top-0 left-0 right-0 z-30 p-5 flex items-center justify-end text-xs font-mono text-white/90 transition-opacity duration-300 ${
                  isPlaying && !controlsVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="text-[11px] font-mono text-neutral-400 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-neutral-800">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Center Play / Pause / Replay Button */}
              <div
                className={`absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  isPlaying && !controlsVisible && !isBuffering ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <button
                  onClick={togglePlay}
                  className="pointer-events-auto group/btn relative w-20 h-20 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer"
                  aria-label={
                    hasEnded
                      ? 'Reiniciar depoimento'
                      : isPlaying
                      ? 'Pausar depoimento'
                      : 'Assistir depoimento em vídeo'
                  }
                >
                  {isBuffering ? (
                    <Loader2 className="w-7 h-7 text-black animate-spin" />
                  ) : hasEnded ? (
                    <RotateCcw className="w-7 h-7 text-black" />
                  ) : isPlaying ? (
                    <Pause className="w-7 h-7 text-black fill-black" />
                  ) : (
                    <Play className="w-7 h-7 text-black fill-black translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Bottom Interactive Controls & Progress Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-30 p-4 sm:p-5 transition-opacity duration-300 ${
                  isPlaying && !controlsVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                {/* Timeline Scrubber */}
                <div
                  ref={progressBarRef}
                  onClick={handleSeek}
                  className="group/track relative w-full h-2 bg-white/20 hover:h-3 rounded cursor-pointer transition-all mb-4 overflow-hidden"
                  title="Avançar / Retroceder vídeo"
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-white transition-all duration-75"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between text-xs font-mono text-white/90">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 hover:text-white text-neutral-300 transition-colors cursor-pointer"
                      aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1 hover:text-white text-neutral-300 transition-colors cursor-pointer flex items-center"
                      aria-label={isMuted ? 'Ativar som' : 'Silenciar áudio'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="p-1 hover:text-white text-neutral-300 transition-colors cursor-pointer"
                      aria-label="Tela cheia"
                      title="Tela cheia"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Highlight Quote & Context */}
          <ScrollReveal duration={1} delay={0.2} yOffset={28} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Desktop Title: Only on desktop (lg+) */}
              <div className="hidden lg:block mb-6 pb-4 border-b border-neutral-800/80">
                <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  Depoimento da Karen, Psicóloga Clínica
                </h2>
              </div>

              {/* Highlight Quote */}
              <blockquote
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white mb-6"
              >
                “É como se fosse uma obra de arte aquilo que eu vejo.”
              </blockquote>

              {/* Expanded Testimonial Paragraph */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                “Desde o início, fui tratada com muito respeito e muita clareza de propósito. A forma como ele conduz é clara, muito gentil e elegante. Me surpreendi, de fato, positivamente. Super indico esse trabalho.”
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
