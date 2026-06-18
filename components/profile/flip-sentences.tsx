"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  sentences,
  className,
}: {
  sentences: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sentences.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(id);
  }, [sentences.length]);

  return (
    <div className={cn("flex items-center", className)}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="font-mono text-sm text-balance text-muted-foreground"
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
