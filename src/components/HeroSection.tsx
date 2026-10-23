import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { Calendar, Heart, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-16 pb-12 px-4 text-center overflow-hidden">
      {/* Decorative Botanical Foliage in background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sage-100/50 to-transparent pointer-events-none"></div>

      {/* Top Header Badge */}
      <div className="space-y-3 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-50 border border-sage-200/80 text-sage-700 text-xs tracking-[0.25em] uppercase font-medium">
          <Heart className="w-3 h-3 text-champagne-500 fill-champagne-400" />
          <span>Save Our Date</span>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-sage-600 font-serif">
          Lễ Thành Hôn
        </p>
      </div>

      {/* Names & Editorial Artwork */}
      <div className="my-auto py-10 z-10 max-w-xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal-800 font-normal tracking-tight">
            {WEDDING_DATA.groom.fullName}
          </h1>
          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1px] bg-champagne-300"></div>
            <span className="font-script text-3xl sm:text-4xl text-champagne-600">&</span>
            <div className="w-16 h-[1px] bg-champagne-300"></div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal-800 font-normal tracking-tight">
            {WEDDING_DATA.bride.fullName}
          </h1>
        </div>

        <p className="text-sm sm:text-base text-sage-800/80 italic font-serif max-w-md mx-auto leading-relaxed px-4">
          "{WEDDING_DATA.invitationQuote}"
        </p>

        {/* Big Date Display */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-champagne-200 shadow-sm text-charcoal-800">
            <Calendar className="w-4 h-4 text-champagne-600" />
            <span className="font-serif text-base sm:text-lg font-medium tracking-wide">
              15 . 11 . 2026
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="pt-6">
          <p className="text-xs uppercase tracking-widest text-sage-600 mb-3 font-medium">
            Thời Gian Đếm Ngược
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto">
            {[
              { label: 'Ngày', value: timeLeft.days },
              { label: 'Giờ', value: timeLeft.hours },
              { label: 'Phút', value: timeLeft.minutes },
              { label: 'Giây', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-sage-200/80 rounded-xl p-2 sm:p-3 shadow-sm text-center"
              >
                <div className="text-xl sm:text-2xl font-serif font-bold text-sage-800">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-sage-500 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <a
        href="#story"
        className="flex flex-col items-center text-sage-500 hover:text-sage-700 transition-colors z-10 pt-4"
      >
        <span className="text-[11px] tracking-widest uppercase mb-1 font-medium">Cuộn xuống</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
