import React, { useState } from 'react';
import { Calendar, X, Check, Sparkles } from 'lucide-react';
import { getZodiacFromDate, MONTH_NAMES_ID, getDaysInMonth } from '../utils/birthDateHelper';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ZodiacSignId } from '../types/zodiac';

interface DateToZodiacModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSign: (signId: ZodiacSignId) => void;
  targetLabel: string;
}

export const DateToZodiacModal: React.FC<DateToZodiacModalProps> = ({
  isOpen,
  onClose,
  onSelectSign,
  targetLabel,
}) => {
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(7); // July

  if (!isOpen) return null;

  const detectedSignId = getZodiacFromDate(day, month);
  const sign = ZODIAC_SIGNS[detectedSignId];
  const maxDays = getDaysInMonth(month);

  const handleApply = () => {
    onSelectSign(detectedSignId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0c1024] border border-amber-500/30 rounded-2xl p-6 shadow-2xl text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1 text-amber-400">
          <Calendar className="w-5 h-5" />
          <h3 className="text-lg font-bold font-celestial">Cari Zodiak via Tanggal Lahir</h3>
        </div>
        <p className="text-xs text-slate-400 mb-6">
          Masukkan tanggal lahir {targetLabel} untuk mengetahui zodiak yang tepat secara otomatis.
        </p>

        {/* Date Selector */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Tanggal (1 – {maxDays})
            </label>
            <select
              value={day > maxDays ? maxDays : day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
            >
              {Array.from({ length: maxDays }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Bulan Kelahiran
            </label>
            <select
              value={month}
              onChange={(e) => {
                const newMonth = Number(e.target.value);
                setMonth(newMonth);
                const max = getDaysInMonth(newMonth);
                if (day > max) setDay(max);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
            >
              {MONTH_NAMES_ID.map((name, idx) => (
                <option key={name} value={idx + 1}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calculated Result Card */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-[#121633] border border-amber-500/20 mb-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-3xl text-amber-300 shrink-0">
            {sign.glyph}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-amber-200 font-celestial">{sign.name}</h4>
              <span className="text-xs text-slate-400">({sign.symbol})</span>
            </div>
            <p className="text-xs text-slate-300">
              {sign.dateRange} · Elemen <span className="text-amber-300">{sign.element}</span>
            </p>
            <p className="text-xs text-slate-400 truncate mt-0.5">{sign.description}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleApply}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20"
          >
            <Check className="w-4 h-4" />
            <span>Pilih Zodiak Ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
