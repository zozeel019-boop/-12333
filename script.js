const surahNames = [
  'الفاتحة','البقرة','آل عمران','النساء','المائدة','الأنعام','الأعراف','الأنفال','التوبة','يونس','هود','يوسف','الرعد','إبراهيم','الحجر','النحل','الإسراء','الكهف','مريم','طه','الأنبياء','الحج','المؤمنون','النور','الفرقان','الشعراء','النمل','القصص','العنكبوت','الروم','لقمان','السجدة','الأحزاب','سبأ','فاطر','يس','الصافات','ص','الزمر','غافر','فصلت','الشورى','الزخرف','الدخان','الجاثية','الأحقاف','محمد','الفتح','الحجرات','ق','الذاريات','الطور','النجم','القمر','الرحمن','الواقعة','الحديد','المجادلة','الحشر','الممتحنة','الصف','الجمعة','المنافقون','التغابن','الطلاق','التحريم','الملك','القلم','الحاقة','المعارج','نوح','الجن','المزمل','المدثر','القيامة','الإنسان','المرسلات','النبأ','النازعات','عبس','التكوير','الإنفطار','المطففين','الإنشقاق','البروج','الطارق','الأعلى','الغاشية','الفجر','البلد','الشمس','الليل','الضحى','الشرح','التين','العلق','القدر','البينة','الزلزلة','العاديات','القارعة','التكاثر','العصر','الهمزة','الفيل','قريش','الماعون','الكوثر','الكافرون','النصر','المسد','الإخلاص','الفلق','الناس'
];

const reciterAudioBaseUrl = 'https://server10.mp3quran.net/minsh';

