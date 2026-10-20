import React from 'react';

interface FooterProps {
  onNavigate: (tab: 'calculator' | 'matrix' | 'directory' | 'quiz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-amber-500/15 bg-[#05070f] text-slate-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-amber-300 font-celestial tracking-wider text-sm">
            ZODIAC MATCH
          </div>
          <p className="text-slate-500 max-w-md">
            Aplikasi hiburan astrologi dan eksplorasi keselarasan rasi bintang untuk cinta, pertemanan, dan keluarga.
          </p>
        </div>

        {/* Clean unboxed navigation links with subtle dot separators */}
        <div className="flex items-center gap-3 text-slate-400">
          <button
            onClick={() => onNavigate('calculator')}
            className="hover:text-amber-300 transition-colors"
          >
            Kalkulator
          </button>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <button
            onClick={() => onNavigate('matrix')}
            className="hover:text-amber-300 transition-colors"
          >
            Matriks 12x12
          </button>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <button
            onClick={() => onNavigate('directory')}
            className="hover:text-amber-300 transition-colors"
          >
            Direktori
          </button>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <button
            onClick={() => onNavigate('quiz')}
            className="hover:text-amber-300 transition-colors"
          >
            Kuis Jodoh
          </button>
        </div>

        <div className="text-slate-600 text-[11px] text-center md:text-right">
          © {new Date().getFullYear()} Zodiac Match. Dibuat untuk hiburan.
        </div>
      </div>
    </footer>
  );
};
