export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export type ElementType = 'Api' | 'Tanah' | 'Udara' | 'Air';
export type ModalityType = 'Kardinal' | 'Tetap' | 'Berubah';
export type DimensionType = 'cinta' | 'pertemanan' | 'keluarga';

export interface ZodiacSign {
  id: ZodiacSignId;
  name: string;
  symbol: string;
  glyph: string;
  latinName: string;
  dateRange: string;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  element: ElementType;
  modality: ModalityType;
  rulingPlanet: string;
  motto: string;
  description: string;
  strengths: string[];
  challenges: string[];
  luckyDay: string;
  luckyColor: string;
  gemstone: string;
  bestMatches: ZodiacSignId[];
}

export interface CompatibilityScores {
  overall: number; // 0 - 100
  communication: number; // 0 - 100
  emotionalBond: number; // 0 - 100
  valuesAndSynergy: number; // 0 - 100
}

export interface DimensionAnalysis {
  score: number;
  verdictTitle: string;
  summary: string;
  dynamics: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

export interface MatchResult {
  sign1: ZodiacSign;
  sign2: ZodiacSign;
  name1?: string;
  name2?: string;
  dimension: DimensionType;
  scores: CompatibilityScores;
  elementSynergy: {
    type: string;
    description: string;
  };
  analysis: DimensionAnalysis;
}

export interface SavedMatch {
  id: string;
  sign1Id: ZodiacSignId;
  sign2Id: ZodiacSignId;
  name1: string;
  name2: string;
  dimension: DimensionType;
  overallScore: number;
  savedAt: string;
}