const surahPresets = {
  1: ['بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ', 'ٱلْحَمْدُ لِلّٰهِ رَبِّ ٱلْعٰلَمِينَ', 'ٱلرَّحْمٰنِ ٱلرَّحِيمِ'],
  2: ['ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ', 'ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ', 'وَٱلْكٰٰلِمُونَ'],
  3: ['ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ ٱلْحَيَوٰةِ', 'وَٱللّٰهِ عِندَهُۥ حُسْنُ ٱلْمَـَٔابِ', 'فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ'],
  4: ['يَٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمُ', 'وَمَن يَعْمَلْ سُوٓءًا يُجْزَ بِهِ', 'إِنَّ ٱللّٰهَ كَانَ بِكُمْ رَحِيمًا'],
  5: ['وَإِذَا قِيلَ ٱدْخُلُوا۟ هَٰذِهِ ٱلْقَرْيَةَ', 'فَبِمَا رَحْمَةٍ مِّنَ ٱللّٰهِ', 'وَإِنِّى لَغَفَّارٌ لِّمَن تَابَ'],
  6: ['ٱللّٰهُ ٱلَّذِى خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ', 'هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلنَّجْمَ', 'وَإِلَيْهِ ٱلْمَصِيرُ'],
  7: ['ٱتَّبِعُوا۟ مَآ أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ', 'أَفَمَن يَهْدِيكُمْ', 'وَٱللّٰهِ غَالِبٌ عَلَىٰٓ أَمْرِهِ'],
  8: ['يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟', 'إِنَّمَا ٱلْمُؤْمِنُونَ', 'وَٱللّٰهِ مَعَ ٱلصَّٰبِرِينَ'],
  9: ['بَرَآءَةٌ مِّنَ ٱللّٰهِ وَرَسُولِهِ', 'خُذُوا۟ مَآ ءَاتَيْنَٰكُم', 'وَلَكِنَّ ٱللّٰهَ شَهِيدٌ'],
  10: ['أَلْفَ تَكُونَ فِيهِ', 'وَإِنَّ لِلَّذِينَ أَحْسَنُوا۟', 'قُلْ إِنَّمَا ٱلْحَيَوٰةُ ٱلدُّنْيَا'],
  11: ['رَبِّ ٱقْتَحْ بَيْنِى وَبَيْنَهُمْ', 'إِنَّكَ أَنتَ ٱلْحَكِيمُ', 'وَقَدْ أَحْسَنَ بِى'],
  12: ['قَالَ يُوسُفُ أَعُوذُ بِٱللّٰهِ', 'بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ', 'وَرَفَعَ أَبَوَيْهِ'],
  13: ['وَٱللّٰهِ يَعْلَمُ مَا تُسِرُّونَ', 'وَفِى ٱلْأَرْضِ قِطَعٌ', 'وَٱللّٰهِ يَعْلَمُ'],
  14: ['رَبَّنَآ أَتْمِمْ لَنَا نُورَنَا', 'وَإِنَّ ٱللّٰهَ لَذُو فَضْلٍ', 'فَلْيَضْحَكُوا۟ قَلِيلًا'],
  15: ['أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', 'إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا', 'فَإِذَا فَرَغْتَ فَٱنصَبْ'],
  16: ['إِنَّ فِى ذَٰلِكَ لَآيَةً', 'وَٱللّٰهِ يَعْلَمُ مَا تُبْدُونَ', 'وَٱللّٰهِ عِندَهُۥ حُسْنُ ٱلْمَـَٔابِ'],
  17: ['سُبْحَٰنَ ٱلَّذِىٓ أَسْرَىٰ بِعَبْدِهِ', 'وَإِنَّا لَهُۥ لَمُوقِنُونَ', 'وَرَفَعْنَا فَوْقَهُمْ'],
  18: ['ٱلْحَمْدُ لِلّٰهِ ٱلَّذِىٓ أَنزَلَ', 'وَوَجَدْنَا مِن دُونِهِمْ قَوْمًا', 'إِنَّكُمْ لَفِى شُكٍّ مِّنْ هَٰذَا'],
  19: ['كَهْيَعَصَّ', 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ', 'وَيَهْدِىٓ إِلَيْهِ مَنْ أَنَابَ'],
  20: ['طٰهٰ', 'مَآ أَنزَلْنَا عَلَيْكَ ٱلْقُرْءَانَ', 'إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ'],
  21: ['ٱقْتَرَبَتِ ٱلسَّاعَةُ', 'وَقُرْءَانُ ٱلْفَجْرِ', 'إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ'],
  22: ['يَٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمْ', 'وَٱللّٰهِ يَعْلَمُ', 'وَتَفَرَّقَ كَيْفَ كَانَ عَاقِبَةُ'],
  23: ['قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ', 'وَٱلَّذِينَ هُمْ فِى صَلَاتِهِمْ', 'وَٱلَّذِينَ هُمْ عَنِ ٱللَّغْوِ مُعْرِضُونَ'],
  24: ['سُورَةٌ أَنزَلْنَٰهَا', 'قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ', 'وَٱلۡمُؤۡمِنَٰتُ'],
  25: ['تَبَارَكَ ٱلَّذِى نَزَّلَ ٱلْفُرْقَانَ', 'وَقَالَ ٱلَّذِينَ كَفَرُوا۟', 'وَٱللّٰهِ عِندَهُۥ حُسْنُ ٱلْمَـَٔابِ'],
  26: ['طسْم', 'قَالَ رَبُّكَ', 'وَإِنَّكُمْ لَمِنَ ٱلْمُرْسَلِينَ'],
  27: ['وَتِلْكَ حُجَّتُنَآ ءَاتَيْنَٰهَا', 'قُلِ ٱللّٰهُ يَهْدِى لِلْحَقِّ', 'وَإِنَّ ٱللّٰهَ يَعْلَمُ'],
  28: ['بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ', 'وَلَقَدْ وَهَبْنَا لِدَاوُۥدَ', 'وَقَالَ ٱلَّذِينَ كَفَرُوا۟'],
  29: ['عَمَّ يَتَسَآءَلُونَ', 'إِنَّ ٱللّٰهَ يَعْلَمُ', 'وَلَقَدْ كُذِّبَتْ رُسُلٌ'],
  30: ['أَلْفَ تَكُونَ فِيهِ', 'وَمَن يُرِدْ ثَوَابَ ٱلدُّنْيَا', 'فَإِذَا ٱنقَلَبْتُمْ'],
  31: ['الٓم', 'وَالَّذِينَ آمَنُوا', 'وَمَن يَتَقِ ٱللّٰهَ'],
  32: ['تَنزِيلُ ٱلْكِتَٰبِ', 'إِنَّ ٱللّٰهَ هُوَ ٱلرَّزَّاقُ', 'عَلَى ٱللّٰهِ تَوَكَّلْنَا'],
  33: ['يَٰٓأَيُّهَا ٱلنَّبِىُّ إِنَّآ أَرْسَلْنَٰكَ', 'وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ', 'لَن يَضُرُّوكُمْ إِلَّآ أَذًى'],
  34: ['فَقَدْ كَانَ لِلَّذِينَ كَفَرُوا۟', 'إِنَّ ٱللّٰهَ يَعْلَمُ', 'وَٱللّٰهِ خَيْرُ ٱلرَّٰزِقِينَ'],
  35: ['سَبَّحَ لِلّٰهِ مَا فِى ٱلسَّمَٰوَٰتِ', 'وَٱللّٰهِ خَيْرُ ٱلرَّٰزِقِينَ', 'مَّن كَانَ يُرِيدُ ٱلْعِزَّةَ'],
  36: ['فَإِنَّمَا يَسَّرْنَٰهُ', 'وَلَا يَأْتِيكُمْ', 'إِنْ نَّشَأْ نُغْرِقْهُمْ'],
  37: ['وَٱلتِّينِ وَٱلزَّيْتُونِ', 'إِنَّ هَٰذَا لَهُوَ ٱلْحَقُّ', 'سَأَلُوهُ عَنِ ٱلْحَقِّ'],
  38: ['هُوَ ٱلَّذِىٓ', 'إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ', 'فَإِنَّمَا يَسَّرْنَٰهُ'],
  39: ['قَٰلَتِ ٱلْأَعْرَابُ', 'وَٱلَّذِينَ ءَامَنُوا۟', 'إِنَّ ٱللّٰهَ يَغْفِرُ'],
  40: ['كَهْيَعَصَّ', 'وَقَدْ أَضَلَّ', 'وَيَوْمَ ٱلْقِيَٰمَةِ'],
  41: ['حٰمٓ', 'قُلْ أَرَءَيْتُم', 'فَإِنْ أَغْلَقْتُ'],
  42: ['بِّسْمِ ٱللّٰهِ', 'وَقَالَ ٱلَّذِينَ كَفَرُوا۟', 'وَهُوَ ٱلْقَاهِرُ'],
  43: ['وَقَالَ ٱلَّذِينَ كَفَرُوا۟', 'إِنَّ ٱللّٰهَ هُوَ', 'زُخْرُفَ ٱلْحَيَوٰةِ'],
  44: ['قُلْ يَٰٓأَيُّهَا', 'قُلْ أَغَيْرَ ٱللّٰهِ', 'لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ'],
  45: ['بِسْمِ ٱللّٰهِ', 'إِنَّ ٱللّٰهَ فَضَّلَ', 'وَمَا لَهُم مِّن دُونِ ٱللّٰهِ'],
  46: ['حٰمٓ', 'يَعْلَمُ مَا', 'وَمَا يَجْدِرُوا۟'],
  47: ['وَلَقَدْ سَبَقَتْ كَلِمَتُنَا', 'إِنَّآ أَعْطَيْنَٰكَ', 'وَلَّىٰ وَجْهَهُۥ'],
  48: ['إِنَّا فَتَحْنَا لَكَ', 'وَأَنَّ ٱللّٰهَ يُعِزُّ', 'تَكُونُ لَهُم'],
  49: ['قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ', 'إِنَّ ٱللّٰهَ سَمِيعٌ', 'وَإِذَا جَآءَكَ'],
  50: ['ق', 'وَإِنَّا لَنَحْنُ', 'إِنَّ هَٰذَا لَهُوَ'],
  51: ['ٱلذَّٰرِيَٰتِ ذَرْوًا', 'فَٱلْمُلْقِيَٰتِ', 'إِنَّكُمْ لَفِى قَوْلٍ'],
  52: ['وَٱلطُّورِ', 'أَمْ خُلِقُوا۟', 'وَٱللّٰهِ مَعَهُمْ'],
  53: ['وَٱلنَّجْمِ', 'لَقَدْ رَأَىٰ مِنْ ءَايَٰتِ رَبِّهِ', 'وَإِنَّهُۥ لَحَقُّ'],
  54: ['قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ', 'وَالْفَجْرِ', 'وَإِنَّا لَفِي شَكٍ'],
  55: ['بِسْمِ ٱللّٰهِ', 'وَأَخْرَجَتْ', 'وَمِن دُونِهِمَا'],
  56: ['حَسْبُنَا ٱللّٰهُ', 'وَلِلَّهِ', 'وَإِنَّا لِلَّهِ'],
  57: ['إِذَا جَآءَ نَصْرُ ٱللّٰهِ', 'مَآ أَغْنَىٰ عَنكَ', 'خَلِيقٌ'],
  58: ['تَبَارَكَ ٱلَّذِى بِيَدِهِ', 'إِنَّمَا ٱللّٰهُ', 'لَا يَغْلِبُ'],
  59: ['يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟', 'وَٱللّٰهِ مَعَكُمْ', 'عَسَىٰ ٱللّٰهُ'],
  60: ['قُلْ يَٰٓأَيُّهَا الْكَفِرُونَ', 'لَآ أَعْبُدُ مَا تَعْبُدُونَ', 'وَأَنَا۠ عَابِدٌ'],
  61: ['بِسْمِ ٱللّٰهِ', 'إِنَّ ٱللّٰهَ يُحِبُّ', 'عَسَىٰ ٱللّٰهُ'],
  62: ['إِذَا جَآءَكَ', 'وَلَا يَتَذَكَّرُ', 'وَسُبْحَٰنَ ٱللّٰهِ'],
  63: ['وَقَالَ ٱلَّذِينَ كَفَرُوا۟', 'وَٱللّٰهِ', 'إِنَّ ٱللّٰهَ']
};

const defaultState = {
  currentSurahId: 1,
  currentVerseIndex: 0,
  nightMode: false,
  language: 'ar',
  fontSize: 22,
  soundEnabled: true,
  bookmarks: [],
  favorites: [],
  lastRead: { surahId: 1, verseIndex: 0 },
  tasbih: 0,
};

const state = { ...defaultState, ...loadState() };
const fullSurahCache = new Map();
let readerRequestId = 0;
let fullQuranRequest = null;

const prayerTimes = [
  { name: 'الفجر', time: '04:50' },
  { name: 'الشروق', time: '06:05' },
  { name: 'الظهر', time: '12:30' },
  { name: 'العصر', time: '15:45' },
  { name: 'المغرب', time: '18:35' },
  { name: 'العشاء', time: '20:15' },
];

const adhkar = [
  { title: 'أذكار المساء', text: 'أَمْسَيْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ.' },
  { title: 'أذكار الصباح', text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.' },
  { title: 'سبحان الله', text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.' },
  { title: 'استغفار', text: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.' },
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('quranAppState') || '{}');
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem('quranAppState', JSON.stringify({
    currentSurahId: state.currentSurahId,
    currentVerseIndex: state.currentVerseIndex,
    nightMode: state.nightMode,
    language: state.language,
    fontSize: state.fontSize,
    soundEnabled: state.soundEnabled,
    bookmarks: state.bookmarks,
    favorites: state.favorites,
    lastRead: state.lastRead,
    tasbih: state.tasbih,
  }));
}

function getSurahVerses(surahId) {
  if (fullSurahCache.has(surahId)) return fullSurahCache.get(surahId);
  if (surahPresets[surahId]) return surahPresets[surahId];
  return [`آية رقم 1 من سورة ${surahNames[surahId - 1]}`, `آية رقم 2 من سورة ${surahNames[surahId - 1]}`, `آية رقم 3 من سورة ${surahNames[surahId - 1]}`];
}

function getCurrentSurah() {
  return {
    id: state.currentSurahId,
    name: surahNames[state.currentSurahId - 1] || 'سورة',
    verses: getSurahVerses(state.currentSurahId),
  };
}

function setView(viewName) {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });

  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === `${viewName}View`);
  });

  document.getElementById('pageTitle').textContent = getPageTitle(viewName);
}

