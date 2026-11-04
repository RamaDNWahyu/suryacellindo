import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import TestimonialSection from './components/TestimonialSection';
import DownloadAppSection from './components/DownloadAppSection';
import {
    GooglePlay,
    Apple,
    CallCalling,
    Wifi,
    Flash,
    Receipt21,
    Health,
    Drop,
    Monitor,
    VideoSquare,
    Wallet2,
    Game,
    DocumentText,
    Coin,
    ArrowRight2,
    ArrowLeft2,
    SearchNormal1,
    CloseCircle,
    Clock,
    Timer1,
    ShieldTick,
    TickCircle,
    TickSquare,
    Headphone,
    FlashCircle,
    MoneyChange,
    CardPos,
    Mobile,
    Simcard,
    CardTick,
    Verify,
    HambergerMenu,
    CloseSquare,
    Send2,
} from 'iconsax-react';

// =========================================================================
// FRAMER-MOTION ANIMATION VARIANTS (SUBTLE FADE-IN & SLIDE-UP)
// =========================================================================
const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

const staggerCard = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

// =========================================================================
// DATA PRODUK KATALOG
// =========================================================================
const CATALOG_PRODUCTS = [
    {
        id: 1,
        category: 'pulsa',
        provider: 'Telkomsel',
        name: 'Pulsa Reguler 25.000',
        price: 'Rp 25.500',
        desc: 'Masa aktif +30 hari, proses masuk otomatis 24 jam.',
    },
    {
        id: 2,
        category: 'pulsa',
        provider: 'Telkomsel',
        name: 'Pulsa Reguler 50.000',
        price: 'Rp 50.500',
        desc: 'Masa aktif +30 hari langsung bertambah tanpa potongan.',
    },
    {
        id: 3,
        category: 'pulsa',
        provider: 'Indosat',
        name: 'Pulsa Reguler 50.000',
        price: 'Rp 50.250',
        desc: 'Pulsa reguler nasional resmi untuk nomor IM3 Ooredoo.',
    },
    {
        id: 4,
        category: 'pulsa',
        provider: 'XL Axiata',
        name: 'Pulsa Reguler 50.000',
        price: 'Rp 50.400',
        desc: 'Pulsa resmi XL Axiata aktif langsung dalam hitungan detik.',
    },
    {
        id: 5,
        category: 'data',
        provider: 'Indosat',
        name: 'Freedom Internet 25 GB',
        price: 'Rp 52.000',
        desc: 'Kuota utama 24 jam penuh tanpa bagi kuota, masa aktif 30 hari.',
    },
    {
        id: 6,
        category: 'data',
        provider: 'Telkomsel',
        name: 'Internet MAX 35 GB',
        price: 'Rp 85.000',
        desc: 'Kuota internet nasional dan lokal 30 hari jaringan terluas.',
    },
    {
        id: 7,
        category: 'data',
        provider: 'XL Axiata',
        name: 'Xtra Combo Flex 40 GB',
        price: 'Rp 78.000',
        desc: 'Bebas akses aplikasi favorit dan bonus telepon sepuasnya.',
    },
    {
        id: 8,
        category: 'pln',
        provider: 'PLN Prabayar',
        name: 'Token Listrik 50.000',
        price: 'Rp 51.500',
        desc: '20 digit stroom resmi langsung terbit dan terkirim otomatis.',
    },
    {
        id: 9,
        category: 'pln',
        provider: 'PLN Prabayar',
        name: 'Token Listrik 100.000',
        price: 'Rp 101.500',
        desc: 'Proses detik tanpa biaya admin tambahan tersembunyi.',
    },
    {
        id: 10,
        category: 'pln',
        provider: 'PLN Prabayar',
        name: 'Token Listrik 200.000',
        price: 'Rp 201.500',
        desc: 'Nomor token terbit realtime langsung dari koneksi host-to-host.',
    },
    {
        id: 11,
        category: 'ewallet',
        provider: 'DANA',
        name: 'Top Up Saldo 50.000',
        price: 'Rp 51.000',
        desc: 'Saldo DANA langsung masuk tanpa potongan admin berlebih.',
    },
    {
        id: 12,
        category: 'ewallet',
        provider: 'DANA',
        name: 'Top Up Saldo 100.000',
        price: 'Rp 101.000',
        desc: 'Top up kilat tanpa antri langsung ke akun dompet digital.',
    },
    {
        id: 13,
        category: 'ewallet',
        provider: 'GoPay',
        name: 'Top Up GoPay 100.000',
        price: 'Rp 101.200',
        desc: 'Saldo GoPay instan untuk belanja, ride, dan transaksi.',
    },
    {
        id: 14,
        category: 'ewallet',
        provider: 'ShopeePay',
        name: 'Top Up ShopeePay 100.000',
        price: 'Rp 101.200',
        desc: 'Saldo ShopeePay resmi untuk checkout pesanan praktis.',
    },
];

