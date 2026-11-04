import React from 'react';
import { Verify } from 'iconsax-react';

export default function TestimonialCard({ testimonial, className = "" }) {
    if (!testimonial) return null;

    return (
        <div className={`bg-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all ${className}`}>
            {/* Bagian Atas: 5 Bintang Emas */}
            <div>
                <div className="flex items-center gap-1.5 mb-6">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
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

                {/* Bagian Tengah: Kutipan Testimonial Besar & Dominan */}
                <blockquote className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed tracking-tight">
                    "{testimonial.quote}"
                </blockquote>
            </div>

            {/* Bagian Bawah: Baris Informasi Pelanggan (Avatar 1:1 + Info + Verified Badge) */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                    {/* Foto Profil / Avatar 1:1 */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm ring-2 ring-slate-100">
                        {testimonial.avatar ? (
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div
                            className={`w-full h-full ${testimonial.avatarBg || 'bg-blue-700'} text-white font-bold text-sm flex items-center justify-center`}
                            style={{ display: testimonial.avatar ? 'none' : 'flex' }}
                        >
                            {testimonial.initials || testimonial.author.slice(0, 2).toUpperCase()}
                        </div>
                    </div>

                    {/* Nama dan Profesi/Bisnis */}
                    <div className="text-left">
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {testimonial.author}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                            {testimonial.role} • {testimonial.business}
                        </p>
                    </div>
                </div>

                {/* Verified Badge */}
                {testimonial.badge && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold shrink-0 border border-blue-100">
                        <Verify size="14" variant="Bold" color="currentColor" />
                        <span>{testimonial.badge}</span>
                    </span>
                )}
            </div>
        </div>
    );
}
