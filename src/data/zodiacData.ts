import {
  DimensionType,
  ElementType,
  MatchResult,
  ZodiacSign,
  ZodiacSignId,
} from '../types/zodiac';

export const ZODIAC_SIGNS: Record<ZodiacSignId, ZodiacSign> = {
  aries: {
    id: 'aries',
    name: 'Aries',
    symbol: 'Domba Jantan',
    glyph: '♈',
    latinName: 'The Ram',
    dateRange: '21 Mar – 19 Apr',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: 'Api',
    modality: 'Kardinal',
    rulingPlanet: 'Mars',
    motto: 'Saya Memulai & Bertindak',
    description:
      'Penuh keberanian, energik, dan berjiwa pelopor. Aries tidak pernah ragu mengambil inisiatif dan mencintai tantangan baru.',
    strengths: ['Pemberani', 'Spontan', 'Jujur & Terbuka', 'Penuh Semangat'],
    challenges: ['Cenderung Tidak Sabaran', 'Impulsif', 'Mudah Terbakar Ego'],
    luckyDay: 'Selasa',
    luckyColor: 'Merah Darah & Emas',
    gemstone: 'Berlian & Ruby',
    bestMatches: ['leo', 'sagittarius', 'gemini', 'aquarius'],
  },
  taurus: {
    id: 'taurus',
    name: 'Taurus',
    symbol: 'Banteng Jantan',
    glyph: '♉',
    latinName: 'The Bull',
    dateRange: '20 Apr – 20 Mei',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: 'Tanah',
    modality: 'Tetap',
    rulingPlanet: 'Venus',
    motto: 'Saya Membangun & Memiliki',
    description:
      'Setia, sabar, dan menyukai keindahan serta kenyamanan hidup. Taurus merupakan pilar stabilitas yang tangguh bagi orang terdekat.',
    strengths: ['Setia & Konsisten', 'Dapat Diandalkan', 'Penyayang', 'Praktis'],
    challenges: ['Keras Kepala', 'Sulit Menerima Perubahan Cepat', 'Posesif'],
    luckyDay: 'Jumat',
    luckyColor: 'Hijau Zamrud & Earth Tone',
    gemstone: 'Zamrud (Emerald)',
    bestMatches: ['virgo', 'capricorn', 'cancer', 'pisces'],
  },
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    symbol: 'Si Kembar',
    glyph: '♊',
    latinName: 'The Twins',
    dateRange: '21 Mei – 20 Jun',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: 'Udara',
    modality: 'Berubah',
    rulingPlanet: 'Merkurius',
    motto: 'Saya Berpikir & Menghubungkan',
    description:
      'Cerdas, komunikatif, dan penuh rasa ingin tahu. Gemini membawa suasana ceria dan selalu memiliki sudut pandang segar dalam pergaulan.',
    strengths: ['Cerdas Berbicara', 'Adaptif', 'Berwawasan Luas', 'Humoris'],
    challenges: ['Cepat Merasa Bosan', 'Ragu-ragu Mengambil Keputusan', 'Emosi Tak Menentu'],
    luckyDay: 'Rabu',
    luckyColor: 'Kuning Terang & Biru Langit',
    gemstone: 'Agate & Citrine',
    bestMatches: ['libra', 'aquarius', 'aries', 'leo'],
  },
  cancer: {
    id: 'cancer',
    name: 'Cancer',
    symbol: 'Kepiting',
    glyph: '♋',
    latinName: 'The Crab',
    dateRange: '21 Jun – 22 Jul',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: 'Air',
    modality: 'Kardinal',
    rulingPlanet: 'Bulan',
    motto: 'Saya Merasakan & Mengayomi',
    description:
      'Intuitif, penuh empati, dan sangat melindungi keluarga. Cancer mencintai dengan ketulusan hati yang luar biasa dalam.',
    strengths: ['Penyayang Tulus', 'Protektif', 'Sensitivitas Tinggi', 'Pemberi Kenyamanan'],
    challenges: ['Mudah Mood Swing', 'Terlalu Melankolis', 'Sering Memendam Sakit Hati'],
    luckyDay: 'Senin',
    luckyColor: 'Perak, Putih Mutiara & Sea Green',
    gemstone: 'Mutiara & Moonstone',
    bestMatches: ['scorpio', 'pisces', 'taurus', 'virgo'],
  },
  leo: {
    id: 'leo',
    name: 'Leo',
    symbol: 'Singa',
    glyph: '♌',
    latinName: 'The Lion',
    dateRange: '23 Jul – 22 Agt',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: 'Api',
    modality: 'Tetap',
    rulingPlanet: 'Matahari',
    motto: 'Saya Bersinar & Memimpin',
    description:
      'Karismatik, murah hati, dan berjiwa pemimpin sejati. Leo memiliki aura hangat yang mampu memikat dan menyemangati siapa pun.',
    strengths: ['Bermartabat', 'Loyal & Pemurah', 'Penuh Daya Tarik', 'Optimis'],
    challenges: ['Butuh Validasi & Pujian', 'Dominan', 'Sulit Mengakui Kelemahan'],
    luckyDay: 'Minggu',
    luckyColor: 'Kuning Emas, Jingga & Merah Bata',
    gemstone: 'Peridot & Amber',
    bestMatches: ['aries', 'sagittarius', 'libra', 'gemini'],
  },
  virgo: {
    id: 'virgo',
    name: 'Virgo',
    symbol: 'Sang Perawan',
    glyph: '♍',
    latinName: 'The Maiden',
    dateRange: '23 Agt – 22 Sep',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: 'Tanah',
    modality: 'Berubah',
    rulingPlanet: 'Merkurius',
    motto: 'Saya Menganalisis & Menyempurnakan',
    description:
      'Teliti, teratur, dan berdedikasi tinggi. Virgo menunjukkan cintanya melalui tindakan nyata, bantuan praktis, dan ketulusan perhatian.',
    strengths: ['Perfeksionis Sehat', 'Rapi & Cermat', 'Problem Solver Handal', 'Rendah Hati'],
    challenges: ['Terlalu Kritis Pada Diri & Orang Lain', 'Mudah Cemas', 'Overthinking'],
    luckyDay: 'Rabu',
    luckyColor: 'Navy Blue, Abu-abu & Cokelat Hazel',
    gemstone: 'Safir Biru & Jade',
    bestMatches: ['taurus', 'capricorn', 'cancer', 'scorpio'],
  },
  libra: {
    id: 'libra',
    name: 'Libra',
    symbol: 'Timbangan',
    glyph: '♎',
    latinName: 'The Scales',
    dateRange: '23 Sep – 22 Okt',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: 'Udara',
    modality: 'Kardinal',
    rulingPlanet: 'Venus',
    motto: 'Saya Menyeimbangkan & Mengharmonikan',
    description:
      'Diplomatis, menawan, dan mencintai keadilan serta estetika. Libra adalah pembawa damai yang ahli menciptakan keselarasan antarindividu.',
    strengths: ['Penuh Pesona', 'Objektif & Adil', 'Pecinta Damai', 'Selera Seni Tinggi'],
    challenges: ['Bimbang (Indecisive)', 'Sering Menghindari Konfrontasi', 'Mudah Terpengaruh'],
    luckyDay: 'Jumat',
    luckyColor: 'Baby Blue, Pastel Pink & Lavender',
    gemstone: 'Opal & Lapis Lazuli',
    bestMatches: ['gemini', 'aquarius', 'leo', 'sagittarius'],
  },
  scorpio: {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: 'Kalajengking',
    glyph: '♏',
    latinName: 'The Scorpion',
    dateRange: '23 Okt – 21 Nov',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: 'Air',
    modality: 'Tetap',
    rulingPlanet: 'Pluto & Mars',
    motto: 'Saya Menggali & Mentransformasi',
    description:
      'Misterius, bergairah, dan memiliki intuisi tajam. Scorpio tidak setengah-setengah; jika mereka setia, mereka akan membela hingga akhir.',
    strengths: ['Kesetiaan Mutlak', 'Daya Tarik Magnetis', 'Fokus Tak Goyah', 'Intuitif'],
    challenges: ['Pencemburu & Posesif', 'Menyimpan Dendam', 'Penuh Rahasia'],
    luckyDay: 'Selasa',
    luckyColor: 'Merah Maroon, Hitam & Ungu Gelap',
    gemstone: 'Topaz & Obsidian',
    bestMatches: ['cancer', 'pisces', 'virgo', 'capricorn'],
  },
  sagittarius: {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: 'Sang Pemanah',
    glyph: '♐',
    latinName: 'The Archer',
    dateRange: '22 Nov – 21 Des',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: 'Api',
    modality: 'Berubah',
    rulingPlanet: 'Jupiter',
    motto: 'Saya Menjelajah & Mencari Kebenaran',
    description:
      'Pencinta kebebasan, berwawasan filosofis, dan berjiwa petualang. Sagittarius menularkan optimisme dan rasa syukur di mana pun berada.',
    strengths: ['Sangat Optimis', 'Jujur Apa Adanya', 'Jiwa Bebas', 'Dermawan'],
    challenges: ['Sering Terlalu Ceplas-ceplos', 'Takut Dikekang', 'Kurang Sabar'],
    luckyDay: 'Kamis',
    luckyColor: 'Ungu Royal, Biru Tua & Magenta',
    gemstone: 'Turquoise & Amethyst',
    bestMatches: ['aries', 'leo', 'libra', 'aquarius'],
  },
  capricorn: {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: 'Kambing Gunung',
    glyph: '♑',
    latinName: 'The Sea-Goat',
    dateRange: '22 Des – 19 Jan',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: 'Tanah',
    modality: 'Kardinal',
    rulingPlanet: 'Saturnus',
    motto: 'Saya Mencapai & Bertanggung Jawab',
    description:
      'Disiplin, ambisius, dan memiliki integritas baja. Capricorn menyusun masa depan dengan kehati-hatian dan kepedulian jangka panjang.',
    strengths: ['Tanggung Jawab Tinggi', 'Matang & Bijaksana', 'Pantang Menyerah', 'Bisa Dipercaya'],
    challenges: ['Cenderung Kaku', 'Workaholic', 'Sulit Mengekspresikan Emosi Lembut'],
    luckyDay: 'Sabtu',
    luckyColor: 'Hitam Arang, Cokelat Kayu & Abu Tua',
    gemstone: 'Garnet & Onyx',
    bestMatches: ['taurus', 'virgo', 'scorpio', 'pisces'],
  },
  aquarius: {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: 'Pembawa Air',
    glyph: '♒',
    latinName: 'The Water-Bearer',
    dateRange: '20 Jan – 18 Feb',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: 'Udara',
    modality: 'Tetap',
    rulingPlanet: 'Uranus & Saturnus',
    motto: 'Saya Mengetahui & Berinovasi',
    description:
      'Visioner, mandiri, dan berpikiran terbuka. Aquarius menghargai individualitas, persaudaraan universal, dan kebebasan berpikir.',
    strengths: ['Orisinal & Kreatif', 'Humanis Sejati', 'Rasional', 'Mandiri'],
    challenges: ['Bisa Terlihat Dingin/Jarak Emosional', 'Suka Melawan Arus', 'Tak Terduga'],
    luckyDay: 'Sabtu',
    luckyColor: 'Electric Blue, Turquoise & Perak',
    gemstone: 'Amethyst & Aquamarine',
    bestMatches: ['gemini', 'libra', 'aries', 'sagittarius'],
  },
  pisces: {
    id: 'pisces',
    name: 'Pisces',
    symbol: 'Dua Ikan Berlawanan',
    glyph: '♓',
    latinName: 'The Fishes',
    dateRange: '19 Feb – 20 Mar',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: 'Air',
    modality: 'Berubah',
    rulingPlanet: 'Neptunus & Jupiter',
    motto: 'Saya Memahami & Berbelas Kasih',
    description:
      'Puitis, penuh kasih sayang, dan berimajinasi tinggi. Pisces memiliki kelembutan hati yang menyembuhkan dan empati tanpa batas.',
    strengths: ['Empati Mendalam', 'Kreativitas Artistik', 'Penyayang Lembut', 'Ikhlas'],
    challenges: ['Mudah Terluka', 'Cenderung Lari Dari Realita (Eskapisme)', 'Kurang Tegas'],
    luckyDay: 'Kamis',
    luckyColor: 'Seafoam Green, Aquamarine & Ungu Muda',
    gemstone: 'Aquamarine & Jade',
    bestMatches: ['cancer', 'scorpio', 'taurus', 'capricorn'],
  },
};

