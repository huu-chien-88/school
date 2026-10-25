// File: components/footer.js
document.getElementById('footer-placeholder').innerHTML = `
    <footer class="bg-gray-900 text-gray-300 pt-12 pb-6 border-t-4 border-brand-blue">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800 text-sm">
            <!-- Col 1: Thông tin trường -->
            <div class="space-y-3">
                <h4 class="text-white font-bold text-base uppercase tracking-wider">TRƯỜNG PTNT TH & THCS PÀ VẦY SỦ</h4>
                <p class="text-xs text-gray-400">Cơ quan chủ quản: Phòng Giáo dục và Đào tạo</p>
                <p><i class="fas fa-map-marker-alt text-brand-red mr-2"></i> Địa chỉ: xã Pà Vầy Sủ - tỉnh Tuyên Quang</p>
                <p><i class="fas fa-phone-alt text-brand-gold mr-2"></i> Điện thoại: Hỏi sếp đã </p>
                <p><i class="fas fa-envelope text-brand-lightBlue mr-2"></i> Email: demo@edu.vn</p>
            </div>

            <!-- Col 2: Liên kết nhanh -->
            <div class="space-y-2">
                <h4 class="text-white font-bold text-base uppercase tracking-wider">Liên kết nhanh</h4>
                <ul class="space-y-1.5 text-xs">
                    <li><a href="trang-chu.html" class="hover:text-white transition"><i class="fas fa-chevron-right text-[10px] mr-1 text-gray-500"></i> Trang chủ</a></li>
                    <li><a href="van-ban.html" class="hover:text-white transition"><i class="fas fa-chevron-right text-[10px] mr-1 text-gray-500"></i> Văn bản</a></li>
                    <li><a href="tin-tuc.html" class="hover:text-white transition"><i class="fas fa-chevron-right text-[10px] mr-1 text-gray-500"></i> Tổ chuyên môn</a></li>
                    <li><a href="ve-nha-truong.html" class="hover:text-white transition"><i class="fas fa-chevron-right text-[10px] mr-1 text-gray-500"></i> Tin tức – sự kiện</a></li>
                </ul>
            </div>

            <!-- Col 3: Đăng ký -->
            <div class="space-y-3">
                <h4 class="text-white font-bold text-base uppercase tracking-wider">Thư bản tin</h4>
                <p class="text-xs text-gray-400">Nhập email để nhận các thông báo tuyển sinh và văn bản mới nhất từ nhà trường.</p>
                <form class="flex gap-2" onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận thông tin!');">
                    <input type="email" placeholder="Email của bạn..." required class="px-3 py-2 bg-gray-800 text-white rounded-lg text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-blue">
                    <button type="submit" class="bg-brand-blue hover:bg-brand-lightBlue text-white text-xs px-4 py-2 rounded-lg font-semibold transition">Gửi</button>
                </form>
            </div>
        </div>

        <!-- Copyright -->
        <div class="max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-gray-500">
            <p>© 2026 Trường PTNT TH & THCS Pà Vầy Sủ. Tất cả quyền được bảo lưu.</p>
        </div>
    </footer>
`;