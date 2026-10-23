import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeaderMusicProps {
  autoPlayTrigger?: boolean;
}

export const HeaderMusic: React.FC<HeaderMusicProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may be blocked by user browser settings until click
        setIsPlaying(false);
      });
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={WEDDING_DATA.music.src} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
          isPlaying
            ? 'bg-sage-600/90 text-white border-champagne-300 shadow-sage-900/10'
            : 'bg-white/80 text-charcoal-800 border-gray-200 shadow-sm hover:bg-white'
        }`}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        <div className={`p-1 rounded-full ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <Music className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-medium pr-1">
          {isPlaying ? (
            <span className="flex items-center gap-1">
              <span>Đang phát</span>
              <Volume2 className="w-3.5 h-3.5 animate-pulse text-champagne-300" />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <span>Bật nhạc</span>
              <VolumeX className="w-3.5 h-3.5 text-gray-400" />
            </span>
          )}
        </span>
      </button>
    </div>
  );
};
