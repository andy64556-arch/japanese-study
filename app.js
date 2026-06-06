const STORAGE_KEY = "my-english-practice-v1";

const segments = [
  { label: "暖身", minutes: 4, detail: "播放例句，跟著唸 3 次。" },
  { label: "句型", minutes: 6, detail: "理解句型，寫出自己的句子。" },
  { label: "跟讀", minutes: 6, detail: "慢速聽、跟讀、記下聽到的內容。" },
  { label: "筆記", minutes: 4, detail: "整理今天學到的一句話。" }
];

const shadowBank = [
  ["Could you say that again?", "可以請你再說一次嗎？"],
  ["I am still working on it.", "我還在處理這件事。"],
  ["That sounds like a good idea.", "那聽起來是個好主意。"],
  ["I need a little more time.", "我需要再多一點時間。"],
  ["Let me check and get back to you.", "我確認後再回覆你。"],
  ["I usually practice English after dinner.", "我通常晚餐後練習英文。"],
  ["I am trying to speak more clearly.", "我正在試著說得更清楚。"],
  ["What do you mean by that?", "你那樣說是什麼意思？"],
  ["I agree with you on this point.", "這一點我同意你。"],
  ["Could we talk about it tomorrow?", "我們可以明天再談這件事嗎？"]
].map(([line, meaning]) => ({ line, meaning }));

