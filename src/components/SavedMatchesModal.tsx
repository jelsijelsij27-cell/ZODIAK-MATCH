import React from 'react';
import { X, Trash2, ArrowUpRight, Bookmark, Heart, Users, Home } from 'lucide-react';
import { SavedMatch, ZodiacSignId, DimensionType } from '../types/zodiac';
import { ZODIAC_SIGNS } from '../data/zodiacData';

interface SavedMatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedMatches: SavedMatch[];
  onSelectMatch: (
    sign1Id: ZodiacSignId,
    sign2Id: ZodiacSignId,
    dimension: DimensionType,
    name1: string,
    name2: string
  ) => void;
  onDeleteMatch: (id: string) => void;
  onClearAll: () => void;
}

export const SavedMatchesModal: React.FC<SavedMatchesModalProps> = ({
  isOpen,
  onClose,
  savedMatches,
  onSelectMatch,
  onDeleteMatch,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0b0f24] border border-amber-500/30 rounded-2xl p-6 shadow-2xl text-slate-100 flex flex-col max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1 text-amber-400">
          <Bookmark className="w-5 h-5" />
          <h3 className="text-xl font-bold font-celestial">Koleksi Pasangan Tersimpan</h3>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Daftar kombinasi zodiak favorit yang telah kamu simpan untuk perbandingan.
        </p>

        {savedMatches.length === 0 ? (
          <div className="py-12 text-center text-slate-400 space-y-2">
            <Bookmark className="w-10 h-10 mx-auto text-slate-600 opacity-60" />
            <p className="text-sm font-medium">Belum ada pasangan yang disimpan.</p>
            <p className="text-xs text-slate-500">
              Klik tombol &quot;Simpan Pasangan Ini&quot; saat mengecek kecocokan untuk menyimpannya di sini.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {savedMatches.map((item) => {
              const sign1 = ZODIAC_SIGNS[item.sign1Id];
              const sign2 = ZODIAC_SIGNS[item.sign2Id];
              const dimensionIcon =
                item.dimension === 'cinta' ? (
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                ) : item.dimension === 'pertemanan' ? (
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                ) : (
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                );

              const dimensionLabel =
                item.dimension === 'cinta'
                  ? 'Cinta'
                  : item.dimension === 'pertemanan'
                  ? 'Pertemanan'
                  : 'Keluarga';

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-between gap-4 group"
                >
                  <button
                    onClick={() => {
                      onSelectMatch(
                        item.sign1Id,
                        item.sign2Id,
                        item.dimension,
                        item.name1,
                        item.name2
                      );
                      onClose();
                    }}
                    className="flex items-center gap-3 text-left flex-1 min-w-0"
                  >
                    <div className="flex items-center justify-center gap-1 w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 text-lg text-amber-300 shrink-0">
                      <span>{sign1?.glyph}</span>
                      <span>{sign2?.glyph}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-200 truncate group-hover:text-amber-300 transition-colors">
                          {item.name1 || sign1?.name} &amp; {item.name2 || sign2?.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
                          {dimensionIcon}
                          <span>{dimensionLabel}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {sign1?.name} · {sign2?.name} · {new Date(item.savedAt).toLocaleDateString('id-ID')}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base font-bold text-amber-300 tabular-nums">
                        {item.overallScore}%
                      </div>
                      <div className="flex items-center gap-0.5 text-[11px] text-slate-400 group-hover:text-amber-300">
                        <span>Buka</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => onDeleteMatch(item.id)}
                    className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                    title="Hapus"
                    aria-label="Hapus pasangan tersimpan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {savedMatches.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 mt-4">
            <span>{savedMatches.length} pasangan tersimpan</span>
            <button
              onClick={onClearAll}
              className="text-rose-400 hover:text-rose-300 transition-colors"
            >
              Hapus Semua Riwayat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