function getPageTitle(viewName) {
  const titles = {
    home: 'الرئيسية',
    quran: 'القرآن الكريم',
    recitation: 'التلاوة',
    bookmarks: 'العلامات المرجعية',
    favorites: 'المفضلة',
    search: 'بحث',
    adhkar: 'الأذكار',
    prayer: 'مواقيت الصلاة',
    settings: 'الإعدادات',
  };
  return titles[viewName] || 'الرئيسية';
}

function renderHome() {
  const current = getCurrentSurah();
  document.getElementById('lastReadTitle').textContent = current.name;
  document.getElementById('lastReadMeta').textContent = `الآية ${state.currentVerseIndex + 1} • آخر قراءة`;
  document.getElementById('homeSurahName').textContent = current.name;
  document.getElementById('homeSurahVerses').textContent = `${current.verses.length} آيات`;
  document.getElementById('bookmarkCount').textContent = String(state.bookmarks.length);
  document.getElementById('favoriteCount').textContent = String(state.favorites.length);
  const progress = Math.min(100, Math.floor(((state.currentVerseIndex + 1) / Math.max(current.verses.length, 1)) * 100));
  document.getElementById('readingProgress').textContent = `${progress}%`;

  const homeList = document.getElementById('homeSurahList');
  homeList.innerHTML = surahNames.slice(0, 8).map((name, index) => `
    <button type="button" class="surah-item ${index === state.currentSurahId - 1 ? 'active' : ''}" data-surah-id="${index + 1}">
      <span class="surah-meta">
        <span class="surah-index">${index + 1}</span>
        <span>${name}</span>
      </span>
      <small>${getSurahVerses(index + 1).length} آيات</small>
    </button>
  `).join('');

  homeList.querySelectorAll('[data-surah-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentSurahId = Number(button.dataset.surahId);
      state.currentVerseIndex = 0;
      saveState();
      renderAll();
      setView('quran');
    });
  });

  document.getElementById('tasbihCounter').textContent = String(state.tasbih);
}

