/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MatchCalculator } from './components/MatchCalculator';
import { CompatibilityMatrix } from './components/CompatibilityMatrix';
import { ZodiacDirectory } from './components/ZodiacDirectory';
import { ZodiacQuiz } from './components/ZodiacQuiz';
import { SavedMatchesModal } from './components/SavedMatchesModal';
import { Footer } from './components/Footer';
import {
  DimensionType,
  MatchResult,
  SavedMatch,
  ZodiacSignId,
} from './types/zodiac';

const STORAGE_KEY = 'zodiac_match_saved_items_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'matrix' | 'directory' | 'quiz'>('calculator');
  const [sign1Id, setSign1Id] = useState<ZodiacSignId>('cancer');
  const [sign2Id, setSign2Id] = useState<ZodiacSignId>('scorpio');
  const [dimension, setDimension] = useState<DimensionType>('cinta');
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [savedMatches, setSavedMatches] = useState<SavedMatch[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);

  // Load saved matches from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedMatches(JSON.parse(stored));
      }
    } catch {
      // storage error fallback
    }
  }, []);

  const saveToLocalStorage = (updated: SavedMatch[]) => {
    setSavedMatches(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSaveMatch = (result: MatchResult) => {
    const newEntry: SavedMatch = {
      id: `${result.sign1.id}-${result.sign2.id}-${result.dimension}-${Date.now()}`,
      sign1Id: result.sign1.id,
      sign2Id: result.sign2.id,
      name1: result.name1 || result.sign1.name,
      name2: result.name2 || result.sign2.name,
      dimension: result.dimension,
      overallScore: result.scores.overall,
      savedAt: new Date().toISOString(),
    };

    // prevent duplicates
    const filtered = savedMatches.filter(
      (m) =>
        !(
          m.sign1Id === newEntry.sign1Id &&
          m.sign2Id === newEntry.sign2Id &&
          m.dimension === newEntry.dimension
        )
    );

    saveToLocalStorage([newEntry, ...filtered]);
  };

  const handleDeleteMatch = (id: string) => {
    const updated = savedMatches.filter((m) => m.id !== id);
    saveToLocalStorage(updated);
  };

  const handleClearAllSaved = () => {
    saveToLocalStorage([]);
  };

  const handleSelectSavedMatch = (
    s1: ZodiacSignId,
    s2: ZodiacSignId,
    dim: DimensionType,
    n1: string,
    n2: string
  ) => {
    setSign1Id(s1);
    setSign2Id(s2);
    setDimension(dim);
    setName1(n1);
    setName2(n2);
    setActiveTab('calculator');
    scrollToCalculator();
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isCurrentMatchSaved = savedMatches.some(
    (m) =>
      m.sign1Id === sign1Id &&
      m.sign2Id === sign2Id &&
      m.dimension === dimension
  );

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedMatches.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section shown on the primary calculator tab */}
        {activeTab === 'calculator' && (
          <HeroSection
            onStartMatching={scrollToCalculator}
            onExploreDirectory={() => {
              setActiveTab('directory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Tab View Switching */}
        {activeTab === 'calculator' && (
          <MatchCalculator
            sign1Id={sign1Id}
            setSign1Id={setSign1Id}
            sign2Id={sign2Id}
            setSign2Id={setSign2Id}
            dimension={dimension}
            setDimension={setDimension}
            name1={name1}
            setName1={setName1}
            name2={name2}
            setName2={setName2}
            onSaveMatch={handleSaveMatch}
            isSaved={isCurrentMatchSaved}
          />
        )}

        {activeTab === 'matrix' && (
          <CompatibilityMatrix
            onSelectPair={(s1, s2, dim) => {
              setSign1Id(s1);
              setSign2Id(s2);
              setDimension(dim);
              setActiveTab('calculator');
              scrollToCalculator();
            }}
          />
        )}

        {activeTab === 'directory' && (
          <ZodiacDirectory
            onSelectForMatch={(chosenSignId) => {
              setSign1Id(chosenSignId);
              setActiveTab('calculator');
              scrollToCalculator();
            }}
          />
        )}

        {activeTab === 'quiz' && (
          <ZodiacQuiz
            onMatchWithSoulmate={(matchedSignId) => {
              setSign2Id(matchedSignId);
              setDimension('cinta');
              setActiveTab('calculator');
              scrollToCalculator();
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Saved Matches Modal */}
      <SavedMatchesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedMatches={savedMatches}
        onSelectMatch={handleSelectSavedMatch}
        onDeleteMatch={handleDeleteMatch}
        onClearAll={handleClearAllSaved}
      />
    </div>
  );
}
