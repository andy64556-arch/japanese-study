const STORAGE_KEY = "my-vocabulary-practice-v2";

const lessonRows = [
  [1, "日常學習", "practice", "verb / noun", "練習；實作", "把能力變熟的重複行動。", ["practice English", "練習英文"], ["daily practice", "每日練習"], ["practice more", "多練習"], "I practice English for ten minutes every day.", "每天我練習英文十分鐘。", "I need more practice before the test.", "考試前我需要更多練習。", "I practice ___ every ___.", ["練習", "忘記", "購買"]],
  [1, "日常學習", "improve", "verb", "改善；進步", "讓能力、狀態或結果變得更好。", ["improve my English", "改善我的英文"], ["improve slowly", "慢慢進步"], ["improve a skill", "提升技能"], "I want to improve my English speaking.", "我想改善英文口說。", "My writing improved after daily practice.", "每天練習後，我的寫作進步了。", "I want to improve my ___.", ["改善", "等待", "借用"]],
  [1, "日常學習", "review", "verb / noun", "複習；回顧", "重新看學過的內容，讓記憶更穩。", ["review notes", "複習筆記"], ["quick review", "快速複習"], ["review vocabulary", "複習單字"], "I review five words before bed.", "我睡前複習五個單字。", "This is a quick review of today's word.", "這是今日單字的快速複習。", "I review ___ before ___.", ["複習", "投票", "修理"]],
  [1, "日常學習", "understand", "verb", "理解；明白", "知道內容的意思或原因。", ["understand a sentence", "理解句子"], ["understand the meaning", "理解意思"], ["easy to understand", "容易理解"], "I can understand this sentence.", "我可以理解這個句子。", "The example is easy to understand.", "這個例句很容易理解。", "I can understand ___.", ["理解", "關掉", "搬家"]],
  [1, "日常學習", "remember", "verb", "記得；記住", "把資訊留在腦中，之後能想起來。", ["remember a word", "記住單字"], ["remember to do it", "記得去做"], ["easy to remember", "容易記住"], "I remember this word because I use it often.", "我記得這個字，因為我常使用它。", "This phrase is easy to remember.", "這個片語很容易記住。", "I remember ___ because ___.", ["記得", "拒絕", "安裝"]],
  [1, "日常學習", "mistake", "noun", "錯誤", "做錯、寫錯或判斷錯的地方。", ["make a mistake", "犯錯"], ["common mistake", "常見錯誤"], ["learn from mistakes", "從錯誤中學習"], "It is okay to make a mistake.", "犯錯是可以的。", "I learn from my mistakes.", "我從錯誤中學習。", "I made a mistake in ___.", ["錯誤", "習慣", "價格"]],
  [1, "日常學習", "habit", "noun", "習慣", "經常重複做的行為。", ["daily habit", "每日習慣"], ["build a habit", "建立習慣"], ["good habit", "好習慣"], "Reading one sentence is my daily habit.", "讀一句英文是我的每日習慣。", "I want to build a good study habit.", "我想建立好的學習習慣。", "I want to build a habit of ___.", ["習慣", "預訂", "方向"]],
  [2, "生活行動", "choose", "verb", "選擇", "從幾個選項中挑一個。", ["choose a topic", "選一個主題"], ["choose carefully", "仔細選擇"], ["choose one", "選一個"], "I choose one useful word every day.", "我每天選一個實用單字。", "Please choose one example and rewrite it.", "請選一個例句並改寫。", "I choose ___ because ___.", ["選擇", "複習", "到達"]],
  [2, "生活行動", "prepare", "verb", "準備", "事先做好需要的東西或安排。", ["prepare for a test", "準備考試"], ["prepare notes", "準備筆記"], ["well prepared", "準備充分"], "I prepare three sentences before class.", "我上課前準備三個句子。", "I need to prepare for tomorrow's meeting.", "我需要準備明天的會議。", "I prepare ___ before ___.", ["準備", "比較", "取消"]],
  [2, "生活行動", "borrow", "verb", "借入", "向別人借東西來用。", ["borrow a book", "借一本書"], ["borrow money", "借錢"], ["borrow from a friend", "向朋友借"], "Can I borrow your dictionary?", "我可以借你的字典嗎？", "I borrowed a book from the library.", "我從圖書館借了一本書。", "Can I borrow ___?", ["借入", "提高", "完成"]],
  [2, "生活行動", "return", "verb / noun", "歸還；回來", "把東西還回去，或回到某處。", ["return a book", "歸還書"], ["return home", "回家"], ["return ticket", "回程票"], "I need to return this book tomorrow.", "我明天需要還這本書。", "She returned home after work.", "她下班後回家。", "I need to return ___ by ___.", ["歸還", "發音", "解釋"]],
  [2, "生活行動", "order", "verb / noun", "點餐；訂購；順序", "在餐廳點東西，或安排次序。", ["order food", "點餐"], ["in order", "按順序"], ["place an order", "下訂單"], "I would like to order a cup of tea.", "我想點一杯茶。", "Put these words in order.", "把這些單字按順序排好。", "I would like to order ___.", ["點餐", "練習", "理解"]],
  [2, "生活行動", "confirm", "verb", "確認", "確認資訊正確或安排沒問題。", ["confirm the time", "確認時間"], ["confirm a booking", "確認訂位"], ["confirm details", "確認細節"], "Could you confirm the meeting time?", "可以請你確認會議時間嗎？", "I want to confirm the details first.", "我想先確認細節。", "Could you confirm ___?", ["確認", "緊張", "每日"]],
  [2, "生活行動", "explain", "verb", "解釋", "把原因、意思或方法說清楚。", ["explain clearly", "清楚解釋"], ["explain a word", "解釋單字"], ["explain to me", "向我解釋"], "Can you explain this word to me?", "你可以向我解釋這個單字嗎？", "I will explain my idea with an example.", "我會用例子解釋我的想法。", "Can you explain ___ to me?", ["解釋", "點餐", "歸還"]],
  [3, "工作討論", "report", "noun / verb", "報告；回報", "整理資訊並說明結果。", ["write a report", "寫報告"], ["report a problem", "回報問題"], ["weekly report", "週報"], "I am working on the report now.", "我現在正在處理報告。", "Please report the problem to the team.", "請把問題回報給團隊。", "I am working on ___.", ["報告", "杯子", "習慣"]],
  [3, "工作討論", "meeting", "noun", "會議", "為了討論事情而安排的聚會。", ["join a meeting", "參加會議"], ["meeting time", "會議時間"], ["team meeting", "團隊會議"], "The meeting starts at ten.", "會議十點開始。", "I need to prepare for the team meeting.", "我需要準備團隊會議。", "The meeting starts at ___.", ["會議", "句子", "價格"]],
  [3, "工作討論", "deadline", "noun", "截止期限", "某件事必須完成的最後時間。", ["meet a deadline", "趕上截止期限"], ["before the deadline", "在期限前"], ["tight deadline", "很緊的期限"], "I need to finish this before the deadline.", "我需要在期限前完成這件事。", "The deadline is next Friday.", "截止期限是下週五。", "I need to finish ___ before the deadline.", ["截止期限", "方向", "現金"]],
  [3, "工作討論", "detail", "noun", "細節", "小但重要的資訊。", ["check the details", "檢查細節"], ["important detail", "重要細節"], ["more details", "更多細節"], "Please check the details before you send it.", "寄出前請檢查細節。", "I need more details about the plan.", "我需要更多關於計畫的細節。", "Please check the details of ___.", ["細節", "錯誤", "早餐"]],
  [3, "工作討論", "suggest", "verb", "建議", "提出一個可能的做法或想法。", ["suggest an idea", "提出想法"], ["suggest a change", "建議修改"], ["strongly suggest", "強烈建議"], "I suggest we start with the main idea.", "我建議我們從主要想法開始。", "She suggested a better way to study.", "她建議了一個更好的學習方法。", "I suggest we ___.", ["建議", "歸還", "訂購"]],
  [3, "工作討論", "decision", "noun", "決定", "想清楚後選定的結果。", ["make a decision", "做決定"], ["final decision", "最終決定"], ["quick decision", "快速決定"], "We need to make a decision today.", "我們今天需要做決定。", "This is not the final decision.", "這不是最終決定。", "We need to make a decision about ___.", ["決定", "片語", "車站"]],
  [3, "工作討論", "progress", "noun", "進度；進展", "事情往前推進的狀態。", ["make progress", "取得進展"], ["check progress", "檢查進度"], ["study progress", "學習進度"], "I made progress after one week of practice.", "練習一週後，我有進步。", "Let's check our progress every Friday.", "我們每週五檢查進度吧。", "I made progress in ___.", ["進度", "照片", "問題"]],
  [4, "整理輸出", "useful", "adjective", "有用的；實用的", "能幫上忙或值得使用的。", ["useful phrase", "實用片語"], ["useful for work", "對工作有用"], ["very useful", "非常有用"], "This phrase is useful for work.", "這個片語對工作有用。", "I learned three useful words today.", "我今天學了三個實用單字。", "This word is useful for ___.", ["有用的", "緊張的", "最近的"]],
  [4, "整理輸出", "confident", "adjective", "有自信的", "相信自己可以做好。", ["feel confident", "感到有自信"], ["confident speaker", "有自信的說話者"], ["more confident", "更有自信"], "I feel more confident when I know useful words.", "知道實用單字時，我會更有自信。", "Practice helps me become confident.", "練習幫助我變得有自信。", "I feel confident when ___.", ["有自信的", "便宜的", "清楚地"]],
  [4, "整理輸出", "simple", "adjective", "簡單的", "不複雜、容易理解。", ["simple sentence", "簡單句"], ["simple idea", "簡單想法"], ["keep it simple", "保持簡單"], "Write a simple sentence with this word.", "用這個字寫一個簡單句。", "The idea is simple but useful.", "這個想法簡單但有用。", "I can write a simple sentence about ___.", ["簡單的", "最後", "可用的"]],
  [4, "整理輸出", "clear", "adjective / verb", "清楚的；清除", "容易理解，或把東西移除。", ["clear sentence", "清楚的句子"], ["clear idea", "清楚的想法"], ["make it clear", "把它說清楚"], "This example makes the word clear.", "這個例子讓單字變清楚。", "Please make your sentence clear.", "請把你的句子寫清楚。", "This example makes ___ clear.", ["清楚的", "預訂", "借入"]],
  [4, "整理輸出", "example", "noun", "例子", "用來說明某個想法或規則的句子、事情。", ["give an example", "舉例"], ["example sentence", "例句"], ["good example", "好例子"], "Can you give me an example?", "你可以給我一個例子嗎？", "This example sentence helps me remember the word.", "這個例句幫我記住單字。", "Can you give me an example of ___?", ["例子", "截止期限", "進步"]],
  [4, "整理輸出", "connect", "verb", "連結；連接", "把兩件事物或想法接在一起。", ["connect ideas", "連結想法"], ["connect words", "連結單字"], ["connect with life", "和生活連結"], "I connect this word with my daily life.", "我把這個單字和日常生活連結。", "Try to connect new words with examples.", "試著把新單字和例句連結。", "I connect ___ with ___.", ["連結", "選擇", "點餐"]],
  [4, "整理輸出", "summary", "noun", "摘要；總結", "把重點用簡短方式整理出來。", ["write a summary", "寫摘要"], ["short summary", "短摘要"], ["lesson summary", "課程總結"], "Write a short summary of today's word.", "寫一個今日單字的短摘要。", "My summary has one example sentence.", "我的摘要有一個例句。", "My summary of ___ is ___.", ["摘要", "習慣", "會議"]]
];