function renderSurahList() {
  const searchTerm = (document.getElementById('surahSearch')?.value || '').trim();
  const filtered = surahNames.map((name, index) => ({ id: index + 1, name })).filter((surah) => {
    return !searchTerm || surah.name.includes(searchTerm) || String(surah.id).includes(searchTerm);
  });

  const list = document.getElementById('surahList');
  list.innerHTML = filtered.length
    ? filtered.map((surah) => `
      <button type="button" class="surah-item ${surah.id === state.currentSurahId ? 'active' : ''}" data-surah-id="${surah.id}">
        <span class="surah-meta">
          <span class="surah-index">${surah.id}</span>
          <span>${surah.name}</span>
        </span>
        <small>${getSurahVerses(surah.id).length}</small>
      </button>
    `).join('')
    : '<div class="empty-state">لا توجد سورة مطابقة</div>';

  list.querySelectorAll('[data-surah-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentSurahId = Number(button.dataset.surahId);
      state.currentVerseIndex = 0;
      state.lastRead = { surahId: state.currentSurahId, verseIndex: 0 };
      saveState();
      renderAll();
    });
  });
}

async function loadFullSurahVerses(surahId) {
  if (fullSurahCache.has(surahId)) return fullSurahCache.get(surahId);
  if (fullQuranRequest) {
    await fullQuranRequest;
    if (fullSurahCache.has(surahId)) return fullSurahCache.get(surahId);
  }

  const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`);
  if (!response.ok) throw new Error(`Quran API returned ${response.status}`);

  const payload = await response.json();
  const verses = payload?.data?.ayahs?.map((ayah) => ayah.text).filter(Boolean);
  if (!verses?.length) throw new Error('Quran API returned no verses');

  fullSurahCache.set(surahId, verses);
  return verses;
}

async function loadFullQuran() {
  if (fullQuranRequest) return fullQuranRequest;

  fullQuranRequest = fetch('https://api.alquran.cloud/v1/quran/quran-uthmani')
    .then((response) => {
      if (!response.ok) throw new Error(`Quran API returned ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      const surahs = payload?.data?.surahs;
      if (!Array.isArray(surahs) || surahs.length !== 114) {
        throw new Error('Quran API returned incomplete surah data');
      }

      surahs.forEach((surah) => {
        const verses = surah.ayahs?.map((ayah) => ayah.text).filter(Boolean);
        if (verses?.length) fullSurahCache.set(surah.number, verses);
      });
    })
    .catch((error) => {
      fullQuranRequest = null;
      throw error;
    });

  return fullQuranRequest;
}

