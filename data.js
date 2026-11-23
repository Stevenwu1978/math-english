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
      calc: [
        { q: "300,000 + 40,000 + 5,000 + 60 + 2 = ?", zh: "寫成標準寫法", a: "345,062", hint: "每一位依序寫下來，沒有的位寫 0。" },
        { q: "Round 67,482 to the nearest thousand.", zh: "四捨五入到千位", a: "67,000", hint: "看百位：4 小於 5，捨去。" },
        { q: "Round 254,739 to the nearest ten thousand.", zh: "四捨五入到萬位", a: "250,000", hint: "看千位：4 小於 5，捨去。" },
        { q: "400 × 10 = ?", a: "4,000", hint: "乘以 10，後面多一個 0。" },
        { q: "What is the value of the 8 in 386,154?", zh: "386,154 中的 8 代表多少？", a: "80,000", hint: "8 在萬位。" }
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
      id: "t2",
      en: "Topic 2: Fluently Add and Subtract Multi-Digit Whole Numbers",
      zh: "第2單元：多位數加減",
      ready: true,
      lessons: [
        ["2-1", "Finding Sums and Differences with Mental Math", "用心算求和與差"],
        ["2-2", "Estimate Sums and Differences", "估算和與差"],
        ["2-3", "Add Whole Numbers", "整數加法"],
        ["2-4", "Add Greater Numbers", "較大數的加法"],
        ["2-5", "Subtract Whole Numbers", "整數減法"],
        ["2-6", "Subtract Greater Numbers", "較大數的減法"],
        ["2-7", "Subtract Across Zeros", "遇 0 的減法"],
        ["2-8", "Problem Solving: Reasoning", "問題解決：推理"]
      ],
      videos: [
        { id: "7JU5IVHnkbo", title: "Estimating Sums and Differences", by: "Math with Ms Shay", lesson: "2-2" },
        { id: "gGfEzJoQA40", title: "Multi-digit Addition with Regrouping", by: "Unravel", lesson: "2-3, 2-4" },
        { id: "OuFiN1DD9pA", title: "Subtracting Large Numbers", by: "Bobby's Math Club", lesson: "2-5, 2-6" },
        { id: "E4j3mW2qiUw", title: "Subtract Across Zeros 2-7", by: "David Horan", lesson: "2-7" }
      ],
      concept: [
        { en: "Use compensation: 435 − 199 = 436 − 200 = 236.", zh: "補償法：把數字調成整十、整百比較好算，再調整答案。" },
        { en: "Estimate by rounding first: 3,812 + 4,195 is about 4,000 + 4,000 = 8,000.", zh: "先四捨五入再算，可以估算答案大約是多少。" },
        { en: "Line up the places. Add or subtract from the ones place to the left.", zh: "直式要對齊位數，從個位開始往左算。" },
        { en: "When a place adds up to 10 or more, regroup 10 of them to the next place.", zh: "某一位加起來滿 10，就進 1 到左邊一位。" },
        { en: "When you cannot subtract, regroup 1 from the next place on the left. Across zeros, keep regrouping.", zh: "不夠減就向左邊借 1；遇到 0 要一路往左借。" },
        { en: "Addition and subtraction are inverse operations, so you can check one with the other.", zh: "加法和減法互為逆運算，可以用來驗算。" }
      ],
      words: [
        { en: "equation", zh: "等式", ex: "126 + 4 = 130" },
        { en: "estimate", zh: "估算（概數）", ex: "298 + 401 is about 700." },
        { en: "sum", zh: "和", ex: "The sum of 5 and 3 is 8." },
        { en: "difference", zh: "差", ex: "The difference of 9 and 4 is 5." },
        { en: "algorithm", zh: "算則（計算步驟）", ex: "Step 1: Add the ones. Step 2: Add the tens." },
        { en: "add on", zh: "往上加", ex: "326 + 103: 326 + 3 = 329, 329 + 100 = 429" },
        { en: "compensation", zh: "補償法", ex: "435 − 199 = 436 − 200" },
        { en: "Associative Property of Addition", zh: "加法結合律", ex: "(1 + 3) + 7 = 1 + (3 + 7)" },
        { en: "Commutative Property of Addition", zh: "加法交換律", ex: "21 + 34 = 34 + 21" },
        { en: "Identity Property of Addition", zh: "加法的恆等性質（加 0 不變）", ex: "126 + 0 = 126" },
        { en: "inverse operations", zh: "逆運算", ex: "4 + 2 = 6, so 6 − 2 = 4" },
        { en: "variable", zh: "變數（代表數的字母）", ex: "x + 3 = 10, x = 7" },
        { en: "regroup", zh: "進位、借位", ex: "10 ones = 1 ten" }
      ],
      problems: [
        {
          en: "A library has 2,385 books. It buys 1,476 more. How many books does it have now?",
          zh: "圖書館有 2,385 本書，又買了 1,476 本。現在有幾本？",
          steps: [
            { q: "Add or subtract? 要用加法還是減法？", choices: ["Add 加法", "Subtract 減法"], answer: "Add 加法" },
            { q: "Ones: 5 + 6 = 11. Write ___ and regroup 1 ten. 個位寫多少？", choices: ["1", "11", "6"], answer: "1" },
            { q: "Tens: 8 + 7 + 1 = 16. Write ___ and regroup 1 hundred. 十位寫多少？", choices: ["6", "5", "16"], answer: "6" },
            { q: "Hundreds: 3 + 4 + 1 = ? 百位是多少？", choices: ["7", "8", "9"], answer: "8" },
            { q: "What is the sum? 總共幾本？", choices: ["3,861", "3,751", "3,961"], answer: "3,861" }
          ]
        },
        {
          en: "A school had 5,000 sheets of paper. It used 2,736 sheets. How many sheets are left?",
          zh: "學校有 5,000 張紙，用了 2,736 張。還剩幾張？",
          steps: [
            { q: "Add or subtract? 要用加法還是減法？", choices: ["Add 加法", "Subtract 減法"], answer: "Subtract 減法" },
            { q: "0 ones − 6 ones: can you subtract? 個位 0 − 6 夠減嗎？", choices: ["Yes 夠", "No, regroup 不夠，要借位"], answer: "No, regroup 不夠，要借位" },
            { q: "Regroup across zeros: 5,000 becomes 4 thousands, 9 hundreds, 9 tens, ___ ones. 借位後個位變多少？", choices: ["10", "9", "1"], answer: "10" },
            { q: "5,000 − 2,736 = ?", choices: ["2,264", "3,736", "2,374"], answer: "2,264" },
            { q: "Check with addition: 2,264 + 2,736 = ? 用加法驗算", choices: ["5,000", "4,990", "5,100"], answer: "5,000" }
          ]
        },
        {
          en: "A farm picked 3,812 apples on Monday and 4,195 apples on Tuesday. About how many apples did it pick in all?",
          zh: "農場星期一摘了 3,812 顆蘋果，星期二摘了 4,195 顆。大約一共摘了幾顆？",
          steps: [
            { q: "\"About how many\" means we should ___. 「大約」表示要？", choices: ["estimate 估算", "find the exact answer 算出精確答案"], answer: "estimate 估算" },
            { q: "Round 3,812 to the nearest thousand.", choices: ["3,000", "4,000", "3,800"], answer: "4,000" },
            { q: "Round 4,195 to the nearest thousand.", choices: ["4,000", "5,000", "4,200"], answer: "4,000" },
            { q: "About how many apples? 大約幾顆？", choices: ["7,000", "8,000", "9,000"], answer: "8,000" }
          ]
        }
      ],
      calc: [
        { q: "3,456 + 2,378 = ?", a: "5,834", hint: "個位 6 + 8 = 14，寫 4 進 1。" },
        { q: "46,207 + 28,915 = ?", a: "75,122", hint: "從個位開始，每一位滿 10 就進位。" },
        { q: "8,000 − 3,456 = ?", a: "4,544", hint: "遇到 0 要一路往左借。" },
        { q: "7,203 − 4,568 = ?", a: "2,635", hint: "個位 3 − 8 不夠減，向十位借；十位是 0，要再向百位借。" },
        { q: "435 − 199 = ?", zh: "試試補償法", a: "236", hint: "435 − 200 = 235，多減了 1，要加回來。" }
      ],
      quiz: [
        { q: "126 + 0 = 126 shows which property?", choices: ["Identity Property", "Commutative Property", "Associative Property"], answer: "Identity Property" },
        { q: "21 + 34 = 34 + 21 shows which property?", choices: ["Commutative Property", "Identity Property", "Associative Property"], answer: "Commutative Property" },
        { q: "Estimate 6,821 − 3,190 by rounding to the nearest thousand.", choices: ["4,000", "3,000", "10,000"], answer: "4,000" },
        { q: "4,562 + 3,219 = ?", choices: ["7,781", "7,771", "8,781"], answer: "7,781" },
        { q: "6,004 − 2,375 = ?", choices: ["3,629", "4,371", "3,739"], answer: "3,629" },
        { q: "The inverse operation of addition is ___.", choices: ["subtraction", "multiplication", "estimation"], answer: "subtraction" },
        { q: "Changing 199 to 200 to make a problem easier, then adjusting, is called ___.", choices: ["compensation", "rounding", "add on"], answer: "compensation" },
        { q: "x + 25 = 60. What is x?", choices: ["35", "85", "45"], answer: "35" }
      ]
    },
    {
      id: "t3",
      en: "Topic 3: Use Strategies and Properties to Multiply by 1-Digit Numbers",
      zh: "第3單元：乘以一位數",
      ready: true,
      lessons: [
        ["3-1", "Multiply by Multiples of 10, 100, and 1,000", "乘以 10、100、1,000 的倍數"],
        ["3-2", "Estimate Products", "估算積"],
        ["3-3", "Use Arrays and Partial Products to Multiply", "用陣列和部分積"],
        ["3-4", "Use Area Models and Partial Products to Multiply", "用面積模型和部分積"],
        ["3-5", "More Use Area Models and Partial Products to Multiply", "更多面積模型練習"],
        ["3-6", "Mental Math Strategies for Multiplication", "乘法心算策略"],
        ["3-7", "Choose a Strategy to Multiply", "選擇乘法策略"],
        ["3-8", "Problem Solving: Model with Math", "問題解決：用數學建模"]
      ],
      videos: [
        { id: "_TMvQmSrd8w", title: "Multiply Numbers by 10, 100, and 1000", by: "Math Mammoth", lesson: "3-1" },
        { id: "1IwH2zh6_Nc", title: "Area Models and Partial Products", by: "JoAnn's School", lesson: "3-3, 3-4, 3-5" },
        { id: "0awKIZ7KbPM", title: "Partial Products", by: "WSKG", lesson: "3-3" }
      ],
      concept: [
        { en: "6 × 300: think 6 × 3 hundreds = 18 hundreds = 1,800.", zh: "乘以整百：先算 6 × 3 = 18，再看有幾個百，答案 1,800。" },
        { en: "Estimate a product by rounding: 7 × 19 is about 7 × 20 = 140.", zh: "估算積：先四捨五入，7 × 19 大約是 7 × 20 = 140。" },
        { en: "Break a number apart by place value, multiply each part, then add the partial products.", zh: "把數字依位值拆開，各自相乘，再把部分積加起來。" },
        { en: "An area model is a rectangle split into parts. The total area is the product.", zh: "面積模型：把長方形切成幾塊，每塊面積加起來就是積。" },
        { en: "Distributive Property: 4 × (6 + 2) = (4 × 6) + (4 × 2).", zh: "分配律：一個數乘以兩數的和，等於分別相乘再相加。" }
      ],
      words: [
        { en: "array", zh: "陣列", ex: "3 rows of 4 dots" },
        { en: "partial product", zh: "部分積", ex: "15 × 2 = (10 × 2) + (5 × 2) = 20 + 10" },
        { en: "breaking apart", zh: "拆解", ex: "7 × 14 = (7 × 10) + (7 × 4)" },
        { en: "compensation", zh: "補償法", ex: "2 × 19 = 2 × 20 − 2 = 38" },
        { en: "estimate", zh: "估算", ex: "7 × 19 is about 140." },
        { en: "numerical expression", zh: "算式", ex: "7 × 19" },
        { en: "inverse operations", zh: "逆運算", ex: "Multiplication and division are inverse operations." },
        { en: "Associative Property of Multiplication", zh: "乘法結合律", ex: "(1 × 3) × 7 = 1 × (3 × 7)" },
        { en: "Commutative Property of Multiplication", zh: "乘法交換律", ex: "2 × 134 = 134 × 2" },
        { en: "Distributive Property", zh: "分配律", ex: "4 × (6 + 2) = (4 × 6) + (4 × 2)" }
      ],
      problems: [
        {
          en: "Each box holds 400 pencils. How many pencils are in 6 boxes?",
          zh: "每盒有 400 支鉛筆，6 盒共有幾支？",
          steps: [
            { q: "Which expression matches? 哪個算式正確？", choices: ["6 × 400", "6 + 400", "400 − 6"], answer: "6 × 400" },
            { q: "6 × 4 = ?", choices: ["24", "10", "64"], answer: "24" },
            { q: "6 × 4 hundreds = 24 hundreds = ?", choices: ["240", "2,400", "24,000"], answer: "2,400" }
          ]
        },
        {
          en: "A bus trip is 214 miles. The bus makes the trip 3 times. How many miles does it travel in all?",
          zh: "公車一趟 214 英里，跑了 3 趟。一共幾英里？",
          steps: [
            { q: "Break 214 apart by place value. 把 214 依位值拆開", choices: ["200 + 10 + 4", "200 + 14 + 4", "21 + 4"], answer: "200 + 10 + 4" },
            { q: "3 × 200 = ?", choices: ["600", "60", "6,000"], answer: "600" },
            { q: "3 × 10 = ? and 3 × 4 = ?", choices: ["30 and 12", "13 and 7", "30 and 7"], answer: "30 and 12" },
            { q: "Add the partial products: 600 + 30 + 12 = ?", choices: ["642", "632", "742"], answer: "642" }
          ]
        },
        {
          en: "A ticket costs $19. About how much do 7 tickets cost? Then find the exact cost.",
          zh: "一張票 19 元，7 張大約多少錢？再算出實際金額。",
          steps: [
            { q: "Round 19 to the nearest ten. 19 四捨五入到十位", choices: ["10", "20", "30"], answer: "20" },
            { q: "Estimate: 7 × 20 = ?", choices: ["140", "27", "1,400"], answer: "140" },
            { q: "19 is 1 less than 20, so 7 × 19 = 140 − ___. 用補償法", choices: ["7", "1", "19"], answer: "7" },
            { q: "Exact cost: 7 × 19 = ?", choices: ["$133", "$147", "$126"], answer: "$133" }
          ]
        }
      ],
      calc: [
        { q: "7 × 400 = ?", a: "2,800", hint: "7 × 4 = 28，再接兩個 0。" },
        { q: "6 × 5,000 = ?", a: "30,000", hint: "6 × 5 = 30，再接三個 0。" },
        { q: "4 × 36 = ?", a: "144", hint: "4 × 30 = 120，4 × 6 = 24，再相加。" },
        { q: "3 × 214 = ?", a: "642", hint: "3 × 200 + 3 × 10 + 3 × 4" },
        { q: "5 × 1,243 = ?", a: "6,215", hint: "5 × 1,000 + 5 × 200 + 5 × 40 + 5 × 3" }
      ],
      quiz: [
        { q: "8 × 700 = ?", choices: ["5,600", "560", "56,000"], answer: "5,600" },
        { q: "Estimate 6 × 489.", choices: ["3,000", "2,400", "300"], answer: "3,000" },
        { q: "4 × (6 + 2) = (4 × 6) + (4 × 2) shows which property?", choices: ["Distributive", "Commutative", "Associative"], answer: "Distributive" },
        { q: "2 × 134 = 134 × 2 shows which property?", choices: ["Commutative", "Distributive", "Associative"], answer: "Commutative" },
        { q: "5 × 46 = ?", choices: ["230", "200", "2,030"], answer: "230" },
        { q: "4 × 23 = 80 + ___", choices: ["12", "3", "7"], answer: "12" },
        { q: "9 × 1,000 = ?", choices: ["9,000", "900", "90,000"], answer: "9,000" },
        { q: "6 × 312 = ?", choices: ["1,872", "1,862", "1,812"], answer: "1,872" }
      ]
    },
    {
      id: "t4",
      en: "Topic 4: Use Strategies and Properties to Multiply by 2-Digit Numbers",
      zh: "第4單元：乘以兩位數",
      ready: true,
      lessons: [
        ["4-1", "Multiply Multiples of 10", "10 的倍數相乘"],
        ["4-2", "Use Models to Multiply 2-Digit Numbers by Multiples of 10", "用模型算兩位數 × 10 的倍數"],
        ["4-3", "Estimate: Use Rounding or Compatible Numbers", "估算：四捨五入或相容數"],
        ["4-4", "Arrays and Partial Products", "陣列和部分積"],
        ["4-5", "Area Models and Partial Products", "面積模型和部分積"],
        ["4-6", "Use Partial Products to Multiply by 2-Digit Numbers", "用部分積算乘以兩位數"],
        ["4-7", "Problem Solving: Make Sense and Persevere", "問題解決：理解題意、堅持到底"]
      ],
      videos: [
        { id: "8LvU6VNR7eM", title: "Estimation and Compatible Numbers", by: "Aaron Daffern", lesson: "4-3" },
        { id: "PTbozQXC8eE", title: "2-Digit by 2-Digit Multiplication (Area Model)", by: "Mighty 4th Graders", lesson: "4-4, 4-5" },
        { id: "jryxKOt5rQI", title: "2-Digit × 2-Digit: Area Models, Partial Products, Algorithm", by: "Miacademy", lesson: "4-6" }
      ],
      concept: [
        { en: "30 × 40: think 3 × 4 = 12, then 12 hundreds = 1,200.", zh: "10 的倍數相乘：先算 3 × 4 = 12，再補上兩個 0。" },
        { en: "23 × 30 = 23 × 3 × 10 = 69 × 10 = 690.", zh: "兩位數 × 整十：先乘 3，再乘 10。" },
        { en: "Estimate with rounding (17 × 23 ≈ 20 × 20) or compatible numbers (24 × 26 ≈ 25 × 25).", zh: "估算可以用四捨五入，或選好算的相容數。" },
        { en: "To multiply two 2-digit numbers, break both apart. You get 4 partial products.", zh: "兩位數 × 兩位數：兩個數都拆成十和一，會得到 4 個部分積。" },
        { en: "23 × 47 = (20 × 40) + (20 × 7) + (3 × 40) + (3 × 7) = 800 + 140 + 120 + 21 = 1,081.", zh: "把 4 個部分積加起來就是答案。" }
      ],
      words: [
        { en: "product", zh: "積", ex: "In 3 × 4 = 12, 12 is the product." },
        { en: "factors", zh: "因數", ex: "3 and 4 are factors of 12." },
        { en: "array", zh: "陣列", ex: "2 rows of 2 squares" },
        { en: "partial product", zh: "部分積", ex: "12 × 41: 400, 80, 10, 2" },
        { en: "estimate", zh: "估算", ex: "17 × 23 is about 400." },
        { en: "rounding", zh: "四捨五入", ex: "2,318 to the nearest thousand is 2,000." },
        { en: "compatible numbers", zh: "相容數（好算的數）", ex: "24 × 26 is about 25 × 25." },
        { en: "algorithm", zh: "算則", ex: "the steps of multiplying in columns" },
        { en: "variable", zh: "變數", ex: "n" }
      ],
      problems: [
        {
          en: "A theater has 30 rows. Each row has 40 seats. How many seats are there?",
          zh: "戲院有 30 排，每排 40 個座位。一共有幾個座位？",
          steps: [
            { q: "Which expression matches? 哪個算式正確？", choices: ["30 × 40", "30 + 40", "40 − 30"], answer: "30 × 40" },
            { q: "3 × 4 = ?", choices: ["12", "7", "34"], answer: "12" },
            { q: "30 × 40 = 12 hundreds = ?", choices: ["120", "1,200", "12,000"], answer: "1,200" }
          ]
        },
        {
          en: "There are 23 students. Each student reads 47 pages. About how many pages do they read? Then find the exact number.",
          zh: "有 23 位學生，每人讀 47 頁。大約一共讀了幾頁？再算出精確答案。",
          steps: [
            { q: "Estimate: round 23 to 20 and 47 to 50. 20 × 50 = ?", choices: ["1,000", "100", "700"], answer: "1,000" },
            { q: "Partial products: 20 × 40 = ? and 20 × 7 = ?", choices: ["800 and 140", "80 and 14", "800 and 27"], answer: "800 and 140" },
            { q: "3 × 40 = ? and 3 × 7 = ?", choices: ["120 and 21", "12 and 21", "120 and 10"], answer: "120 and 21" },
            { q: "800 + 140 + 120 + 21 = ?", choices: ["1,081", "1,071", "981"], answer: "1,081" },
            { q: "Is 1,081 close to the estimate 1,000? 答案和估算接近嗎？", choices: ["Yes 接近", "No 差很多"], answer: "Yes 接近" }
          ]
        },
        {
          en: "Tom buys 12 packs of cards. Each pack has 15 cards. He gives away 30 cards. How many cards does he have left?",
          zh: "Tom 買了 12 包卡片，每包 15 張，送出 30 張。還剩幾張？",
          steps: [
            { q: "What do we find first? 先算什麼？", choices: ["Total cards: 12 × 15 總共幾張", "Cards left: 30 − 15 剩幾張"], answer: "Total cards: 12 × 15 總共幾張" },
            { q: "12 × 15 = (10 × 15) + (2 × 15) = ?", choices: ["180", "150", "170"], answer: "180" },
            { q: "Then 180 − 30 = ?", choices: ["150", "210", "160"], answer: "150" }
          ]
        }
      ],
      calc: [
        { q: "30 × 40 = ?", a: "1,200", hint: "3 × 4 = 12，再接兩個 0。" },
        { q: "23 × 30 = ?", a: "690", hint: "23 × 3 = 69，再乘 10。" },
        { q: "12 × 14 = ?", a: "168", hint: "10 × 14 = 140，2 × 14 = 28，再相加。" },
        { q: "25 × 32 = ?", a: "800", hint: "25 × 30 = 750，25 × 2 = 50，再相加。" },
        { q: "47 × 36 = ?", a: "1,692", hint: "40 × 30 + 40 × 6 + 7 × 30 + 7 × 6" }
      ],
      quiz: [
        { q: "50 × 60 = ?", choices: ["3,000", "300", "30,000"], answer: "3,000" },
        { q: "Use compatible numbers to estimate 24 × 26.", choices: ["625", "400", "900"], answer: "625" },
        { q: "Which is NOT a partial product of 12 × 41?", choices: ["18", "400", "80"], answer: "18" },
        { q: "14 × 20 = ?", choices: ["280", "34", "2,800"], answer: "280" },
        { q: "Which numbers are both factors of 12?", choices: ["3 and 4", "5 and 7", "8 and 2"], answer: "3 and 4" },
        { q: "Estimate 17 × 23 by rounding.", choices: ["400", "600", "100"], answer: "400" },
        { q: "21 × 13 = ?", choices: ["273", "263", "283"], answer: "273" },
        { q: "In 3 × 4 = 12, 12 is the ___.", choices: ["product", "factor", "variable"], answer: "product" }
      ]
    }
  ]
};
