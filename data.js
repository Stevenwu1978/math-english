// 課程資料：依 enVision Mathematics G4 Volume 1 整理（課名、單字來自課本；翻譯、說明、題目為自編）
window.COURSE = {
  topics: [
    {
      id: "t1",
      en: "Topic 1: Generalize Place Value Understanding",
      zh: "第1單元：位值",
      ready: true,
      lessons: [
        ["1-1", "Numbers Through One Million", "百萬以內的數"],
        ["1-2", "Place Value Relationships", "位值的關係"],
        ["1-3", "Compare Whole Numbers", "比較整數"],
        ["1-4", "Round Whole Numbers", "整數的四捨五入"],
        ["1-5", "Problem Solving: Construct Arguments", "問題解決：提出論證"]
      ],
      videos: [
        { id: "ToqaLe33geU", title: "Place Value to the Millions", by: "Miacademy", lesson: "1-1, 1-2" },
        { id: "CrZd53wLIS0", title: "Compare and Order Numbers", by: "JoAnn's School", lesson: "1-3" },
        { id: "tvyUdOvIaj0", title: "Using a Number Line to Round Whole Numbers", by: "The Classroom Technologist", lesson: "1-4" }
      ],
      concept: [
        { en: "Numbers are grouped into periods of three digits: ones, thousands, millions.", zh: "數字每三位分成一個「級」：個級、千級、百萬級，用逗號隔開。" },
        { en: "A number can be written in standard form, expanded form, or as a number name.", zh: "一個數可以寫成標準寫法、展開式或英文文字寫法。" },
        { en: "Each place is 10 times the place to its right. 1,000 = 100 × 10.", zh: "每一位的值是右邊一位的 10 倍。1,000 = 100 × 10。" },
        { en: "To compare numbers, line up the places and start from the greatest place.", zh: "比較大小時，對齊位數，從最高位開始比。" },
        { en: "To round, look at the digit to the right of the rounding place. 5 or more rounds up.", zh: "四捨五入時，看要取的那一位右邊的數字：5 以上進位，4 以下捨去。" }
      ],
      words: [
        { en: "whole numbers", zh: "整數", ex: "0, 1, 2, 3, 4 ..." },
        { en: "place value", zh: "位值", ex: "In 345,210 the 4 means 40,000." },
        { en: "period", zh: "級（每三位一組）", ex: "In 345,210, 345 is in the thousands period." },
        { en: "millions", zh: "百萬", ex: "1,000,000 is one million." },
        { en: "expanded form", zh: "展開式", ex: "20,305 = 20,000 + 300 + 5" },
        { en: "number name", zh: "文字寫法", ex: "twenty thousand, three hundred five" },
        { en: "number line", zh: "數線", ex: "400 — 450 — 500" },
        { en: "greater than symbol (>)", zh: "大於符號", ex: "4,512 > 4,215" },
        { en: "less than symbol (<)", zh: "小於符號", ex: "4,215 < 4,512" },
        { en: "rounding", zh: "四捨五入（取概數）", ex: "4,512 rounded to the nearest thousand is 5,000." },
        { en: "conjecture", zh: "猜想", ex: "I think a number with more digits is greater." }
      ],
      problems: [
        {
          en: "A stadium has 45,672 seats. Round the number of seats to the nearest thousand.",
          zh: "體育場有 45,672 個座位。把座位數四捨五入到千位。",
          steps: [
            { q: "Which digit is in the thousands place? 千位是哪個數字？", choices: ["4", "5", "6"], answer: "5" },
            { q: "Look at the digit to its right (hundreds place). What is it? 右邊一位（百位）是多少？", choices: ["6", "7", "2"], answer: "6" },
            { q: "6 is 5 or more. Round up or down? 6 ≥ 5，要進位還是捨去？", choices: ["Round up 進位", "Round down 捨去"], answer: "Round up 進位" },
            { q: "What is the answer? 答案是？", choices: ["45,000", "46,000", "50,000"], answer: "46,000" }
          ]
        },
        {
          en: "City A has 128,450 people. City B has 128,540 people. Which city has more people?",
          zh: "A 市有 128,450 人，B 市有 128,540 人。哪個城市人比較多？",
          steps: [
            { q: "Start from the greatest place. Which place is the first one that is different? 從最高位比，哪一位開始不同？", choices: ["thousands 千位", "hundreds 百位", "tens 十位"], answer: "hundreds 百位" },
            { q: "Which is greater, 4 hundreds or 5 hundreds? 4 個百和 5 個百哪個大？", choices: ["4 hundreds", "5 hundreds"], answer: "5 hundreds" },
            { q: "Which city has more people? 哪個城市人比較多？", choices: ["City A", "City B"], answer: "City B" }
          ]
        },
        {
          en: "Mia has 30 stickers. Her brother has 10 times as many. How many stickers does her brother have?",
          zh: "Mia 有 30 張貼紙，哥哥的貼紙是她的 10 倍。哥哥有幾張？",
          steps: [
            { q: "\"10 times as many\" means we should ___. 「10 倍」表示要？", choices: ["multiply by 10 乘以 10", "add 10 加 10"], answer: "multiply by 10 乘以 10" },
            { q: "30 × 10 = ?", choices: ["40", "300", "3,000"], answer: "300" }
          ]
        },
        {
          en: "Write 207,035 in expanded form.",
          zh: "把 207,035 寫成展開式。",
          steps: [
            { q: "What is the value of the 2? 2 代表多少？", choices: ["2,000", "20,000", "200,000"], answer: "200,000" },
            { q: "What is the value of the 7? 7 代表多少？", choices: ["7,000", "70,000", "700"], answer: "7,000" },
            { q: "Which is the expanded form? 哪一個是展開式？", choices: ["200,000 + 7,000 + 30 + 5", "200,000 + 70,000 + 300 + 5", "20,000 + 7,000 + 30 + 5"], answer: "200,000 + 7,000 + 30 + 5" }
          ]
        }
      ],
      quiz: [
        { q: "What is the value of the 7 in 573,214? 573,214 中的 7 代表多少？", choices: ["700", "7,000", "70,000"], answer: "70,000" },
        { q: "Which is the expanded form of 20,305?", choices: ["20,000 + 300 + 5", "2,000 + 300 + 5", "20,000 + 30 + 5"], answer: "20,000 + 300 + 5" },
        { q: "Choose the correct symbol: 61,099 ___ 61,909", choices: [">", "<", "="], answer: "<" },
        { q: "Round 8,349 to the nearest hundred.", choices: ["8,300", "8,400", "8,000"], answer: "8,300" },
        { q: "The 3 in 300 is ___ times the 3 in 30.", choices: ["10", "100", "3"], answer: "10" },
        { q: "Which number is \"four hundred six thousand, twelve\"?", choices: ["406,012", "406,120", "460,012"], answer: "406,012" },
        { q: "A group of three digits separated by a comma is called a ___.", choices: ["period", "place value", "rounding"], answer: "period" },
        { q: "Round 843,000 to the nearest ten thousand.", choices: ["840,000", "850,000", "800,000"], answer: "840,000" },
        { q: "Which is the greatest? 哪個最大？", choices: ["98,999", "100,001", "99,990"], answer: "100,001" },
        { q: "What is 1,000 ÷ 10?", choices: ["10", "100", "1"], answer: "100" }
      ]
    },
    {
      id: "t2", en: "Topic 2: Fluently Add and Subtract Multi-Digit Whole Numbers", zh: "第2單元：多位數加減", ready: false,
      videos: [
        { id: "7JU5IVHnkbo", title: "Estimating Sums and Differences", by: "Math with Ms Shay", lesson: "2-2" },
        { id: "gGfEzJoQA40", title: "Multi-digit Addition with Regrouping", by: "Unravel", lesson: "2-3, 2-4" },
        { id: "OuFiN1DD9pA", title: "Subtracting Large Numbers", by: "Bobby's Math Club", lesson: "2-5, 2-6" },
        { id: "E4j3mW2qiUw", title: "Subtract Across Zeros 2-7", by: "David Horan", lesson: "2-7" }
      ]
    },
    {
      id: "t3", en: "Topic 3: Use Strategies and Properties to Multiply by 1-Digit Numbers", zh: "第3單元：乘以一位數", ready: false,
      videos: [
        { id: "_TMvQmSrd8w", title: "Multiply Numbers by 10, 100, and 1000", by: "Math Mammoth", lesson: "3-1" },
        { id: "1IwH2zh6_Nc", title: "Area Models and Partial Products", by: "JoAnn's School", lesson: "3-3, 3-4, 3-5" },
        { id: "0awKIZ7KbPM", title: "Partial Products", by: "WSKG", lesson: "3-3" }
      ]
    },
    {
      id: "t4", en: "Topic 4: Use Strategies and Properties to Multiply by 2-Digit Numbers", zh: "第4單元：乘以兩位數", ready: false,
      videos: [
        { id: "8LvU6VNR7eM", title: "Estimation and Compatible Numbers", by: "Aaron Daffern", lesson: "4-3" },
        { id: "PTbozQXC8eE", title: "2-Digit by 2-Digit Multiplication (Area Model)", by: "Mighty 4th Graders", lesson: "4-4, 4-5" },
        { id: "jryxKOt5rQI", title: "2-Digit × 2-Digit: Area Models, Partial Products, Algorithm", by: "Miacademy", lesson: "4-6" }
      ]
    }
  ]
};