const lessonRows = [
  [1, "每日基本句", "建立今天的計畫", "I am going to...", "I am going to practice English tonight.", "我今晚要練習英文。", "用來說明接下來的計畫。", ["practice", "練習"], ["tonight", "今晚"], ["plan", "計畫"]],
  [1, "每日基本句", "說出日常習慣", "I usually...", "I usually read English after breakfast.", "我通常早餐後讀英文。", "usually 放在一般動詞前，用來描述常態。", ["usually", "通常"], ["breakfast", "早餐"], ["habit", "習慣"]],
  [1, "每日基本句", "描述正在做的事", "I am ...ing", "I am learning a new phrase.", "我正在學一個新片語。", "be 動詞加動詞 ing，用來說現在正在進行的事。", ["learning", "正在學"], ["phrase", "片語"], ["right now", "現在"]],
  [1, "每日基本句", "說出喜歡的理由", "I like ... because...", "I like this podcast because it is easy to follow.", "我喜歡這個 podcast，因為它很容易跟上。", "because 後面接原因，讓句子更完整。", ["because", "因為"], ["podcast", "播客"], ["easy to follow", "容易跟上"]],
  [1, "每日基本句", "提出簡單問題", "Do you...?", "Do you have time this afternoon?", "你今天下午有時間嗎？", "Do you 加原形動詞，用來問對方的習慣、需求或狀態。", ["time", "時間"], ["afternoon", "下午"], ["available", "有空的"]],
  [1, "每日基本句", "說能力", "I can...", "I can understand simple English sentences.", "我可以理解簡單英文句子。", "can 後面接原形動詞，不需要加 to。", ["understand", "理解"], ["simple", "簡單的"], ["sentence", "句子"]],
  [1, "每日基本句", "週末複習", "This week, I...", "This week, I practiced English every day.", "這週我每天都練習英文。", "把本週學過的句型混合起來，說出自己的成果。", ["every day", "每天"], ["improve", "進步"], ["review", "複習"]],
  [2, "生活與旅行", "問地點", "Where is...?", "Where is the nearest train station?", "最近的火車站在哪裡？", "Where is 用來詢問位置。", ["nearest", "最近的"], ["station", "車站"], ["direction", "方向"]],
  [2, "生活與旅行", "禮貌點餐", "I would like...", "I would like a cup of tea, please.", "我想要一杯茶，謝謝。", "I would like 比 I want 更禮貌。", ["would like", "想要"], ["cup", "杯"], ["please", "請"]],
  [2, "生活與旅行", "詢問價格", "How much is...?", "How much is this bottle of water?", "這瓶水多少錢？", "How much is this 用來問單一物品價格。", ["bottle", "瓶"], ["price", "價格"], ["cash", "現金"]],
  [2, "生活與旅行", "問時間", "What time does...?", "What time does the bus leave?", "公車幾點離開？", "What time does 後面接主詞與原形動詞。", ["leave", "離開"], ["arrive", "抵達"], ["schedule", "時刻表"]],
  [2, "生活與旅行", "請人幫忙", "Could you...?", "Could you help me take a photo?", "可以請你幫我拍張照片嗎？", "Could you 是禮貌請求，比 Can you 更柔和。", ["help", "幫忙"], ["photo", "照片"], ["again", "再次"]],
  [2, "生活與旅行", "說明問題", "There is a problem with...", "There is a problem with my reservation.", "我的預訂有問題。", "There is a problem with 後面接出問題的東西。", ["problem", "問題"], ["reservation", "預訂"], ["confirm", "確認"]],
  [2, "生活與旅行", "生活情境複習", "Excuse me, could you...?", "Excuse me, could you tell me where the station is?", "不好意思，可以告訴我車站在哪裡嗎？", "先用 Excuse me 開頭，再提出請求。", ["excuse me", "不好意思"], ["tell me", "告訴我"], ["station", "車站"]],
  [3, "工作與討論", "描述進度", "I am working on...", "I am working on the report now.", "我現在正在處理報告。", "work on 表示正在做、處理或投入某件事。", ["report", "報告"], ["task", "任務"], ["deadline", "期限"]],
  [3, "工作與討論", "表達想法", "I think...", "I think we should start with the main idea.", "我覺得我們應該從主要想法開始。", "I think 用來提出看法，should 表示建議。", ["main idea", "主要想法"], ["start with", "從...開始"], ["should", "應該"]],
  [3, "工作與討論", "不同意但保持禮貌", "I see your point, but...", "I see your point, but I have a different idea.", "我懂你的意思，但我有不同想法。", "先承認對方觀點，再提出不同意見。", ["point", "觀點"], ["different", "不同的"], ["idea", "想法"]],
  [3, "工作與討論", "確認資訊", "Could you confirm...?", "Could you confirm the meeting time?", "可以請你確認會議時間嗎？", "confirm 用來請對方確認資訊、細節或安排。", ["confirm", "確認"], ["meeting", "會議"], ["detail", "細節"]],
  [3, "工作與討論", "提出下一步", "Let's...", "Let's review the notes before tomorrow.", "我們明天前先複習筆記吧。", "Let's 後面接原形動詞，用來提出一起做的事。", ["review", "複習"], ["notes", "筆記"], ["before", "在...之前"]],
  [3, "工作與討論", "說出卡住的地方", "I am not sure how to...", "I am not sure how to explain this clearly.", "我不確定怎麼把這件事說清楚。", "how to 後面接原形動詞，表示如何做某事。", ["explain", "解釋"], ["clearly", "清楚地"], ["stuck", "卡住的"]],
  [3, "工作與討論", "工作情境複習", "I think..., so let's...", "I think we need more examples, so let's add two more.", "我覺得我們需要更多例子，所以再加兩個吧。", "so 用來連接原因和下一步行動。", ["example", "例子"], ["add", "加入"], ["more", "更多"]],
  [4, "整理與輸出", "回顧昨天", "I learned...", "I learned three useful phrases yesterday.", "我昨天學了三個實用片語。", "learned 是過去式，用來說已經完成的學習。", ["learned", "學到"], ["useful", "實用的"], ["yesterday", "昨天"]],
  [4, "整理與輸出", "解釋選擇", "I chose it because...", "I chose this topic because it is useful for work.", "我選這個主題，因為它對工作有用。", "chose 是 choose 的過去式。", ["chose", "選擇了"], ["topic", "主題"], ["useful", "有用的"]],
  [4, "整理與輸出", "比較選項", "... is better than ...", "This plan is better than the first one.", "這個計畫比第一個更好。", "better than 用來比較兩個人、事或選項。", ["better", "更好"], ["first one", "第一個"], ["option", "選項"]],
  [4, "整理與輸出", "設定目標", "My goal is to...", "My goal is to speak English more confidently.", "我的目標是更有自信地說英文。", "My goal is to 後面接原形動詞。", ["goal", "目標"], ["confidently", "有自信地"], ["improve", "改善"]],
  [4, "整理與輸出", "組織說話順序", "First..., then..., finally...", "First, I listened. Then, I repeated. Finally, I wrote it down.", "首先我聽，接著跟讀，最後寫下來。", "用順序詞讓口說內容更清楚。", ["first", "首先"], ["then", "接著"], ["finally", "最後"]],
  [4, "整理與輸出", "換句話說", "Let me say that again.", "Let me say that again in a simpler way.", "讓我用更簡單的方式再說一次。", "這句可以幫你在口說時重新整理表達。", ["again", "再一次"], ["simpler", "更簡單的"], ["way", "方式"]],
  [4, "整理與輸出", "四週總複習", "I used to..., but now...", "I used to feel nervous, but now I can speak more calmly.", "我以前會緊張，但現在可以更冷靜地說。", "used to 對比過去，but now 帶出現在的改變。", ["used to", "以前常常"], ["nervous", "緊張的"], ["calmly", "冷靜地"]]
];

