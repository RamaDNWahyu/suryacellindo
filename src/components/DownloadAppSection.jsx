import React from 'react';
import { motion } from 'framer-motion';
import { Mobile, Star1, ShieldTick, Flash } from 'iconsax-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

/**
 * DownloadAppSection Component
 * Seamlessly integrates the full artwork background with the Lampung Menara Siger landmark
 * on the left and the phone mockup with 3D floating icons on the right, while overlaying
 * real, accessible, and responsive HTML text, headline, and official store badges.
 */
export default function DownloadAppSection({
    playStoreUrl = 'https://play.google.com/store/apps/details?id=id.smartserver.suryacell&hl=id',
    appStoreUrl = '#',
    onIosClick,
}) {
    const handleAppStoreClick = (e) => {
        if (onIosClick) {
            e.preventDefault();
            onIosClick();
        }
    };

    return (
        <section
            id="download"
            className="relative overflow-hidden border-y border-blue-200/80 bg-[#E8F2FE]"
        >
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none opacity-50 lg:opacity-100"
                style={{ backgroundImage: "url('./images/cta-background-clean.webp')" }}
            />

            {/* Subtle Gradient Veil for Perfect Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent pointer-events-none lg:block hidden max-w-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[520px] lg:min-h-[600px]">

                    {/* LEFT COLUMN: Real Semantic HTML Content (Headline, Description & Clickable Badges) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="lg:col-span-7 xl:col-span-6 space-y-6 text-center lg:text-left pt-4 lg:pt-0"
                    >
                        {/* Eyebrow Label */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/95 border border-blue-200/90 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                            <Mobile size="14" variant="Bold" color="currentColor" className="text-blue-600" />
                            <span>DOWNLOAD APLIKASI</span>
                        </div>

                        {/* Headline matching user reference banner */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-slate-900 leading-[1.18] tracking-tight">
                            Transaksi Pulsa & PPOB Lebih Mudah dengan{' '}
                            <span className="text-blue-600 drop-shadow-sm">Surya Cellindo</span>
                        </h2>

                        {/* Description matching user reference banner */}
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Beli pulsa, paket data, token listrik, dan berbagai pembayaran tagihan lainnya dalam satu aplikasi. Solusi praktis untuk masyarakat Lampung Tengah.
                        </p>

                        {/* Official Store Download Badges */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            {/* Google Play Store Official Badge */}
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-start gap-3.5 px-5 py-2.5 h-[56px] rounded-xl bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98]"
                            >
                                <svg className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none">
                                    <path d="M3.6 1.7L13.8 12 3.6 22.3c-.4-.4-.6-1-.6-1.7V3.4c0-.7.2-1.3.6-1.7z" fill="#4285F4" />
                                    <path d="M17.2 8.6L13.8 12l3.4 3.4 3.9-2.2c.7-.4.7-1.1 0-1.5L17.2 8.6z" fill="#34A853" />
                                    <path d="M3.6 1.7l10.2 10.3 3.4-3.4L4.8.8C4.3.5 3.8.8 3.6 1.7z" fill="#FBBC04" />
                                    <path d="M13.8 12L3.6 22.3c.2.9.7 1.2 1.2.9l12.4-7.1-3.4-3.4z" fill="#EA4335" />
                                </svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 leading-none">
                                        GET IT ON
                                    </span>
                                    <span className="text-base font-bold text-white tracking-tight leading-tight mt-0.5">
                                        Google Play
                                    </span>
                                </div>
                            </a>

                            {/* Apple App Store Official Badge */}
                            <a
                                href={appStoreUrl}
                                onClick={handleAppStoreClick}
                                className="group w-full sm:w-auto inline-flex items-center justify-start gap-3.5 px-5 py-2.5 h-[56px] rounded-xl bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98] cursor-pointer"
                            >
                                <svg className="w-6 h-6 shrink-0 fill-current text-white transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.94 2.76 1 .08 1.94-.51 2.56-1.26z"/>
                                </svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 leading-none">
                                        Download on the
                                    </span>
                                    <span className="text-base font-bold text-white tracking-tight leading-tight mt-0.5">
                                        App Store
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Trust Badges Row */}
                        <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-semibold border-t border-blue-200/60">
                            <div className="flex items-center gap-1.5">
                                <Star1 size="16" variant="Bold" color="#F59E0B" className="shrink-0" />
                                <span className="font-bold text-slate-900">4.9 / 5.0</span>
                                <span>Rating Pengguna</span>
                            </div>
                            <span className="hidden sm:inline text-blue-300">•</span>
                            <div className="flex items-center gap-1.5">
                                <ShieldTick size="16" variant="Bold" color="#10B981" className="shrink-0" />
                                <span>100% Aman & Resmi</span>
                            </div>
                            <span className="hidden sm:inline text-blue-300">•</span>
                            <div className="flex items-center gap-1.5">
                                <Flash size="16" variant="Bold" color="#0066FF" className="shrink-0" />
                                <span>Proses Detik Otomatis</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center pt-4 lg:pt-0">
                        <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/25 border border-blue-200/80 bg-blue-600">
                            <img
                                src="./images/cta-app-mockup.webp"
                                alt="Surya Cellindo Mobile App Showcase"
                                loading="lazy"
                                width="939"
                                height="887"
                                className="w-full h-auto object-cover select-none pointer-events-none"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
