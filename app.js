const STORAGE_KEY = "jp-anime-study-v1";

const segments = [
  { label: "複習", minutes: 5, detail: "單字與短句" },
  { label: "文法", minutes: 7, detail: "一個 N5/N4 句型" },
  { label: "聽辨", minutes: 5, detail: "記下聽到的詞" },
  { label: "輸出", minutes: 3, detail: "自己造一句" }
];

const listeningClips = [
  { id: "13669575", text: "お金はどこ？", hint: "短問句：在問某個東西在哪裡" },
  { id: "13563750", text: "十分です。", hint: "短句：表示已經足夠" },
  { id: "13549381", text: "お疲れ様。", hint: "常見寒暄：對辛苦的人說" },
  { id: "13536224", text: "行くか？", hint: "短問句：和要不要去有關" },
  { id: "13563757", text: "立ち上がれ！", hint: "命令句：和站起來有關" },
  { id: "13563769", text: "それじゃ。", hint: "口語句：轉折或道別時常聽到" },
  { id: "13563767", text: "お互いに。", hint: "短語：彼此、互相" },
  { id: "13563719", text: "馬鹿馬鹿しい。", hint: "形容詞：覺得荒謬、無聊" },
  { id: "13563746", text: "何処にも。", hint: "短語：和任何地方都沒有關" },
  { id: "13552533", text: "絶賛放送中！", hint: "宣傳句：節目正在播出" },
  { id: "13611158", text: "翻訳された!", hint: "被動句：和翻譯完成有關" },
  { id: "13563775", text: "まことに。", hint: "副詞：正式語氣，表示真的、非常" }
].map((clip) => ({
  ...clip,
  audio: `https://audio.tatoeba.org/sentences/jpn/${clip.id}.mp3`,
  source: `https://tatoeba.org/en/sentences/show/${clip.id}`
}));

const romajiKanaMap = {
  kya: "きゃ", kyu: "きゅ", kyo: "きょ",
  gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
  sha: "しゃ", shu: "しゅ", sho: "しょ",
  sya: "しゃ", syu: "しゅ", syo: "しょ",
  ja: "じゃ", ju: "じゅ", jo: "じょ",
  jya: "じゃ", jyu: "じゅ", jyo: "じょ",
  cha: "ちゃ", chu: "ちゅ", cho: "ちょ",
  tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
  nya: "にゃ", nyu: "にゅ", nyo: "にょ",
  hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
  bya: "びゃ", byu: "びゅ", byo: "びょ",
  pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
  mya: "みゃ", myu: "みゅ", myo: "みょ",
  rya: "りゃ", ryu: "りゅ", ryo: "りょ",
  fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
  va: "ゔぁ", vi: "ゔぃ", vu: "ゔ", ve: "ゔぇ", vo: "ゔぉ",
  she: "しぇ", che: "ちぇ", je: "じぇ",
  ti: "てぃ", di: "でぃ", tu: "つ", du: "づ",
  tsu: "つ", shi: "し", chi: "ち", fu: "ふ",
  ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
  ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
  sa: "さ", si: "し", su: "す", se: "せ", so: "そ",
  za: "ざ", zi: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
  ta: "た", te: "て", to: "と",
  da: "だ", de: "で", do: "ど",
  na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
  ha: "は", hi: "ひ", hu: "ふ", he: "へ", ho: "ほ",
  ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
  pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
  ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
  ya: "や", yu: "ゆ", yo: "よ",
  ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
  wa: "わ", wo: "を",
  xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ",
  la: "ぁ", li: "ぃ", lu: "ぅ", le: "ぇ", lo: "ぉ",
  xya: "ゃ", xyu: "ゅ", xyo: "ょ", xtsu: "っ", ltsu: "っ",
  a: "あ", i: "い", u: "う", e: "え", o: "お"
};

