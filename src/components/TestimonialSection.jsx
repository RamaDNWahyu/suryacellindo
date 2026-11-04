import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { TESTIMONIALS } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
    const prefersReducedMotion = useReducedMotion();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.2 });
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isPageVisible, setIsPageVisible] = useState(() => !document.hidden);

    const total = TESTIMONIALS.length;
    const currentTestimonial = TESTIMONIALS[currentIndex];

    useEffect(() => {
        const updateVisibility = () => setIsPageVisible(!document.hidden);
        document.addEventListener('visibilitychange', updateVisibility);
        return () => document.removeEventListener('visibilitychange', updateVisibility);
    }, []);

    useEffect(() => {
        if (isPaused || isHovered || !isInView || !isPageVisible || prefersReducedMotion || total < 2) {
            return;
        }

        const timer = window.setTimeout(() => {
            setDirection(1);
            setCurrentIndex((previous) => (previous + 1) % total);
        }, 6000);

        return () => window.clearTimeout(timer);
    }, [currentIndex, isPaused, isHovered, isInView, isPageVisible, prefersReducedMotion, total]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    // Format urutan dinamis: e.g. "01 of 05"
    const orderFormatted = `${String(currentIndex + 1).padStart(2, '0')} of ${String(total).padStart(2, '0')}`;

    return (
        <section
            ref={sectionRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
            }}
            className="py-20 sm:py-28 bg-white border-t border-slate-200 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                    {/* ========================================================= */}
                    {/* KOLOM KIRI (~40% Desktop): INFORMASI, RATING & NAVIGASI   */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                        {/* Eyebrow Text */}
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
                                CUSTOMER LOVE
                            </span>
                        </div>

                        {/* Headline Besar */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                            What Our Customers Say
                        </h2>

                        {/* Rating Bintang & Review Social Proof */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-amber-400 fill-current"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">
                                <span className="font-extrabold text-slate-900 tabular-nums">4.9 / 5.0</span>
                                <span className="mx-1.5 text-slate-300">•</span>
                                <span>2.500+ Ulasan Mitra</span>
                            </div>
                        </div>

                        {/* Deskripsi Singkat */}
                        <p className="text-slate-600 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Kecepatan server dan keandalan transaksi di Surya Cellindo telah dipercaya ribuan konter pulsa dan pelanggan mandiri di seluruh Indonesia.
                        </p>

                        {/* Navigasi Carousel & Indikator Nomor (01 of 05) */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
                            {/* Tombol Previous (Min 44x44px touch target) */}
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-2xl border border-slate-300 hover:border-blue-600 hover:bg-blue-50 text-slate-700 hover:text-blue-700 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Testimonial Sebelumnya"
                            >
                                <ArrowLeft2 size="20" variant="Outline" color="currentColor" />
                            </button>

                            {/* Tombol Next (Min 44x44px touch target) */}
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-12 h-12 rounded-2xl border border-slate-300 hover:border-blue-600 hover:bg-blue-50 text-slate-700 hover:text-blue-700 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Testimonial Berikutnya"
                            >
                                <ArrowRight2 size="20" variant="Outline" color="currentColor" />
                            </button>

                            <span className="sr-only" aria-live={isPaused || prefersReducedMotion ? 'polite' : 'off'} aria-atomic="true">
                                Testimonial {currentIndex + 1} dari {total}: {currentTestimonial.author}
                            </span>

                            {/* Indikator Urutan Testimonial */}
                            <div className="pl-2 flex items-center gap-2">
                                <span className="text-sm font-mono font-bold text-slate-800 tabular-nums tracking-wider">
                                    {orderFormatted}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* KOLOM KANAN (~60% Desktop): STACKED TESTIMONIAL CARDS     */}
                    {/* ========================================================= */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg sm:max-w-xl pt-8 pb-4 pr-6 sm:pr-10">

                            {/* Kartu Belakang Terluar (Layer 3 - Decorative Depth) */}
                            <motion.div
                                key={`back-${currentIndex}`}
                                initial={{ x: 0, y: 0, rotate: 0 }}
                                animate={prefersReducedMotion ? {} : { x: [0, -8, 0], y: [0, 8, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 0.65, ease: 'easeInOut' }}
                                className="absolute inset-0 z-10 pointer-events-none"
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-slate-100/80 border border-slate-200/60 shadow-sm transform translate-x-4 -translate-y-4 sm:translate-x-6 sm:-translate-y-6 rotate-3 sm:rotate-4" />
                            </motion.div>

                            {/* Kartu Belakang Tengah (Layer 2 - Decorative Depth) */}
                            <motion.div
                                key={`middle-${currentIndex}`}
                                initial={{ x: 0, y: 0, rotate: 0 }}
                                animate={prefersReducedMotion ? {} : { x: [0, -16, 0], y: [0, 14, 0], rotate: [0, -3, 0] }}
                                transition={{ duration: 0.65, ease: 'easeInOut' }}
                                className="absolute inset-0 z-20 pointer-events-none"
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md transform translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3 rotate-1 sm:rotate-2" />
                            </motion.div>

                            {/* Kartu Utama (Layer 1 - Front Active Card z-30 with AnimatePresence) */}
                            <div className="relative z-30">
                                <AnimatePresence mode="wait" initial={false} custom={direction}>
                                    <motion.div
                                        key={currentTestimonial.id}
                                        custom={direction}
                                        variants={{
                                            enter: { opacity: 0, x: prefersReducedMotion ? 0 : 24, y: prefersReducedMotion ? 0 : -24, scale: prefersReducedMotion ? 1 : 0.94, rotate: prefersReducedMotion ? 0 : 3 },
                                            center: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
                                            exit: (travelDirection) => ({ opacity: 0, x: prefersReducedMotion ? 0 : travelDirection * -60, scale: prefersReducedMotion ? 1 : 0.96, rotate: prefersReducedMotion ? 0 : travelDirection * -3 }),
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <TestimonialCard
                                            testimonial={currentTestimonial}
                                            className="min-h-[300px] sm:min-h-[320px]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
