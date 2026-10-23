import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { Heart, Share2, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${WEDDING_DATA.groom.shortName} & ${WEDDING_DATA.bride.shortName} - Thiệp Cưới`,
        text: 'Trân trọng kính mời quý khách tham dự lễ thành hôn của Mạnh Công & Kim Loan!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="py-16 px-4 bg-charcoal-900 text-white text-center relative overflow-hidden">
      <div className="max-w-md mx-auto space-y-6 relative z-10">
        {/* Monogram */}
        <div className="w-14 h-14 mx-auto rounded-full border border-champagne-400/40 flex items-center justify-center text-champagne-300 font-serif text-lg tracking-widest font-semibold">
          {WEDDING_DATA.monogram}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
            Thank You!
          </h2>
          <p className="text-xs text-sage-200/80 leading-relaxed font-sans max-w-xs mx-auto">
            Sự hiện diện và lời chúc phúc của quý khách là niềm vinh hạnh to lớn cho gia đình chúng tôi.
          </p>
        </div>

        {/* Share Button */}
        <div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Đã sao chép link thiệp!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-champagne-300" />
                <span>Chia sẻ thiệp cưới</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 text-[11px] text-sage-400 font-sans">
          <p className="flex items-center justify-center gap-1.5">
            <span>Mạnh Công</span>
            <Heart className="w-3 h-3 text-champagne-400 fill-champagne-400" />
            <span>Kim Loan</span>
            <span>• 18.05.2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
