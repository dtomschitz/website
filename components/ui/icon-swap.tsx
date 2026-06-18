'use client';

import type {AnimatePresenceProps, HTMLMotionProps} from 'motion/react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';

export default function IconSwap(props: React.PropsWithChildren<AnimatePresenceProps>) {
  return <AnimatePresence mode="popLayout" initial={false} {...props} />;
}

type MotionElement = typeof motion.div | typeof motion.span;

export function IconSwapItem({
  as: Component = motion.div,
  ...props
}: HTMLMotionProps<'div'> & {
  as?: MotionElement;
}) {
  const reduceMotion = useReducedMotion();

  // Reduced motion: cross-fade only, no scale/blur transform.
  if (reduceMotion) {
    return (
      <Component
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.15}}
        {...props}
      />
    );
  }

  return (
    <Component
      initial={{opacity: 0, scale: 0.25, filter: 'blur(4px)'}}
      animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
      exit={{opacity: 0, scale: 0.25, filter: 'blur(4px)'}}
      transition={{
        type: 'spring',
        duration: 0.3,
        bounce: 0,
      }}
      {...props}
    />
  );
}
