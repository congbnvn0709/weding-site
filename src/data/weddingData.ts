export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string; // e.g. "2026-11-15"
  time: string; // e.g. "11:00"
  lunarDate: string; // e.g. "15 Tháng 10 Năm Bính Ngọ"
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
    fullName: "Nguyễn Mạnh Công",
    shortName: "Mạnh Công",
    role: "Chú rể",
    father: "Nguyễn Văn Hùng",
    mother: "Trần Thị Lan",
    address: "Hà Nội, Việt Nam",
    phone: "0987654321",
    bio: "Một lập trình viên luôn kiên nhẫn và chân thành, tìm thấy nửa kia hoàn hảo của cuộc đời.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  bride: {
    fullName: "Trần Kim Loan",
    shortName: "Kim Loan",
    role: "Cô dâu",
    father: "Trần Quang Minh",
    mother: "Lê Thị Thu",
    address: "Hà Nội, Việt Nam",
    phone: "0912345678",
    bio: "Cô gái dịu dàng, nụ cười tỏa nắng mang lại bình yên và niềm vui cho từng khoảnh khắc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  date: "2026-11-15T11:00:00",
  invitationQuote: "Hạnh phúc không phải là một điểm đến, mà là một hành trình ta chọn cùng bước đi bên nhau.",
  monogram: "C & L",
  
  events: [
    {
      id: "vu-quy",
      title: "LỄ VU QUY (TƯ GIA NHÀ GÁI)",
      subtitle: "Tiệc trà & Thân mật",
      date: "Chủ Nhật, 15/11/2026",
      time: "09:00 AM",
      lunarDate: "Tức ngày 06 tháng 10 năm Bính Ngọ",
      locationName: "Tư gia Nhà Gái",
      address: "Số 88 Phố Cổ, Quận Hoàn Kiếm, Hà Nội",
      mapUrl: "https://maps.google.com/?q=Hanoi",
      type: "bride"
    },
    {
      id: "thanh-hon",
      title: "LỄ THÀNH HÔN (TƯ GIA NHÀ TRAI)",
      subtitle: "Lễ rước dâu & Tiệc mừng chính",
      date: "Chủ Nhật, 15/11/2026",
      time: "11:30 AM",
      lunarDate: "Tức ngày 06 tháng 10 năm Bính Ngọ",
      locationName: "Trung Tâm Tiệc Cưới Elegance Garden",
      address: "Số 68 Đường Hoàng Hoa Thám, Ba Đình, Hà Nội",
      mapUrl: "https://maps.google.com/?q=Hanoi",
      type: "groom"
    }
  ] as WeddingEvent[],

  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      caption: "Khoảnh khắc bình yên bên nhau"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      caption: "Nụ cười rạng rỡ ngày hẹn ước"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
      caption: "Ánh mắt trao trọn niềm tin"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
      caption: "Hành trình yêu thương"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      caption: "Bên em là mùa xuân"
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
      name: "NGUYEN MANH CONG",
      bankName: "Techcombank",
      bankCode: "TCB",
      accountNumber: "19036888888888",
      branch: "Hà Nội"
    },
    {
      owner: "bride",
      title: "Mừng Cưới Cô Dâu",
      name: "TRAN KIM LOAN",
      bankName: "Vietcombank",
      bankCode: "VCB",
      accountNumber: "9988776655",
      branch: "Hà Nội"
    }
  ] as BankAccount[],

  music: {
    title: "Until I Found You (Acoustic)",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-guitar-112191.mp3"
  }
};