async function renderReader() {
  const current = getCurrentSurah();
  const requestId = ++readerRequestId;
  document.getElementById('surahTitle').textContent = current.name;
  document.getElementById('versePosition').textContent = `الآية ${state.currentVerseIndex + 1}`;

  const reader = document.getElementById('surahReader');
  reader.innerHTML = '<div class="empty-state">جاري تحميل الآيات كاملة...</div>';

  let verses = current.verses;
  try {
    verses = await loadFullSurahVerses(current.id);
  } catch (error) {
    console.error('Unable to load full Quran verses:', error);
    reader.innerHTML = '<div class="empty-state">تعذر تحميل الآيات كاملة. تحقق من اتصال الإنترنت ثم أعد المحاولة.</div>';
    return;
  }

  if (requestId !== readerRequestId) return;
  state.currentVerseIndex = Math.min(state.currentVerseIndex, verses.length - 1);
  document.getElementById('versePosition').textContent = `الآية ${state.currentVerseIndex + 1}`;
  reader.innerHTML = verses.map((verse, index) => `
    <div class="ayah-card ${index === state.currentVerseIndex ? 'active' : ''}" data-verse-index="${index}">
      <span class="ayah-number">${index + 1}</span>
      <div>${verse}</div>
    </div>
  `).join('');

  reader.querySelectorAll('[data-verse-index]').forEach((card) => {
    card.addEventListener('click', () => {
      state.currentVerseIndex = Number(card.dataset.verseIndex);
      state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
      saveState();
      renderReader();
      renderRecitation();
    });

  });

  document.getElementById('recitationSurah').textContent = current.name;
  document.getElementById('recitationVerse').textContent = 'السورة كاملة';
  document.getElementById('recitationText').textContent = verses[state.currentVerseIndex] || verses[0];
}

