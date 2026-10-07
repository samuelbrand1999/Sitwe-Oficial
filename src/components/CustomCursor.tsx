import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Exact coordinates for instant dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth, responsive spring physics for outer trailing circle
  const springConfig = { damping: 28, stiffness: 360, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktops/laptops, not touchscreens)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const textTarget = target.closest('input, textarea');
        setIsTextInput(!!textTarget);

        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, video'
        );
        setIsHovered(!!interactive && !textTarget);
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setIsTextInput(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Outer Smooth Follower Ring (Fixed origin at 0,0) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.8 : isTextInput ? 0.4 : isHovered ? 1.55 : 1,
          borderColor: isHovered
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.45)',
          backgroundColor: isHovered
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(255, 255, 255, 0)',
        }}
        transition={{
          scale: { type: 'spring', damping: 24, stiffness: 380 },
          borderColor: { duration: 0.15 },
          backgroundColor: { duration: 0.15 },
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none mix-blend-difference"
      />

      {/* Inner Precision Dot (Zero Latency, Fixed origin at 0,0) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.6 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          scale: { duration: 0.12 },
          opacity: { duration: 0.12 },
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none mix-blend-difference"
      />
    </div>
  );
};
