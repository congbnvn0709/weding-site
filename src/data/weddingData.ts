export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string; // e.g. "2024-05-18"
  time: string; // e.g. "11:00"
  lunarDate: string; // e.g. "11 Tháng 4 Năm Giáp Thìn"
  locationName: string;
  address: string;
  mapUrl: string;
  type: 'groom' | 'bride' | 'party';
}

export interface BankAccount {
  owner: 'groom' | 'bride';
  title: string;
  name: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  branch?: string;
  qrUrl?: string;
}

export const WEDDING_DATA = {
  groom: {
    fullName: "Chu Mạnh Công",
    shortName: "Mạnh Công",
    role: "Chú rể",
    father: "Chu Bá Quân",
    mother: "Nguyễn Thị Lụa",
    address: "553 Thiên Đức, Vạn An, Bắc Ninh",
    phone: "0987654321",
    bio: "Một người đàn ông kiên định và chân thành, tìm thấy tình yêu trọn vẹn của cuộc đời.",
    avatar: "/images/couple-standing.jpg"
  },
  bride: {
    fullName: "Ngô Thị Kim Loan",
    shortName: "Kim Loan",
    role: "Cô dâu",
    father: "Ngô Văn Quyền",
    mother: "Nguyễn Thị Phượng",
    address: "Khúc Xuyên, Khúc Toại, Kinh Bắc, Bắc Ninh",
    phone: "0912345678",
    bio: "Cô gái dịu dàng, nụ cười rạng rỡ mang lại bình yên và niềm hạnh phúc cho từng khoảnh khắc.",
    avatar: "/images/couple-spotlight.png"
  },
  coverImage: "/images/couple-standing.jpg",
  spotlightImage: "/images/couple-spotlight.png",
  date: "2024-05-18T11:00:00",
  dateDisplay: "18 . 05 . 2024",
  invitationQuote: "Hạnh phúc không phải là một điểm đến, mà là một hành trình ta chọn cùng bước đi bên nhau.",
  monogram: "C & L",
  
  events: [
    {
      id: "vu-quy",
      title: "LỄ VU QUY (TƯ GIA NHÀ GÁI)",
      subtitle: "Tiệc trà & Lễ xuất giá",
      date: "Thứ Bảy, 18/05/2024",
      time: "09:00 AM",
      lunarDate: "Tức ngày 11 tháng 04 năm Giáp Thìn",
      locationName: "Tư gia Nhà Gái",
      address: "Khúc Xuyên, Khúc Toại, Kinh Bắc, Bắc Ninh",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Khúc+Toại,+Khúc+Xuyên,+Bắc+Ninh",
      type: "bride"
    },
    {
      id: "thanh-hon",
      title: "LỄ THÀNH HÔN (TƯ GIA NHÀ TRAI)",
      subtitle: "Lễ rước dâu & Tiệc mừng chính",
      date: "Thứ Bảy, 18/05/2024",
      time: "11:30 AM",
      lunarDate: "Tức ngày 11 tháng 04 năm Giáp Thìn",
      locationName: "Tư gia Nhà Trai",
      address: "553 Thiên Đức, Vạn An, Bắc Ninh",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=553+Thiên+Đức,+Vạn+An,+Bắc+Ninh",
      type: "groom"
    }
  ] as WeddingEvent[],

  gallery: [
    {
      id: 1,
      url: "/images/couple-standing.jpg",
      caption: "Khoảnh khắc hẹn ước trọn đời - Chu Mạnh Công & Ngô Thị Kim Loan"
    },
    {
      id: 2,
      url: "/images/couple-spotlight.png",
      caption: "Ánh mắt trao trọn niềm tin và tình yêu thương"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      caption: "Bình yên là khi có nhau trong từng khoảnh khắc"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
      caption: "Tình yêu bắt đầu từ những điều giản dị nhất"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
      caption: "Hành trình yêu thương bước sang trang mới"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85",
      caption: "Mãi mãi bên nhau"
    }
  ],

  bankAccounts: [
    {
      owner: "groom",
      title: "Mừng Cưới Chú Rể",
      name: "CHU MANH CONG",
      bankName: "MSB (Ngân Hàng Hàng Hải)",
      bankCode: "MSB",
      accountNumber: "1807091999",
      branch: "Bắc Ninh",
      qrUrl: "/images/qr-groom-card.png"
    },
    {
      owner: "bride",
      title: "Mừng Cưới Cô Dâu",
      name: "NGO THI KIM LOAN",
      bankName: "Vietcombank",
      bankCode: "VCB",
      accountNumber: "9988776655",
      branch: "Bắc Ninh"
    }
  ] as BankAccount[],

  music: {
    title: "Until I Found You (Acoustic)",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-guitar-112191.mp3"
  }
};
