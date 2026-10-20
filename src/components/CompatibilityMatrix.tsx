import React, { useState } from 'react';
import { ZODIAC_LIST, computeZodiacMatch } from '../data/zodiacData';
import { DimensionType, ZodiacSignId } from '../types/zodiac';
import { Heart, Users, Home, Sparkles, ArrowRight } from 'lucide-react';

interface CompatibilityMatrixProps {
  onSelectPair: (sign1: ZodiacSignId, sign2: ZodiacSignId, dimension: DimensionType) => void;
}

export const CompatibilityMatrix: React.FC<CompatibilityMatrixProps> = ({
  onSelectPair,
}) => {
  const [matrixDimension, setMatrixDimension] = useState<DimensionType>('cinta');
  const [hoveredCell, setHoveredCell] = useState<{
    s1: ZodiacSignId;
    s2: ZodiacSignId;
    score: number;
  } | null>(null);

  const getScoreColorClass = (score: number) => {
    if (score >= 90) return 'bg-amber-500/25 text-amber-200 border-amber-500/40 font-bold';
    if (score >= 80) return 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30';
    if (score >= 70) return 'bg-sky-500/15 text-sky-200 border-sky-500/30';
    return 'bg-slate-800/60 text-slate-300 border-slate-700/50';
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 font-celestial">
          Matriks Kecocokan 12x12 Zodiak
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Peta komprehensif 144 kombinasi rasi bintang. Klik sel mana pun untuk melihat analisis kecocokan lengkapnya secara instan.
        </p>

        {/* Matrix Dimension Tabs */}
        <div className="flex items-center justify-center gap-2 mt-6 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl max-w-md mx-auto">
          <button
            onClick={() => setMatrixDimension('cinta')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              matrixDimension === 'cinta'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Cinta</span>
          </button>
          <button
            onClick={() => setMatrixDimension('pertemanan')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              matrixDimension === 'pertemanan'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Pertemanan</span>
          </button>
          <button
            onClick={() => setMatrixDimension('keluarga')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              matrixDimension === 'keluarga'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Keluarga</span>
          </button>
        </div>
      </div>

      {/* Legend & Hover preview */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 text-xs text-slate-400 px-1">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-amber-500/30 border border-amber-500/50" />
            <span>90%+ (Sangat Harmonis)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-500/25 border border-emerald-500/40" />
            <span>80-89% (Dinamis)</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-sky-500/20 border border-sky-500/40" />
            <span>70-79% (Seimbang)</span>
          </span>
        </div>

        {hoveredCell ? (
          <div className="flex items-center gap-2 text-amber-300 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {hoveredCell.s1.toUpperCase()} &amp; {hoveredCell.s2.toUpperCase()} —{' '}
              <strong className="text-white tabular-nums">{hoveredCell.score}%</strong>
            </span>
          </div>
        ) : (
          <span className="text-slate-500 italic">Klik angka mana pun untuk membuka ulasan</span>
        )}
      </div>

      {/* Responsive Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-amber-500/25 bg-[#0b0f24]/90 shadow-2xl p-4">
        <table className="w-full text-center border-collapse min-w-[700px]">
          <thead>
            <tr>
              <th className="p-2 text-xs font-celestial text-amber-400 font-bold text-left">
                Zodiak
              </th>
              {ZODIAC_LIST.map((z) => (
                <th
                  key={z.id}
                  className="p-2 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors"
                  title={`${z.name} (${z.element})`}
                >
                  <span className="text-base block">{z.glyph}</span>
                  <span className="text-[10px] hidden sm:block">{z.name.slice(0, 3)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ZODIAC_LIST.map((rowSign) => (
              <tr key={rowSign.id} className="border-t border-slate-800/80">
                <td className="p-2 text-xs font-medium text-slate-200 text-left whitespace-nowrap">
                  <span className="text-amber-400 mr-1.5">{rowSign.glyph}</span>
                  <span>{rowSign.name}</span>
                </td>
                {ZODIAC_LIST.map((colSign) => {
                  const result = computeZodiacMatch(
                    rowSign.id,
                    colSign.id,
                    matrixDimension
                  );
                  const score = result.scores.overall;

                  return (
                    <td key={colSign.id} className="p-1">
                      <button
                        onClick={() =>
                          onSelectPair(rowSign.id, colSign.id, matrixDimension)
                        }
                        onMouseEnter={() =>
                          setHoveredCell({
                            s1: rowSign.id,
                            s2: colSign.id,
                            score,
                          })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-full py-2 px-1 text-xs rounded border transition-all tabular-nums hover:scale-110 hover:z-10 hover:shadow-lg hover:border-amber-400 cursor-pointer ${getScoreColorClass(
                          score
                        )}`}
                        title={`${rowSign.name} + ${colSign.name}: ${score}% (${matrixDimension})`}
                      >
                        {score}%
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
