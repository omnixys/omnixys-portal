"use client";

import { useRef } from "react";

/**
 * Plays a short sound effect on demand.
 * Safe for user-triggered events.
 */
export function useSoundEffect(src: string, volume = 0.6) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function play() {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
    }

    audioRef.current.currentTime = 0; // allow rapid re-play
    audioRef.current.play().catch(() => {
      // autoplay policy safe-guard
    });
  }

  return { play };
}
