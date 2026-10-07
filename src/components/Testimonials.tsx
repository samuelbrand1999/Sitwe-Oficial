import React, { useState, useRef, useEffect } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Loader2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import karenImg from '../assets/images/project_karen_patricia_1790974541073.jpg';
import karlaImg from '../assets/images/project_karla_correa_1790974553999.jpg';
import silvanaImg from '../assets/images/project_silvana_castro_1790974564820.jpg';

const TESTIMONIAL_IMAGES: Record<string, string> = {
  'silvana-castro': silvanaImg,
  'karla-correa': karlaImg,
  'karen-patricia': karenImg,
};

interface TestimonialsProps {
  onViewProject?: (projectId: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = () => {
  const [selectedId, setSelectedId] = useState<string>('silvana-castro');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(60.0);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const current = TESTIMONIALS.find((t) => t.id === selectedId) || TESTIMONIALS[0];
  const hasVideo = Boolean(current.videoUrl);

  const currentIndex = Math.max(0, TESTIMONIALS.findIndex((t) => t.id === selectedId));
  const handlePrev = () => {
    const nextIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setSelectedId(TESTIMONIALS[nextIndex].id);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
    setSelectedId(TESTIMONIALS[nextIndex].id);
  };

  // When changing testimonial tab, reset video state
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setHasEnded(false);
    setIsBuffering(false);
    if (selectedId === 'silvana-castro') {
      setDuration(60.0);
    } else if (selectedId === 'karla-correa') {
      setDuration(36.2);
    } else if (selectedId === 'karen-patricia') {
      setDuration(62.5);
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [selectedId]);

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
    <section id="depoimentos" className="py-20 lg:py-28 border-b border-neutral-800/60 bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Headline */}
        <ScrollReveal duration={0.9} yOffset={26} className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Depoimentos reais
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Relatos em vídeo e avaliações de profissionais que transformaram sua presença digital através de uma direção de arte autoral e estratégica.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:block">
            <span>Experiência Comprovada · 03 Depoimentos em Vídeo</span>
          </div>
        </ScrollReveal>

        {/* Directional Navigation: Two Arrows to Alternate Videos */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-neutral-800/80">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-3">
            <span className="text-white font-medium">
              {String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <span className="text-neutral-700">·</span>
            <span className="text-neutral-300">{current.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Vídeo anterior"
              title="Vídeo anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Próximo vídeo"
              title="Próximo vídeo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Header: Placed above the video on small/medium screens */}
        <div className="lg:hidden mb-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Depoimento da {current.author}, {current.role}
          </h3>
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
                style={{
                  backgroundImage: `url(${current.posterUrl || TESTIMONIAL_IMAGES[current.id]})`,
                }}
                aria-hidden="true"
              />

              {hasVideo ? (
                <>
                  {/* Real HTML5 Video element */}
                  <video
                    key={current.id}
                    ref={videoRef}
                    playsInline
                    preload="none"
                    poster={current.posterUrl || TESTIMONIAL_IMAGES[current.id]}
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
                    {current.videoUrl && <source src={current.videoUrl} type="video/mp4" />}
                    {current.videoFallbackUrl && (
                      <source src={current.videoFallbackUrl} type="video/mp4" />
                    )}
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>

                  {/* High-fidelity Cover Image Overlay prior to playback */}
                  {!isPlaying && currentTime === 0 && (
                    <img
                      src={current.posterUrl || TESTIMONIAL_IMAGES[current.id]}
                      alt={`Capa do depoimento de ${current.author}`}
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
                </>
              ) : (
                /* Static Image for Written Testimonial */
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8 bg-neutral-950">
                  <img
                    src={TESTIMONIAL_IMAGES[current.id]}
                    alt={`Depoimento de ${current.author}`}
                    className="max-h-full max-w-full object-contain filter brightness-95"
                  />
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Highlight Quote & Context */}
          <ScrollReveal duration={1} delay={0.2} yOffset={28} className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header with Author and Role */}
              <div className="pb-4 border-b border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {current.author}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
                    {current.role} · {current.project}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-500 tabular-nums">{current.year}</span>
              </div>

              {/* Highlight Quote */}
              <blockquote
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-white"
              >
                “{current.highlightQuote}”
              </blockquote>

              {/* Full Testimonial Text */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                “{current.fullQuote}”
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
