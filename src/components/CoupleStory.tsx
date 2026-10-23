import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleStory: React.FC = () => {
  return (
    <section id="story" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
          Cô Dâu &amp; Chú Rể
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
          Cặp Đôi Hạnh Phúc
        </h2>
        <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Groom Card */}
        <div className="group bg-white/70 backdrop-blur-sm border border-sage-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-inner bg-sage-50">
              <img
                src={WEDDING_DATA.groom.avatar}
                alt={WEDDING_DATA.groom.fullName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-sage-700/80 backdrop-blur-md rounded-full text-[11px] text-white uppercase tracking-widest font-medium">
                Chú Rể
              </div>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-serif text-charcoal-800">
                {WEDDING_DATA.groom.fullName}
              </h3>
              <p className="text-xs text-sage-600 uppercase tracking-widest font-medium">
                {WEDDING_DATA.groom.role}
              </p>
              <p className="text-sm text-sage-800/80 leading-relaxed font-sans">
                {WEDDING_DATA.groom.bio}
              </p>
            </div>
          </div>

          {/* Family Info */}
          <div className="mt-8 pt-6 border-t border-sage-100 space-y-1.5 text-xs text-sage-700 text-center sm:text-left bg-sage-50/50 p-4 rounded-xl">
            <p className="font-semibold text-charcoal-800 uppercase tracking-wider text-[11px]">
              Gia Đình Nhà Trai
            </p>
            <p>Thân phụ: <span className="font-medium text-charcoal-800">{WEDDING_DATA.groom.father}</span></p>
            <p>Thân mẫu: <span className="font-medium text-charcoal-800">{WEDDING_DATA.groom.mother}</span></p>
            <p className="text-sage-500 pt-1">Địa chỉ: {WEDDING_DATA.groom.address}</p>
          </div>
        </div>

        {/* Bride Card */}
        <div className="group bg-white/70 backdrop-blur-sm border border-sage-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-inner bg-sage-50">
              <img
                src={WEDDING_DATA.bride.avatar}
                alt={WEDDING_DATA.bride.fullName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-champagne-600/90 backdrop-blur-md rounded-full text-[11px] text-white uppercase tracking-widest font-medium">
                Cô Dâu
              </div>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-serif text-charcoal-800">
                {WEDDING_DATA.bride.fullName}
              </h3>
              <p className="text-xs text-champagne-700 uppercase tracking-widest font-medium">
                {WEDDING_DATA.bride.role}
              </p>
              <p className="text-sm text-sage-800/80 leading-relaxed font-sans">
                {WEDDING_DATA.bride.bio}
              </p>
            </div>
          </div>

          {/* Family Info */}
          <div className="mt-8 pt-6 border-t border-sage-100 space-y-1.5 text-xs text-sage-700 text-center sm:text-left bg-champagne-50/40 p-4 rounded-xl">
            <p className="font-semibold text-charcoal-800 uppercase tracking-wider text-[11px]">
              Gia Đình Nhà Gái
            </p>
            <p>Thân phụ: <span className="font-medium text-charcoal-800">{WEDDING_DATA.bride.father}</span></p>
            <p>Thân mẫu: <span className="font-medium text-charcoal-800">{WEDDING_DATA.bride.mother}</span></p>
            <p className="text-sage-500 pt-1">Địa chỉ: {WEDDING_DATA.bride.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