function renderBookmarks() {
  const list = document.getElementById('bookmarksList');
  if (!state.bookmarks.length) {
    list.innerHTML = '<div class="empty-state">لا توجد علامات مرجعية</div>';
    return;
  }

  list.innerHTML = state.bookmarks.map((bookmark) => `
    <div class="bookmark-item">
      <div>
        <strong>${surahNames[bookmark.surahId - 1]}</strong>
        <small>الآية ${bookmark.verseIndex + 1}</small>
      </div>
      <button type="button" class="secondary-btn" data-open-bookmark="${bookmark.surahId}|${bookmark.verseIndex}">فتح</button>
    </div>
  `).join('');

  list.querySelectorAll('[data-open-bookmark]').forEach((button) => {
    button.addEventListener('click', () => {
      const [surahId, verseIndex] = button.dataset.openBookmark.split('|');
      state.currentSurahId = Number(surahId);
      state.currentVerseIndex = Number(verseIndex);
      state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
      saveState();
      setView('quran');
      renderAll();
    });
  });
}

function renderFavorites() {
  const list = document.getElementById('favoritesList');
  if (!state.favorites.length) {
    list.innerHTML = '<div class="empty-state">لا توجد آيات مفضلة</div>';
    return;
  }

  list.innerHTML = state.favorites.map((favorite) => `
    <div class="favorite-item">
      <div>
        <strong>${surahNames[favorite.surahId - 1]}</strong>
        <small>${getSurahVerses(favorite.surahId)[favorite.verseIndex]}</small>
      </div>
      <button type="button" class="secondary-btn" data-open-favorite="${favorite.surahId}|${favorite.verseIndex}">فتح</button>
    </div>
  `).join('');

  list.querySelectorAll('[data-open-favorite]').forEach((button) => {
    button.addEventListener('click', () => {
      const [surahId, verseIndex] = button.dataset.openFavorite.split('|');
      state.currentSurahId = Number(surahId);
      state.currentVerseIndex = Number(verseIndex);
      state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
      saveState();
      setView('quran');
      renderAll();
    });
  });
}

