import React from 'react';
import { Heart, Users, Home, ChevronRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  onStartMatching: () => void;
  onExploreDirectory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartMatching,
  onExploreDirectory,
}) => {
  return (
    <div className="relative overflow-hidden border-b border-amber-500/15 bg-gradient-to-b from-[#090d1f] via-[#070914] to-[#070913]">
      {/* Background celestial glow & artwork */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen">
        <img
          src="/src/assets/images/zodiac_celestial_hero_1792485921030.jpg"
          alt="Celestial Zodiac Astrological Wheel"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-[#070913]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070913] via-transparent to-[#070913]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed text kicker without pill boxes */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-300/90 tracking-widest uppercase">
              <span>Astrologi Relasi Kosmik</span>
              <span aria-hidden="true">·</span>
              <span>12 Rasi Bintang</span>
              <span aria-hidden="true">·</span>
              <span>144 Kombinasi Sinergi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] font-celestial text-wrap-balance">
              Cek Kecocokan Zodiak dalam Cinta, Sahabat & Keluarga
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Buka rahasia dinamika hubunganmu dengan orang tersayang. Dapatkan
              ulasan mendalam seputar kecocokan emosional, gaya komunikasi, daya
              tarik alami, dan panduan harmonisasi relasi berdasarkan elemen alam
              semesta.
            </p>

            {/* Dimensional Focus Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-1.5 text-rose-300 font-medium">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Cinta & Asmara</span>
                </div>
                <p className="text-slate-400 text-xs">Chemistry, komitmen & kehangatan batin</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-1.5 text-sky-300 font-medium">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Pertemanan</span>
                </div>
                <p className="text-slate-400 text-xs">Loyalitas, obrolan & partner berpetualang</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
                <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <Home className="w-4 h-4 text-amber-400" />
                  <span>Keluarga</span>
                </div>
                <p className="text-slate-400 text-xs">Tanggung jawab, empati & rumah harmonis</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onStartMatching}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 group"
              >
                <span>Cek Pasangan Sekarang</span>
                <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreDirectory}
                className="px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-amber-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Pelajari 12 Karakter Zodiak</span>
              </button>
            </div>
          </div>

          {/* Right Visual Spotlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-indigo-950/60 group">
              <img
                src="/src/assets/images/zodiac_constellation_wheel_1792485921552.jpg"
                alt="Diagram Astrologi Rasi Bintang"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs uppercase tracking-widest text-amber-300/90 font-medium">
                  Harmoni Elemen Alam
                </p>
                <p className="text-sm text-slate-200 font-celestial">
                  Api · Tanah · Udara · Air
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
