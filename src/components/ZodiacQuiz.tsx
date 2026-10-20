import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ZodiacSignId } from '../types/zodiac';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle, Heart } from 'lucide-react';

interface ZodiacQuizProps {
  onMatchWithSoulmate: (matchedSignId: ZodiacSignId) => void;
}

export const ZodiacQuiz: React.FC<ZodiacQuizProps> = ({
  onMatchWithSoulmate,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [elementScores, setElementScores] = useState<Record<string, number>>({
    Api: 0,
    Tanah: 0,
    Udara: 0,
    Air: 0,
  });
  const [signTally, setSignTally] = useState<Record<string, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (
    favoredElements: string[],
    matchingSigns: ZodiacSignId[]
  ) => {
    // tally elements
    const updatedElements = { ...elementScores };
    favoredElements.forEach((el) => {
      updatedElements[el] = (updatedElements[el] || 0) + 1;
    });
    setElementScores(updatedElements);

    // tally signs
    const updatedSigns = { ...signTally };
    matchingSigns.forEach((s) => {
      updatedSigns[s] = (updatedSigns[s] || 0) + 2;
    });
    setSignTally(updatedSigns);

    if (currentStep + 1 < totalQuestions) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setElementScores({ Api: 0, Tanah: 0, Udara: 0, Air: 0 });
    setSignTally({});
    setQuizCompleted(false);
  };

  // Determine top match
  let bestSignId: ZodiacSignId = 'scorpio';
  let highestScore = -1;
  Object.entries(signTally).forEach(([signId, score]) => {
    if (score > highestScore) {
      highestScore = score;
      bestSignId = signId as ZodiacSignId;
    }
  });

  const bestSign = ZODIAC_SIGNS[bestSignId] || ZODIAC_SIGNS.scorpio;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-medium mb-1">
          <Heart className="w-3.5 h-3.5 text-rose-400" />
          <span>Kuis Kecocokan Kepribadian</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 font-celestial">
          Cari Tahu Zodiak Jodoh Kosmikmu
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Jawab 5 pertanyaan santai mengenai gaya hubungan, bahasa cinta, dan caramu menyelesaikan masalah untuk menemukan rasi bintang yang paling klop dengan auramu.
        </p>
      </div>

      {!quizCompleted ? (
        <div className="bg-[#0b0f24]/90 border border-amber-500/25 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Pertanyaan {currentStep + 1} dari {totalQuestions}</span>
              <span className="tabular-nums font-semibold text-amber-300">
                {Math.round(((currentStep + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-celestial leading-snug">
              {question.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.favoredElements, opt.matchingSigns)}
                className="w-full text-left p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/90 active:scale-[0.99] transition-all group flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">
                    {opt.label}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Quiz Completed Result */
        <div className="bg-gradient-to-b from-[#0f1433] to-[#070914] border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl text-center space-y-6 animate-in fade-in duration-300">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300">
            <Sparkles className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Hasil Rekomendasi Jodoh Kosmikmu
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-celestial">
              {bestSign.name} {bestSign.glyph}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {bestSign.symbol} · Elemen <strong className="text-amber-300">{bestSign.element}</strong> ({bestSign.dateRange})
            </p>
          </div>

          <div className="max-w-xl mx-auto p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed text-left space-y-3">
            <p className="italic text-amber-200/90 font-medium">
              &ldquo;{bestSign.motto}&rdquo;
            </p>
            <p>
              Berdasarkan jawaban kuis kamu, auramu paling beresonansi dengan karakteristik zodiak{' '}
              <strong className="text-white">{bestSign.name}</strong>. Mereka memiliki energi{' '}
              {bestSign.element.toLowerCase()} yang mampu memahami kebutuhan afeksimu, menghargai komitmen, dan memberikan kenyamanan batin yang mendalam.
            </p>
            <div className="border-t border-slate-800 pt-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">Kekuatan yang cocok denganmu: </span>
              <span>{bestSign.strengths.join(', ')}.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              onClick={() => onMatchWithSoulmate(bestSign.id)}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl hover:from-amber-200 hover:to-amber-400 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Heart className="w-4 h-4" />
              <span>Uji Kecocokan dengan {bestSign.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
