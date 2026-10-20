import { ZodiacSignId } from '../types/zodiac';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    favoredElements: ('Api' | 'Tanah' | 'Udara' | 'Air')[];
    matchingSigns: ZodiacSignId[];
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bagaimana cara kamu menghabiskan akhir pekan ideal bersama pasangan/sahabat?',
    options: [
      {
        label: 'Petualangan Spontan & Wisata Baru',
        description: 'Mencoba wahana seru, road trip dadakan, atau hiking ke tempat tinggi.',
        favoredElements: ['Api'],
        matchingSigns: ['aries', 'sagittarius', 'leo'],
      },
      {
        label: 'Relaksasi Nyaman di Rumah / Kafe Estetik',
        description: 'Memasak makanan lezat, nonton film hangat, dan menikmati suasana tenang.',
        favoredElements: ['Tanah', 'Air'],
        matchingSigns: ['taurus', 'cancer', 'virgo'],
      },
      {
        label: 'Eksplorasi Budaya, Museum & Diskusi Santai',
        description: 'Membahas ide-ide menarik, pameran seni, atau nongkrong berjam-jam bertukar cerita.',
        favoredElements: ['Udara'],
        matchingSigns: ['gemini', 'libra', 'aquarius'],
      },
      {
        label: 'Malam Berdua Penuh Percakapan Hati ke Hati',
        description: 'Berbagi rahasia batin, mendengarkan musik melankolis, dan saling menguatkan.',
        favoredElements: ['Air'],
        matchingSigns: ['scorpio', 'pisces', 'cancer'],
      },
    ],
  },
  {
    id: 2,
    question: 'Apa kualitas karakter yang paling kamu kagumi dari orang lain?',
    options: [
      {
        label: 'Keberanian & Kepercayaan Diri yang Memancar',
        description: 'Orang yang penuh semangat hidup, tidak penakut, dan selalu optimis.',
        favoredElements: ['Api'],
        matchingSigns: ['leo', 'aries', 'sagittarius'],
      },
      {
        label: 'Kesetiaan Nyata & Kematangan Bertanggung Jawab',
        description: 'Konsisten antara ucapan dan perbuatan, dapat dipercaya dalam jangka panjang.',
        favoredElements: ['Tanah'],
        matchingSigns: ['capricorn', 'taurus', 'virgo'],
      },
      {
        label: 'Kecerdasan Pikiran & Selera Humor Segar',
        description: 'Mudah bergaul, berpikiran terbuka, dan asyik diajak berdiskusi hal apa saja.',
        favoredElements: ['Udara'],
        matchingSigns: ['gemini', 'libra', 'aquarius'],
      },
      {
        label: 'Kelembutan Hati & Empati Tulus Tanpa Pamrih',
        description: 'Peka terhadap perasaan sesama dan selalu memberikan rasa aman emosional.',
        favoredElements: ['Air'],
        matchingSigns: ['pisces', 'cancer', 'scorpio'],
      },
    ],
  },
  {
    id: 3,
    question: 'Ketika menghadapi perbedaan pendapat atau konflik, bagaimana pendekatanmu?',
    options: [
      {
        label: 'Langsung Terbuka & Bicara To-The-Point',
        description: 'Lebih suka menyelesaikan saat itu juga daripada memendam rasa.',
        favoredElements: ['Api'],
        matchingSigns: ['aries', 'sagittarius'],
      },
      {
        label: 'Tenang, Praktis & Mencari Solusi Konkret',
        description: 'Menganalisis fakta secara objektif dengan kepala dingin.',
        favoredElements: ['Tanah'],
        matchingSigns: ['virgo', 'capricorn', 'taurus'],
      },
      {
        label: 'Diplomatis & Mengutamakan Kedamaian Bersama',
        description: 'Mendengarkan kedua sudut pandang agar tidak ada pihak yang tersakiti.',
        favoredElements: ['Udara'],
        matchingSigns: ['libra', 'gemini'],
      },
      {
        label: 'Mengutamakan Perasaan & Saling Berpelukan',
        description: 'Menjaga perasaan pasangan terlebih dahulu sebelum membahas hal teknis.',
        favoredElements: ['Air'],
        matchingSigns: ['cancer', 'pisces', 'scorpio'],
      },
    ],
  },
  {
    id: 4,
    question: 'Apa bahasa cinta (Love Language) yang membuat hatimu paling tersentuh?',
    options: [
      {
        label: 'Pujian Tulus & Kata-kata Penguat Semangat (Words of Affirmation)',
        description: 'Apresiasi yang diucapkan dari hati membakar semangat dan motivasi.',
        favoredElements: ['Api', 'Udara'],
        matchingSigns: ['leo', 'gemini', 'aries'],
      },
      {
        label: 'Tindakan Melayani & Bantuan Nyata (Acts of Service)',
        description: 'Tindakan kepedulian nyata yang meringankan beban sehari-hari.',
        favoredElements: ['Tanah'],
        matchingSigns: ['virgo', 'capricorn', 'taurus'],
      },
      {
        label: 'Waktu Berkualitas & Obrolan Mendalam (Quality Time)',
        description: 'Kehadiran utuh tanpa gangguan gawai untuk saling terhubung jiwa.',
        favoredElements: ['Air', 'Udara'],
        matchingSigns: ['libra', 'cancer', 'aquarius'],
      },
      {
        label: 'Sentuhan Lembut & Pelukan Hangat (Physical Touch)',
        description: 'Kehangatan fisik yang menenangkan degup jantung dan rasa cemas.',
        favoredElements: ['Air'],
        matchingSigns: ['scorpio', 'pisces', 'taurus'],
      },
    ],
  },
  {
    id: 5,
    question: 'Apa impian terbesarmu dalam sebuah hubungan jangka panjang?',
    options: [
      {
        label: 'Menjelajahi Dunia Bersama Menjadi Pasangan Berdaya',
        description: 'Tumbuh bersama tanpa batas, saling memicu meraih puncak prestasi tertinggi.',
        favoredElements: ['Api', 'Udara'],
        matchingSigns: ['sagittarius', 'aries', 'aquarius'],
      },
      {
        label: 'Membangun Rumah Idaman yang Aman, Nyaman & Sejahtera',
        description: 'Mendirikan fondasi finansial dan keluarga yang kokoh tak tergoyahkan.',
        favoredElements: ['Tanah'],
        matchingSigns: ['taurus', 'capricorn', 'virgo'],
      },
      {
        label: 'Kemitraan yang Setara, Romantis & Selalu Harmonis',
        description: 'Menjadi sahabat terbaik sekaligus belahan jiwa sepanjang usia.',
        favoredElements: ['Udara', 'Air'],
        matchingSigns: ['libra', 'leo', 'gemini'],
      },
      {
        label: 'Ikatan Batin Suci yang Saling Mengerti Tanpa Sepatah Kata',
        description: 'Koneksi spiritual di mana satu sama lain merasa pulang ke pelukan sejati.',
        favoredElements: ['Air'],
        matchingSigns: ['pisces', 'cancer', 'scorpio'],
      },
    ],
  },
];
