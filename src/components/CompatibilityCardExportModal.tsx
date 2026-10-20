import React, { useRef, useState } from 'react';
import { X, Download, Copy, Check, Sparkles } from 'lucide-react';
import { MatchResult } from '../types/zodiac';

interface CompatibilityCardExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchResult: MatchResult;
}

export const CompatibilityCardExportModal: React.FC<CompatibilityCardExportModalProps> = ({
  isOpen,
  onClose,
  matchResult,
}) => {
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  if (!isOpen) return null;

  const { sign1, sign2, name1, name2, dimension, scores, analysis, elementSynergy } = matchResult;
  const dimensionLabel =
    dimension === 'cinta'
      ? 'Cinta & Asmara'
      : dimension === 'pertemanan'
      ? 'Pertemanan & Sahabat'
      : 'Keluarga & Relasi';

  const n1 = name1 || sign1.name;
  const n2 = name2 || sign2.name;

  const handleCopyText = async () => {
    const textToCopy = `🌌 ZODIAC MATCH REPORT 🌌
Pasangan: ${n1} (${sign1.name} ${sign1.glyph}) & ${n2} (${sign2.name} ${sign2.glyph})
Dimensi: ${dimensionLabel}
Skor Kecocokan: ${scores.overall}%
Predikat: ${analysis.verdictTitle}

✨ Rincian Sinergi:
· Komunikasi: ${scores.communication}%
· Emosi & Kepercayaan: ${scores.emotionalBond}%
· Nilai Hidup & Chemistry: ${scores.valuesAndSynergy}%

🌟 Dinamika Elemen: ${elementSynergy.type}
💡 Nasihat Kosmik: ${analysis.advice}

Cek kecocokan zodiakmu di Zodiac Match!`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadImage = () => {
    setIsExporting(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350; // Instagram story/portrait ratio
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      setIsExporting(false);
      return;
    }

    // Background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1350);
    bgGradient.addColorStop(0, '#070914');
    bgGradient.addColorStop(0.5, '#0c1126');
    bgGradient.addColorStop(1, '#05070e');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1080, 1350);

    // Subtle star dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 70; i++) {
      const x = (i * 137.5) % 1080;
      const y = (i * 219.7) % 1350;
      const r = (i % 3 === 0 ? 2 : 1.2);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outer decorative gold border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, 1000, 1270);

    // Inner thin border
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(52, 52, 976, 1246);

    // Header branding
    ctx.fillStyle = '#f6d860';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Z O D I A C   M A T C H', 540, 120);

    ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
    ctx.font = '22px sans-serif';
    ctx.fillText(`ANALISIS KOSMIK: ${dimensionLabel.toUpperCase()}`, 540, 160);

    // Center couple badges
    ctx.fillStyle = '#ffffff';
    ctx.font = '72px sans-serif';
    ctx.fillText(`${sign1.glyph}   ✕   ${sign2.glyph}`, 540, 260);

    ctx.fillStyle = '#fcd34d';
    ctx.font = 'bold 38px serif';
    ctx.fillText(`${n1} & ${n2}`, 540, 320);

    ctx.fillStyle = 'rgba(203, 213, 225, 0.85)';
    ctx.font = '24px sans-serif';
    ctx.fillText(`${sign1.name} (${sign1.element})  ·  ${sign2.name} (${sign2.element})`, 540, 360);

    // Score Circle
    const centerX = 540;
    const centerY = 500;
    const radius = 90;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      radius,
      -Math.PI / 2,
      -Math.PI / 2 + (scores.overall / 100) * (Math.PI * 2)
    );
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 54px sans-serif';
    ctx.fillText(`${scores.overall}%`, centerX, centerY + 18);

    // Verdict Title
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 32px serif';
    ctx.fillText(analysis.verdictTitle, 540, 650);

    // 3 Metric Pills / Boxes
    const boxY = 710;
    const metrics = [
      { label: 'Komunikasi', val: `${scores.communication}%` },
      { label: 'Emosi & Batin', val: `${scores.emotionalBond}%` },
      { label: 'Sinergi Hidup', val: `${scores.valuesAndSynergy}%` },
    ];

    metrics.forEach((m, idx) => {
      const bx = 110 + idx * 300;
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bx, boxY, 260, 110, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText(m.val, bx + 130, boxY + 50);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '20px sans-serif';
      ctx.fillText(m.label, bx + 130, boxY + 86);
    });

    // Element Synergy
    ctx.fillStyle = '#fcd34d';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(`✨ ${elementSynergy.type}`, 540, 880);

    // Summary text wrapped
    ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
    ctx.font = '22px sans-serif';
    const words = analysis.summary.split(' ');
    let line = '';
    let currY = 940;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metricsTest = ctx.measureText(testLine);
      if (metricsTest.width > 860 && i > 0) {
        ctx.fillText(line, 540, currY);
        line = words[i] + ' ';
        currY += 34;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 540, currY);

    // Advice box
    ctx.fillStyle = 'rgba(245, 158, 11, 0.08)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(100, 1080, 880, 120, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('💡 TIPS KOSMIK', 540, 1118);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '20px sans-serif';
    ctx.fillText(analysis.advice.slice(0, 95) + '...', 540, 1160);

    // Footer
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.font = '18px sans-serif';
    ctx.fillText('zodiacmatch.app · Dibuat untuk hiburan & eksplorasi astrologi', 540, 1255);

    // Export to data URL
    const imageURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.download = `ZodiacMatch-${n1}-${n2}.png`;
    downloadLink.href = imageURL;
    downloadLink.click();
    setIsExporting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0b0f24] border border-amber-500/30 rounded-2xl p-6 shadow-2xl text-slate-100 flex flex-col max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-amber-400">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-xl font-bold font-celestial">Kartu Hasil Kecocokan</h3>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Simpan sebagai gambar beresolusi tinggi untuk dibagikan ke media sosial atau teman.
        </p>

        {/* Live Card Preview */}
        <div className="relative rounded-xl border border-amber-500/30 bg-gradient-to-b from-[#0c122b] to-[#070914] p-6 text-center shadow-xl space-y-4 mb-6">
          <div className="text-amber-300 font-celestial text-xs tracking-widest uppercase">
            Zodiac Match · {dimensionLabel}
          </div>

          <div className="flex items-center justify-center gap-3 text-3xl">
            <span className="text-amber-300">{sign1.glyph}</span>
            <span className="text-slate-500 text-lg">✕</span>
            <span className="text-amber-300">{sign2.glyph}</span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-100 font-celestial">
              {n1} & {n2}
            </h4>
            <p className="text-xs text-slate-400">
              {sign1.name} ({sign1.element}) & {sign2.name} ({sign2.element})
            </p>
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-amber-400/80 bg-amber-400/10 text-2xl font-bold text-amber-200 tabular-nums">
            {scores.overall}%
          </div>

          <div>
            <p className="text-sm font-semibold text-amber-300 font-celestial">
              {analysis.verdictTitle}
            </p>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2 px-2">
              {analysis.summary}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div>
              <p className="text-slate-400">Komunikasi</p>
              <p className="font-bold text-amber-300 tabular-nums">{scores.communication}%</p>
            </div>
            <div>
              <p className="text-slate-400">Emosi & Batin</p>
              <p className="font-bold text-amber-300 tabular-nums">{scores.emotionalBond}%</p>
            </div>
            <div>
              <p className="text-slate-400">Sinergi</p>
              <p className="font-bold text-amber-300 tabular-nums">{scores.valuesAndSynergy}%</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-end pt-2 border-t border-slate-800">
          <button
            onClick={handleCopyText}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Salin Ringkasan Teks</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={isExporting}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Membuat Gambar...' : 'Download Gambar (PNG)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