// =========================================================================
// DATA 12 LAYANAN (DENGAN ICONSAX ICON RESMI)
// =========================================================================
const SERVICES = [
    { name: 'Pulsa Seluler', desc: 'Semua Operator', key: 'pulsa', icon: CallCalling, color: 'text-rose-600 bg-rose-50' },
    { name: 'Paket Data', desc: 'Kuota 24 Jam', key: 'data', icon: Wifi, color: 'text-sky-600 bg-sky-50' },
    { name: 'Token Listrik', desc: 'PLN Prabayar', key: 'pln', icon: Flash, color: 'text-amber-500 bg-amber-50' },
    { name: 'Tagihan Listrik', desc: 'PLN Pascabayar', key: 'pln', icon: Receipt21, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'BPJS Kesehatan', desc: 'Autodebit & Tagihan', key: 'all', icon: Health, color: 'text-teal-600 bg-teal-50' },
    { name: 'PDAM Nasional', desc: 'Air Bersih Seluruh Kota', key: 'all', icon: Drop, color: 'text-cyan-600 bg-cyan-50' },
    { name: 'Telkom / IndiHome', desc: 'Internet & Telepon', key: 'all', icon: Monitor, color: 'text-red-600 bg-red-50' },
    { name: 'TV Berlangganan', desc: 'K-Vision, Nex, dll', key: 'all', icon: VideoSquare, color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Dompet Digital', desc: 'DANA, OVO, GoPay, Shopee', key: 'ewallet', icon: Wallet2, color: 'text-purple-600 bg-purple-50' },
    { name: 'Voucher Game', desc: 'MLBB, FF, Steam, Genshin', key: 'all', icon: Game, color: 'text-violet-600 bg-violet-50' },
    { name: 'Pascabayar', desc: 'Halo, Matrix, Xplor', key: 'pulsa', icon: DocumentText, color: 'text-blue-600 bg-blue-50' },
    { name: 'Multifinance', desc: 'FIF, BAF, Mega, WOM', key: 'all', icon: Coin, color: 'text-emerald-600 bg-emerald-50' },
];

// =========================================================================
// BRAND LOGO (SURYA CELLINDO - OFFICIAL LOGO IMAGE)
// =========================================================================
function Logo({ className = "h-12 sm:h-14 w-auto" }) {
    return (
        <img
            src="./images/suryacellindo-logo-transparent.png"
            alt="Surya Cellindo"
            className={`${className} object-contain block`}
        />
    );
}

// =========================================================================
// NAVIGATION ITEMS CONFIGURATION
// =========================================================================
const NAV_ITEMS = [
    { id: 'hero', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'katalog', label: 'Daftar Harga' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'cara-kerja', label: 'Cara Transaksi' },
];

// =========================================================================
// MAIN CRAFTED COMPONENT WITH FRAMER-MOTION SCROLL ANIMATIONS
// =========================================================================
export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [targetNumber, setTargetNumber] = useState('');
    const [iosModalOpen, setIosModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['hero', 'layanan', 'katalog', 'keunggulan', 'cara-kerja'];
            const scrollPos = window.scrollY + 140;
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const waNumber = '6281234567890';
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=id.smartserver.suryacell&hl=id';

    const handleServiceClick = (categoryKey) => {
        setActiveCategory(categoryKey);
        const catalogEl = document.getElementById('katalog');
        if (catalogEl) {
            catalogEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredProducts = useMemo(() => {
        return CATALOG_PRODUCTS.filter((item) => {
            const matchCategory = activeCategory === 'all' || item.category === activeCategory;
            const matchSearch =
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.provider.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    const getWhatsAppUrl = (productName, price) => {
        const num = targetNumber.trim();
        const numberNote = num ? ` untuk nomor tujuan/ID ${num}` : '';
        const text = encodeURIComponent(
            `Halo Surya Cellindo, saya ingin order ${productName} (${price})${numberNote}. Mohon info pembayarannya.`
        );
        return `https://wa.me/${waNumber}?text=${text}`;
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
            {/* ================================================================= */}
            {/* 1. TOP NOTICE & UTILITY HEADER */}
            {/* ================================================================= */}
            <div className="bg-[#050C1E] text-slate-400 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] hidden sm:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Server H2H Online 24 Jam
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300">Transaksi Otomatis & Cepat</span>
                    </div>
                    <div className="flex items-center gap-5 text-slate-400">
                        <a
                            href={`https://wa.me/${waNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors flex items-center gap-1.5"
                        >
                            <Headphone size="14" variant="Bold" color="currentColor" className="text-slate-400" />
                            <span>Bantuan CS WhatsApp</span>
                        </a>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300">Update Harga Realtime</span>
                    </div>
                </div>
            </div>

            {/* ================================================================= */}
            {/* 2. MAIN NAVIGATION (CLEAN MODERN FINTECH - BALANCED PROPORTIONS) */}
            {/* ================================================================= */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-200 border-b border-white/10 ${
                    isScrolled
                        ? 'bg-[#0A1128]/95 backdrop-blur-md shadow-lg shadow-black/20'
                        : 'bg-[#0A1128]/90 backdrop-blur-md'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-18 sm:h-20">
                        {/* BRAND LOGO */}
                        <div className="flex items-center">
                            <a href="#hero" className="flex items-center gap-3">
                                <Logo className="h-9 sm:h-10 w-auto" />
                            </a>
                        </div>

                        {/* DESKTOP NAV LINKS (TRUE OPTICAL CENTER) */}
                        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 absolute left-1/2 -translate-x-1/2">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                                            isActive
                                                ? 'text-white bg-white/10 shadow-inner'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>

                        {/* DESKTOP CTA BUTTON & MOBILE TOGGLE */}
                        <div className="flex items-center gap-3">
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                            >
                                <GooglePlay size="16" variant="Bold" color="currentColor" className="text-white" />
                                <span>Download Aplikasi</span>
                            </a>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden text-slate-300 hover:text-white p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                            >
                                {mobileMenuOpen ? (
                                    <CloseSquare size="22" variant="Bold" color="currentColor" className="text-white" />
                                ) : (
                                    <HambergerMenu size="22" variant="Linear" color="currentColor" className="text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE ACCORDION / DRAWER */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="lg:hidden overflow-hidden bg-[#0A1128] border-b border-white/10 px-4 pt-3 pb-6 space-y-3"
                        >
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block py-2 text-sm font-semibold transition-colors ${
                                            isActive
                                                ? 'text-white font-bold'
                                                : 'text-slate-300 hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                            <div className="pt-2 border-t border-white/10 space-y-2">
                                <a
                                    href={playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full text-center px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
                                >
                                    <GooglePlay size="18" variant="Bold" color="currentColor" className="text-white" />
                                    <span>Download di Google Play</span>
                                </a>
                                <a
                                    href={`https://wa.me/${waNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full text-center py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
                                >
                                    <Headphone size="15" variant="Bold" color="currentColor" className="text-slate-400" />
                                    <span>Hubungi CS WhatsApp</span>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* ================================================================= */}
            {/* 3. HERO SECTION (MODERN GRADIENT HERO WITH SEPARATE 3D SMARTPHONE) */}
            {/* ================================================================= */}
            <HeroSection
                playStoreUrl={playStoreUrl}
                onIosClick={() => setIosModalOpen(true)}
                onExploreClick={() => {
                    const layananEl = document.getElementById('layanan');
                    if (layananEl) {
                        layananEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />

            {/* ================================================================= */}
            {/* 4. LAYANAN LENGKAP (WITH STAGGERED ENTRANCE) */}
            {/* ================================================================= */}
            <motion.section
                id="layanan"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="py-16 sm:py-24 bg-white border-b border-slate-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="max-w-3xl mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Semua Produk Digital dalam Satu Sistem
                        </h2>
                        <p className="mt-2 text-base text-slate-600">
                            Pilih produk di bawah untuk memeriksa daftar harga agen dan ketersediaan stok secara langsung.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {SERVICES.map((srv, idx) => (
                            <motion.button
                                key={idx}
                                variants={staggerCard}
                                type="button"
                                onClick={() => handleServiceClick(srv.key)}
                                className="p-4 rounded-2xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/40 text-left transition-all cursor-pointer group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-xl ${srv.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                                        <srv.icon size="20" variant="Bold" color="currentColor" />
                                    </div>
                                    <ArrowRight2 size="16" variant="Linear" color="currentColor" className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700">{srv.name}</h3>
                                <p className="text-xs text-slate-500 mt-0.5">{srv.desc}</p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ================================================================= */}
            {/* 5. KATALOG & DAFTAR HARGA GROSIR (WITH SCROLL ANIMATION) */}
            {/* ================================================================= */}
            <motion.section
                id="katalog"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="py-16 sm:py-24 bg-[#F8FAFC]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Daftar Harga Terbuka & Realtime
                            </h2>
                            <p className="mt-1 text-slate-600 text-sm sm:text-base">
                                Transparan tanpa mark-up berlebihan. Bandingkan harga dan pesan langsung.
                            </p>
                        </div>

                        {/* Search Input */}
                        <div className="w-full md:w-80">
                            <label htmlFor="catalog-search" className="sr-only">Cari Produk</label>
                            <div className="relative">
                                <input
                                    id="catalog-search"
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Cari Telkomsel, PLN, DANA..."
                                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none"
                                />
                                <SearchNormal1 size="18" variant="Linear" color="currentColor" className="text-slate-400 absolute left-3.5 top-3" />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                                        aria-label="Hapus pencarian"
                                    >
                                        <CloseCircle size="18" variant="Bold" color="currentColor" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Nomor Tujuan Bar */}
                    <motion.div variants={fadeInUp} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <Mobile size="22" variant="Bold" color="currentColor" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Nomor HP atau ID Pelanggan Anda</h3>
                                <p className="text-xs text-slate-500 mt-0.5">Nomor yang Anda masukkan akan langsung tertaut pada draf pesanan WhatsApp.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-80">
                            <input
                                type="tel"
                                value={targetNumber}
                                onChange={(e) => setTargetNumber(e.target.value)}
                                placeholder="Masukkan nomor (misal 08123456789)"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 font-mono font-semibold focus:border-blue-600 outline-none tabular-nums"
                            />
                        </div>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 mb-8">
                        {[
                            { id: 'all', label: 'Semua Produk' },
                            { id: 'pulsa', label: 'Pulsa Reguler' },
                            { id: 'data', label: 'Paket Data' },
                            { id: 'pln', label: 'Token Listrik PLN' },
                            { id: 'ewallet', label: 'Saldo E-Wallet' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCategory(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                    activeCategory === tab.id
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Catalog Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {filteredProducts.map((prod) => (
                            <motion.div
                                key={prod.id}
                                variants={staggerCard}
                                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-sm"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                                            {prod.provider}
                                        </span>
                                        <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                                            <TickCircle size="14" variant="Bold" color="currentColor" className="text-emerald-500" />
                                            <span>Ready</span>
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base">{prod.name}</h3>
                                    <p className="text-xs text-slate-600 mt-1">{prod.desc}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <span className="text-xs font-medium text-slate-500">Harga Netto</span>
                                        <span className="text-xl font-extrabold text-blue-700 tabular-nums">{prod.price}</span>
                                    </div>
                                    <a
                                        href={getWhatsAppUrl(prod.name, prod.price)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors"
                                    >
                                        <Send2 size="14" variant="Bold" color="currentColor" className="text-white" />
                                        <span>Beli via WhatsApp</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 mt-4">
                            <p className="text-slate-600 text-sm font-medium">Tidak ada produk yang cocok dengan pencarian "{searchQuery}".</p>
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                className="mt-3 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* ================================================================= */}
            {/* 6. KEUNGGULAN OPERASIONAL (STAGGERED ENTRANCE) */}
            {/* ================================================================= */}
            <motion.section
                id="keunggulan"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="py-16 sm:py-24 bg-white border-t border-slate-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Dibangun untuk Kecepatan & Keamanan Transaksi
                        </h2>
                        <p className="mt-2 text-base text-slate-600">
                            Empat pilar keandalan yang menjadikan Surya Cellindo pilihan konter dan pengguna di seluruh Indonesia.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div variants={staggerCard} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <FlashCircle size="32" variant="Bulk" color="currentColor" className="text-blue-600 mb-3" />
                            <h3 className="text-base font-bold text-slate-900">Jalur H2H Berkecepatan Tinggi</h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Terhubung langsung dengan server aggregator operator seluler tanpa perantara pihak ketiga.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <MoneyChange size="32" variant="Bulk" color="currentColor" className="text-blue-600 mb-3" />
                            <h3 className="text-base font-bold text-slate-900">Garansi Refund Otomatis</h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Jika terjadi gangguan dari pihak operator, saldo Anda langsung dikembalikan secara otomatis.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <CardPos size="32" variant="Bulk" color="currentColor" className="text-blue-600 mb-3" />
                            <h3 className="text-base font-bold text-slate-900">Dukungan Semua Metode Bayar</h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Terima pembayaran melalui QRIS gratis biaya, transfer bank (BCA, BRI, BNI, Mandiri), dan e-wallet.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                            <Headphone size="32" variant="Bulk" color="currentColor" className="text-blue-600 mb-3" />
                            <h3 className="text-base font-bold text-slate-900">Customer Support Siaga</h3>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Tim support manusia aktif yang siap membantu kendala transaksi Anda setiap saat tanpa bot kaku.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ================================================================= */}
            {/* 7. ALUR TRANSAKSI 4 LANGKAH (STAGGERED ENTRANCE) */}
            {/* ================================================================= */}
            <motion.section
                id="cara-kerja"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="py-16 sm:py-24 bg-[#F8FAFC]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Cara Transaksi Mudah
                        </h2>
                        <p className="mt-2 text-base text-slate-600">
                            Mulai bertransaksi hanya dalam waktu kurang dari satu menit.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <motion.div variants={staggerCard} className="bg-white p-6 rounded-2xl border border-slate-200">
                            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                                <Mobile size="20" variant="Bold" color="currentColor" />
                            </span>
                            <h3 className="text-base font-bold text-slate-900">1. Pilih Jalur Transaksi</h3>
                            <p className="text-xs text-slate-600 mt-1.5">
                                Gunakan aplikasi mobile untuk transaksi harian atau order cepat langsung via WhatsApp CS.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="bg-white p-6 rounded-2xl border border-slate-200">
                            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                                <Simcard size="20" variant="Bold" color="currentColor" />
                            </span>
                            <h3 className="text-base font-bold text-slate-900">2. Input Nomor Tujuan</h3>
                            <p className="text-xs text-slate-600 mt-1.5">
                                Masukkan nomor handphone atau ID meter PLN yang ingin diisi kuota atau pulsanya.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="bg-white p-6 rounded-2xl border border-slate-200">
                            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                                <CardTick size="20" variant="Bold" color="currentColor" />
                            </span>
                            <h3 className="text-base font-bold text-slate-900">3. Selesaikan Pembayaran</h3>
                            <p className="text-xs text-slate-600 mt-1.5">
                                Bayar secara instan menggunakan QRIS satu detik atau transfer bank terdekat.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerCard} className="bg-white p-6 rounded-2xl border border-slate-200">
                            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                                <TickSquare size="20" variant="Bold" color="currentColor" />
                            </span>
                            <h3 className="text-base font-bold text-slate-900">4. Produk Langsung Aktif</h3>
                            <p className="text-xs text-slate-600 mt-1.5">
                                Server memproses otomatis dan bukti transaksi terkirim langsung ke nomor Anda.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ================================================================= */}
            {/* 8. TESTIMONI SECTION (MODERN SPLIT WITH STACKED REVIEW CARDS)   */}
            {/* ================================================================= */}
            <TestimonialSection />

            {/* ================================================================= */}
            {/* 9. CALL TO ACTION DOWNLOAD APLIKASI (LEFT CONTENT + RIGHT MOCKUP) */}
            {/* ================================================================= */}
            <DownloadAppSection
                playStoreUrl={playStoreUrl}
                onIosClick={() => setIosModalOpen(true)}
            />

            {/* ================================================================= */}
            {/* 10. FOOTER */}
            {/* ================================================================= */}
            <footer className="bg-[#060D20] text-white pt-16 pb-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                        <div className="md:col-span-5 space-y-4">
                            <Logo className="h-12 sm:h-14 w-auto" />
                            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                                Surya Cellindo adalah penyedia layanan distribusi pulsa, paket data internet, dan pembayaran tagihan PPOB terpercaya dengan kecepatan server otomatis 24 jam.
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-slate-700 flex items-center justify-center text-white transition-colors" aria-label="X / Twitter">
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-span-3 space-y-3">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                                <li><a href="#hero" className="hover:text-white transition-colors">Beranda Utama</a></li>
                                <li><a href="#layanan" className="hover:text-white transition-colors">Layanan PPOB</a></li>
                                <li><a href="#katalog" className="hover:text-white transition-colors">Cek Harga Realtime</a></li>
                                <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Server</a></li>
                                <li><a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kontak CS WhatsApp</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-4 space-y-3">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Layanan Utama</h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                                <li><button type="button" onClick={() => handleServiceClick('pulsa')} className="hover:text-white transition-colors text-left cursor-pointer">Pulsa All Operator</button></li>
                                <li><button type="button" onClick={() => handleServiceClick('data')} className="hover:text-white transition-colors text-left cursor-pointer">Paket Data Internet</button></li>
                                <li><button type="button" onClick={() => handleServiceClick('pln')} className="hover:text-white transition-colors text-left cursor-pointer">Token Listrik Prabayar</button></li>
                                <li><button type="button" onClick={() => handleServiceClick('ewallet')} className="hover:text-white transition-colors text-left cursor-pointer">Top Up Saldo E-Wallet</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                        <p>© 2026 Surya Cellindo. Seluruh hak cipta dilindungi.</p>
                        <p className="font-medium text-slate-300">Infrastruktur Distribusi Pulsa & PPOB Terpercaya.</p>
                    </div>
                </div>
            </footer>

            {/* ================================================================= */}
            {/* 11. MODAL NOTIFIKASI iOS DENGAN ICONSAX */}
            {/* ================================================================= */}
            {iosModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center relative border border-slate-200">
                        <button
                            type="button"
                            onClick={() => setIosModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                            aria-label="Tutup"
                        >
                            <CloseCircle size="22" variant="Linear" color="currentColor" />
                        </button>
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white mx-auto flex items-center justify-center mb-4">
                            <Apple size="30" variant="Bold" color="currentColor" className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Aplikasi iOS Segera Hadir</h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                            Versi iOS Surya Cellindo sedang dalam tahap finalisasi di Apple Developer Program. Anda dapat bertransaksi langsung melalui WhatsApp CS atau mengunduh versi Android.
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
                            >
                                <GooglePlay size="18" variant="Bold" color="currentColor" className="text-white" />
                                <span>Unduh Versi Android di Play Store</span>
                            </a>
                            <button
                                type="button"
                                onClick={() => setIosModalOpen(false)}
                                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