const lessons = [
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "A は B です",
    summary: "用最常出現在台詞裡的禮貌句，建立第一批可聽懂、可讀懂的句子。",
    grammar: "A は B です",
    level: "N5",
    note: "用來說明「A 是 B」。動漫和日劇裡常見於自我介紹、確認身分和描述物品。",
    line: "これは私の本です。",
    meaning: "這是我的書。",
    examples: [
      ["私は学生です。", "我是學生。"],
      ["それは大切なものです。", "那是重要的東西。"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "これ・それ・あれ",
    summary: "分清楚眼前、對方旁邊、遠方的東西，字幕裡非常高頻。",
    grammar: "これ / それ / あれ",
    level: "N5",
    note: "これ是這個，それ是那個，あれ是那邊那個。先用物品練習，不急著擴充太多變化。",
    line: "それは何ですか。",
    meaning: "那是什麼？",
    examples: [
      ["これは鍵です。", "這是鑰匙。"],
      ["あれは駅です。", "那邊是車站。"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "の：所屬與說明",
    summary: "先掌握「我的、你的、日文的」這種字幕常見結構。",
    grammar: "A の B",
    level: "N5",
    note: "の可以表示所屬，也能把前面的名詞變成說明。這是看字幕時最容易一直遇到的結構。",
    line: "これはあなたの傘ですか。",
    meaning: "這是你的傘嗎？",
    examples: [
      ["日本語の本です。", "是日文書。"],
      ["友だちの家に行きます。", "去朋友家。"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "か：疑問句",
    summary: "聽到句尾的か，先判斷對方是在確認還是在問問題。",
    grammar: "句子 + か",
    level: "N5",
    note: "禮貌疑問句通常在句尾加か。口語裡也常用語調表示疑問，先從標準句開始。",
    line: "大丈夫ですか。",
    meaning: "你還好嗎？",
    examples: [
      ["これは駅ですか。", "這是車站嗎？"],
      ["先生ですか。", "是老師嗎？"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "じゃありません",
    summary: "學會否定，才能聽懂角色澄清、反駁和否認。",
    grammar: "A は B じゃありません",
    level: "N5",
    note: "這是です的否定形式。動漫口語中也會聽到じゃない，先認得兩者關係。",
    line: "私は犯人じゃありません。",
    meaning: "我不是犯人。",
    examples: [
      ["これは私のかばんじゃありません。", "這不是我的包包。"],
      ["今日は休みじゃありません。", "今天不是休假。"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "も：也",
    summary: "用も連接相同狀態，常出現在同伴對話和附和句。",
    grammar: "A も B です",
    level: "N5",
    note: "も表示「也」。先用簡短名詞句練習，讓句型變成直覺。",
    line: "私も行きます。",
    meaning: "我也去。",
    examples: [
      ["彼も学生です。", "他也是學生。"],
      ["これも大切です。", "這也很重要。"]
    ]
  },
  {
    week: 1,
    theme: "です・ます、これ/それ/あれ、名詞句",
    title: "第 1 週小測",
    summary: "用 15 分鐘確認自己能說、能聽、能解釋。",
    grammar: "名詞句複習",
    level: "Review",
    note: "今天不學新句型。用本週句子做聽辨，並自己造 10 句。",
    line: "これは私の大切なものです。",
    meaning: "這是我重要的東西。",
    examples: [
      ["不用查資料說出 10 個句子。", "以です、の、か、も為主。"],
      ["聽出 5 個熟悉單字。", "從本週台詞或片段挑。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "ます形：禮貌動作",
    summary: "先用禮貌動詞聽懂角色要做什麼。",
    grammar: "動詞ます形",
    level: "N5",
    note: "ます形是入門核心。先把行きます、見ます、聞きます、食べます變熟。",
    line: "今から行きます。",
    meaning: "我現在要去。",
    examples: [
      ["アニメを見ます。", "看動漫。"],
      ["音楽を聞きます。", "聽音樂。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "を：動作對象",
    summary: "抓出角色做了什麼，以及動作作用在哪個東西上。",
    grammar: "名詞 を 動詞",
    level: "N5",
    note: "を標記動作的對象。看字幕時先找を前面的名詞和後面的動詞。",
    line: "映画を見ます。",
    meaning: "看電影。",
    examples: [
      ["水を飲みます。", "喝水。"],
      ["宿題をします。", "寫作業。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "に：時間點",
    summary: "聽懂幾點、哪一天、什麼時候發生。",
    grammar: "時間 に 動詞",
    level: "N5",
    note: "に可以標記明確時間點。今日は、明日は這類相對時間通常不加に。",
    line: "七時に会います。",
    meaning: "七點見面。",
    examples: [
      ["月曜日に行きます。", "星期一去。"],
      ["三時に始まります。", "三點開始。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "で：地點與工具",
    summary: "知道角色在哪裡做事，或用什麼方式做。",
    grammar: "場所/工具 で 動詞",
    level: "N5",
    note: "で可標記動作發生地點，也可表示工具或方式。先用場所練熟。",
    line: "駅で待ちます。",
    meaning: "在車站等。",
    examples: [
      ["家で勉強します。", "在家讀書。"],
      ["電車で行きます。", "搭電車去。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "ません：不做",
    summary: "聽懂拒絕、否定習慣和不會發生的動作。",
    grammar: "動詞ません",
    level: "N5",
    note: "ません是ます形的否定。口語常見ませんか用來邀請或詢問。",
    line: "今日は行きません。",
    meaning: "今天不去。",
    examples: [
      ["肉を食べません。", "不吃肉。"],
      ["テレビを見ません。", "不看電視。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "ました：過去",
    summary: "判斷台詞是在說現在、未來，還是已經發生。",
    grammar: "動詞ました",
    level: "N5",
    note: "ました是ます形的過去式。先和昨天、剛剛、已經這類語感一起練。",
    line: "昨日、見ました。",
    meaning: "昨天看了。",
    examples: [
      ["朝ご飯を食べました。", "吃了早餐。"],
      ["友だちに会いました。", "見了朋友。"]
    ]
  },
  {
    week: 2,
    theme: "動詞ます形、時間、日常動作",
    title: "第 2 週小測",
    summary: "用日常動作整理本週學過的動詞句。",
    grammar: "動詞句複習",
    level: "Review",
    note: "今天把行きます、見ます、聞きます、食べます、します各造兩句。",
    line: "家で日本語を勉強しました。",
    meaning: "我在家學了日文。",
    examples: [
      ["不用查資料說出 10 個句子。", "包含現在、否定、過去。"],
      ["聽出 5 個動詞。", "從片段裡抓ます形或過去式。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "い形容詞",
    summary: "描述感覺、狀態和反應，字幕裡非常常見。",
    grammar: "い形容詞 + です",
    level: "N5",
    note: "高い、かわいい、面白い、怖い都屬於い形容詞。先練肯定句。",
    line: "この話は面白いです。",
    meaning: "這個故事很有趣。",
    examples: [
      ["今日は寒いです。", "今天很冷。"],
      ["あの店は高いです。", "那間店很貴。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "な形容詞",
    summary: "掌握安靜、重要、喜歡這些常見描述。",
    grammar: "な形容詞 + です",
    level: "N5",
    note: "静か、便利、元気、大切屬於な形容詞。接名詞時要加な。",
    line: "大切な友だちです。",
    meaning: "是重要的朋友。",
    examples: [
      ["この町は静かです。", "這個城鎮很安靜。"],
      ["元気な人です。", "是有精神的人。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "好き・嫌い",
    summary: "聽懂角色表達喜好，是看動漫日劇很快有回報的句型。",
    grammar: "A が好きです",
    level: "N5",
    note: "日文用が標記喜歡的對象。先記整句，不必先糾結中文直譯。",
    line: "私はアニメが好きです。",
    meaning: "我喜歡動漫。",
    examples: [
      ["日本語が好きです。", "喜歡日文。"],
      ["辛い食べ物が嫌いです。", "討厭辣的食物。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "たい：想做",
    summary: "聽懂角色的願望、動機和下一步行動。",
    grammar: "動詞ます去ます + たい",
    level: "N5",
    note: "見ます變見たい、行きます變行きたい。常和もっと、今すぐ一起出現。",
    line: "もう一度見たいです。",
    meaning: "想再看一次。",
    examples: [
      ["日本へ行きたいです。", "想去日本。"],
      ["水を飲みたいです。", "想喝水。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "ください：請給我/請做",
    summary: "旅遊、店家、角色請求都會大量出現。",
    grammar: "名詞/て形 + ください",
    level: "N5",
    note: "名詞ください是請給我；動詞て形ください是請做。今天先認得用法。",
    line: "少し待ってください。",
    meaning: "請等一下。",
    examples: [
      ["水をください。", "請給我水。"],
      ["見てください。", "請看。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "とても・少し・あまり",
    summary: "用程度副詞聽懂情緒強弱，而不是只抓大概意思。",
    grammar: "程度副詞 + 形容詞",
    level: "N5",
    note: "とても是很，少し是一點，あまり通常搭否定表示不太。",
    line: "今日はあまり元気じゃありません。",
    meaning: "今天不太有精神。",
    examples: [
      ["とても楽しいです。", "非常開心。"],
      ["少し怖いです。", "有點可怕。"]
    ]
  },
  {
    week: 3,
    theme: "形容詞、好き/嫌い、たい、ください",
    title: "第 3 週小測",
    summary: "把喜好、感覺和想做的事變成可說出口的句子。",
    grammar: "形容詞與願望複習",
    level: "Review",
    note: "今天自我介紹自己的喜好、討厭、想做的事，各說 3 句。",
    line: "日本語が好きです。もっと話したいです。",
    meaning: "我喜歡日文。想說更多。",
    examples: [
      ["不用查資料說出 10 個句子。", "包含好き、たい、ください。"],
      ["聽出 5 個描述詞。", "特別留意形容詞和程度副詞。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "て形入門",
    summary: "て形是連接動作、請求、正在做的入口。",
    grammar: "動詞て形",
    level: "N5/N4",
    note: "先不用背完整規則。從見て、聞いて、行って、待って、食べて開始。",
    line: "ちょっと待って。",
    meaning: "等一下。",
    examples: [
      ["見てください。", "請看。"],
      ["聞いてください。", "請聽。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "ています：正在做",
    summary: "聽懂角色此刻正在做什麼，或某種持續狀態。",
    grammar: "て形 + います",
    level: "N5/N4",
    note: "しています是正在做或處於某狀態。看字幕時先辨認動詞て形。",
    line: "今、勉強しています。",
    meaning: "現在正在讀書。",
    examples: [
      ["友だちを待っています。", "正在等朋友。"],
      ["雨が降っています。", "正在下雨。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "てもいいですか",
    summary: "學會請求允許，角色互動裡很實用。",
    grammar: "て形 + もいいですか",
    level: "N5/N4",
    note: "表示「可以做某事嗎」。先用簡短動作練習。",
    line: "ここに座ってもいいですか。",
    meaning: "可以坐這裡嗎？",
    examples: [
      ["写真を撮ってもいいですか。", "可以拍照嗎？"],
      ["入ってもいいですか。", "可以進去嗎？"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "てはいけません",
    summary: "聽懂禁止、規則和角色警告。",
    grammar: "て形 + はいけません",
    level: "N5/N4",
    note: "表示不可以做某事。口語裡也可能聽到だめ。",
    line: "ここで走ってはいけません。",
    meaning: "不可以在這裡跑。",
    examples: [
      ["見てはいけません。", "不可以看。"],
      ["忘れてはいけません。", "不可以忘記。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "て、て：連接動作",
    summary: "把連續動作串起來，開始讀懂較長字幕。",
    grammar: "て形連接",
    level: "N5/N4",
    note: "用て形把動作照順序接起來。先用兩個動作，不追求長句。",
    line: "家に帰って、宿題をします。",
    meaning: "回家後寫作業。",
    examples: [
      ["朝ご飯を食べて、学校へ行きます。", "吃早餐後去學校。"],
      ["服を着て、出かけます。", "穿衣服後出門。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "短片段整合",
    summary: "用一段 60 秒台詞做總複習，抓名詞句、動詞句、請求句。",
    grammar: "句型整合",
    level: "Review",
    note: "選一段喜歡的場景，只練 3 句。每句標出文法、單字、語氣。",
    line: "これを見てください。とても大切です。",
    meaning: "請看這個。這很重要。",
    examples: [
      ["標出一個です句。", "確認名詞或形容詞描述。"],
      ["標出一個て形句。", "確認請求或連接。"]
    ]
  },
  {
    week: 4,
    theme: "て形入門、正在做、請求、連接句子",
    title: "第 4 週總檢查",
    summary: "確認能看懂高頻句型，並自己造 20-30 句生活短句。",
    grammar: "四週總複習",
    level: "Review",
    note: "今天不追求新內容。整理最常用的 20-30 句，之後用它們看字幕。",
    line: "毎日少し日本語を聞いています。",
    meaning: "我每天都聽一點日文。",
    examples: [
      ["看字幕時認出常見句型。", "です、ます、たい、ください、ています。"],
      ["自己造 20-30 句。", "可拆成名詞句、動詞句、請求句。"]
    ]
  }
];

const state = loadState();
let selectedDay = Math.min(state.selectedDay ?? state.completedDays, lessons.length - 1);
let currentSegment = 0;
let remainingSeconds = 20 * 60;
let timerId = null;
let availableVoices = [];

if (state.currentClipIndex < 0 || state.currentClipIndex >= listeningClips.length) {
  state.currentClipIndex = 0;
}

const dom = {
  todayLabel: document.querySelector("#todayLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  weekTag: document.querySelector("#weekTag"),
  todayTitle: document.querySelector("#today-title"),
  lessonSummary: document.querySelector("#lessonSummary"),
  featuredLine: document.querySelector("#featuredLine"),
  featuredMeaning: document.querySelector("#featuredMeaning"),
  completeDayButton: document.querySelector("#completeDayButton"),
  playFeaturedButton: document.querySelector("#playFeaturedButton"),
  resetButton: document.querySelector("#resetButton"),
  timerReadout: document.querySelector("#timerReadout"),
  segmentList: document.querySelector("#segmentList"),
  startTimerButton: document.querySelector("#startTimerButton"),
  nextSegmentButton: document.querySelector("#nextSegmentButton"),
  resetTimerButton: document.querySelector("#resetTimerButton"),
  grammarTitle: document.querySelector("#grammarTitle"),
  grammarLevel: document.querySelector("#grammarLevel"),
  grammarNote: document.querySelector("#grammarNote"),
  exampleStack: document.querySelector("#exampleStack"),
  grammarPracticeInput: document.querySelector("#grammarPracticeInput"),
  playGrammarPracticeButton: document.querySelector("#playGrammarPracticeButton"),
  copyExampleButton: document.querySelector("#copyExampleButton"),
  sourceInput: document.querySelector("#sourceInput"),
  shadowInput: document.querySelector("#shadowInput"),
  dailySentenceInput: document.querySelector("#dailySentenceInput"),
  clipHint: document.querySelector("#clipHint"),
  clipAnswer: document.querySelector("#clipAnswer"),
  clipAudio: document.querySelector("#clipAudio"),
  randomClipButton: document.querySelector("#randomClipButton"),
  revealClipButton: document.querySelector("#revealClipButton"),
  clipSource: document.querySelector("#clipSource"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
  playShadowButton: document.querySelector("#playShadowButton"),
  playSentenceButton: document.querySelector("#playSentenceButton"),
  voiceStatus: document.querySelector("#voiceStatus"),
  voiceSelect: document.querySelector("#voiceSelect"),
  rateControl: document.querySelector("#rateControl"),
  rateLabel: document.querySelector("#rateLabel"),
  stopVoiceButton: document.querySelector("#stopVoiceButton"),
  romajiInput: document.querySelector("#romajiInput"),
  kanaPreview: document.querySelector("#kanaPreview"),
  copyKanaButton: document.querySelector("#copyKanaButton"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  weekBoard: document.querySelector("#weekBoard"),
  weeklyChecklist: document.querySelector("#weeklyChecklist"),
  notesList: document.querySelector("#notesList")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return {
        completedDays: Number(saved.completedDays) || 0,
        selectedDay: Number(saved.selectedDay) || 0,
        streak: Number(saved.streak) || 0,
        lastCompletedDate: saved.lastCompletedDate || "",
        notes: Array.isArray(saved.notes) ? saved.notes : [],
        checks: saved.checks && typeof saved.checks === "object" ? saved.checks : {},
        drafts: saved.drafts && typeof saved.drafts === "object" ? saved.drafts : {},
        currentClipIndex: Number.isInteger(saved.currentClipIndex) ? saved.currentClipIndex : 0
      };
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    completedDays: 0,
    selectedDay: 0,
    streak: 0,
    lastCompletedDate: "",
    notes: [],
    checks: {},
    drafts: {},
    currentClipIndex: 0
  };
}

function saveState() {
  state.selectedDay = selectedDay;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function isYesterday(dateText) {
  if (!dateText) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().slice(0, 10) === dateText;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderLesson() {
  const lesson = lessons[selectedDay];
  dom.todayLabel.textContent = `第 ${selectedDay + 1} 天`;
  dom.streakLabel.textContent = `連續 ${state.streak} 天`;
  dom.weekTag.textContent = `Week ${lesson.week}`;
  dom.todayTitle.textContent = lesson.title;
  dom.lessonSummary.textContent = lesson.summary;
  dom.featuredLine.textContent = lesson.line;
  dom.featuredMeaning.textContent = lesson.meaning;
  dom.grammarTitle.textContent = lesson.grammar;
  dom.grammarLevel.textContent = lesson.level;
  dom.grammarNote.textContent = lesson.note;
  dom.exampleStack.replaceChildren(
    ...lesson.examples.map(([jp, zh]) => {
      const card = document.createElement("div");
      card.className = "example-card";
      card.innerHTML = `
        <div>
          <strong>${jp}</strong>
          <span>${zh}</span>
        </div>
        <button type="button" aria-label="播放例句：${jp}">▶</button>
      `;
      card.querySelector("button").addEventListener("click", () => speakJapanese(jp));
      return card;
    })
  );
  loadDrafts();
  renderProgress();
}

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function getJapaneseVoices() {
  return availableVoices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("ja"));
}

function populateVoices() {
  if (!supportsSpeech()) {
    dom.voiceStatus.textContent = "這個瀏覽器不支援語音朗讀。";
    dom.voiceSelect.innerHTML = "<option>不支援語音</option>";
    dom.voiceSelect.disabled = true;
    return;
  }

  availableVoices = window.speechSynthesis.getVoices();
  const japaneseVoices = getJapaneseVoices();
  const usableVoices = japaneseVoices.length ? japaneseVoices : availableVoices;
  dom.voiceSelect.replaceChildren(
    ...usableVoices.map((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      return option;
    })
  );

  dom.voiceSelect.disabled = usableVoices.length === 0;
  if (!usableVoices.length) {
    dom.voiceStatus.textContent = "目前還沒有可用語音。請確認系統或瀏覽器已安裝語音。";
  } else if (!japaneseVoices.length) {
    dom.voiceStatus.textContent = "沒有偵測到日文語音，會先用目前可用的語音朗讀。";
  } else {
    dom.voiceStatus.textContent = "已偵測到日文語音，可以播放台詞、例句和你的練習句。";
  }
}

function selectedVoice() {
  const name = dom.voiceSelect.value;
  return availableVoices.find((voice) => voice.name === name) || getJapaneseVoices()[0] || availableVoices[0] || null;
}

function speakJapanese(text) {
  const cleanText = text.trim();
  if (!cleanText || !supportsSpeech()) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "ja-JP";
  utterance.rate = Number(dom.rateControl.value) || 0.85;
  utterance.pitch = 1;
  const voice = selectedVoice();
  if (voice) utterance.voice = voice;
  utterance.onerror = () => {
    dom.voiceStatus.textContent = "語音播放失敗。請確認瀏覽器允許播放音訊，或換一個聲音。";
  };
  utterance.onstart = () => {
    dom.voiceStatus.textContent = "正在播放日文語音。";
  };
  utterance.onend = () => {
    dom.voiceStatus.textContent = "播放完成。";
  };
  window.speechSynthesis.speak(utterance);
}

function speakTextarea(field, fallbackText) {
  const text = field.value.trim() || fallbackText;
  speakJapanese(text);
}

function romajiToHiragana(input) {
  const text = input.toLowerCase();
  let output = "";
  let index = 0;
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  while (index < text.length) {
    const current = text[index];
    const next = text[index + 1] || "";

    if (current === " ") {
      output += " ";
      index += 1;
      continue;
    }

    if (current === "-" || current === "ー") {
      output += "ー";
      index += 1;
      continue;
    }

    if (current === "n") {
      if (next === "n") {
        output += "ん";
        index += 1;
        continue;
      }
      if (!next || (!vowels.includes(next) && next !== "y")) {
        output += "ん";
        index += 1;
        continue;
      }
    }

    if (current === next && consonants.includes(current) && current !== "n") {
      output += "っ";
      index += 1;
      continue;
    }

    let matched = false;
    for (let length = 4; length > 0; length -= 1) {
      const chunk = text.slice(index, index + length);
      if (romajiKanaMap[chunk]) {
        output += romajiKanaMap[chunk];
        index += length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      output += input[index];
      index += 1;
    }
  }

  return output;
}

function updateKanaPreview() {
  const value = dom.romajiInput.value.trim();
  const preview = value ? romajiToHiragana(value) : "わたし は がくせい です";
  dom.kanaPreview.textContent = preview;
}

function currentListeningClip() {
  return listeningClips[state.currentClipIndex] || listeningClips[0];
}

function renderListeningClip() {
  const clip = currentListeningClip();
  dom.clipHint.textContent = clip.hint;
  dom.clipAnswer.textContent = clip.text;
  dom.clipAnswer.hidden = true;
  dom.revealClipButton.textContent = "顯示答案";
  dom.clipAudio.src = clip.audio;
  dom.sourceInput.value = `Tatoeba #${clip.id}`;
  dom.clipSource.innerHTML = `來源：<a href="${clip.source}" target="_blank" rel="noreferrer">Tatoeba #${clip.id}</a>`;
}

function chooseRandomClip() {
  if (listeningClips.length <= 1) return;
  let nextIndex = state.currentClipIndex;
  while (nextIndex === state.currentClipIndex) {
    nextIndex = Math.floor(Math.random() * listeningClips.length);
  }
  state.currentClipIndex = nextIndex;
  dom.shadowInput.value = "";
  saveState();
  renderListeningClip();
}

async function playListeningClip() {
  const clip = currentListeningClip();
  dom.clipAudio.src = clip.audio;
  dom.clipAudio.currentTime = 0;
  try {
    await dom.clipAudio.play();
    dom.clipSource.innerHTML = `正在播放：<a href="${clip.source}" target="_blank" rel="noreferrer">Tatoeba #${clip.id}</a>`;
  } catch {
    dom.clipSource.innerHTML = `播放失敗。可開啟來源確認：<a href="${clip.source}" target="_blank" rel="noreferrer">Tatoeba #${clip.id}</a>`;
  }
}

function revealListeningAnswer() {
  dom.clipAnswer.hidden = !dom.clipAnswer.hidden;
  dom.revealClipButton.textContent = dom.clipAnswer.hidden ? "顯示答案" : "隱藏答案";
}

function renderSegments() {
  dom.segmentList.replaceChildren(
    ...segments.map((segment, index) => {
      const item = document.createElement("div");
      item.className = "segment";
      if (index === currentSegment) item.classList.add("active");
      if (index < currentSegment) item.classList.add("done");
      item.innerHTML = `
        <strong>${segment.minutes}</strong>
        <div>
          <p>${segment.label}</p>
          <small>${segment.detail}</small>
        </div>
      `;
      return item;
    })
  );
}

function renderProgress() {
  const done = Math.min(state.completedDays, lessons.length);
  dom.progressText.textContent = `${done} / ${lessons.length}`;
  dom.progressBar.style.width = `${(done / lessons.length) * 100}%`;
  dom.completeDayButton.textContent = selectedDay < state.completedDays ? "已完成" : "完成今天";
}

function renderBoard() {
  const cards = [1, 2, 3, 4].map((week) => {
    const weekLessons = lessons
      .map((lesson, index) => ({ ...lesson, index }))
      .filter((lesson) => lesson.week === week);
    const card = document.createElement("article");
    card.className = "week-card";
    card.innerHTML = `
      <header>
        <p>Week ${week}</p>
        <h3>${weekLessons[0].theme}</h3>
      </header>
    `;

    const list = document.createElement("div");
    list.className = "day-list";
    weekLessons.forEach((lesson) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "day-item";
      if (lesson.index === selectedDay) button.classList.add("current");
      if (lesson.index < state.completedDays) button.classList.add("done");
      button.innerHTML = `
        <span class="day-dot">${lesson.index + 1}</span>
        <span>${lesson.title}</span>
      `;
      button.addEventListener("click", () => {
        selectedDay = lesson.index;
        saveDrafts();
        saveState();
        renderAll();
      });
      list.append(button);
    });

    card.append(list);
    return card;
  });

  dom.weekBoard.replaceChildren(...cards);
}

function renderChecklist() {
  const items = [
    "不用查資料說出本週 10 個句子",
    "能聽出片段中 5 個熟悉單字",
    "能解釋本週 3 個文法的意思"
  ];
  const week = lessons[selectedDay].week;
  dom.weeklyChecklist.replaceChildren(
    ...items.map((text, index) => {
      const id = `week-${week}-check-${index}`;
      const label = document.createElement("label");
      label.className = "check-item";
      label.innerHTML = `<input type="checkbox" ${state.checks[id] ? "checked" : ""}><span>${text}</span>`;
      label.querySelector("input").addEventListener("change", (event) => {
        state.checks[id] = event.target.checked;
        saveState();
      });
      return label;
    })
  );
}

function renderNotes() {
  if (!state.notes.length) {
    dom.notesList.innerHTML = `<p class="empty-notes">還沒有筆記。今天聽辨 5 個單字或短句，再寫下一句你想真正用得上的日文。</p>`;
    return;
  }

  dom.notesList.replaceChildren(
    ...state.notes.slice(0, 8).map((note) => {
      const card = document.createElement("div");
      card.className = "note-card";
      card.innerHTML = `<time>${note.date}・第 ${note.day + 1} 天</time><p></p>`;
      card.querySelector("p").textContent = note.text;
      return card;
    })
  );
}

function saveDrafts() {
  state.drafts[selectedDay] = {
    source: dom.sourceInput.value,
    shadow: dom.shadowInput.value,
    sentence: dom.dailySentenceInput.value,
    grammarPractice: dom.grammarPracticeInput.value,
    romaji: dom.romajiInput.value
  };
  saveState();
}

function loadDrafts() {
  const draft = state.drafts[selectedDay] || {};
  dom.sourceInput.value = draft.source || "";
  dom.shadowInput.value = draft.shadow || "";
  dom.dailySentenceInput.value = draft.sentence || "";
  dom.grammarPracticeInput.value = draft.grammarPractice || "";
  dom.romajiInput.value = draft.romaji || "";
  updateKanaPreview();
}

function renderAll() {
  renderLesson();
  renderListeningClip();
  renderSegments();
  renderBoard();
  renderChecklist();
  renderNotes();
}

function startTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    dom.startTimerButton.textContent = "繼續";
    return;
  }

  dom.startTimerButton.textContent = "暫停";
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      advanceSegment();
    }
    dom.timerReadout.textContent = formatTime(remainingSeconds);
  }, 1000);
}

function advanceSegment() {
  if (currentSegment < segments.length - 1) {
    currentSegment += 1;
    const completedSeconds = segments.slice(0, currentSegment).reduce((sum, segment) => sum + segment.minutes * 60, 0);
    remainingSeconds = 20 * 60 - completedSeconds;
  } else {
    remainingSeconds = 0;
    clearInterval(timerId);
    timerId = null;
    dom.startTimerButton.textContent = "完成";
  }
  dom.timerReadout.textContent = formatTime(remainingSeconds);
  renderSegments();
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  currentSegment = 0;
  remainingSeconds = 20 * 60;
  dom.timerReadout.textContent = formatTime(remainingSeconds);
  dom.startTimerButton.textContent = "開始";
  renderSegments();
}

function saveNote() {
  saveDrafts();
  const parts = [
    dom.sourceInput.value.trim() ? `片段：${dom.sourceInput.value.trim()}` : "",
    dom.shadowInput.value.trim() ? `聽辨：\n${dom.shadowInput.value.trim()}` : "",
    dom.grammarPracticeInput.value.trim() ? `文法練習：\n${dom.grammarPracticeInput.value.trim()}` : "",
    dom.dailySentenceInput.value.trim() ? `造句：\n${dom.dailySentenceInput.value.trim()}` : ""
  ].filter(Boolean);

  if (!parts.length) return;

  state.notes.unshift({
    date: todayKey(),
    day: selectedDay,
    text: parts.join("\n\n")
  });
  state.notes = state.notes.slice(0, 30);
  saveState();
  renderNotes();
}

function completeDay() {
  saveNote();
  const today = todayKey();
  if (state.lastCompletedDate !== today) {
    state.streak = isYesterday(state.lastCompletedDate) ? state.streak + 1 : 1;
    state.lastCompletedDate = today;
  }
  state.completedDays = Math.max(state.completedDays, selectedDay + 1);
  if (selectedDay < lessons.length - 1) {
    selectedDay += 1;
  }
  saveState();
  renderAll();
}

function resetProgress() {
  const confirmed = window.confirm("要清除所有進度與筆記嗎？");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  selectedDay = 0;
  resetTimer();
  renderAll();
}

dom.startTimerButton.addEventListener("click", startTimer);
dom.nextSegmentButton.addEventListener("click", advanceSegment);
dom.resetTimerButton.addEventListener("click", resetTimer);
dom.saveNoteButton.addEventListener("click", saveNote);
dom.completeDayButton.addEventListener("click", completeDay);
dom.playFeaturedButton.addEventListener("click", () => speakJapanese(lessons[selectedDay].line));
dom.playGrammarPracticeButton.addEventListener("click", () => speakTextarea(dom.grammarPracticeInput, lessons[selectedDay].line));
dom.copyExampleButton.addEventListener("click", () => {
  dom.grammarPracticeInput.value = lessons[selectedDay].line || lessons[selectedDay].examples[0][0];
  saveDrafts();
});
dom.romajiInput.addEventListener("input", () => {
  updateKanaPreview();
  saveDrafts();
});
dom.copyKanaButton.addEventListener("click", () => {
  dom.grammarPracticeInput.value = dom.kanaPreview.textContent;
  saveDrafts();
});
dom.playShadowButton.addEventListener("click", playListeningClip);
dom.randomClipButton.addEventListener("click", chooseRandomClip);
dom.revealClipButton.addEventListener("click", revealListeningAnswer);
dom.playSentenceButton.addEventListener("click", () => speakTextarea(dom.dailySentenceInput, lessons[selectedDay].line));
dom.stopVoiceButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  dom.clipAudio.pause();
});
dom.rateControl.addEventListener("input", () => {
  dom.rateLabel.textContent = `${Number(dom.rateControl.value).toFixed(2).replace(/0$/, "")}x`;
});
dom.resetButton.addEventListener("click", resetProgress);
[dom.sourceInput, dom.shadowInput, dom.dailySentenceInput, dom.grammarPracticeInput].forEach((field) => {
  field.addEventListener("input", saveDrafts);
});
if (supportsSpeech()) {
  window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
}

populateVoices();
renderAll();