const lessons = lessonRows.map((row, index) => {
  const [week, theme, title, pattern, line, meaning, note, ...vocab] = row;
  return {
    week,
    theme,
    title,
    pattern,
    line,
    meaning,
    note,
    vocab,
    level: index < 14 ? "A1" : "A2",
    summary: `今天練習「${pattern}」，用一個句型完成朗讀、造句、跟讀與筆記。`,
    examples: [
      [line, meaning],
      [makeSecondExample(line), "替換主詞或單字，讓句子變成自己的版本。"]
    ],
    quiz: makeQuiz(pattern)
  };
});

const state = loadState();
let selectedDay = Math.min(state.selectedDay ?? state.completedDays, lessons.length - 1);
let currentSegment = 0;
let remainingSeconds = 20 * 60;
let timerId = null;
let availableVoices = [];
let recognition = null;
let isRecording = false;

if (state.shadowIndex < 0 || state.shadowIndex >= shadowBank.length) {
  state.shadowIndex = 0;
}

const dom = {
  todayLabel: document.querySelector("#todayLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  weekTag: document.querySelector("#weekTag"),
  lessonTitle: document.querySelector("#lessonTitle"),
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
  patternTitle: document.querySelector("#patternTitle"),
  lessonLevel: document.querySelector("#lessonLevel"),
  patternNote: document.querySelector("#patternNote"),
  exampleStack: document.querySelector("#exampleStack"),
  sentenceInput: document.querySelector("#sentenceInput"),
  playSentenceButton: document.querySelector("#playSentenceButton"),
  copyExampleButton: document.querySelector("#copyExampleButton"),
  vocabList: document.querySelector("#vocabList"),
  shuffleVocabButton: document.querySelector("#shuffleVocabButton"),
  vocabInput: document.querySelector("#vocabInput"),
  shadowLine: document.querySelector("#shadowLine"),
  shadowMeaning: document.querySelector("#shadowMeaning"),
  playShadowButton: document.querySelector("#playShadowButton"),
  randomShadowButton: document.querySelector("#randomShadowButton"),
  shadowInput: document.querySelector("#shadowInput"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  quizResult: document.querySelector("#quizResult"),
  speechStatus: document.querySelector("#speechStatus"),
  recordButton: document.querySelector("#recordButton"),
  speakingInput: document.querySelector("#speakingInput"),
  noteInput: document.querySelector("#noteInput"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
  voiceStatus: document.querySelector("#voiceStatus"),
  voiceSelect: document.querySelector("#voiceSelect"),
  rateControl: document.querySelector("#rateControl"),
  rateLabel: document.querySelector("#rateLabel"),
  stopVoiceButton: document.querySelector("#stopVoiceButton"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  weekBoard: document.querySelector("#weekBoard"),
  notesList: document.querySelector("#notesList")
};

function makeSecondExample(line) {
  if (line.startsWith("I am ")) return line.replace("I am ", "She is ");
  if (line.startsWith("I usually ")) return line.replace("I usually ", "She usually ");
  if (line.startsWith("I can ")) return line.replace("I can ", "We can ");
  if (line.startsWith("I would like ")) return line.replace("I would like ", "We would like ");
  if (line.startsWith("I think ")) return line.replace("I think ", "We think ");
  if (line.startsWith("I see ")) return line.replace("I see ", "We see ");
  if (line.startsWith("I learned ")) return line.replace("I learned ", "She learned ");
  if (line.startsWith("I chose ")) return line.replace("I chose ", "We chose ");
  if (line.startsWith("My ")) return line.replace("My ", "Our ");
  if (line.startsWith("This ")) return line.replace("This ", "That ");
  return line;
}

function makeQuiz(pattern) {
  return {
    question: `「${pattern}」最適合用來做什麼？`,
    options: ["完成今天的表達任務", "背一個沒有情境的單字", "只看中文不開口"],
    answer: 0,
    explain: "重點是把句型放進自己的生活情境，並且真的唸出來。"
  };
}

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
        drafts: saved.drafts && typeof saved.drafts === "object" ? saved.drafts : {},
        shadowIndex: Number.isInteger(saved.shadowIndex) ? saved.shadowIndex : 0,
        vocabOffset: Number(saved.vocabOffset) || 0
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
    drafts: {},
    shadowIndex: 0,
    vocabOffset: 0
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

function currentLesson() {
  return lessons[selectedDay];
}

function currentShadow() {
  return shadowBank[state.shadowIndex] || shadowBank[0];
}

function renderLesson() {
  const lesson = currentLesson();
  dom.todayLabel.textContent = `第 ${selectedDay + 1} 天`;
  dom.streakLabel.textContent = `連續 ${state.streak} 天`;
  dom.weekTag.textContent = `Week ${lesson.week}`;
  dom.lessonTitle.textContent = lesson.title;
  dom.lessonSummary.textContent = lesson.summary;
  dom.featuredLine.textContent = lesson.line;
  dom.featuredMeaning.textContent = lesson.meaning;
  dom.patternTitle.textContent = lesson.pattern;
  dom.lessonLevel.textContent = lesson.level;
  dom.patternNote.textContent = lesson.note;

  dom.exampleStack.replaceChildren(
    ...lesson.examples.map(([en, zh]) => {
      const card = document.createElement("div");
      card.className = "example-card";

      const content = document.createElement("div");
      const line = document.createElement("strong");
      line.textContent = en;
      const meaning = document.createElement("span");
      meaning.textContent = zh;
      content.append(line, meaning);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "播放";
      button.setAttribute("aria-label", `播放 ${en}`);
      button.addEventListener("click", () => speakEnglish(en));

      card.append(content, button);
      return card;
    })
  );

  renderVocab();
  renderQuiz();
  loadDrafts();
  renderProgress();
}

function renderVocab() {
  const lesson = currentLesson();
  const offset = state.vocabOffset % lesson.vocab.length;
  const vocab = [...lesson.vocab.slice(offset), ...lesson.vocab.slice(0, offset)];
  dom.vocabList.replaceChildren(
    ...vocab.map(([word, meaning]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "vocab-card";

      const title = document.createElement("strong");
      title.textContent = word;
      const detail = document.createElement("span");
      detail.textContent = meaning;

      button.append(title, detail);
      button.addEventListener("click", () => speakEnglish(word));
      return button;
    })
  );
}

function renderShadow() {
  const shadow = currentShadow();
  dom.shadowLine.textContent = shadow.line;
  dom.shadowMeaning.textContent = shadow.meaning;
}

function renderQuiz() {
  const quiz = currentLesson().quiz;
  dom.quizQuestion.textContent = quiz.question;
  dom.quizResult.textContent = "";
  dom.quizOptions.replaceChildren(
    ...quiz.options.map((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;
      button.addEventListener("click", () => {
        [...dom.quizOptions.children].forEach((child) => child.classList.remove("correct", "wrong"));
        button.classList.add(index === quiz.answer ? "correct" : "wrong");
        if (index !== quiz.answer) dom.quizOptions.children[quiz.answer].classList.add("correct");
        dom.quizResult.textContent = index === quiz.answer ? `答對。${quiz.explain}` : `再想一次。${quiz.explain}`;
      });
      return button;
    })
  );
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

    const header = document.createElement("header");
    const weekLabel = document.createElement("p");
    weekLabel.textContent = `Week ${week}`;
    const title = document.createElement("h3");
    title.textContent = weekLessons[0].theme;
    header.append(weekLabel, title);

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
        saveDrafts();
        selectedDay = lesson.index;
        saveState();
        renderAll();
      });
      list.append(button);
    });

    card.append(header, list);
    return card;
  });

  dom.weekBoard.replaceChildren(...cards);
}