export const ZODIAC_LIST: ZodiacSign[] = Object.values(ZODIAC_SIGNS);

// Base elemental dynamics analysis
export function getElementSynergy(
  elem1: ElementType,
  elem2: ElementType
): { type: string; description: string } {
  const pair = [elem1, elem2].sort().join('-');

  switch (pair) {
    case 'Api-Api':
      return {
        type: 'Api Bertemu Api (Kobaran Gairah & Semangat)',
        description:
          'Kombinasi yang luar biasa berenergi, penuh antusiasme, dan spontanitas. Keduanya saling memicu semangat hidup, namun perlu berhati-hati agar ego membara tidak saling menghanguskan.',
      };
    case 'Tanah-Tanah':
      return {
        type: 'Tanah Bertemu Tanah (Pondasi Abadi & Realistis)',
        description:
          'Hubungan yang sangat stabil, penuh rasa aman, dan saling percaya. Keduanya mengutamakan loyalitas dan kenyamanan nyata, meskipun terkadang perlu kejutan baru agar tidak monoton.',
      };
    case 'Udara-Udara':
      return {
        type: 'Udara Bertemu Udara (Harmoni Intelektual & Kebebasan)',
        description:
          'Koneksi komunikasi yang mengalir tanpa henti. Keduanya saling menghargai ruang pribadi dan gemar bertukar gagasan, namun perlu melatih kehangatan sentuhan emosional yang lebih dalam.',
      };
    case 'Air-Air':
      return {
        type: 'Air Bertemu Air (Samudra Intuisi & Empati)',
        description:
          'Koneksi batiniah yang sangat mendalam dan hampir telepati. Mereka saling mengerti perasaan pasangan tanpa kata-kata, asalkan tidak larut bersama dalam kesedihan atau overthinking.',
      };
    case 'Api-Udara':
      return {
        type: 'Api & Udara (Inspirasi yang Membakar Kreativitas)',
        description:
          'Udara mengipasi api menjadi lebih bersinar terang, sementara api menghangatkan udara. Pasangan ini sangat dinamis, penuh ide petualangan, dan tidak pernah kehabisan topik seru.',
      };
    case 'Air-Tanah':
      return {
        type: 'Tanah & Air (Kombinasi Menyuburkan & Menenangkan)',
        description:
          'Air melembutkan tanah, dan tanah memberikan wadah yang kokoh bagi air. Sinergi alami yang membawa kedamaian, rasa terlindungi, dan pertumbuhan jangka panjang.',
      };
    case 'Api-Tanah':
      return {
        type: 'Api & Tanah (Gairah Dinamis Bertemu Struktur Nyata)',
        description:
          'Api membawa visi dan kobaran aksi, sementara tanah membangun strategi dan kenyamanan nyata. Perbedaan tempo menuntut saling menghormati antara spontanitas dan kehati-hatian.',
      };
    case 'Air-Api':
      return {
        type: 'Api & Air (Uap Kehangatan & Transformasi Emosi)',
        description:
          'Daya tarik magnetis yang sangat kuat namun membutuhkan kepekaan tinggi. Api menghangatkan hati air, sementara air mengajarkan api untuk lebih sabar dan berempati.',
      };
    case 'Tanah-Udara':
      return {
        type: 'Tanah & Udara (Logika Praktis & Ide Visioner)',
        description:
          'Udara menyumbang gagasan segar dan sudut pandang luas, sedangkan tanah menyaring dan mewujudkannya ke dunia nyata. Keduanya saling melengkapi jika saling menghargai gaya berpikir.',
      };
    case 'Air-Udara':
      return {
        type: 'Udara & Air (Pikiran Bertemu Kedalaman Hati)',
        description:
          'Udara mengekspresikan logika dan konsep, sedangkan air merasakan nuansa dan emosi. Hubungan ini memperkaya kedua belah pihak ketika logika dipadukan dengan empati.',
      };
    default:
      return {
        type: 'Sinergi Elemen Harmonis',
        description:
          'Kombinasi kosmik yang memiliki potensi besar untuk saling belajar dan melengkapi kelemahan masing-masing.',
      };
  }
}