function renderSearch() {
  const query = document.getElementById('globalQuranSearch')?.value.trim() || '';
  const list = document.getElementById('searchResults');

  if (!query) {
    list.innerHTML = '<div class="empty-state">اكتب كلمة أو آية للبحث</div>';
    return;
  }

  const matches = [];
  surahNames.forEach((name, surahIndex) => {
    const verses = getSurahVerses(surahIndex + 1);
    verses.forEach((verse, verseIndex) => {
      if (verse.includes(query)) {
        matches.push({ surahId: surahIndex + 1, verseIndex, verse });
      }
    });
  });

  list.innerHTML = matches.length
    ? matches.slice(0, 20).map((match) => `
      <div class="search-result">
        <div>
          <strong>${surahNames[match.surahId - 1]}</strong>
          <small>${match.verse}</small>
        </div>
        <button type="button" class="secondary-btn" data-open-search="${match.surahId}|${match.verseIndex}">فتح</button>
      </div>
    `).join('')
    : '<div class="empty-state">لا توجد نتائج</div>';

  list.querySelectorAll('[data-open-search]').forEach((button) => {
    button.addEventListener('click', () => {
      const [surahId, verseIndex] = button.dataset.openSearch.split('|');
      state.currentSurahId = Number(surahId);
      state.currentVerseIndex = Number(verseIndex);
      state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
      saveState();
      setView('quran');
      renderAll();
    });
  });
}

function renderAdhkar() {
  const list = document.getElementById('adhkarList');
  list.innerHTML = adhkar.map((item) => `
    <div class="adhkar-item">
      <div>
        <strong>${item.title}</strong>
        <small>${item.text}</small>
      </div>
      <button type="button" class="secondary-btn" data-copy-adhkar="${item.text}">نسخ</button>
    </div>
  `).join('');

  list.querySelectorAll('[data-copy-adhkar]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copyAdhkar;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'تم النسخ';
      } catch {
        button.textContent = 'تم';
      }
    });
  });
}

function renderPrayerTimes() {
  const container = document.getElementById('prayerTimes');
  container.innerHTML = prayerTimes.map((item) => `
    <div class="prayer-card">
      <span>${item.name}</span>
      <strong>${item.time}</strong>
    </div>
  `).join('');
}

function renderRecitation() {
  const current = getCurrentSurah();
  const verseText = current.verses[state.currentVerseIndex] || current.verses[0];
  const audio = document.getElementById('quranAudio');
  const audioStatus = document.getElementById('audioStatus');
  document.getElementById('recitationSurah').textContent = current.name;
  document.getElementById('recitationVerse').textContent = 'السورة كاملة';
  document.getElementById('recitationText').textContent = verseText;

  const audioUrl = `${reciterAudioBaseUrl}/${String(current.id).padStart(3, '0')}.mp3`;
  if (audio.dataset.source !== audioUrl) {
    const wasPlaying = !audio.paused;
    audio.pause();
    audio.src = audioUrl;
    audio.dataset.source = audioUrl;
    audio.load();
    audioStatus.textContent = 'تلاوة السورة كاملة جاهزة';
    if (wasPlaying) {
      audio.play().catch(() => {
        audioStatus.textContent = 'اضغط تشغيل لبدء التلاوة';
      });
    }
  }
}

function toggleNightMode() {
  state.nightMode = !state.nightMode;
  document.body.classList.toggle('night-mode', state.nightMode);
  document.getElementById('nightModeBtn').textContent = state.nightMode ? '☀️' : '🌙';
  document.getElementById('nightModeToggle').checked = state.nightMode;
  saveState();
}

function addBookmark() {
  const entry = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
  const exists = state.bookmarks.some((item) => item.surahId === entry.surahId && item.verseIndex === entry.verseIndex);
  if (!exists) {
    state.bookmarks.unshift(entry);
    saveState();
    renderBookmarks();
    renderHome();
  }
}

function toggleFavorite() {
  const entry = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
  const exists = state.favorites.some((item) => item.surahId === entry.surahId && item.verseIndex === entry.verseIndex);
  if (exists) {
    state.favorites = state.favorites.filter((item) => !(item.surahId === entry.surahId && item.verseIndex === entry.verseIndex));
  } else {
    state.favorites.unshift(entry);
  }
  saveState();
  renderFavorites();
  renderHome();
}

function playCurrentSurah() {
  const audio = document.getElementById('quranAudio');
  const audioStatus = document.getElementById('audioStatus');
  if (!state.soundEnabled) {
    audioStatus.textContent = 'فعّل خيار تشغيل الصوت من الإعدادات أولًا';
    return;
  }

  audio.currentTime = 0;
  audio.play().then(() => {
    audioStatus.textContent = 'جاري تشغيل السورة كاملة';
  }).catch(() => {
    audioStatus.textContent = 'تعذر تشغيل التلاوة. تحقق من اتصال الإنترنت';
  });
}

