import React, { useState } from 'react';
import { ZODIAC_LIST, ZODIAC_SIGNS } from '../data/zodiacData';
import { ElementType, ZodiacSign, ZodiacSignId } from '../types/zodiac';
import { Search, Sparkles, Flame, Mountain, Wind, Droplets, ArrowRight } from 'lucide-react';

interface ZodiacDirectoryProps {
  onSelectForMatch: (signId: ZodiacSignId) => void;
}

export const ZodiacDirectory: React.FC<ZodiacDirectoryProps> = ({
  onSelectForMatch,
}) => {
  const [selectedElement, setSelectedElement] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSignId, setExpandedSignId] = useState<ZodiacSignId | null>(null);

  const filteredSigns = ZODIAC_LIST.filter((z) => {
    const matchesElement =
      selectedElement === 'all' || z.element.toLowerCase() === selectedElement.toLowerCase();
    const matchesQuery =
      z.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      z.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      z.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      z.rulingPlanet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesElement && matchesQuery;
  });

  const getElementIcon = (elem: ElementType) => {
    switch (elem) {
      case 'Api':
        return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case 'Tanah':
        return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Udara':
        return <Wind className="w-3.5 h-3.5 text-sky-400" />;
      case 'Air':
        return <Droplets className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 font-celestial">
          Direktori Lengkap 12 Zodiak
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Pahami kepribadian mendalam, kekuatan, kelemahan, elemen kosmik, dan rasi pasangan terbaik dari setiap bintang.
        </p>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          {/* Element Filter Buttons (Interactive segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedElement('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedElement === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua Elemen
            </button>
            <button
              onClick={() => setSelectedElement('Api')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                selectedElement === 'Api'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-amber-400'
              }`}
            >
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Api</span>
            </button>
            <button
              onClick={() => setSelectedElement('Tanah')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                selectedElement === 'Tanah'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-emerald-400'
              }`}
            >
              <Mountain className="w-3 h-3 text-emerald-400" />
              <span>Tanah</span>
            </button>
            <button
              onClick={() => setSelectedElement('Udara')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                selectedElement === 'Udara'
                  ? 'bg-sky-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-sky-400'
              }`}
            >
              <Wind className="w-3 h-3 text-sky-400" />
              <span>Udara</span>
            </button>
            <button
              onClick={() => setSelectedElement('Air')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                selectedElement === 'Air'
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-indigo-400'
              }`}
            >
              <Droplets className="w-3 h-3 text-indigo-400" />
              <span>Air</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari zodiak, planet..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Grid of Zodiac Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSigns.map((z) => {
          const isExpanded = expandedSignId === z.id;

          return (
            <div
              key={z.id}
              className="bg-[#0b0f24]/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-amber-500/10 group"
            >
              <div>
                {/* Top header of card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl text-amber-300 group-hover:scale-105 transition-transform">
                      {z.glyph}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 font-celestial">
                        {z.name}
                      </h3>
                      <p className="text-xs text-slate-400">{z.symbol} · {z.dateRange}</p>
                    </div>
                  </div>

                  {/* Clean unboxed element indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium shrink-0">
                    {getElementIcon(z.element)}
                    <span>{z.element}</span>
                  </div>
                </div>

                {/* Motto & Description */}
                <p className="text-xs italic text-amber-300/90 font-medium mb-2">
                  &ldquo;{z.motto}&rdquo;
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {z.description}
                </p>

                {/* Strengths & Challenges */}
                <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs">
                  <div>
                    <span className="text-emerald-400 font-semibold block mb-1">
                      Kelebihan Utama:
                    </span>
                    <p className="text-slate-300">
                      {z.strengths.join(', ')}
                    </p>
                  </div>

                  <div>
                    <span className="text-rose-400 font-semibold block mb-1">
                      Tantangan Karakter:
                    </span>
                    <p className="text-slate-300">
                      {z.challenges.join(', ')}
                    </p>
                  </div>

                  {isExpanded && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80 text-slate-400 animate-in fade-in duration-200">
                      <div>
                        <span className="text-slate-200 font-semibold">Planet Penguasa: </span>
                        <span>{z.rulingPlanet} ({z.modality})</span>
                      </div>
                      <div>
                        <span className="text-slate-200 font-semibold">Warna &amp; Hari Beruntung: </span>
                        <span>{z.luckyColor} ({z.luckyDay})</span>
                      </div>
                      <div>
                        <span className="text-slate-200 font-semibold">Batu Permata: </span>
                        <span>{z.gemstone}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Best Matches Pills/Links */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-2">Pasangan Sangat Cocok:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {z.bestMatches.map((matchId) => {
                      const matchSign = ZODIAC_SIGNS[matchId];
                      return (
                        <button
                          key={matchId}
                          onClick={() => onSelectForMatch(z.id)}
                          className="px-2.5 py-1 text-[11px] font-medium bg-slate-900 hover:bg-amber-400/10 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-400/40 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <span>{matchSign?.glyph}</span>
                          <span>{matchSign?.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setExpandedSignId(isExpanded ? null : z.id)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {isExpanded ? 'Sembunyikan Detail' : 'Info Astrologi Lengkap'}
                </button>

                <button
                  onClick={() => onSelectForMatch(z.id)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Cek Cocok</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
