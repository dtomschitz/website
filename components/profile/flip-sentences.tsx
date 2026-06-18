'use client';

import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';

import {cn} from '@/lib/utils';

export function FlipSentences({sentences, className}: {sentences: string[]; className?: string}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Respect prefers-reduced-motion: hold a single static sentence.
    if (reduceMotion || sentences.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(id);
  }, [sentences.length, reduceMotion]);

  if (reduceMotion) {
    return (
      <div className={cn('flex items-center', className)}>
        <p className="font-mono text-sm text-balance text-muted-foreground">{sentences[0]}</p>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center', className)}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="font-mono text-sm text-balance text-muted-foreground"
          initial={{opacity: 0, y: 8, filter: 'blur(4px)'}}
          animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
          exit={{opacity: 0, y: -8, filter: 'blur(4px)'}}
          transition={{duration: 0.3, ease: 'easeOut'}}
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