const lessons = lessonRows.map((row, index) => {
  const [week, theme, word, type, meaning, note, phraseA, phraseB, phraseC, exampleA, translationA, exampleB, translationB, template, quizOptions] = row;
  return {
    week,
    theme,
    title: word,
    word,
    type,
    meaning,
    note,
    phrases: [phraseA, phraseB, phraseC],
    examples: [
      [exampleA, translationA],
      [exampleB, translationB]
    ],
    template,
    level: index < 14 ? "A1" : "A2",
    summary: `今天學「${word}」，再用它寫出自己的英文句子。`,
    quiz: {
      question: `"${word}" 最接近哪個意思？`,
      options: quizOptions,
      answer: 0,
      explain: `今天的重點是把 "${word}" 放進自己的句子裡。`
    }
  };
});

const state = loadState();
let selectedDay = Math.min(state.selectedDay ?? state.completedDays, lessons.length - 1);

const dom = {
  todayLabel: document.querySelector("#todayLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  weekTag: document.querySelector("#weekTag"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  featuredWord: document.querySelector("#featuredWord"),
  featuredMeaning: document.querySelector("#featuredMeaning"),
  completeDayButton: document.querySelector("#completeDayButton"),
  copyWordButton: document.querySelector("#copyWordButton"),
  resetButton: document.querySelector("#resetButton"),
  wordTitle: document.querySelector("#wordTitle"),
  lessonLevel: document.querySelector("#lessonLevel"),
  wordType: document.querySelector("#wordType"),
  wordMeaning: document.querySelector("#wordMeaning"),
  wordDetailList: document.querySelector("#wordDetailList"),
  phraseList: document.querySelector("#phraseList"),
  phraseInput: document.querySelector("#phraseInput"),
  exampleStack: document.querySelector("#exampleStack"),
  copyExampleButton: document.querySelector("#copyExampleButton"),
  sentenceGuide: document.querySelector("#sentenceGuide"),
  sentenceInput: document.querySelector("#sentenceInput"),
  insertTemplateButton: document.querySelector("#insertTemplateButton"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  quizResult: document.querySelector("#quizResult"),
  noteInput: document.querySelector("#noteInput"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  weekBoard: document.querySelector("#weekBoard"),
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
        drafts: saved.drafts && typeof saved.drafts === "object" ? saved.drafts : {}
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
    drafts: {}
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

function currentLesson() {
  return lessons[selectedDay];
}

function renderLesson() {
  const lesson = currentLesson();
  dom.todayLabel.textContent = `第 ${selectedDay + 1} 天`;
  dom.streakLabel.textContent = `連續 ${state.streak} 天`;
  dom.weekTag.textContent = `Week ${lesson.week}`;
  dom.lessonTitle.textContent = lesson.word;
  dom.lessonSummary.textContent = lesson.summary;
  dom.featuredWord.textContent = lesson.word;
  dom.featuredMeaning.textContent = lesson.meaning;
  dom.wordTitle.textContent = lesson.word;
  dom.lessonLevel.textContent = lesson.level;
  dom.wordType.textContent = lesson.type;
  dom.wordMeaning.textContent = lesson.meaning;
  dom.sentenceGuide.textContent = `用 "${lesson.word}" 寫一句跟你自己有關的英文。`;

  dom.wordDetailList.replaceChildren(
    makeInfoRow("使用情境", lesson.note),
    makeInfoRow("句型模板", lesson.template)
  );

  renderPhrases();
  renderExamples();
  renderQuiz();
  loadDrafts();
  renderProgress();
}

function makeInfoRow(label, text) {
  const row = document.createElement("div");
  row.className = "info-row";
  const strong = document.createElement("strong");
  strong.textContent = label;
  const span = document.createElement("span");
  span.textContent = text;
  row.append(strong, span);
  return row;
}

function renderPhrases() {
  dom.phraseList.replaceChildren(
    ...currentLesson().phrases.map(([phrase, meaning]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "phrase-card";
      button.innerHTML = `<strong>${phrase}</strong><span>${meaning}</span>`;
      button.addEventListener("click", () => {
        dom.phraseInput.value = phrase;
        saveDrafts();
      });
      return button;
    })
  );
}

function renderExamples() {
  dom.exampleStack.replaceChildren(
    ...currentLesson().examples.map(([en, zh]) => {
      const card = document.createElement("div");
      card.className = "example-card";
      const strong = document.createElement("strong");
      strong.textContent = en;
      const span = document.createElement("span");
      span.textContent = zh;
      card.append(strong, span);
      return card;
    })
  );
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
        <span>${lesson.word}</span>
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
    dom.notesList.innerHTML = '<p class="empty-notes">還沒有筆記。儲存句子或完成今天後，內容會保存在這裡。</p>';
    return;
  }

  dom.notesList.replaceChildren(
    ...state.notes.slice(0, 12).map((note) => {
      const card = document.createElement("div");
      card.className = "note-card";
      const time = document.createElement("time");
      time.textContent = `${note.date}，第 ${note.day + 1} 天：${note.word}`;
      const text = document.createElement("p");
      text.textContent = note.text;
      card.append(time, text);
      return card;
    })
  );
}

function saveDrafts() {
  state.drafts[selectedDay] = {
    phrase: dom.phraseInput.value,
    sentence: dom.sentenceInput.value,
    note: dom.noteInput.value
  };
  saveState();
}

function loadDrafts() {
  const draft = state.drafts[selectedDay] || {};
  dom.phraseInput.value = draft.phrase || "";
  dom.sentenceInput.value = draft.sentence || "";
  dom.noteInput.value = draft.note || "";
}

function renderAll() {
  renderLesson();
  renderBoard();
  renderNotes();
}

function saveNote() {
  saveDrafts();
  const lesson = currentLesson();
  const parts = [
    `單字：${lesson.word}（${lesson.meaning}）`,
    dom.phraseInput.value.trim() ? `搭配短句：\n${dom.phraseInput.value.trim()}` : "",
    dom.sentenceInput.value.trim() ? `延伸造句：\n${dom.sentenceInput.value.trim()}` : "",
    dom.noteInput.value.trim() ? `筆記：\n${dom.noteInput.value.trim()}` : ""
  ].filter(Boolean);

  state.notes.unshift({
    date: todayKey(),
    day: selectedDay,
    word: lesson.word,
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
  renderAll();
}

dom.completeDayButton.addEventListener("click", completeDay);
dom.copyWordButton.addEventListener("click", () => {
  dom.sentenceInput.value = currentLesson().word;
  saveDrafts();
});
dom.copyExampleButton.addEventListener("click", () => {
  dom.sentenceInput.value = currentLesson().examples[0][0];
  saveDrafts();
});
dom.insertTemplateButton.addEventListener("click", () => {
  dom.sentenceInput.value = currentLesson().template;
  saveDrafts();
});
dom.saveNoteButton.addEventListener("click", saveNote);
dom.resetButton.addEventListener("click", resetProgress);
[dom.phraseInput, dom.sentenceInput, dom.noteInput].forEach((field) => {
  field.addEventListener("input", saveDrafts);
});

renderAll();
