import React, { useState } from 'react';
import { WEDDING_DATA, BankAccount } from '../data/weddingData';
import { Gift, Copy, Check, QrCode } from 'lucide-react';

export const GiftBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const currentAccount = WEDDING_DATA.bankAccounts.find((a) => a.owner === activeTab) || WEDDING_DATA.bankAccounts[0];

  const handleCopy = (accNum: string) => {
    navigator.clipboard.writeText(accNum);
    setCopiedAccount(accNum);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const getVietQrUrl = (acc: BankAccount) => {
    const description = encodeURIComponent(`Mung cuoi Manh Cong Kim Loan`);
    const name = encodeURIComponent(acc.name);
    return `https://img.vietqr.io/image/${acc.bankCode}-${acc.accountNumber}-compact2.png?amount=&addInfo=${description}&accountName=${name}`;
  };

  return (
    <section className="py-20 px-4 bg-linen-200/50 border-t border-sage-200/60">
      <div className="max-w-xl mx-auto text-center">
        <div className="mb-10 space-y-2">
          <div className="inline-flex p-3 rounded-full bg-champagne-100/80 text-champagne-700 mb-2">
            <Gift className="w-6 h-6" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-champagne-600 font-medium">
            Hộp Mừng Cưới
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-charcoal-800">
            Gửi Quà Mừng
          </h2>
          <div className="w-16 h-[1px] bg-champagne-300 mx-auto mt-3"></div>
          <p className="text-xs text-sage-600 max-w-sm mx-auto pt-2">
            Sự hiện diện của quý vị là món quà lớn nhất. Nếu quý khách ở xa muốn gửi quà mừng, xin vui lòng quét mã dưới đây.
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex p-1 rounded-xl bg-white border border-sage-200 shadow-sm mb-8">
          <button
            onClick={() => setActiveTab('groom')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
              activeTab === 'groom'
                ? 'bg-sage-600 text-white shadow-sm'
                : 'text-sage-600 hover:text-charcoal-800'
            }`}
          >
            Mừng Chú Rể
          </button>
          <button
            onClick={() => setActiveTab('bride')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
              activeTab === 'bride'
                ? 'bg-champagne-600 text-white shadow-sm'
                : 'text-sage-600 hover:text-charcoal-800'
            }`}
          >
            Mừng Cô Dâu
          </button>
        </div>

        {/* Bank Card with QR */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-200 shadow-sm max-w-sm mx-auto space-y-6 animate-fade-in">
          {/* VietQR Image */}
          <div className="relative max-w-[260px] mx-auto bg-gray-50 rounded-xl overflow-hidden p-2 border border-dashed border-sage-300 flex items-center justify-center">
            <img
              src={currentAccount.qrUrl || getVietQrUrl(currentAccount)}
              alt={`VietQR ${currentAccount.name}`}
              className="w-full max-h-[300px] object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Account Details */}
          <div className="space-y-2 text-xs text-sage-800 text-left bg-linen-50 p-4 rounded-xl border border-sage-100">
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sage-500">Ngân hàng:</span>
              <span className="font-semibold text-charcoal-800">{currentAccount.bankName}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sage-500">Chủ tài khoản:</span>
              <span className="font-semibold text-charcoal-800">{currentAccount.name}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sage-500">Số tài khoản:</span>
              <span className="font-mono font-bold text-sm text-sage-800">{currentAccount.accountNumber}</span>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={() => handleCopy(currentAccount.accountNumber)}
            className="w-full py-2.5 rounded-xl border border-sage-300 hover:border-sage-500 bg-white hover:bg-sage-50 text-charcoal-800 text-xs font-medium flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            {copiedAccount === currentAccount.accountNumber ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Đã sao chép số tài khoản!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-sage-600" />
                <span>Sao chép số tài khoản</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
