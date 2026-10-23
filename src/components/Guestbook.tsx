import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MessageSquareHeart, Send, Heart } from 'lucide-react';

interface Wish {
  id: string;
  name: string;
  message: string;
  time: string;
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Gia đình Bác Tuấn',
    message: 'Chúc hai cháu trăm năm hạnh phúc, răng long đầu bạc, luôn yêu thương và thấu hiểu nhau!',
    time: 'Vừa xong'
  },
  {
    id: '2',
    name: 'Hội Bạn Đại Học',
    message: 'Chúc mừng Công & Loan! Mảnh ghép hoàn hảo cuối cùng cũng về chung một nhà rồi!',
    time: '1 giờ trước'
  },
  {
    id: '3',
    name: 'Lan Anh (Bạn cô dâu)',
    message: 'Chúc cô dâu xinh đẹp nhất trần đời và chú rể luôn ngập tràn hạnh phúc và tiếng cười!',
    time: 'Hôm qua'
  }
];

export const Guestbook: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('wedding_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch {
        setWishes(DEFAULT_WISHES);
      }
    } else {
      setWishes(DEFAULT_WISHES);
    }
  }, []);

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      time: 'Vừa xong'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));

    setName('');
    setMessage('');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-14 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
          Sổ Lưu Bút
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
          Gửi Lời Chúc Phúc
        </h2>
        <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Form input */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-sage-200/80 shadow-sm">
          <h3 className="text-base font-serif text-charcoal-800 font-semibold mb-4 flex items-center gap-2">
            <MessageSquareHeart className="w-4 h-4 text-champagne-600" />
            <span>Viết lời chúc</span>
          </h3>

          <form onSubmit={handleSendWish} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Tên của bạn
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Minh Đức"
                className="w-full px-3.5 py-2 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Lời chúc
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Chúc hai bạn..."
                className="w-full px-3.5 py-2 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white text-xs"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-champagne-600 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-champagne-700 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi Lời Chúc</span>
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="lg:col-span-3 space-y-3 max-h-[420px] overflow-y-auto pr-2">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-sage-200/60 shadow-sm hover:border-sage-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-semibold text-sm text-charcoal-800">
                  {w.name}
                </span>
                <span className="text-[10px] text-sage-500 font-sans">{w.time}</span>
              </div>
              <p className="text-xs text-sage-800 leading-relaxed font-sans">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