function renderNotes() {
  if (!state.notes.length) {
    dom.notesList.innerHTML = '<p class="empty-notes">還沒有筆記。完成今天或按「儲存筆記」後，內容會保存在這裡。</p>';
    return;
  }

  dom.notesList.replaceChildren(
    ...state.notes.slice(0, 12).map((note) => {
      const card = document.createElement("div");
      card.className = "note-card";
      const time = document.createElement("time");
      time.textContent = `${note.date}，第 ${note.day + 1} 天`;
      const text = document.createElement("p");
      text.textContent = note.text;
      card.append(time, text);
      return card;
    })
  );
}

function renderAll() {
  renderLesson();
  renderShadow();
  renderSegments();
  renderBoard();
  renderNotes();
}

function saveDrafts() {
  state.drafts[selectedDay] = {
    sentence: dom.sentenceInput.value,
    vocab: dom.vocabInput.value,
    shadow: dom.shadowInput.value,
    speaking: dom.speakingInput.value,
    note: dom.noteInput.value
  };
  saveState();
}

function loadDrafts() {
  const draft = state.drafts[selectedDay] || {};
  dom.sentenceInput.value = draft.sentence || "";
  dom.vocabInput.value = draft.vocab || "";
  dom.shadowInput.value = draft.shadow || "";
  dom.speakingInput.value = draft.speaking || "";
  dom.noteInput.value = draft.note || "";
}

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function getEnglishVoices() {
  return availableVoices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"));
}

