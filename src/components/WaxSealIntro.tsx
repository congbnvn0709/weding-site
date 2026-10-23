import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';
import { MailOpen, Sparkles } from 'lucide-react';

interface WaxSealIntroProps {
  onOpen: () => void;
}

export const WaxSealIntro: React.FC<WaxSealIntroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Trigger joyful celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7A8B7B', '#C8A27A', '#F4F7F4', '#D6BD9B']
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-linen-100 transition-all duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background subtle botanical pattern */}
      <div className="absolute inset-0 bg-paper-texture opacity-40"></div>

      {/* Decorative floral corners */}
      <div className="absolute top-6 left-6 text-sage-300 font-serif text-sm tracking-widest hidden sm:block">
        EST. 2026
      </div>
      <div className="absolute top-6 right-6 text-sage-300 font-serif text-sm tracking-widest hidden sm:block">
        WEDDING INVITATION
      </div>

      <div className="relative w-full max-w-md mx-4 p-8 text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-champagne-200/60">
        {/* Envelope Top Header */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-600 font-medium mb-1">
            Thiệp Báo Tin Mừng
          </p>
          <div className="w-12 h-[1px] bg-champagne-300 mx-auto my-2"></div>
        </div>

        {/* Couple Names */}
        <div className="space-y-1 mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif text-charcoal-800 tracking-wide font-normal">
            {WEDDING_DATA.groom.shortName}
          </h1>
          <div className="font-script text-2xl text-champagne-600 my-1">&</div>
          <h1 className="text-3xl sm:text-4xl font-serif text-charcoal-800 tracking-wide font-normal">
            {WEDDING_DATA.bride.shortName}
          </h1>
        </div>

        <p className="text-xs text-sage-700 italic font-serif mb-10 max-w-xs mx-auto">
          "Trân trọng kính mời quý khách đến chung vui cùng gia đình chúng tôi"
        </p>

        {/* 3D Wax Seal Button */}
        <div className="relative inline-block group">
          <button
            onClick={handleOpen}
            className="relative w-28 h-28 rounded-full bg-gradient-to-br from-sage-500 via-sage-600 to-sage-800 text-white shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 active:scale-95 border-2 border-champagne-300/50"
            title="Chạm để mở thiệp"
          >
            {/* Outer embossed ring */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-champagne-200/40"></div>
            
            {/* Wax Monogram */}
            <span className="font-serif text-lg tracking-widest text-champagne-100 font-semibold drop-shadow-sm">
              {WEDDING_DATA.monogram}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-sage-200 mt-0.5">
              Mở Thiệp
            </span>

            {/* Glowing pulse ring */}
            <div className="absolute -inset-2 rounded-full border border-sage-400/30 animate-ping pointer-events-none"></div>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-sage-600 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-champagne-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Chạm vào con dấu để mở thiệp</span>
        </div>
      </div>
    </div>
  );
};
