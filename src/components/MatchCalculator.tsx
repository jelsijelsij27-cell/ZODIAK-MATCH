import React, { useState } from 'react';
import {
  Heart,
  Users,
  Home,
  ArrowLeftRight,
  Share2,
  Bookmark,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Check,
} from 'lucide-react';
import {
  DimensionType,
  MatchResult,
  ZodiacSignId,
} from '../types/zodiac';
import { ZODIAC_LIST, ZODIAC_SIGNS, computeZodiacMatch } from '../data/zodiacData';
import { DateToZodiacModal } from './DateToZodiacModal';
import { CompatibilityCardExportModal } from './CompatibilityCardExportModal';

interface MatchCalculatorProps {
  sign1Id: ZodiacSignId;
  setSign1Id: (id: ZodiacSignId) => void;
  sign2Id: ZodiacSignId;
  setSign2Id: (id: ZodiacSignId) => void;
  dimension: DimensionType;
  setDimension: (dim: DimensionType) => void;
  name1: string;
  setName1: (n: string) => void;
  name2: string;
  setName2: (n: string) => void;
  onSaveMatch: (result: MatchResult) => void;
  isSaved: boolean;
}

export const MatchCalculator: React.FC<MatchCalculatorProps> = ({
  sign1Id,
  setSign1Id,
  sign2Id,
  setSign2Id,
  dimension,
  setDimension,
  name1,
  setName1,
  name2,
  setName2,
  onSaveMatch,
  isSaved,
}) => {
  const [dateModalTarget, setDateModalTarget] = useState<1 | 2 | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  const sign1 = ZODIAC_SIGNS[sign1Id];
  const sign2 = ZODIAC_SIGNS[sign2Id];

  // Compute the result directly
  const matchResult = computeZodiacMatch(
    sign1Id,
    sign2Id,
    dimension,
    name1,
    name2
  );

  const handleSwapSigns = () => {
    const tempSign = sign1Id;
    const tempName = name1;
    setSign1Id(sign2Id);
    setSign2Id(tempSign);
    setName1(name2);
    setName2(tempName);
  };

  const handleSave = () => {
    onSaveMatch(matchResult);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  const getElementBadgeColor = (element: string) => {
    switch (element) {
      case 'Api':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'Tanah':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'Udara':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
      case 'Air':
        return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-800';
    }
  };

  return (
    <section id="calculator-section" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 font-celestial">
          Kalkulator Kecocokan Zodiak
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Pilih dua zodiak atau cari tanggal lahirmu, tentukan dimensi hubungan yang ingin kamu eksplorasi, dan pelajari sinergi kosmiknya.
        </p>
      </div>

      {/* Main Interactive Control Card */}
      <div className="bg-[#0b0f24]/90 border border-amber-500/25 rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md mb-12">
        {/* Dimension Selector Tabs (Interactive functional buttons) */}
        <div className="mb-8">
          <div className="text-center mb-3">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Pilih Dimensi Relasi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl mx-auto p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setDimension('cinta')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                dimension === 'cinta'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Cinta &amp; Asmara</span>
            </button>

            <button
              onClick={() => setDimension('pertemanan')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                dimension === 'pertemanan'
                  ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Pertemanan &amp; Sahabat</span>
            </button>

            <button
              onClick={() => setDimension('keluarga')}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                dimension === 'keluarga'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Keluarga &amp; Relasi</span>
            </button>
          </div>
        </div>

        {/* Two-Column Sign Picker with Swap in Middle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Person 1 */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-amber-300/80 font-medium">
                Pihak Pertama
              </span>
              <button
                onClick={() => setDateModalTarget(1)}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Cari via Tanggal Lahir</span>
              </button>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Nama / Panggilan</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Contoh: Budi atau Kamu"
                className="w-full bg-[#080b18] border border-slate-700/80 rounded-lg px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Pilih Zodiak</label>
              <select
                value={sign1Id}
                onChange={(e) => setSign1Id(e.target.value as ZodiacSignId)}
                className="w-full bg-[#080b18] border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400/80 transition-colors font-medium cursor-pointer"
              >
                {ZODIAC_LIST.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.glyph} {z.name} ({z.dateRange}) — {z.element}
                  </option>
                ))}
              </select>
            </div>

            {/* Sign Mini Card */}
            <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#080b18] border border-slate-800/80">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl text-amber-300 shrink-0">
                {sign1.glyph}
              </div>
              <div className="min-w-0 flex-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200 text-sm font-celestial">
                    {sign1.name}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${getElementBadgeColor(sign1.element)}`}>
                    Elemen {sign1.element}
                  </span>
                </div>
                <p className="text-slate-400 mt-0.5 truncate">{sign1.motto}</p>
              </div>
            </div>
          </div>

          {/* Center Swap Action */}
          <div className="lg:col-span-2 flex justify-center py-2 lg:py-0">
            <button
              onClick={handleSwapSigns}
              title="Tukar Posisi Zodiak"
              className="p-3.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/20 active:scale-95 transition-all shadow-md group"
            >
              <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          {/* Person 2 */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-amber-300/80 font-medium">
                Pihak Kedua
              </span>
              <button
                onClick={() => setDateModalTarget(2)}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Cari via Tanggal Lahir</span>
              </button>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Nama / Panggilan</label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Contoh: Sinta atau Dia"
                className="w-full bg-[#080b18] border border-slate-700/80 rounded-lg px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Pilih Zodiak</label>
              <select
                value={sign2Id}
                onChange={(e) => setSign2Id(e.target.value as ZodiacSignId)}
                className="w-full bg-[#080b18] border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400/80 transition-colors font-medium cursor-pointer"
              >
                {ZODIAC_LIST.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.glyph} {z.name} ({z.dateRange}) — {z.element}
                  </option>
                ))}
              </select>
            </div>

            {/* Sign Mini Card */}
            <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#080b18] border border-slate-800/80">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl text-amber-300 shrink-0">
                {sign2.glyph}
              </div>
              <div className="min-w-0 flex-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200 text-sm font-celestial">
                    {sign2.name}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${getElementBadgeColor(sign2.element)}`}>
                    Elemen {sign2.element}
                  </span>
                </div>
                <p className="text-slate-400 mt-0.5 truncate">{sign2.motto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESULT SECTION */}
      <div className="bg-gradient-to-b from-[#0e132e] to-[#080b17] border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Header Summary Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400/90 font-medium">
              <span>Hasil Analisis Astrologi</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{dimension}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-celestial">
              {matchResult.name1} &amp; {matchResult.name2}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {sign1.name} ({sign1.element}) bersinergi dengan {sign2.name} ({sign2.element})
            </p>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleSave}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isSaved || justSaved
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {justSaved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>{isSaved ? 'Tersimpan' : 'Simpan Pasangan'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 active:scale-98 transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 whitespace-nowrap"
            >
              <Share2 className="w-4 h-4" />
              <span>Bagikan / Unduh Kartu</span>
            </button>
          </div>
        </div>

        {/* Score & Verdict Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center border-b border-slate-800">
          {/* Radial score box */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-slate-900/60 rounded-xl border border-amber-500/20">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-slate-800"
                  fill="transparent"
                />
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={377}
                  strokeDashoffset={377 - (377 * matchResult.scores.overall) / 100}
                  strokeLinecap="round"
                  className="text-amber-400 transition-all duration-1000 ease-out"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tabular-nums">
                  {matchResult.scores.overall}%
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">
                  Kecocokan
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-base font-bold text-amber-300 font-celestial">
                {matchResult.analysis.verdictTitle}
              </h4>
            </div>
          </div>

          {/* 3 Detailed Breakdown Bars */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
                <span className="text-slate-300">Komunikasi &amp; Frekuensi Pikiran</span>
                <span className="text-amber-300 font-bold tabular-nums">
                  {matchResult.scores.communication}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-700"
                  style={{ width: `${matchResult.scores.communication}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
                <span className="text-slate-300">Kedalaman Emosi &amp; Kepercayaan</span>
                <span className="text-rose-300 font-bold tabular-nums">
                  {matchResult.scores.emotionalBond}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-700"
                  style={{ width: `${matchResult.scores.emotionalBond}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
                <span className="text-slate-300">Nilai Hidup, Chemistry &amp; Sinergi</span>
                <span className="text-sky-300 font-bold tabular-nums">
                  {matchResult.scores.valuesAndSynergy}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-700"
                  style={{ width: `${matchResult.scores.valuesAndSynergy}%` }}
                />
              </div>
            </div>

            {/* Element synergy callout */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-amber-300">
                  {matchResult.elementSynergy.type}
                </span>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  {matchResult.elementSynergy.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {/* Dinamika Relasi */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 font-celestial flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dinamika Hubungan</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {matchResult.analysis.summary}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2.5">
              {matchResult.analysis.dynamics}
            </p>
          </div>

          {/* Kekuatan Hubungan */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 font-celestial flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Kekuatan Utama Pasangan</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {matchResult.analysis.strengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tantangan yang Perlu Diwaspadai */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <h4 className="text-sm font-bold text-rose-400 font-celestial flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>Tantangan &amp; Potensi Gesekan</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {matchResult.analysis.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">!</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nasihat Harmonisasi */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 font-celestial flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Panduan Harmonisasi Kosmik</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {matchResult.analysis.advice}
            </p>
            <div className="border-t border-slate-800 pt-3 text-xs text-slate-400">
              <span>Tips Elemen: </span>
              <span className="text-slate-300">
                Pahami bahwa cara {sign1.name} mengekspresikan perhatian berbeda dengan {sign2.name}. Komunikasi penuh empati selalu menjadi penengah terbaik.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Date To Zodiac Modal */}
      <DateToZodiacModal
        isOpen={dateModalTarget !== null}
        onClose={() => setDateModalTarget(null)}
        targetLabel={dateModalTarget === 1 ? 'Pihak Pertama' : 'Pihak Kedua'}
        onSelectSign={(newSignId) => {
          if (dateModalTarget === 1) setSign1Id(newSignId);
          else if (dateModalTarget === 2) setSign2Id(newSignId);
        }}
      />

      {/* Export Card Modal */}
      <CompatibilityCardExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        matchResult={matchResult}
      />
    </section>
  );
};
