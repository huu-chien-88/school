// File: components/header.js
document.getElementById('header-placeholder').innerHTML = `
    <!-- TOP HEADER / CONTACT BAR -->
    <div class="bg-brand-blue text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center gap-4">
                <span class="flex items-center gap-1"><i class="fas fa-phone-alt text-brand-gold"></i> Hotline: Hỏi sếp Huỳnh </span>
                <span class="hidden md:flex items-center gap-1"><i class="fas fa-envelope text-brand-gold"></i> Email: demo@edu.vn</span>
            </div>
            <div class="flex items-center gap-4">
                <span class="hidden sm:inline"><i class="fas fa-clock text-brand-gold"></i> Giờ làm việc: 7:00 - 17:00 (Thứ 2 - Chủ Nhật)</span>
                <div class="flex items-center gap-2">
                    <a href="#" class="hover:text-brand-gold transition"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="hover:text-brand-gold transition"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- MAIN HEADER & LOGO -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <!-- Logo & School Name -->
            <a href="index.html" class="flex items-center space-x-3 group">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md border-2 border-brand-gold">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div>
                    <h1 class="text-base sm:text-xl font-bold text-brand-blue uppercase leading-tight group-hover:text-brand-lightBlue transition">TRƯỜNG PTNT TH & THCS PÀ VẦY SỦ</h1>
                    <p class="text-xs text-gray-500 font-medium">Tri thức - Trách nhiệm - Sáng tạo - Phát triển</p>
                </div>
            </a>

            <!-- Search Bar & Mobile Toggle -->
            <div class="flex items-center gap-3">
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-brand-blue hover:bg-gray-100 focus:outline-none">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- MAIN NAVIGATION BAR -->
        <nav class="bg-brand-blue text-white border-t border-blue-900 hidden lg:block">
            <div class="max-w-7xl mx-auto px-4">
                <ul class="flex items-center font-medium text-sm">
                    <!-- 1. Trang chủ -->
                    <li>
                        <a href="index.html" class="inline-block py-3.5 px-5 hover:bg-blue-800 transition">
                            <i class="fas fa-home mr-1"></i> Trang chủ
                        </a>
                    </li>

                    <!-- 2. Văn bản -->
                    <li>
                        <a href="van-ban.html" class="inline-block py-3.5 px-5 hover:bg-blue-800 transition">
                            Văn bản
                        </a>
                    </li>

                    <!-- 3. Chuyên môn (Dropdown) -->
                    <li class="relative group">
                        <a href="#chuyen-mon" class="inline-flex items-center py-3.5 px-5 hover:bg-blue-800 transition">
                            Chuyên môn <i class="fas fa-chevron-down text-xs ml-1.5 opacity-80"></i>
                        </a>
                        <div class="dropdown-menu hidden absolute left-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-brand-red py-2 z-50">
                            <a href="to-chuyen-mon-1-2-3.html" class="block px-4 py-2.5 hover:bg-blue-50 hover:text-brand-blue text-sm border-b border-gray-100 transition"><i class="fas fa-users text-brand-blue mr-2"></i> Tổ 1-2-3</a>
                            <a href="to-chuyen-mon-4-5.html" class="block px-4 py-2.5 hover:bg-blue-50 hover:text-brand-blue text-sm border-b border-gray-100 transition"><i class="fas fa-users text-brand-blue mr-2"></i> Tổ 4-5</a>
                            <a href="to-tu-nhien.html" class="block px-4 py-2.5 hover:bg-blue-50 hover:text-brand-blue text-sm border-b border-gray-100 transition"><i class="fas fa-atom text-brand-blue mr-2"></i> Tổ Khoa học tự nhiên</a>
                            <a href="to-xa-hoi.html" class="block px-4 py-2.5 hover:bg-blue-50 hover:text-brand-blue text-sm transition"><i class="fas fa-globe-asia text-brand-blue mr-2"></i> Tổ Khoa học xã hội</a>
                        </div>
                    </li>

                    <!-- 4. Tin tức – sự kiện -->
                    <li>
                        <a href="tin-tuc.html" class="inline-block py-3.5 px-5 hover:bg-blue-800 transition">
                            Tin tức – sự kiện
                        </a>
                    </li>

                    <!-- 5. Về nhà trường -->
                    <li>
                        <a href="ve-nha-truong.html" class="inline-block py-3.5 px-5 hover:bg-blue-800 transition">
                            Về nhà trường
                        </a>
                    </li>
                    <!-- 6. Sơ đồ nhà trường -->
                    <li>
                        <a href="so-do-truong-hoc.html" class="inline-block py-3.5 px-5 hover:bg-blue-800 transition">
                            Sơ đồ nhà trường
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- MOBILE NAVIGATION DRAWER -->
        <div id="mobile-menu" class="hidden lg:hidden bg-blue-900 text-white border-t border-blue-800">
            <ul class="divide-y divide-blue-800/50 text-sm">
                <li><a href="index.html" class="block px-4 py-3 hover:bg-blue-800"><i class="fas fa-home mr-2"></i> Trang chủ</a></li>
                <li><a href="van-ban.html" class="block px-4 py-3 hover:bg-blue-800"><i class="fas fa-file-invoice mr-2"></i> Văn bản</a></li>
                
                <!-- Mobile Submenu: Chuyên môn -->
                <li class="mobile-dropdown">
                    <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-800 focus:outline-none">
                        <span><i class="fas fa-book-reader mr-2"></i> Chuyên môn</span>
                        <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                    <div class="mobile-sub-menu hidden bg-blue-950 px-6 py-2 space-y-2">
                        <a href="to-chuyen-mon-1-2-3.html" class="block py-1.5 text-blue-200 hover:text-white">• Tổ 1-2-3</a>
                        <a href="to-chuyen-mon-4-5.html" class="block py-1.5 text-blue-200 hover:text-white">• Tổ 4-5</a>
                        <a href="to-tu-nhien.html" class="block py-1.5 text-blue-200 hover:text-white">• Tổ Khoa học tự nhiên</a>
                        <a href="to-xa-hoi.html" class="block py-1.5 text-blue-200 hover:text-white">• Tổ Khoa học xã hội</a>
                    </div>
                </li>

                <li><a href="tin-tuc.html" class="block px-4 py-3 hover:bg-blue-800"><i class="fas fa-newspaper mr-2"></i> Tin tức – sự kiện</a></li>
                <li><a href="ve-nha-truong.html" class="block px-4 py-3 hover:bg-blue-800"><i class="fas fa-school mr-2"></i> Về nhà trường</a></li>
                <li><a href="so-do-truong-hoc.html" class="block px-4 py-3 hover:bg-blue-800"><i class="fas fa-map mr-2"></i> Sơ đồ nhà trường</a></li>
            </ul>
        </div>
    </header>
`;

// Tự động kích hoạt sự kiện Menu Mobile sau khi nạp Header
(function initMobileMenu() {
    setTimeout(() => {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            document.querySelectorAll('.mobile-dropdown button').forEach(btn => {
                btn.addEventListener('click', () => {
                    const subMenu = btn.nextElementSibling;
                    if (subMenu) subMenu.classList.toggle('hidden');
                });
            });
        }
    }, 100);
})();