// Compute compatibility scores & rich narrative per dimension
export function computeZodiacMatch(
  sign1Id: ZodiacSignId,
  sign2Id: ZodiacSignId,
  dimension: DimensionType,
  name1?: string,
  name2?: string
): MatchResult {
  const sign1 = ZODIAC_SIGNS[sign1Id];
  const sign2 = ZODIAC_SIGNS[sign2Id];

  const sameSign = sign1Id === sign2Id;
  const isTrine =
    sign1.element === sign2.element && !sameSign; // same element, different sign
  const isBestMatch =
    sign1.bestMatches.includes(sign2Id) || sign2.bestMatches.includes(sign1Id);

  // Elemental base compatibility
  const elemPair = [sign1.element, sign2.element].sort().join('-');
  let baseScore = 75;

  if (sameSign) baseScore = 86;
  else if (isTrine) baseScore = 91;
  else if (elemPair === 'Api-Udara' || elemPair === 'Air-Tanah') baseScore = 88;
  else if (elemPair === 'Api-Tanah' || elemPair === 'Air-Udara') baseScore = 74;
  else if (elemPair === 'Air-Api' || elemPair === 'Tanah-Udara') baseScore = 71;

  if (isBestMatch) {
    baseScore = Math.min(98, baseScore + 6);
  }

  // Modality interaction
  // Cardinal + Cardinal = Power couple, might clash on who leads
  // Fixed + Fixed = Loyal but stubborn
  // Mutable + Mutable = Highly fun and flexible, needs anchor
  let commScore = baseScore;
  let emotionScore = baseScore;
  let valuesScore = baseScore;

  if (sign1.element === 'Udara' || sign2.element === 'Udara') {
    commScore += 6;
  }
  if (sign1.element === 'Air' || sign2.element === 'Air') {
    emotionScore += 7;
  }
  if (sign1.element === 'Tanah' || sign2.element === 'Tanah') {
    valuesScore += 6;
  }
  if (sign1.modality === 'Tetap' && sign2.modality === 'Tetap' && !sameSign) {
    commScore -= 5;
    valuesScore += 8; // very loyal
  }

  // Dimension specific adjustments
  if (dimension === 'cinta') {
    if (elemPair === 'Api-Udara' || elemPair === 'Air-Tanah' || isTrine) {
      baseScore = Math.min(97, baseScore + 4);
    }
    emotionScore = Math.min(99, emotionScore + 3);
  } else if (dimension === 'pertemanan') {
    if (sign1.element === 'Udara' || sign2.element === 'Udara' || isTrine) {
      baseScore = Math.min(98, baseScore + 5);
      commScore = Math.min(99, commScore + 4);
    }
  } else if (dimension === 'keluarga') {
    if (sign1.element === 'Tanah' || sign2.element === 'Tanah' || isTrine) {
      baseScore = Math.min(98, baseScore + 4);
      valuesScore = Math.min(99, valuesScore + 5);
    }
  }

  // Clamp scores between 55 and 98
  const clamp = (val: number) => Math.max(55, Math.min(98, Math.round(val)));
  const finalOverall = clamp(baseScore);
  const finalComm = clamp(commScore);
  const finalEmotion = clamp(emotionScore);
  const finalValues = clamp(valuesScore);

  // Dimension-based verdicts and detailed text
  const n1 = name1?.trim() || sign1.name;
  const n2 = name2?.trim() || sign2.name;

  let verdictTitle = '';
  let summary = '';
  let dynamics = '';
  let strengths: string[] = [];
  let challenges: string[] = [];
  let advice = '';

  const elementSynergy = getElementSynergy(sign1.element, sign2.element);

  if (dimension === 'cinta') {
    if (finalOverall >= 90) {
      verdictTitle = 'Ikatan Jiwa Kosmik (Soulmate Resonance)';
      summary = `Hubungan romansa antara ${n1} (${sign1.name}) dan ${n2} (${sign2.name}) memiliki getaran chemistry alami yang sangat memikat. Keduanya mampu saling mengisi dan memahami kebutuhan afeksi terdalam.`;
    } else if (finalOverall >= 78) {
      verdictTitle = 'Harmoni Dinamis & Penuh Kasih';
      summary = `Hubungan cinta ${n1} dan ${n2} dibangun atas rasa saling kagum yang tulus. Meski sesekali ada ritme yang berbeda, kedewasaan emosi menjadi jembatan yang memperkuat ikatan asmara kalian.`;
    } else {
      verdictTitle = 'Romansa Unik Penuh Transformasi';
      summary = `Perbedaan cara mengekspresikan cinta justru menjadi daya tarik memikat antara ${n1} dan ${n2}. Hubungan ini mengajarkan seni kompromi dan pendewasaan diri yang berharga.`;
    }

    dynamics = `Dalam relasi asmara, ${sign1.name} membawa energi ${sign1.element.toLowerCase()} yang ${sign1.motto.toLowerCase()}, sementara ${sign2.name} merespons dengan karakteristik ${sign2.element.toLowerCase()} yang ${sign2.motto.toLowerCase()}. Tarik-menarik rasa ingin tahu membuat kencan pertama hingga komitmen jangka panjang senantiasa terasa hidup.`;
    strengths = [
      `Daya tarik emosional & chemistry yang membangkitkan rasa aman`,
      `Saling melengkapi sudut pandang saat merencanakan masa depan berdua`,
      `Keseimbangan antara kehangatan romantis dan saling menghormati ruang pribadi`,
    ];
    challenges = [
      `Menghindari asumsi sepihak saat salah satu sedang lelah atau pendiam`,
      `Penyelarasan tempo dalam mengambil keputusan komitmen besar`,
    ];
    advice = `Fokuslah pada bahasa cinta (love language) masing-masing. Luangkan waktu khusus berkualitas (quality time) tanpa distraksi gawai agar getaran romansa tetap mekar.`;
  } else if (dimension === 'pertemanan') {
    if (finalOverall >= 90) {
      verdictTitle = 'Sahabat Sejati Tanpa Syarat (True Companions)';
      summary = `${n1} dan ${n2} adalah duo pertemanan yang luar biasa solid. Saling mendukung impian, tidak ada rasa iri, dan selalu ada tawa hangat dalam setiap obrolan.`;
    } else if (finalOverall >= 78) {
      verdictTitle = 'Partner Petualangan & Diskusi Seru';
      summary = `Pertemanan yang asyik dan inspiratif. Keduanya selalu menemukan ide baru untuk dicoba bersama, dari nongkrong santai hingga proyek kolaborasi kreatif.`;
    } else {
      verdictTitle = 'Pertemanan Unik Saling Meluaskan Perspektif';
      summary = `Memiliki lingkaran minat yang berbeda justru membuat pertemanan ${n1} dan ${n2} kaya akan wawasan baru. Saling menghormati batas dan gaya hidup adalah kunci keakraban.`;
    }

    dynamics = `Sebagai sahabat, ${sign1.name} dan ${sign2.name} memiliki ritme interaksi yang saling melengkapi. Ketika salah satu butuh pendengar setia atau motivator energik, yang lain siap hadir mendampingi dengan caranya sendiri.`;
    strengths = [
      `Loyalitas tinggi dan keterbukaan tanpa kepalsuan`,
      `Selera humor dan obrolan yang tidak pernah membosankan`,
      `Dapat diandalkan dalam situasi suka maupun duka`,
    ];
    challenges = [
      `Menghargai waktu luang masing-masing tanpa merasa diabaikan`,
      `Menyelesaikan perbedaan pendapat secara santai tanpa gengsi berlebih`,
    ];
    advice = `Jaga kebersamaan dengan agenda liburan singkat atau kegiatan yang sama-sama disukai. Komunikasi santai dan jujur adalah fondasi terkuat persahabatan ini.`;
  } else {
    // keluarga
    if (finalOverall >= 90) {
      verdictTitle = 'Pilar Kehangatan & Kekeluargaan Kokoh';
      summary = `Dalam dinamika keluarga, ${n1} dan ${n2} menjadi pelindung keharmonisan rumah tangga. Nilai tanggung jawab, kasih sayang, dan rasa hormat tertanam kuat di antara keduanya.`;
    } else if (finalOverall >= 78) {
      verdictTitle = 'Sinergi Harmonis Penuh Dukungan';
      summary = `Hubungan kekeluargaan yang saling menguatkan. Baik sebagai saudara, orang tua-anak, maupun pasangan keluarga, keduanya saling mengayomi dan menghargai peran masing-masing.`;
    } else {
      verdictTitle = 'Dinamika Keluarga yang Menumbuhkan Kesabaran';
      summary = `Setiap anggota keluarga memiliki warna kepribadian tersendiri. Perbedaan sudut pandang antara ${n1} dan ${n2} dapat diselaraskan melalui dialog terbuka di meja makan.`;
    }

    dynamics = `Dalam ranah keluarga, pembagian peran dan kenyamanan rumah tangga berjalan seimbang. Karakteristik ${sign1.name} yang ${sign1.strengths[0].toLowerCase()} berpadu indah dengan ${sign2.name} yang ${sign2.strengths[0].toLowerCase()}, menciptakan suasana rumah yang tenteram.`;
    strengths = [
      `Rasa tanggung jawab bersama dalam menjaga keutuhan dan kedamaian keluarga`,
      `Saling mengulurkan tangan ketika salah satu anggota keluarga membutuhkan pertolongan`,
      `Menciptakan tradisi keluarga yang penuh kehangatan dan kenangan manis`,
    ];
    challenges = [
      `Menghindari sikap keras kepala saat membicarakan urusan domestik atau keputusan penting`,
      `Mendengarkan saran tanpa merasa dihakimi`,
    ];
    advice = `Biasakan diskusi keluarga yang terbuka dan saling mendengarkan tanpa interupsi. Berikan apresiasi kecil atas bantuan harian yang diberikan oleh masing-masing pihak.`;
  }

  return {
    sign1,
    sign2,
    name1: n1,
    name2: n2,
    dimension,
    scores: {
      overall: finalOverall,
      communication: finalComm,
      emotionalBond: finalEmotion,
      valuesAndSynergy: finalValues,
    },
    elementSynergy,
    analysis: {
      score: finalOverall,
      verdictTitle,
      summary,
      dynamics,
      strengths,
      challenges,
      advice,
    },
  };
}
