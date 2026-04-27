# Website Bán Hàng Điện Thoại - Hướng Dẫn Học Tập

## 📁 Cấu Trúc Thư Mục

```
Web ban hang/
│
├── index.html          # Trang chủ
├── sanpham.html        # Trang sản phẩm
├── blog.html           # Trang blog
├── lienhe.html         # Trang liên hệ (contact)
│
├── css/
│   └── style.css       # File CSS chính
│
├── images/             # Thư mục chứa hình ảnh
│   └── (đặt ảnh vào đây)
│
└── js/                 # Thư mục JavaScript (sẽ dùng sau)
```

## 🎯 Mục Đích Học Tập

Website này được xây dựng để học HTML và CSS cơ bản:
- ✅ Cấu trúc HTML chuẩn
- ✅ CSS hiện đại với Flexbox và Grid
- ✅ Responsive Design (tự động điều chỉnh trên mobile)
- ✅ Layout website thương mại điện tử phổ biến

## 📚 Các Phần Đã Hoàn Thành

### 1. Trang Chủ (index.html)
- Header với logo và navigation
- Banner chính (Hero Section)
- Sản phẩm nổi bật (4 sản phẩm)
- Phần "Tại sao chọn chúng tôi"
- Footer với thông tin liên hệ

### 2. Trang Sản Phẩm (sanpham.html)
- Bộ lọc sản phẩm (Filter buttons)
- Hiển thị 8 sản phẩm với badge (Mới, Hot)
- Grid layout tự động điều chỉnh

### 3. Trang Blog (blog.html)
- 6 bài viết với hình ảnh
- Meta information (ngày, danh mục)
- Card design hiện đại

### 4. Trang Liên Hệ (lienhe.html)
- Form liên hệ (chưa có chức năng)
- Thông tin liên hệ
- Social media links
- Map placeholder

## 🎨 Các Kỹ Thuật CSS Được Sử Dụng

1. **CSS Reset** - Loại bỏ margin/padding mặc định
2. **Flexbox** - Cho header, navigation, footer
3. **CSS Grid** - Cho product grid, blog grid
4. **Gradient** - Màu chuyển sắc đẹp mắt
5. **Box Shadow** - Hiệu ứng đổ bóng
6. **Hover Effects** - Hiệu ứng khi di chuột
7. **Responsive Design** - Tự động điều chỉnh cho mobile

## 📱 Các Tính Năng Responsive

- **Desktop**: Full layout với nhiều cột
- **Tablet/Mobile**: Tự động chuyển thành 1 cột
- Navigation chuyển thành dạng dọc trên mobile

## 🖼️ Về Hình Ảnh

Hiện tại các ảnh đang dùng placeholder (gradient). Bạn cần:
1. Tải ảnh điện thoại từ internet
2. Đặt vào thư mục `images/`
3. Đặt tên đúng: phone1.jpg, phone2.jpg, blog1.jpg, etc.

## 🚀 Cách Chạy Website

1. Mở file `index.html` bằng trình duyệt
2. Hoặc click chuột phải → "Open with Live Server" (nếu có extension)

## 📖 Các Bước Học Tiếp Theo

### Bước 1: Hiểu cấu trúc HTML ✅ (Đã hoàn thành)
- Đọc kỹ file index.html
- Hiểu các thẻ: header, nav, section, footer
- Hiểu semantic HTML

### Bước 2: Hiểu CSS ✅ (Đã hoàn thành)
- Đọc file style.css từ trên xuống
- Hiểu cách dùng class
- Thực hành thay đổi màu sắc, font size

### Bước 3: Tùy Chỉnh (Nên làm tiếp)
- Thay đổi màu sắc chủ đạo
- Thay đổi font chữ
- Thêm/bớt sản phẩm
- Thay đổi nội dung text

### Bước 4: Thêm Hình Ảnh (Nên làm tiếp)
- Tìm ảnh điện thoại chất lượng
- Đặt vào thư mục images
- Ảnh nên có kích thước phù hợp (không quá lớn)

### Bước 5: JavaScript (Học sau)
- Làm form liên hệ hoạt động
- Thêm filter sản phẩm
- Thêm hiệu ứng chuyển động
- Làm giỏ hàng (nâng cao)

## 💡 Mẹo Học Tập

1. **Đọc code từ từ** - Đừng vội, hiểu từng dòng
2. **Thử nghiệm** - Thay đổi giá trị CSS để xem kết quả
3. **Inspect Element** - Dùng F12 để xem CSS trong trình duyệt
4. **Copy và hiểu** - Đừng chỉ copy, hãy hiểu tại sao
5. **Thực hành nhiều** - Tạo thêm trang mới

## 🎓 Kiến Thức Cần Nắm

### HTML Cơ Bản
- Thẻ HTML5: header, nav, section, article, footer
- Thẻ nội dung: h1-h6, p, a, img
- Thẻ layout: div, span
- Form: input, textarea, button, label

### CSS Cơ Bản
- Selectors: element, .class, #id
- Box Model: margin, padding, border
- Colors: hex, rgb, gradient
- Typography: font-size, font-weight, line-height
- Layout: display, flex, grid
- Responsive: media queries

## ❓ Câu Hỏi Thường Gặp

**Q: Tại sao ảnh không hiển thị?**
A: Bạn cần đặt ảnh vào thư mục images/ với đúng tên file.

**Q: Làm sao thay đổi màu chủ đạo?**
A: Tìm màu #3498db trong file CSS và thay bằng màu khác.

**Q: Form liên hệ không hoạt động?**
A: Đúng rồi, vì chưa có JavaScript. Bạn sẽ học sau.

**Q: Làm sao thêm sản phẩm mới?**
A: Copy code của một product-card và thay đổi nội dung.

## 📞 Lưu Ý Quan Trọng

- Website này CHỈ dùng HTML/CSS, chưa có chức năng
- Các nút "Xem Chi Tiết" chưa hoạt động (dùng #)
- Form chưa gửi được dữ liệu
- Filter sản phẩm chưa hoạt động
- Đây là website tĩnh (static) để học tập

## 🎉 Chúc Mừng!

Bạn đã có một website bán hàng cơ bản hoàn chỉnh để học tập!
Hãy từ từ tìm hiểu từng phần và thực hành nhiều nhé!
