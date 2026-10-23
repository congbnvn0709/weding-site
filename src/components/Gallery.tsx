import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
          Khoảnh Khắc Đẹp
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
          Album Hình Cưới
        </h2>
        <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {WEDDING_DATA.gallery.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedImage(photo.url)}
            className="group relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-sage-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-xs sm:text-sm font-serif line-clamp-1">
                {photo.caption}
              </p>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-champagne-200">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Xem ảnh lớn</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Wedding gallery preview"
            className="max-h-[85vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
