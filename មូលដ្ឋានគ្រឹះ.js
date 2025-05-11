function renderTable(data, title, containerId) {
  const container = document.getElementById(containerId);
  const section = document.createElement("section");
  section.innerHTML = `<h2>${title}</h2>`;

  const contentBox = document.createElement("div");
  contentBox.classList.add("content-box");

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<span>${item.hanzi}</span><span>${item.khmer}</span>`;
    contentBox.appendChild(div);
  });

  section.appendChild(contentBox);
  container.appendChild(section);
}

const pronunciationExplanation = {
  title: "សំឡេង 'ü' ក្នុងភាសាចិន (Pinyin)",
  explanation: `សំឡេង 'ü' ក្នុងភាសាចិន (Pinyin)",
  explanation: កុំគិតថា "ü" គឺសំឡេងដូចជា "u" ឬសំឡេងដែលមានច្រិតៗគ្នា។ 
ពីព្រោះសញ្ញាស្ពៃៗ (ü) មានភាពខុសគ្នាទៅកាន់សំឡេងណាស់!

ដើម្បីបញ្ចេញសំឡេង "ü" របស់ភាសាចិន សូមចាប់ផ្តើមពីការបញ្ចេញសំឡេង "yi" 
(ឬសំឡេង "ee" ក្នុងភាសាអង់គ្លេស) បន្ទាប់មកបត់មាត់របស់អ្នកឱ្យបង្វិល (rounded)។ 
នោះគឺជាវិធីងាយៗ។ ប៉ុន្តែភាសាគ្រោងនៅតាមទីតាំងនៅក្នុងច្រមុះត្រូវតែតឹងប្រសិនបើអ្នកកំពុងចេញសំឡេង 
"yi" ខណៈដែលមាត់ត្រូវតែបង្វិលតិចតួច។ ប្រសិនបើអ្នកកំពុងមានបញ្ហាក្នុងការបញ្ចេញសំឡេងនេះ 
គឺវាអាចជាហេតុផលពីការចេញសំឡេង "oo" (សំឡេងអង់គ្លេស) ដែលបន្ទាន់លើភាសាខ្មែរប៉ុន្តែត្រូវការពន្លូតទៀងតែងសំឡេង "ee"។

🔹 yu
"yu" គឺជាសំឡេង "ü" ដែល "y" ត្រូវបានបន្ថែម ដើម្បីមិនបញ្ចូលសញ្ញាដុត (ü)។ សំឡេងដូចគ្នា: "nü", "lü"។ 

🔹 yue
"yue" = "ü" + "eh"។ សំឡេងដូចជា "nüe", "lüe"។ មិនដាក់សញ្ញាដុតក្នុងករណីនេះ។

🔹 yuan
"yuan" = "ü" + "en"។ ដូចជា "yan" ប៉ុន្តែជាមួយ "ü"។ 

🔹 yun
"yun" = "ü" + "n"។ បង្ហាញថា "yu" + "n" (ដូចជា "yin")។ 

📝 ពេលណាដែលត្រូវដាក់សញ្ញាដុត?
សញ្ញាដុតត្រូវបានដាក់នៅពេលដែលអក្សរចាប់ផ្តើមអាចភ្ជាប់ជាមួយទាំង -u និង -ü ដូចជា "nu/nü", "lu/lü"។ ដើម្បីជៀសវាងការច្រឡំ ត្រូវដាក់សញ្ញាដុតលើ "ü" នៅពេលចាំបាច់។`
};

function displayPronunciationExplanation() {
  const titleEl = document.getElementById("pronunciationTitle");
  const textEl = document.getElementById("pronunciationText");

  titleEl.textContent = pronunciationExplanation.title;
  textEl.textContent = pronunciationExplanation.explanation;
}

// Data Arrays
const initials = [
  { hanzi: "b→", khmer: "ប៉" }, { hanzi: "p", khmer: "ផ" },
  { hanzi: "m", khmer: "ម៉" }, { hanzi: "f", khmer: "ហ្វ" },
  { hanzi: "d", khmer: "តឺ" }, { hanzi: "t", khmer: "ថឺ" },
  { hanzi: "n", khmer: "ណឺ" }, { hanzi: "l", khmer: "ឡឺ" },
  { hanzi: "g", khmer: "កឺ" }, { hanzi: "k", khmer: "ខឺ" },
  { hanzi: "h", khmer: "ហឺ" }, { hanzi: "j", khmer: "ជី" },
  { hanzi: "q", khmer: "ឈី" }, { hanzi: "x", khmer: "ស៊ី" },
  { hanzi: "zh", khmer: "ជឺ" }, { hanzi: "ch", khmer: "ឈឺ" },
  { hanzi: "sh", khmer: "ហ្សឺ" }, { hanzi: "r", khmer: "យឺ/រឺ" },
  { hanzi: "z", khmer: "ជឺ" }, { hanzi: "c", khmer: "ឈឺ" },
  { hanzi: "s", khmer: "សឺ" }, { hanzi: "y", khmer: "អ៊ី" },
  { hanzi: "w", khmer: "អ៊ូ" }
];

const finals = [
  { hanzi: "a→", khmer: "អា" }, { hanzi: "o", khmer: "អ" },
  { hanzi: "e", khmer: "អឺ" }, { hanzi: "i", khmer: "អ៊ី" },
  { hanzi: "u", khmer: "អ៊ូ" }, { hanzi: "ü", khmer: "អ៊ី៎ (មាត់ស្រួច)" },
  { hanzi: "ai", khmer: "អាយ" }, { hanzi: "ei", khmer: "អី" },
  { hanzi: "ui", khmer: "អួយ" }, { hanzi: "ao", khmer: "អៅ" },
  { hanzi: "ou", khmer: "អូវ" }, { hanzi: "iu", khmer: "អៀវ" },
  { hanzi: "ie", khmer: "អៀ" }, { hanzi: "üe", khmer: "អៀ (មាត់ស្រួច)" },
  { hanzi: "er", khmer: "អ៊ើ" }, { hanzi: "an", khmer: "អាន" },
  { hanzi: "en", khmer: "អិន" }, { hanzi: "in", khmer: "អ៊ិន" },
  { hanzi: "un", khmer: "អ៊ួន" }, { hanzi: "ün", khmer: "អ៊ីន" },
  { hanzi: "ang", khmer: "អាង" }, { hanzi: "eng", khmer: "អ៊ឹង" },
  { hanzi: "ing", khmer: "អ៊ីង" }, { hanzi: "ong", khmer: "អុង" }
];

const zhengtiyin = [
  { hanzi: "zhi", khmer: "ជឺ" }, { hanzi: "chi", khmer: "ឈឺ" },
  { hanzi: "shi", khmer: "ហ្សឺ" }, { hanzi: "ri", khmer: "យឺ/រឺ" },
  { hanzi: "zi", khmer: "ជឺ" }, { hanzi: "ci", khmer: "ឈឺ" },
  { hanzi: "si", khmer: "សឺ" }, { hanzi: "yi", khmer: "អ៊ី" },
  { hanzi: "wu", khmer: "អ៊ូ" }, { hanzi: "yu", khmer: "អ៊ី៎ (មាត់ស្រួច)" },
  { hanzi: "ye", khmer: "យៀ" }, { hanzi: "yue", khmer: "យៀ (មាត់ស្រួច)" },
  { hanzi: "yuan", khmer: "យៀន (មាត់ស្រួច)" }, { hanzi: "yin", khmer: "អីន" },
  { hanzi: "yun", khmer: "អ៊ី៎ន (មាត់ស្រួច)" }, { hanzi: "ying", khmer: "អីង" }
];

const words = [
  { hanzi: "我", khmer: "ខ្ញុំ" },
  { hanzi: "你", khmer: "អ្នក" },
  { hanzi: "他", khmer: "គាត់ (ប្រុស)" },
  { hanzi: "她", khmer: "គាត់ (ស្រី)" },
  { hanzi: "我们", khmer: "ពួកយើង" },
  { hanzi: "你们", khmer: "ពួកអ្នក" },
  { hanzi: "他们", khmer: "ពួកគាត់(មនុស្សប្រុស)" },
  { hanzi: "她们", khmer: "ពួកគាត់(មនុស្សស្រី)" },
  { hanzi: "它们", khmer: "ពួកវា(វត្ថុឬក៍សត្វ)" }
];
const numbers = [
  { "hanzi": "零", "pinyin": "líng", "khmer": "០" },
  { hanzi: "一", pinyin: "yī", khmer: "១" },
  { hanzi: "二", pinyin: "èr", khmer: "២" },
  { hanzi: "三", pinyin: "sān", khmer: "៣" },
  { hanzi: "四", pinyin: "sì", khmer: "៤" },
  { hanzi: "五", pinyin: "wǔ", khmer: "៥" },
  { hanzi: "六", pinyin: "liù", khmer: "៦" },
  { hanzi: "七", pinyin: "qī", khmer: "៧" },
  { hanzi: "八", pinyin: "bā", khmer: "៨" },
  { hanzi: "九", pinyin: "jiǔ", khmer: "៩" },
  { hanzi: "十", pinyin: "shí", khmer: "១០" },
  { hanzi: "十一", pinyin: "shí yī", khmer: "១១" },
  { hanzi: "十二", pinyin: "shí èr", khmer: "១២" },
  { hanzi: "十三", pinyin: "shí sān", khmer: "១៣" },
  { hanzi: "十四", pinyin: "shí sì", khmer: "១៤" },
  { hanzi: "十五", pinyin: "shí wǔ", khmer: "១៥" },
  { hanzi: "十六", pinyin: "shí liù", khmer: "១៦" },
  { hanzi: "十七", pinyin: "shí qī", khmer: "១៧" },
  { hanzi: "十八", pinyin: "shí bā", khmer: "១៨" },
  { hanzi: "十九", pinyin: "shí jiǔ", khmer: "១៩" },
  { hanzi: "二十", pinyin: "èr shí", khmer: "២០" },
  { hanzi: "二十一", pinyin: "èr shí yī", khmer: "២១" },
  { hanzi: "三十", pinyin: "sān shí", khmer: "៣០" },
  { hanzi: "四十", pinyin: "sì shí", khmer: "៤០" },
  { hanzi: "五十", pinyin: "wǔ shí", khmer: "៥០" },
  { hanzi: "六十", pinyin: "liù shí", khmer: "៦០" },
  { hanzi: "七十", pinyin: "qī shí", khmer: "៧០" },
  { hanzi: "八十", pinyin: "bā shí", khmer: "៨០" },
  { hanzi: "九十", pinyin: "jiǔ shí", khmer: "៩០" },
  { hanzi: "一百", pinyin: "yī bǎi", khmer: "១០០" }
];

const audioCache = {}; // memory cache

async function speakKhmer(text) {
  // If cached, use it
  if (audioCache[text]) {
    const audio = new Audio(audioCache[text]);
    audio.play();
    return;
  }

  // Call backend API to synthesize audio
  const response = await fetch("YOUR_BACKEND_API", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: "km-KH", name: "km-KH-Wavenet-A" },
      audioConfig: { audioEncoding: "MP3" }
    }),
  });

  const audioData = await response.json();
  const audioSrc = "data:audio/mp3;base64," + audioData.audioContent;

  // Cache the result in memory
  audioCache[text] = audioSrc;

  // Play the audio
  const audio = new Audio(audioSrc);
  audio.play();
}



function renderTable(data, title, containerId) {
  const container = document.getElementById(containerId);
  const section = document.createElement("section");
  section.innerHTML = `<h2>${title}</h2>`;

  const contentBox = document.createElement("div");
  contentBox.classList.add("content-box");

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <span>${item.hanzi}</span>
      ${item.pinyin ? `<span>${item.pinyin}</span>` : ""}
      <span>${item.khmer}</span>
    `;
    contentBox.appendChild(div);
  });

  section.appendChild(contentBox);
  container.appendChild(section);
}
// Render content on load
renderTable(initials, "声母（23个）- ព្យញ្ជនៈ", "initials");
renderTable(finals, "韵母（24个）- ស្រៈនិងស្រៈផ្សំ", "finals");
renderTable(zhengtiyin, "整体音节（16个）- ព្យញ្ជនៈពេញតួ", "zhengtiyin");
renderTable(words, "ពាក្យចិន និងអត្ថន័យខ្មែរ", "wordBox");
renderTable(numbers, "រៀនលេខចិន", "numbers");
displayPronunciationExplanation();
