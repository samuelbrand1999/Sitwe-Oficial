import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Smartphone } from 'lucide-react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
  aspectClass: string;
  priority?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  project,
  aspectClass,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [currentSrc, setCurrentSrc] = useState(project.image);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(8);

  const isScrollable = Boolean(project.scrollable);

  const measureScroll = () => {
    if (imgRef.current && containerRef.current) {
      const imgH = imgRef.current.offsetHeight || imgRef.current.naturalHeight || 0;
      const containerH = containerRef.current.offsetHeight || 0;
      const dist = Math.max(0, imgH - containerH);
      setScrollDistance(dist);
      setScrollDuration(Math.max(5, Math.min(16, dist / 240)));
    }
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    requestAnimationFrame(measureScroll);
  };

  const handleImageError = () => {
    if (project.fallbackImage && currentSrc !== project.fallbackImage) {
      setCurrentSrc(project.fallbackImage);
    } else {
      // If no fallback or fallback failed, still dismiss the loading spinner
      setIsLoaded(true);
    }
  };

  // Immediate cache check whenever currentSrc changes or on mount
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      measureScroll();
    }
  }, [currentSrc]);

  // Sync currentSrc only if project.image truly changes
  const prevImageRef = useRef(project.image);
  useEffect(() => {
    if (prevImageRef.current !== project.image) {
      prevImageRef.current = project.image;
      setCurrentSrc(project.image);
      setIsLoaded(false);
    }
  }, [project.image]);

  // Recalculate scroll distance whenever dimensions change
  useEffect(() => {
    if (!isScrollable) return;
    measureScroll();
    window.addEventListener('resize', measureScroll);
    return () => window.removeEventListener('resize', measureScroll);
  }, [isScrollable, currentSrc]);

  // Safety fallback timeout to prevent infinite spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      measureScroll();
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentSrc]);

  const isScrolling = isScrollable && (isHovered || isMobileActive);
  const isReady = isLoaded || Boolean(imgRef.current?.complete && (imgRef.current?.naturalWidth ?? 0) > 0);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (isScrollable) {
      const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
      if (isMobile) {
        // On mobile, tap toggles scroll preview
        e.stopPropagation();
        setIsMobileActive((prev) => !prev);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      onMouseEnter={() => isScrollable && setIsHovered(true)}
      onMouseLeave={() => isScrollable && setIsHovered(false)}
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#111111] border border-neutral-800/80 group/mockup select-none shadow-2xl transition-all duration-300 hover:border-neutral-700`}
    >
      {/* Background loading pulse skeleton */}
      {!isReady && (
        <div className="absolute inset-0 bg-neutral-900/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-neutral-700/50 border-t-white animate-spin opacity-40" />
        </div>
      )}

      {isScrollable ? (
        <>
          {/* Scrollable Full-Page Mockup Image */}
          <img
            ref={imgRef}
            src={currentSrc}
            alt={`Layout completo do site ${project.name} — Web Design por Dantes Brandão`}
            referrerPolicy="no-referrer"
            decoding="async"
            loading="eager"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              transform: isScrolling
                ? `translate3d(0, -${scrollDistance}px, 0)`
                : 'translate3d(0, 0, 0)',
              transition: isScrolling
                ? `transform ${scrollDuration}s ease-in-out`
                : 'transform 1.2s ease-out',
            }}
            className={`w-full h-auto absolute top-0 left-0 object-top filter grayscale-[0.15] contrast-105 group-hover/mockup:grayscale-0 will-change-transform transition-opacity duration-500 ${
              isReady ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Interactive Cue Badges */}
          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
            {/* Desktop Cue */}
            <div
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-md border border-neutral-700/80 text-[11px] font-mono text-neutral-300 transition-opacity duration-300 ${
                isHovered ? 'border-white/50 text-white' : 'opacity-85'
              }`}
            >
              <ArrowDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  isHovered ? 'animate-bounce text-white' : 'text-neutral-400'
                }`}
              />
              <span>
                {isHovered ? 'Rolando página inteira' : 'Passe o mouse para rolar'}
              </span>
            </div>

            {/* Mobile Cue */}
            <div
              className={`sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/90 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono text-neutral-300 transition-colors ${
                isMobileActive ? 'border-white text-white' : 'text-neutral-300'
              }`}
            >
              <Smartphone className="w-3 h-3 text-neutral-400" />
              <span>
                {isMobileActive ? 'Rolando' : 'Toque para rolar o site'}
              </span>
            </div>
          </div>
        </>
      ) : (
        /* Standard Fixed Aspect Image */
        <img
          src={currentSrc}
          alt={`Site desenvolvido para ${project.name} — Web Design por Dantes Brandão`}
          referrerPolicy="no-referrer"
          decoding="async"
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={`w-full h-full object-cover object-top filter grayscale-[0.2] contrast-105 group-hover/mockup:scale-103 group-hover/mockup:grayscale-0 transition-all duration-700 ease-out ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