function populateVoices() {
  if (!supportsSpeech()) {
    dom.voiceStatus.textContent = "這個瀏覽器不支援語音播放。";
    dom.voiceSelect.innerHTML = "<option>無可用語音</option>";
    dom.voiceSelect.disabled = true;
    return;
  }

  availableVoices = window.speechSynthesis.getVoices();
  const englishVoices = getEnglishVoices();
  const usableVoices = englishVoices.length ? englishVoices : availableVoices;
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
    dom.voiceStatus.textContent = "尚未取得語音清單，稍後可再試一次。";
  } else if (!englishVoices.length) {
    dom.voiceStatus.textContent = "沒有找到英文語音，會使用瀏覽器預設語音。";
  } else {
    dom.voiceStatus.textContent = "已載入英文語音。建議用 0.85x 慢速跟讀。";
  }
}

function selectedVoice() {
  const name = dom.voiceSelect.value;
  return availableVoices.find((voice) => voice.name === name) || getEnglishVoices()[0] || availableVoices[0] || null;
}

function speakEnglish(text) {
  const cleanText = text.trim();
  if (!cleanText || !supportsSpeech()) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "en-US";
  utterance.rate = Number(dom.rateControl.value) || 0.85;
  utterance.pitch = 1;
  const voice = selectedVoice();
  if (voice) utterance.voice = voice;
  utterance.onstart = () => {
    dom.voiceStatus.textContent = "正在播放英文。";
  };
  utterance.onend = () => {
    dom.voiceStatus.textContent = "播放完成。";
  };
  utterance.onerror = () => {
    dom.voiceStatus.textContent = "播放失敗，請確認瀏覽器語音功能。";
  };
  window.speechSynthesis.speak(utterance);
}

