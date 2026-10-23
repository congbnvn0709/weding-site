# Website Thiệp Cưới: Mạnh Công & Kim Loan

Dự án thiệp cưới điện tử hiện đại, thanh lịch theo phong cách **Modern Garden Elegance (Sage Green & Warm Champagne)**.

---

## 🌟 Tính Năng Nổi Bật

1. **Hiệu ứng Mở Thiệp Con Dấu Sáp 3D (Interactive Wax Seal)**: Trải nghiệm chạm vào con dấu sáp dập chữ lồng `C & L` để mở thiệp kèm hiệu ứng pháo hoa giấy confetti.
2. **Nhạc Nền Tự Động / Nút Bật Tắt Nổi (Background Music)**: Giai điệu acoustic lãng mạn nhẹ nhàng.
3. **Đồng Hồ Đếm Ngược Ngày Cưới (Countdown Timer)**: Đếm ngược từng ngày, giờ, phút, giây đến ngày vui.
4. **Thông Tin Cô Dâu & Chú Rể (Couple Profile)**: Giới thiệu hai bên gia đình, ảnh chân dung và đôi lời tâm sự.
5. **Lịch Trình Sự Kiện & Tích Hợp Bản Đồ (Events & Map Navigation)**:
   - Chi tiết Lễ Vu Quy & Lễ Thành Hôn.
   - Nút dẫn đường trực tiếp sang Google Maps.
   - Nút lưu trực tiếp vào Google Calendar.
6. **Album Ảnh Cưới (Photo Gallery & Lightbox)**: Xem ảnh chất lượng cao và phóng to toàn màn hình.
7. **Xác Nhận Tham Dự (RSVP)**: Khảo sát số lượng khách, bên nhà trai/nhà gái, lưu trực tiếp.
8. **Sổ Lưu Bút Online (Guestbook)**: Khách mời để lại lời chúc mừng kèm hiệu ứng confetti.
9. **Hộp Mừng Cưới Thông Minh (VietQR)**: Mã QR ngân hàng quét tự động chuẩn VietQR, nút 1 chạm sao chép số tài khoản.
10. **Chia Sẻ Thiệp Dễ Dàng**: Hỗ trợ Web Share API chia sẻ qua Zalo, Facebook, Messenger.

---

## 🛠 Hướng Dẫn Chạy & Phát Triển

### Khởi động môi trường phát triển (Development):
```bash
npm run dev
```
Trang web sẽ chạy tại `http://localhost:5173`.

### Đóng gói dự án (Production Build):
```bash
npm run build
```
Mã nguồn sau khi tối ưu sẽ nằm trong thư mục `dist/`. Bạn có thể tải thư mục này lên bất kỳ hosting nào (Vercel, Netlify, GitHub Pages, Firebase Hosting, Cloudflare Pages...).

---

## 📝 Tùy Biến Thông Tin & Ảnh

Tất cả thông tin (Tên cô dâu chú rể, ngày giờ, địa điểm, số tài khoản ngân hàng, danh sách ảnh kỷ niệm) được lưu tập trung tại file:
👉 [`src/data/weddingData.ts`](./src/data/weddingData.ts)

Bạn chỉ cần mở file này để thay đổi số điện thoại, số tài khoản, link ảnh cưới thật và câu chúc của mình.
