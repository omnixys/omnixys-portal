"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Verbesserter Musik-Hook mit Steuerung
 */
export function useBackgroundMusic(src: string, play: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(play);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
      audioRef.current.preload = "auto";
    }

    if (play) {
      // User-Interaktion erforderlich für Autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy safe-guard
          console.log("Autoplay prevented, waiting for user interaction");
        });
      }
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [play, src]);

  const toggle = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  };

  return {
    isPlaying,
    toggle,
    setVolume,
  };
}
