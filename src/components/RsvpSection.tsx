import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send, Users } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guestCount: '1',
    side: 'groom',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvp') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('wedding_rsvp', JSON.stringify(existing));

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  return (
    <section className="py-20 px-4 bg-white/60 border-t border-sage-200/60">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
            Xác Nhận Tham Dự
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
            Sự Hiện Diện Của Quý Khách
          </h2>
          <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
          <p className="text-xs text-sage-600 max-w-md mx-auto pt-2">
            Để gia đình chuẩn bị chu đáo nhất, xin vui lòng phản hồi trước ngày 05/11/2026.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-sage-50 border border-sage-300 rounded-2xl p-8 text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-sage-600 mx-auto animate-bounce" />
            <h3 className="text-xl font-serif text-charcoal-800">
              Cảm Ơn Bạn Đã Xác Nhận!
            </h3>
            <p className="text-xs text-sage-700 max-w-sm mx-auto">
              Mạnh Công &amp; Kim Loan rất trân quý tình cảm và mong chờ được đón tiếp bạn trong ngày vui!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-xs text-sage-600 underline font-medium"
            >
              Gửi lại phản hồi khác
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-linen-50 border border-sage-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                Họ và Tên của bạn *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="VD: Nguyễn Văn A"
                className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="VD: 0987..."
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                  Bạn là khách của ai?
                </label>
                <select
                  value={formData.side}
                  onChange={(e) => setFormData({ ...formData, side: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
                >
                  <option value="groom">Khách Chú Rể (Mạnh Công)</option>
                  <option value="bride">Khách Cô Dâu (Kim Loan)</option>
                  <option value="both">Khách Chung của Cặp Đôi</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                  Khả năng tham dự
                </label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
                >
                  <option value="yes">Chắc chắn tham dự</option>
                  <option value="no">Tiếc là không thể tham dự</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                  Số lượng người đi cùng
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
                >
                  <option value="1">1 người (Đi một mình)</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người trở lên</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1.5">
                Lời nhắn gửi đến Cô Dâu &amp; Chú Rể
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Gửi gắm vài dòng yêu thương..."
                className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-sage-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-sage-700 transition-colors shadow-md shadow-sage-900/10"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Xác Nhận Tham Dự</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
