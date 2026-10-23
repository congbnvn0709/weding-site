import React from 'react';
import { WEDDING_DATA, WeddingEvent } from '../data/weddingData';
import { MapPin, Clock, Calendar, Navigation, ExternalLink } from 'lucide-react';

export const EventTimeline: React.FC = () => {
  const getGoogleCalendarUrl = (event: WeddingEvent) => {
    const title = encodeURIComponent(`${event.title} - Mạnh Công & Kim Loan`);
    const details = encodeURIComponent(`Trân trọng kính mời quý khách tham dự ${event.title} của Mạnh Công & Kim Loan.`);
    const location = encodeURIComponent(`${event.locationName}, ${event.address}`);
    // Example format: 20261115T040000Z/20261115T080000Z
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-20 px-4 bg-sage-50/60 border-y border-sage-200/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
            Thời Gian &amp; Địa Điểm
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
            Sự Kiện Cưới
          </h2>
          <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEDDING_DATA.events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle accent bar on top */}
              <div
                className={`absolute top-0 inset-x-0 h-1.5 ${
                  event.type === 'bride' ? 'bg-champagne-400' : 'bg-sage-500'
                }`}
              ></div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-700 bg-champagne-50 px-2.5 py-1 rounded-md inline-block">
                    {event.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 pt-1">
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-sage-800 pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-sage-600 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-charcoal-800">{event.time}</span>
                      <p className="text-xs text-sage-600">{event.date}</p>
                      <p className="text-xs text-champagne-700 italic">({event.lunarDate})</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <MapPin className="w-4 h-4 text-sage-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal-800">{event.locationName}</p>
                      <p className="text-xs text-sage-600 leading-relaxed">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sage-600 text-white text-xs font-medium hover:bg-sage-700 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Xem Bản Đồ Chỉ Đường</span>
                </a>
                <a
                  href={getGoogleCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-sage-50 text-sage-700 border border-sage-200 text-xs font-medium hover:bg-sage-100 transition-colors"
                  title="Thêm vào Google Calendar"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Lưu Lịch</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