function stopSpeech() {
  const audio = document.getElementById('quranAudio');
  audio.pause();
  document.getElementById('audioStatus').textContent = 'تم إيقاف التلاوة';
}

function renderAll() {
  renderHome();
  renderSurahList();
  renderReader();
  renderBookmarks();
  renderFavorites();
  renderSearch();
  renderAdhkar();
  renderPrayerTimes();
  renderRecitation();
  document.getElementById('fontSizeInput').value = state.fontSize;
  document.getElementById('languageSelect').value = state.language;
  document.getElementById('soundToggle').checked = state.soundEnabled;
  document.getElementById('nightModeToggle').checked = state.nightMode;
  document.body.classList.toggle('night-mode', state.nightMode);
  document.getElementById('nightModeBtn').textContent = state.nightMode ? '☀️' : '🌙';
  document.getElementById('surahReader').style.fontSize = `${state.fontSize}px`;
}

function bindEvents() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });

  document.getElementById('openQuranBtn').addEventListener('click', () => setView('quran'));
  document.getElementById('continueReadBtn').addEventListener('click', () => setView('quran'));

  document.getElementById('surahSearch').addEventListener('input', renderSurahList);
  document.getElementById('globalQuranSearch').addEventListener('input', renderSearch);

  document.getElementById('prevVerseBtn').addEventListener('click', () => {
    state.currentVerseIndex = Math.max(0, state.currentVerseIndex - 1);
    state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
    saveState();
    renderAll();
  });

  document.getElementById('nextVerseBtn').addEventListener('click', () => {
    const total = getSurahVerses(state.currentSurahId).length;
    state.currentVerseIndex = Math.min(total - 1, state.currentVerseIndex + 1);
    state.lastRead = { surahId: state.currentSurahId, verseIndex: state.currentVerseIndex };
    saveState();
    renderAll();
  });


  document.getElementById('bookmarkBtn').addEventListener('click', addBookmark);
  document.getElementById('favoriteBtn').addEventListener('click', toggleFavorite);

  document.getElementById('playRecitationBtn').addEventListener('click', playCurrentSurah);
  document.getElementById('pauseRecitationBtn').addEventListener('click', stopSpeech);
  document.getElementById('quranAudio').addEventListener('play', () => {
    document.getElementById('audioStatus').textContent = 'جاري تشغيل السورة كاملة';
  });
  document.getElementById('quranAudio').addEventListener('loadedmetadata', () => {
    document.getElementById('audioStatus').textContent = 'تلاوة السورة كاملة جاهزة';
  });
  document.getElementById('quranAudio').addEventListener('pause', () => {
    if (!document.getElementById('quranAudio').ended) {
      document.getElementById('audioStatus').textContent = 'التلاوة متوقفة مؤقتًا';
    }
  });
  document.getElementById('quranAudio').addEventListener('ended', () => {
    document.getElementById('audioStatus').textContent = 'انتهت تلاوة السورة';
  });
  document.getElementById('quranAudio').addEventListener('error', () => {
    document.getElementById('audioStatus').textContent = 'تعذر تحميل التلاوة. تحقق من اتصال الإنترنت';
  });

  document.getElementById('tasbihPlusBtn').addEventListener('click', () => {
    state.tasbih += 1;
    saveState();
    renderHome();
  });

  document.getElementById('tasbihResetBtn').addEventListener('click', () => {
    state.tasbih = 0;
    saveState();
    renderHome();
  });

  document.getElementById('nightModeBtn').addEventListener('click', toggleNightMode);
  document.getElementById('nightModeToggle').addEventListener('change', toggleNightMode);

  document.getElementById('fontSizeInput').addEventListener('input', (event) => {
    state.fontSize = Number(event.target.value);
    saveState();
    document.getElementById('surahReader').style.fontSize = `${state.fontSize}px`;
  });

  document.getElementById('languageSelect').addEventListener('change', (event) => {
    state.language = event.target.value;
    saveState();
  });

  document.getElementById('soundToggle').addEventListener('change', (event) => {
    state.soundEnabled = event.target.checked;
    saveState();
    if (!state.soundEnabled) stopSpeech();
  });
}

bindEvents();
renderAll();
setView('home');
loadFullQuran()
  .then(() => renderAll())
  .catch((error) => {
    console.error('Unable to load the complete Quran:', error);
  });
