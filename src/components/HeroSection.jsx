import React from 'react';
import { motion } from 'framer-motion';
import {
    GooglePlay,
    Apple,
    ArrowRight2,
    Clock,
    Timer1,
    ShieldTick,
    Mobile,
} from 'iconsax-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

/**
 * Modern Gradient Hero Section for Surya Cellindo
 * Uses dedicated gradient background image (with Menara Siger silhouette)
 * and an isolated 3D smartphone mockup element on the right.
 */
export default function HeroSection({
    playStoreUrl = 'https://play.google.com/store/apps/details?id=id.smartserver.suryacell&hl=id',
    onIosClick,
    onExploreClick,
}) {
    const handleExplore = (e) => {
        e.preventDefault();
        if (onExploreClick) {
            onExploreClick();
        } else {
            const layananEl = document.getElementById('layanan');
            if (layananEl) {
                layananEl.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleAppStoreClick = (e) => {
        if (onIosClick) {
            e.preventDefault();
            onIosClick();
        }
    };

    return (
        <header
            id="hero"
            className="relative text-white overflow-hidden bg-[#071026] bg-cover bg-center min-h-[680px] lg:min-h-[740px] flex items-center border-b border-white/10"
            style={{
                backgroundImage: "url('./images/hero-gradient-bg.webp')",
            }}
        >
            {/* Ambient Lighting & Glow Decorations */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-gradient-to-b from-blue-600/15 to-transparent blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT CONTENT: 55% (lg:col-span-7) */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="lg:col-span-7 space-y-6 text-center lg:text-left"
                    >
                        {/* Eyebrow Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                            </span>
                            <span>SOLUSI DIGITAL UNTUK LAMPUNG TENGAH</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.16] tracking-tight max-w-2xl mx-auto lg:mx-0">
                            Semua Kebutuhan Digital dalam{' '}
                            <span className="text-[#00D2FF] drop-shadow-[0_0_24px_rgba(0,210,255,0.4)]">
                                Satu Aplikasi.
                            </span>
                        </h1>

                        {/* Description Paragraph */}
                        <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-lg mx-auto lg:mx-0">
                            Isi pulsa, beli paket data, token listrik, dan bayar berbagai tagihan PPOB dengan mudah melalui aplikasi Surya Cellindo. Solusi praktis untuk memenuhi kebutuhan digital masyarakat Lampung Tengah.
                        </p>

                        {/* Primary & Secondary CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            {/* Primary Button: Download Aplikasi */}
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/40 hover:shadow-blue-500/50 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                            >
                                <GooglePlay size="20" variant="Bold" color="currentColor" className="text-white shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                <span>Download Aplikasi</span>
                            </a>

                            {/* Secondary Button: Jelajahi Layanan */}
                            <a
                                href="#layanan"
                                onClick={handleExplore}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-base border border-white/20 hover:border-cyan-400/40 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                            >
                                <span>Jelajahi Layanan</span>
                                <ArrowRight2 size="18" variant="Linear" color="currentColor" className="text-cyan-300 transition-transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Official Store Badges Row */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                            {/* Google Play Store Official Badge */}
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-start gap-3 px-4.5 py-2 h-[50px] rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/15 shadow-md shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30"
                            >
                                <svg className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                                    <path d="M3.6 1.7L13.8 12 3.6 22.3c-.4-.4-.6-1-.6-1.7V3.4c0-.7.2-1.3.6-1.7z" fill="#4285F4" />
                                    <path d="M17.2 8.6L13.8 12l3.4 3.4 3.9-2.2c.7-.4.7-1.1 0-1.5L17.2 8.6z" fill="#34A853" />
                                    <path d="M3.6 1.7l10.2 10.3 3.4-3.4L4.8.8C4.3.5 3.8.8 3.6 1.7z" fill="#FBBC04" />
                                    <path d="M13.8 12L3.6 22.3c.2.9.7 1.2 1.2.9l12.4-7.1-3.4-3.4z" fill="#EA4335" />
                                </svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-300 leading-none">
                                        GET IT ON
                                    </span>
                                    <span className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                                        Google Play
                                    </span>
                                </div>
                            </a>

                            {/* Apple App Store Official Badge */}
                            <a
                                href="#ios"
                                onClick={handleAppStoreClick}
                                className="group w-full sm:w-auto inline-flex items-center justify-start gap-3 px-4.5 py-2 h-[50px] rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white border border-white/15 shadow-md shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 cursor-pointer"
                            >
                                <svg className="w-5 h-5 shrink-0 fill-current text-white transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.94 2.76 1 .08 1.94-.51 2.56-1.26z"/>
                                </svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-300 leading-none">
                                        Download on the
                                    </span>
                                    <span className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                                        App Store
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Trust Metrics */}
                        <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-md mx-auto lg:mx-0">
                            <div>
                                <Clock size="18" variant="Bold" color="currentColor" className="text-blue-400 mb-1" />
                                <p className="text-lg font-black text-white tabular-nums">24/7</p>
                                <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Server Otomatis</p>
                            </div>
                            <div>
                                <Timer1 size="18" variant="Bold" color="currentColor" className="text-cyan-400 mb-1" />
                                <p className="text-lg font-black text-white tabular-nums">&lt; 10 dtk</p>
                                <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Rata-rata Proses</p>
                            </div>
                            <div>
                                <ShieldTick size="18" variant="Bold" color="currentColor" className="text-emerald-400 mb-1" />
                                <p className="text-lg font-black text-emerald-400 tabular-nums">100%</p>
                                <p className="text-[11px] text-slate-300 mt-0.5 font-medium">Garansi Sukses</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT VISUAL: 45% (lg:col-span-5) — Large Smartphone Mockup */}
                    <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
                        {/* Soft Blue Radial Glow behind Smartphone */}
                        <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />

                        {/* Floating Motion Wrapper */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: 'easeInOut',
                            }}
                            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] flex items-center justify-center z-10"
                        >
                            <img
                                src="./images/hero-phone-mockup.webp"
                                alt="Aplikasi Surya Cellindo Mobile Mockup"
                                width="448"
                                height="700"
                                className="w-full h-auto object-contain max-h-[560px] sm:max-h-[620px] drop-shadow-[0_25px_45px_rgba(0,10,35,0.75)] select-none pointer-events-none"
                            />
                        </motion.div>

                        {/* Ground Contact Shadow (Stationary on Floor) */}
                        <div className="absolute bottom-2 lg:bottom-4 w-2/3 h-5 bg-[#020718]/90 blur-xl rounded-full pointer-events-none" />
                    </div>

                </div>
            </div>
        </header>
    );
}
