import React from 'react';
import { Sparkles, Bookmark } from 'lucide-react';

interface HeaderProps {
  activeTab: 'calculator' | 'matrix' | 'directory' | 'quiz';
  setActiveTab: (tab: 'calculator' | 'matrix' | 'directory' | 'quiz') => void;
  savedCount: number;
  onOpenSaved: () => void;
  onScrollToCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenSaved,
  onScrollToCalculator,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#070913]/90 backdrop-blur-md border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setActiveTab('calculator');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 font-celestial whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          ZODIAC MATCH
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'calculator'
                ? 'text-amber-300 font-semibold underline underline-offset-8 decoration-amber-400/80 decoration-2'
                : 'text-slate-300 hover:text-amber-200'
            }`}
          >
            Cek Kecocokan
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'matrix'
                ? 'text-amber-300 font-semibold underline underline-offset-8 decoration-amber-400/80 decoration-2'
                : 'text-slate-300 hover:text-amber-200'
            }`}
          >
            Matriks 12x12
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'directory'
                ? 'text-amber-300 font-semibold underline underline-offset-8 decoration-amber-400/80 decoration-2'
                : 'text-slate-300 hover:text-amber-200'
            }`}
          >
            Direktori Zodiak
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'quiz'
                ? 'text-amber-300 font-semibold underline underline-offset-8 decoration-amber-400/80 decoration-2'
                : 'text-slate-300 hover:text-amber-200'
            }`}
          >
            Kuis Jodoh
          </button>
          <button
            onClick={onOpenSaved}
            className="text-slate-300 hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span>Tersimpan ({savedCount})</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSaved}
            className="md:hidden p-2 text-slate-300 hover:text-amber-300 transition-colors relative"
            title="Daftar Tersimpan"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab('calculator');
              onScrollToCalculator();
            }}
            className="px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Hitung Kecocokan</span>
          </button>
        </div>
      </div>
    </header>
  );
};
