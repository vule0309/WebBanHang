// Entry point dùng chung cho tất cả các trang.
// Khi dùng type="module", mỗi file tự quản lý import riêng nên main.js
// chỉ cần khởi tạo những thứ dùng chung trên mọi trang.
import { initMenu } from "./components/menu.js";

initMenu();