function speakTextarea(field, fallbackText) {
  speakEnglish(field.value.trim() || fallbackText);
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
    if (remainingSeconds <= 0) advanceSegment();
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

function chooseRandomShadow() {
  if (shadowBank.length <= 1) return;
  let nextIndex = state.shadowIndex;
  while (nextIndex === state.shadowIndex) {
    nextIndex = Math.floor(Math.random() * shadowBank.length);
  }
  state.shadowIndex = nextIndex;
  dom.shadowInput.value = "";
  saveState();
  renderShadow();
}

function shuffleVocab() {
  state.vocabOffset = (state.vocabOffset + 1) % currentLesson().vocab.length;
  saveState();
  renderVocab();
}

function saveNote() {
  saveDrafts();
  const parts = [
    dom.sentenceInput.value.trim() ? `造句：\n${dom.sentenceInput.value.trim()}` : "",
    dom.vocabInput.value.trim() ? `單字短句：\n${dom.vocabInput.value.trim()}` : "",
    dom.shadowInput.value.trim() ? `跟讀：\n${dom.shadowInput.value.trim()}` : "",
    dom.speakingInput.value.trim() ? `口說：\n${dom.speakingInput.value.trim()}` : "",
    dom.noteInput.value.trim() ? `筆記：\n${dom.noteInput.value.trim()}` : ""
  ].filter(Boolean);

  if (!parts.length) return;

  state.notes.unshift({
    date: todayKey(),
    day: selectedDay,
    text: parts.join("\n\n")
  });
  state.notes = state.notes.slice(0, 40);
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
  if (selectedDay < lessons.length - 1) selectedDay += 1;
  saveState();
  renderAll();
}

function resetProgress() {
  const confirmed = window.confirm("確定要清除所有進度、草稿和筆記嗎？");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  selectedDay = 0;
  resetTimer();
  renderAll();
}

function setupRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    dom.speechStatus.textContent = "這個瀏覽器不支援語音辨識；你仍然可以手動輸入口說內容。";
    dom.recordButton.disabled = true;
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.onstart = () => {
    isRecording = true;
    dom.recordButton.textContent = "停止錄音";
    dom.speechStatus.textContent = "正在聽你的英文。";
  };
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join("");
    dom.speakingInput.value = transcript;
    saveDrafts();
  };
  recognition.onend = () => {
    isRecording = false;
    dom.recordButton.textContent = "開始錄音";
    dom.speechStatus.textContent = "錄音結束，可以修改文字後儲存。";
  };
  recognition.onerror = () => {
    isRecording = false;
    dom.recordButton.textContent = "開始錄音";
    dom.speechStatus.textContent = "語音辨識失敗，請檢查麥克風權限或改用手動輸入。";
  };
}

function toggleRecognition() {
  if (!recognition) return;
  if (isRecording) {
    recognition.stop();
  } else {
    recognition.start();
  }
}

dom.startTimerButton.addEventListener("click", startTimer);
dom.nextSegmentButton.addEventListener("click", advanceSegment);
dom.resetTimerButton.addEventListener("click", resetTimer);
dom.completeDayButton.addEventListener("click", completeDay);
dom.playFeaturedButton.addEventListener("click", () => speakEnglish(currentLesson().line));
dom.playSentenceButton.addEventListener("click", () => speakTextarea(dom.sentenceInput, currentLesson().line));
dom.copyExampleButton.addEventListener("click", () => {
  dom.sentenceInput.value = currentLesson().line;
  saveDrafts();
});
dom.shuffleVocabButton.addEventListener("click", shuffleVocab);
dom.playShadowButton.addEventListener("click", () => speakEnglish(currentShadow().line));
dom.randomShadowButton.addEventListener("click", chooseRandomShadow);
dom.saveNoteButton.addEventListener("click", saveNote);
dom.recordButton.addEventListener("click", toggleRecognition);
dom.stopVoiceButton.addEventListener("click", () => {
  if (supportsSpeech()) window.speechSynthesis.cancel();
});
dom.rateControl.addEventListener("input", () => {
  dom.rateLabel.textContent = `${Number(dom.rateControl.value).toFixed(2).replace(/0$/, "")}x`;
});
dom.resetButton.addEventListener("click", resetProgress);
[dom.sentenceInput, dom.vocabInput, dom.shadowInput, dom.speakingInput, dom.noteInput].forEach((field) => {
  field.addEventListener("input", saveDrafts);
});

if (supportsSpeech()) {
  window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
}

setupRecognition();
populateVoices();
renderAll();
