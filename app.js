const lessons = [
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "race",
    type: "noun / verb",
    meaning: "比賽；賽跑",
    note: "可以當名詞，也可以當動詞使用。",
    details: ["a running race", "race to the finish", "join a race"],
    phrases: [
      ["a long race", "一場長賽跑"],
      ["win the race", "贏得比賽"],
      ["race slowly", "慢慢比賽"]
    ],
    examples: [
      ["The tortoise joins a race with a calm smile.", "烏龜帶著平靜的微笑參加比賽。"],
      ["The race begins on a warm road.", "比賽在一條溫暖的路上開始。"]
    ],
    sentenceTemplate: "The tortoise joins a race because ____.",
    storyPrompt: "讓烏龜開始他的旅程。",
    storyHint: "The tortoise joins a race because he wants to try.",
    quiz: {
      question: "Which sentence uses race as a noun?",
      options: ["The race is long.", "They race quickly.", "I race home."],
      answer: "The race is long."
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "boast",
    type: "verb",
    meaning: "吹噓；誇耀",
    note: "常用來描述太自信、一直說自己很厲害。",
    details: ["boast loudly", "boast about speed", "do not boast"],
    phrases: [
      ["boast loudly", "大聲吹噓"],
      ["boast about winning", "吹噓自己會贏"],
      ["stop boasting", "停止吹噓"]
    ],
    examples: [
      ["The hare boasts that he is faster than everyone.", "兔子吹噓自己比大家都快。"],
      ["His boast makes the forest quiet.", "他的吹噓讓森林安靜下來。"]
    ],
    sentenceTemplate: "The hare boasts, but ____.",
    storyPrompt: "寫出兔子的太過自信。",
    storyHint: "The hare boasts, but the tortoise stays calm.",
    quiz: {
      question: "What does boast mean?",
      options: ["to brag", "to sleep", "to whisper"],
      answer: "to brag"
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "steady",
    type: "adjective",
    meaning: "穩定的；持續的",
    note: "形容速度、心情或動作保持一致。",
    details: ["steady steps", "steady progress", "a steady pace"],
    phrases: [
      ["steady steps", "穩定的步伐"],
      ["steady progress", "穩定進步"],
      ["stay steady", "保持穩定"]
    ],
    examples: [
      ["The tortoise takes steady steps along the road.", "烏龜沿著路穩穩地走。"],
      ["A steady heart helps him keep moving.", "穩定的心幫助他繼續前進。"]
    ],
    sentenceTemplate: "With steady steps, the tortoise ____.",
    storyPrompt: "讓故事的節奏慢下來。",
    storyHint: "With steady steps, the tortoise moves past the tall grass.",
    quiz: {
      question: "Which word is closest to steady?",
      options: ["stable", "noisy", "lost"],
      answer: "stable"
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "patient",
    type: "adjective",
    meaning: "有耐心的",
    note: "形容願意等待、不急躁。",
    details: ["be patient", "a patient friend", "patient practice"],
    phrases: [
      ["be patient", "有耐心"],
      ["a patient runner", "有耐心的跑者"],
      ["patient practice", "耐心練習"]
    ],
    examples: [
      ["The tortoise is patient when the road feels long.", "當道路感覺很長時，烏龜很有耐心。"],
      ["A patient learner repeats the word again.", "有耐心的學習者再重複一次這個單字。"]
    ],
    sentenceTemplate: "The tortoise is patient when ____.",
    storyPrompt: "補上烏龜不放棄的原因。",
    storyHint: "The tortoise is patient when the hill becomes steep.",
    quiz: {
      question: "A patient person can ____.",
      options: ["wait calmly", "boast loudly", "quit fast"],
      answer: "wait calmly"
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "rest",
    type: "noun / verb",
    meaning: "休息",
    note: "可以表示休息這件事，也可以表示正在休息。",
    details: ["take a rest", "rest under a tree", "need rest"],
    phrases: [
      ["take a rest", "休息一下"],
      ["rest under a tree", "在樹下休息"],
      ["need more rest", "需要更多休息"]
    ],
    examples: [
      ["The hare stops to rest under a tree.", "兔子停下來在樹下休息。"],
      ["A short rest becomes a long pause.", "短短的休息變成長長的停頓。"]
    ],
    sentenceTemplate: "The hare stops to rest because ____.",
    storyPrompt: "寫出故事的轉折。",
    storyHint: "The hare stops to rest because he feels too sure.",
    quiz: {
      question: "Which phrase means 休息一下?",
      options: ["take a rest", "make a race", "find a boast"],
      answer: "take a rest"
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "finish",
    type: "noun / verb",
    meaning: "完成；終點",
    note: "可以表示完成某件事，也可以表示比賽的終點。",
    details: ["finish the race", "near the finish", "finish a sentence"],
    phrases: [
      ["finish the race", "完成比賽"],
      ["near the finish", "接近終點"],
      ["finish the sentence", "完成句子"]
    ],
    examples: [
      ["The tortoise reaches the finish with steady steps.", "烏龜用穩定的步伐到達終點。"],
      ["He learns that a slow finish can still be strong.", "他學到慢慢完成也可以很有力量。"]
    ],
    sentenceTemplate: "At the finish, the tortoise ____.",
    storyPrompt: "完成這段小故事。",
    storyHint: "At the finish, the tortoise smiles at his steady steps.",
    quiz: {
      question: "What can you finish?",
      options: ["a sentence", "a loud", "a tiny"],
      answer: "a sentence"
    }
  },
  {
    part: 1,
    source: "Aesop-inspired",
    theme: "龜兔賽跑",
    summary: "用簡單英文寫出慢慢前進、保持穩定的故事。",
    word: "humble",
    type: "adjective",
    meaning: "謙虛的",
    note: "形容不驕傲，願意學習。",
    details: ["stay humble", "a humble winner", "humble words"],
    phrases: [
      ["stay humble", "保持謙虛"],
      ["a humble winner", "謙虛的贏家"],
      ["humble words", "謙虛的話"]
    ],
    examples: [
      ["The tortoise stays humble after the race.", "比賽後，烏龜保持謙虛。"],
      ["The hare learns to be humble too.", "兔子也學會謙虛。"]
    ],
    sentenceTemplate: "The lesson is to stay humble and ____.",
    storyPrompt: "寫出這個 Part 的故事寓意。",
    storyHint: "The lesson is to stay humble and keep moving.",
    quiz: {
      question: "A humble person does not ____.",
      options: ["brag too much", "learn slowly", "help others"],
      answer: "brag too much"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "tiny",
    type: "adjective",
    meaning: "微小的；很小的",
    note: "比 small 更有小巧、微小的感覺。",
    details: ["a tiny mouse", "tiny steps", "a tiny sound"],
    phrases: [
      ["a tiny mouse", "一隻小老鼠"],
      ["a tiny sound", "細小的聲音"],
      ["tiny steps", "小小的步伐"]
    ],
    examples: [
      ["A tiny mouse runs across the lion's paw.", "一隻小老鼠跑過獅子的爪子。"],
      ["The tiny sound wakes the sleeping lion.", "那細小的聲音吵醒了睡著的獅子。"]
    ],
    sentenceTemplate: "A tiny mouse ____.",
    storyPrompt: "讓小老鼠登場。",
    storyHint: "A tiny mouse runs through the grass.",
    quiz: {
      question: "Tiny means ____.",
      options: ["very small", "very loud", "very angry"],
      answer: "very small"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "trap",
    type: "noun / verb",
    meaning: "陷阱；困住",
    note: "可以是名詞，也可以當動詞表示被困住。",
    details: ["a rope trap", "fall into a trap", "trap the lion"],
    phrases: [
      ["a rope trap", "繩子的陷阱"],
      ["fall into a trap", "掉進陷阱"],
      ["feel trapped", "感到被困住"]
    ],
    examples: [
      ["The lion is caught in a rope trap.", "獅子被困在繩子的陷阱裡。"],
      ["The trap is strong, but the mouse has sharp teeth.", "陷阱很牢固，但老鼠有尖尖的牙齒。"]
    ],
    sentenceTemplate: "The lion is trapped, so ____.",
    storyPrompt: "寫出需要幫忙的時刻。",
    storyHint: "The lion is trapped, so he calls for help.",
    quiz: {
      question: "Which phrase fits trap?",
      options: ["fall into a trap", "drink a trap", "smile a trap"],
      answer: "fall into a trap"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "promise",
    type: "noun / verb",
    meaning: "承諾；答應",
    note: "可以表示說出口的承諾，也可以表示做出承諾。",
    details: ["make a promise", "keep a promise", "promise to help"],
    phrases: [
      ["make a promise", "做出承諾"],
      ["keep a promise", "遵守承諾"],
      ["promise to help", "答應幫忙"]
    ],
    examples: [
      ["The mouse makes a promise to help later.", "老鼠承諾之後會幫忙。"],
      ["A small promise can become a big action.", "小小的承諾可以變成很大的行動。"]
    ],
    sentenceTemplate: "The mouse makes a promise to ____.",
    storyPrompt: "加上小老鼠的承諾。",
    storyHint: "The mouse makes a promise to help the lion.",
    quiz: {
      question: "To keep a promise means to ____.",
      options: ["do what you said", "forget a word", "run away fast"],
      answer: "do what you said"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "rescue",
    type: "verb / noun",
    meaning: "拯救；救援",
    note: "常用在把人或動物從危險中救出來。",
    details: ["rescue a friend", "a quick rescue", "rescue the lion"],
    phrases: [
      ["rescue a friend", "拯救朋友"],
      ["a brave rescue", "勇敢的救援"],
      ["rescue the lion", "救出獅子"]
    ],
    examples: [
      ["The mouse returns to rescue the lion.", "老鼠回來救獅子。"],
      ["The rescue begins with one small bite.", "救援從小小的一口開始。"]
    ],
    sentenceTemplate: "The mouse rescues the lion by ____.",
    storyPrompt: "寫出小老鼠怎麼幫忙。",
    storyHint: "The mouse rescues the lion by biting the rope.",
    quiz: {
      question: "Rescue means ____.",
      options: ["save", "boast", "sleep"],
      answer: "save"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "kindness",
    type: "noun",
    meaning: "善意；仁慈",
    note: "表示溫柔、願意幫助別人的態度。",
    details: ["show kindness", "an act of kindness", "kindness matters"],
    phrases: [
      ["show kindness", "展現善意"],
      ["an act of kindness", "一個善意的行動"],
      ["small kindness", "小小的善意"]
    ],
    examples: [
      ["The lion remembers the mouse's kindness.", "獅子記得老鼠的善意。"],
      ["Kindness makes the forest feel safer.", "善意讓森林感覺更安全。"]
    ],
    sentenceTemplate: "Kindness can ____.",
    storyPrompt: "寫出故事中的溫暖。",
    storyHint: "Kindness can turn strangers into friends.",
    quiz: {
      question: "Kindness is close to ____.",
      options: ["goodness", "speed", "noise"],
      answer: "goodness"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "grateful",
    type: "adjective",
    meaning: "感激的",
    note: "形容感謝別人的心情。",
    details: ["feel grateful", "a grateful smile", "grateful for help"],
    phrases: [
      ["feel grateful", "感到感激"],
      ["a grateful smile", "感激的微笑"],
      ["grateful for help", "感謝幫助"]
    ],
    examples: [
      ["The lion feels grateful for the mouse's help.", "獅子很感激老鼠的幫忙。"],
      ["A grateful heart remembers small kindness.", "感激的心會記得小小的善意。"]
    ],
    sentenceTemplate: "The lion feels grateful because ____.",
    storyPrompt: "讓獅子說出他的感謝。",
    storyHint: "The lion feels grateful because the mouse kept her promise.",
    quiz: {
      question: "A grateful person says ____.",
      options: ["thank you", "go away", "I win"],
      answer: "thank you"
    }
  },
  {
    part: 2,
    source: "Aesop-inspired",
    theme: "獅子與老鼠",
    summary: "用單字寫出小小善意帶來大幫助的故事。",
    word: "free",
    type: "adjective / verb",
    meaning: "自由的；釋放",
    note: "可以表示自由，也可以表示把某人放出來。",
    details: ["set free", "feel free", "free the lion"],
    phrases: [
      ["set free", "釋放"],
      ["feel free", "感到自由"],
      ["free the lion", "放出獅子"]
    ],
    examples: [
      ["The mouse helps set the lion free.", "老鼠幫忙讓獅子重獲自由。"],
      ["The lion walks free through the grass.", "獅子自由地走過草地。"]
    ],
    sentenceTemplate: "At last, the lion is free and ____.",
    storyPrompt: "完成這個 Part 的故事寓意。",
    storyHint: "At last, the lion is free and learns to respect small friends.",
    quiz: {
      question: "Set free means ____.",
      options: ["let go", "tie up", "boast about"],
      answer: "let go"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "kind",
    type: "adjective",
    meaning: "善良的；親切的",
    note: "形容人溫柔、願意幫忙。",
    details: ["a kind heart", "kind words", "be kind"],
    phrases: [
      ["a kind heart", "善良的心"],
      ["kind words", "親切的話"],
      ["be kind", "保持善良"]
    ],
    examples: [
      ["The girl keeps a kind heart in a cold house.", "女孩在冷淡的家中仍保持善良的心。"],
      ["Her kind words make a small bird stay near.", "她親切的話讓小鳥停在附近。"]
    ],
    sentenceTemplate: "The girl is kind even when ____.",
    storyPrompt: "寫出主角的個性。",
    storyHint: "The girl is kind even when the house feels cold.",
    quiz: {
      question: "Kind means ____.",
      options: ["nice", "empty", "late"],
      answer: "nice"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "invitation",
    type: "noun",
    meaning: "邀請；邀請函",
    note: "通常指邀請某人參加活動。",
    details: ["receive an invitation", "send an invitation", "a royal invitation"],
    phrases: [
      ["receive an invitation", "收到邀請"],
      ["a royal invitation", "皇家的邀請"],
      ["accept an invitation", "接受邀請"]
    ],
    examples: [
      ["An invitation arrives at the house.", "一封邀請函到了家裡。"],
      ["The invitation opens a new path for the girl.", "這封邀請為女孩打開新的道路。"]
    ],
    sentenceTemplate: "The invitation says ____.",
    storyPrompt: "讓新的機會出現。",
    storyHint: "The invitation says everyone may come to the dance.",
    quiz: {
      question: "An invitation asks someone to ____.",
      options: ["come", "hide", "sleep"],
      answer: "come"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "midnight",
    type: "noun",
    meaning: "午夜",
    note: "指夜裡十二點。",
    details: ["before midnight", "at midnight", "midnight bell"],
    phrases: [
      ["before midnight", "午夜之前"],
      ["at midnight", "在午夜"],
      ["the midnight bell", "午夜鐘聲"]
    ],
    examples: [
      ["She must leave before midnight.", "她必須在午夜之前離開。"],
      ["The midnight bell makes her run through the gate.", "午夜鐘聲讓她跑過大門。"]
    ],
    sentenceTemplate: "Before midnight, she must ____.",
    storyPrompt: "加入時間限制。",
    storyHint: "Before midnight, she must return home.",
    quiz: {
      question: "Midnight is ____.",
      options: ["12:00 at night", "early morning", "a small shoe"],
      answer: "12:00 at night"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "courage",
    type: "noun",
    meaning: "勇氣",
    note: "面對害怕或困難時仍願意行動。",
    details: ["have courage", "find courage", "quiet courage"],
    phrases: [
      ["have courage", "有勇氣"],
      ["find courage", "找到勇氣"],
      ["quiet courage", "安靜的勇氣"]
    ],
    examples: [
      ["She finds courage and steps into the bright hall.", "她找到勇氣，走進明亮的大廳。"],
      ["Courage helps her share a clear idea.", "勇氣幫助她分享清楚的想法。"]
    ],
    sentenceTemplate: "With courage, she ____.",
    storyPrompt: "寫出主角勇敢的一步。",
    storyHint: "With courage, she walks into the hall.",
    quiz: {
      question: "Courage helps you ____.",
      options: ["try when afraid", "boast too much", "sleep longer"],
      answer: "try when afraid"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "slipper",
    type: "noun",
    meaning: "拖鞋；鞋",
    note: "童話中常指一隻特別的鞋。",
    details: ["a glass slipper", "lose a slipper", "find the slipper"],
    phrases: [
      ["a glass slipper", "玻璃鞋"],
      ["lose a slipper", "掉了一隻鞋"],
      ["find the slipper", "找到那隻鞋"]
    ],
    examples: [
      ["A slipper shines on the palace steps.", "一隻鞋在宮殿階梯上發亮。"],
      ["The slipper becomes a clue to her story.", "那隻鞋成了她故事的線索。"]
    ],
    sentenceTemplate: "The slipper shows that ____.",
    storyPrompt: "讓物品成為線索。",
    storyHint: "The slipper shows that she was really there.",
    quiz: {
      question: "A slipper is a kind of ____.",
      options: ["shoe", "letter", "race"],
      answer: "shoe"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "change",
    type: "noun / verb",
    meaning: "改變；變化",
    note: "可指事情變得不同，也可表示主動改變。",
    details: ["a big change", "change slowly", "change her life"],
    phrases: [
      ["a big change", "很大的改變"],
      ["change her life", "改變她的人生"],
      ["things change", "事情改變"]
    ],
    examples: [
      ["One kind chance can change her life.", "一個善意的機會能改變她的人生。"],
      ["She changes from afraid to brave.", "她從害怕變得勇敢。"]
    ],
    sentenceTemplate: "Her story begins to change when ____.",
    storyPrompt: "寫出故事的轉變。",
    storyHint: "Her story begins to change when she believes in herself.",
    quiz: {
      question: "Change means ____.",
      options: ["become different", "stay silent", "fall asleep"],
      answer: "become different"
    }
  },
  {
    part: 3,
    source: "Fairy-tale-inspired",
    theme: "灰姑娘",
    summary: "用童話單字寫出改變、勇氣和選擇。",
    word: "choose",
    type: "verb",
    meaning: "選擇",
    note: "從不同選項中決定一個。",
    details: ["choose kindness", "choose a path", "choose to speak"],
    phrases: [
      ["choose kindness", "選擇善良"],
      ["choose a path", "選擇一條路"],
      ["choose to speak", "選擇說出來"]
    ],
    examples: [
      ["She chooses kindness even after hard moments.", "即使經歷困難時刻，她仍選擇善良。"],
      ["The story asks what kind of person we choose to be.", "這個故事問我們選擇成為什麼樣的人。"]
    ],
    sentenceTemplate: "She chooses to ____.",
    storyPrompt: "完成這個 Part 的故事寓意。",
    storyHint: "She chooses to be brave and kind.",
    quiz: {
      question: "Choose means ____.",
      options: ["pick", "trap", "rest"],
      answer: "pick"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "different",
    type: "adjective",
    meaning: "不同的",
    note: "用來比較兩件事或兩個人不一樣。",
    details: ["look different", "feel different", "a different path"],
    phrases: [
      ["look different", "看起來不同"],
      ["feel different", "感到不同"],
      ["a different path", "不同的道路"]
    ],
    examples: [
      ["The young bird looks different from the others.", "這隻小鳥看起來和其他鳥不同。"],
      ["Being different makes him ask many questions.", "與眾不同讓他有許多疑問。"]
    ],
    sentenceTemplate: "The young bird feels different because ____.",
    storyPrompt: "寫出主角的起點。",
    storyHint: "The young bird feels different because his feathers are gray.",
    quiz: {
      question: "Different means ____.",
      options: ["not the same", "very kind", "full of rope"],
      answer: "not the same"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "lonely",
    type: "adjective",
    meaning: "孤單的",
    note: "形容覺得沒有陪伴或不被理解。",
    details: ["feel lonely", "a lonely walk", "lonely but hopeful"],
    phrases: [
      ["feel lonely", "感到孤單"],
      ["a lonely walk", "孤單的散步"],
      ["lonely but hopeful", "孤單但有希望"]
    ],
    examples: [
      ["He feels lonely beside the cold pond.", "他在冰冷的池塘旁感到孤單。"],
      ["A lonely walk still carries a little hope.", "孤單的路上仍帶著一點希望。"]
    ],
    sentenceTemplate: "He feels lonely, but ____.",
    storyPrompt: "寫出低落但沒有放棄的心情。",
    storyHint: "He feels lonely, but he keeps walking.",
    quiz: {
      question: "Lonely means feeling ____.",
      options: ["alone", "free", "royal"],
      answer: "alone"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "reflection",
    type: "noun",
    meaning: "倒影；反思",
    note: "可以指水中或鏡中的影像，也可以指思考。",
    details: ["see a reflection", "water reflection", "quiet reflection"],
    phrases: [
      ["see a reflection", "看見倒影"],
      ["a water reflection", "水中的倒影"],
      ["quiet reflection", "安靜的反思"]
    ],
    examples: [
      ["He sees his reflection in the water.", "他在水中看見自己的倒影。"],
      ["The reflection looks unfamiliar at first.", "那個倒影一開始看起來很陌生。"]
    ],
    sentenceTemplate: "In the reflection, he sees ____.",
    storyPrompt: "讓主角看見自己的變化。",
    storyHint: "In the reflection, he sees a stronger bird.",
    quiz: {
      question: "A reflection can appear in ____.",
      options: ["water", "a promise", "a boast"],
      answer: "water"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "swan",
    type: "noun",
    meaning: "天鵝",
    note: "一種優雅的大型水鳥。",
    details: ["a white swan", "young swan", "swan feathers"],
    phrases: [
      ["a white swan", "一隻白天鵝"],
      ["young swan", "年輕的天鵝"],
      ["swan feathers", "天鵝羽毛"]
    ],
    examples: [
      ["The young bird grows into a swan.", "這隻小鳥長成了天鵝。"],
      ["The swan glides across the quiet lake.", "天鵝滑過安靜的湖面。"]
    ],
    sentenceTemplate: "The young bird becomes a swan and ____.",
    storyPrompt: "寫出身份揭曉的時刻。",
    storyHint: "The young bird becomes a swan and lifts his head.",
    quiz: {
      question: "A swan is a kind of ____.",
      options: ["bird", "shoe", "trap"],
      answer: "bird"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "belong",
    type: "verb",
    meaning: "屬於；適合在某處",
    note: "常用 belong with 或 belong here 表示歸屬感。",
    details: ["belong here", "belong with friends", "find where you belong"],
    phrases: [
      ["belong here", "屬於這裡"],
      ["belong with friends", "和朋友在一起很適合"],
      ["find where you belong", "找到歸屬"]
    ],
    examples: [
      ["He begins to feel that he belongs by the lake.", "他開始覺得自己屬於這片湖。"],
      ["Finding where you belong can take time.", "找到歸屬可能需要時間。"]
    ],
    sentenceTemplate: "He belongs with ____.",
    storyPrompt: "寫出主角找到歸屬。",
    storyHint: "He belongs with the swans on the lake.",
    quiz: {
      question: "Belong means to ____.",
      options: ["fit or be part of", "run a race", "lose a shoe"],
      answer: "fit or be part of"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "gentle",
    type: "adjective",
    meaning: "溫柔的；柔和的",
    note: "形容動作、聲音或個性不粗魯。",
    details: ["a gentle welcome", "gentle water", "be gentle"],
    phrases: [
      ["a gentle welcome", "溫柔的歡迎"],
      ["gentle water", "柔和的水面"],
      ["be gentle", "溫柔一點"]
    ],
    examples: [
      ["The swans welcome him with gentle care.", "天鵝們用溫柔的關心歡迎他。"],
      ["Gentle words help him feel safe.", "溫柔的話讓他感到安心。"]
    ],
    sentenceTemplate: "The gentle swans ____.",
    storyPrompt: "讓故事變得溫暖。",
    storyHint: "The gentle swans make room for him.",
    quiz: {
      question: "Gentle is close to ____.",
      options: ["soft", "trapped", "boastful"],
      answer: "soft"
    }
  },
  {
    part: 4,
    source: "Andersen-inspired",
    theme: "醜小鴨",
    summary: "用單字寫出不同、成長和找到歸屬。",
    word: "beautiful",
    type: "adjective",
    meaning: "美麗的",
    note: "可以形容外表、聲音、想法或故事。",
    details: ["a beautiful bird", "beautiful feathers", "a beautiful ending"],
    phrases: [
      ["a beautiful bird", "一隻美麗的鳥"],
      ["beautiful feathers", "美麗的羽毛"],
      ["a beautiful ending", "美麗的結尾"]
    ],
    examples: [
      ["The bird discovers a beautiful shape in the water.", "那隻鳥在水中發現美麗的樣子。"],
      ["His story has a beautiful ending because he keeps going.", "他的故事有美麗的結局，因為他一直走下去。"]
    ],
    sentenceTemplate: "The ending is beautiful because ____.",
    storyPrompt: "完成整本故事的溫柔收尾。",
    storyHint: "The ending is beautiful because he finally feels at home.",
    quiz: {
      question: "Beautiful means ____.",
      options: ["lovely", "tiny", "late"],
      answer: "lovely"
    }
  }
];

const storageKey = "my-vocabulary-story-fables-v1";

const state = {
  cardIndex: 0,
  completedCards: 0,
  stories: [],
  notes: {},
  selectedAnswer: ""
};

const elements = {
  collectionLabel: document.querySelector("#collectionLabel"),
  storyCountLabel: document.querySelector("#storyCountLabel"),
  partTag: document.querySelector("#partTag"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  featuredWord: document.querySelector("#featuredWord"),
  featuredMeaning: document.querySelector("#featuredMeaning"),
  saveCardButton: document.querySelector("#saveCardButton"),
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
  storyPartLabel: document.querySelector("#storyPartLabel"),
  storyContext: document.querySelector("#storyContext"),
  storyPrompt: document.querySelector("#storyPrompt"),
  storyHint: document.querySelector("#storyHint"),
  storyInput: document.querySelector("#storyInput"),
  insertStoryButton: document.querySelector("#insertStoryButton"),
  saveStoryButton: document.querySelector("#saveStoryButton"),
  storyList: document.querySelector("#storyList"),
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
  partBoard: document.querySelector("#partBoard"),
  notesList: document.querySelector("#notesList")
};

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state.cardIndex = Number.isInteger(parsed.cardIndex) ? parsed.cardIndex : 0;
    state.completedCards = Number.isInteger(parsed.completedCards) ? parsed.completedCards : 0;
    state.stories = Array.isArray(parsed.stories) ? parsed.stories : [];
    state.notes = parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {};
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      cardIndex: state.cardIndex,
      completedCards: state.completedCards,
      stories: state.stories,
      notes: state.notes
    })
  );
}

function activeLesson() {
  return lessons[state.cardIndex] || lessons[0];
}

function clampCardIndex(index) {
  return Math.max(0, Math.min(index, lessons.length - 1));
}

function render() {
  const lesson = activeLesson();
  const progress = Math.round((state.completedCards / lessons.length) * 100);

  elements.collectionLabel.textContent = `已收集 ${state.completedCards} 個`;
  elements.storyCountLabel.textContent = `故事句 ${state.stories.length} 句`;
  elements.partTag.textContent = `Part ${lesson.part}`;
  elements.lessonTitle.textContent = `${lesson.theme}: ${lesson.word}`;
  elements.lessonSummary.textContent = lesson.summary;
  elements.featuredWord.textContent = lesson.word;
  elements.featuredMeaning.textContent = lesson.meaning;
  elements.wordTitle.textContent = lesson.word;
  elements.lessonLevel.textContent = lesson.source;
  elements.wordType.textContent = lesson.type;
  elements.wordMeaning.textContent = lesson.meaning;
  elements.storyPartLabel.textContent = `Part ${lesson.part}`;
  elements.storyContext.textContent = `${lesson.theme} / ${lesson.source}`;
  elements.storyPrompt.textContent = lesson.storyPrompt;
  elements.storyHint.textContent = lesson.storyHint;
  elements.sentenceGuide.textContent = lesson.sentenceTemplate;
  elements.quizQuestion.textContent = lesson.quiz.question;
  elements.progressText.textContent = `${state.completedCards} / ${lessons.length} cards`;
  elements.progressBar.style.width = `${progress}%`;

  elements.wordDetailList.innerHTML = lesson.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");
  elements.phraseList.innerHTML = lesson.phrases
    .map(([phrase, zh]) => `<li><strong>${phrase}</strong><span>${zh}</span></li>`)
    .join("");
  elements.exampleStack.innerHTML = lesson.examples
    .map(
      ([sentence, zh]) => `
        <article class="example-card">
          <p>${sentence}</p>
          <span>${zh}</span>
        </article>
      `
    )
    .join("");

  renderQuiz(lesson);
  renderParts();
  renderStories();
  renderNotes();
}

function renderQuiz(lesson) {
  elements.quizResult.textContent = "";
  elements.quizOptions.innerHTML = lesson.quiz.options
    .map(
      (option) => `
        <button class="quiz-option" type="button" data-answer="${option}">
          ${option}
        </button>
      `
    )
    .join("");
}

function renderParts() {
  const groups = lessons.reduce((map, lesson) => {
    if (!map.has(lesson.part)) {
      map.set(lesson.part, []);
    }
    map.get(lesson.part).push(lesson);
    return map;
  }, new Map());

  elements.partBoard.innerHTML = Array.from(groups.entries())
    .map(([part, cards]) => {
      const firstIndex = lessons.findIndex((lesson) => lesson.part === part);
      const lastIndex = firstIndex + cards.length - 1;
      const collected = Math.max(0, Math.min(state.completedCards - firstIndex, cards.length));
      const active = state.cardIndex >= firstIndex && state.cardIndex <= lastIndex;
      const title = cards[0].theme;
      return `
        <button class="part-card${active ? " is-active" : ""}" type="button" data-index="${firstIndex}">
          <span>Part ${part}</span>
          <strong>${title}</strong>
          <small>${collected} / ${cards.length} words</small>
        </button>
      `;
    })
    .join("");
}

function renderStories() {
  if (state.stories.length === 0) {
    elements.storyList.innerHTML = `
      <p class="empty-state">還沒有故事句。從目前這張單字卡開始寫一句。</p>
    `;
    return;
  }

  elements.storyList.innerHTML = state.stories
    .map(
      (story, index) => `
        <article class="story-card">
          <strong>句 ${index + 1}: ${story.word}</strong>
          <p>${story.text}</p>
        </article>
      `
    )
    .join("");
}

function renderNotes() {
  const entries = Object.entries(state.notes).slice(-5).reverse();
  if (entries.length === 0) {
    elements.notesList.innerHTML = `<p class="empty-state">可以記下容易混淆的單字或自己的例句。</p>`;
    return;
  }

  elements.notesList.innerHTML = entries
    .map(
      ([key, note]) => `
        <article class="note-card">
          <time>${key}</time>
          <p>${note}</p>
        </article>
      `
    )
    .join("");
}

function insertText(target, text) {
  const prefix = target.value.trim().length > 0 ? "\n" : "";
  target.value = `${target.value}${prefix}${text}`;
  target.focus();
}

function saveStory() {
  const lesson = activeLesson();
  const text = elements.storyInput.value.trim();
  if (!text) return false;

  const existingIndex = state.stories.findIndex((story) => story.cardIndex === state.cardIndex);
  const nextStory = {
    cardIndex: state.cardIndex,
    word: lesson.word,
    part: lesson.part,
    text
  };

  if (existingIndex >= 0) {
    state.stories[existingIndex] = nextStory;
  } else {
    state.stories.push(nextStory);
  }

  elements.storyInput.value = "";
  saveState();
  render();
  return true;
}

function saveNote() {
  const note = elements.noteInput.value.trim();
  if (!note) return false;

  const lesson = activeLesson();
  state.notes[`${lesson.word} #${state.cardIndex + 1}`] = note;
  elements.noteInput.value = "";
  saveState();
  renderNotes();
  return true;
}

function saveCard() {
  saveStory();
  saveNote();
  state.completedCards = Math.max(state.completedCards, state.cardIndex + 1);
  state.cardIndex = clampCardIndex(state.cardIndex + 1);
  saveState();
  render();
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return;
  }

  const area = document.createElement("textarea");
  area.value = text;
  document.body.append(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

elements.saveCardButton.addEventListener("click", saveCard);

elements.copyWordButton.addEventListener("click", () => {
  const lesson = activeLesson();
  copyToClipboard(`${lesson.word} - ${lesson.meaning}`);
});

elements.copyExampleButton.addEventListener("click", () => {
  copyToClipboard(activeLesson().examples.map(([sentence]) => sentence).join("\n"));
});

elements.insertTemplateButton.addEventListener("click", () => {
  insertText(elements.sentenceInput, activeLesson().sentenceTemplate);
});

elements.insertStoryButton.addEventListener("click", () => {
  insertText(elements.storyInput, activeLesson().storyHint);
});

elements.saveStoryButton.addEventListener("click", saveStory);

elements.saveNoteButton.addEventListener("click", saveNote);

elements.phraseInput.addEventListener("input", () => {
  const phrase = elements.phraseInput.value.trim().toLowerCase();
  const lesson = activeLesson();
  const match = lesson.phrases.find(([item]) => item.toLowerCase().includes(phrase));
  elements.phraseInput.style.borderColor = phrase && match ? "#2f8f5b" : "";
});

elements.sentenceInput.addEventListener("input", () => {
  const lesson = activeLesson();
  const includesWord = elements.sentenceInput.value
    .toLowerCase()
    .includes(lesson.word.toLowerCase());
  elements.sentenceInput.style.borderColor = includesWord ? "#2f8f5b" : "";
});

elements.quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;

  const answer = button.dataset.answer;
  const correct = answer === activeLesson().quiz.answer;
  elements.quizOptions.querySelectorAll(".quiz-option").forEach((optionButton) => {
    optionButton.classList.remove("correct", "wrong");
  });
  button.classList.add(correct ? "correct" : "wrong");
  elements.quizResult.textContent = correct ? "答對了，這張卡可以放進故事。" : "再想一下，看看單字意思。";
  elements.quizResult.className = correct ? "quiz-result is-correct" : "quiz-result is-wrong";
});

elements.partBoard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;

  state.cardIndex = clampCardIndex(Number(button.dataset.index));
  saveState();
  render();
});

elements.resetButton.addEventListener("click", () => {
  state.cardIndex = 0;
  state.completedCards = 0;
  state.stories = [];
  state.notes = {};
  localStorage.removeItem(storageKey);
  render();
});

loadState();
state.cardIndex = clampCardIndex(state.cardIndex);
state.completedCards = Math.max(0, Math.min(state.completedCards, lessons.length));
render();
