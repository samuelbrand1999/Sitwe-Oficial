import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  yOffset = 24,
  blur = true,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        filter: blur ? 'blur(6px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-60px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
