<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة بُّلْبُل التَّعْلِيمِيَّة - اختبار الدوال</title>
    <style>
        body {
            font-family: 'Cairo', Tahoma, sans-serif;
            background-color: #1a1a2e;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            width: 100%;
            max-width: 480px;
            background: #16213e;
            border: 3px solid #f39c12;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            text-align: center;
        }
        .header {
            background: #c0392b;
            border: 2px solid #f39c12;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
        }
        .header h2 {
            margin: 0 0 5px 0;
            font-size: 20px;
            color: #f1c40f;
        }
        .header p {
            margin: 0;
            font-size: 14px;
        }
        .question-box {
            background: #0f3460;
            border: 2px solid #e94560;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: bold;
        }
        .options {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
        }
        .option-btn {
            background: #e94560;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;
        }
        .option-btn:hover {
            background: #c0392b;
        }
        .footer-note {
            background: #c0392b;
            border: 2px solid #f39c12;
            border-radius: 10px;
            padding: 10px;
            font-size: 13px;
            margin-top: 15px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h2>منصة بُّلْبُل التَّعْلِيمِيَّة</h2>
            <p>إعداد: أ. نبيل | اختبار تفاعلي: إيجاد صور عناصر (س) في الدوال</p>
        </div>

        <div id="quiz-container">
            <div id="score-tracker" style="margin-bottom: 10px; font-weight: bold; color: #f1c40f;">السؤال: 1 من 10</div>
            <div class="question-box" id="question-text">جاري تحميل السؤال...</div>
            <div class="options" id="options-container"></div>
        </div>

        <div class="footer-note">
            منصة بلبل التعليمية - طريقك الموثوق نحو النجاح والتفوق
        </div>
    </div>

    <script>
        const questions = [
            { q: "إذا كانت د(س) = ٢س + ٣، فما قيمة د(٤)؟", options: ["٨", "١١", "١٠", "٧"], answer: "١١" },
            { q: "إذا كانت د(س) = س² - ٥، فما قيمة د(٣)؟", options: ["٤", "٩", "١", "٦"], answer: "٤" },
            { q: "إذا كانت د(س) = ٣س - ١، فما قيمة د(٥)؟", options: ["١٤", "١٥", "١٦", "١٣"], answer: "١٤" },
            { q: "إذا كانت د(س) = ٤س ÷ ٢، فما قيمة د(٦)؟", options: ["٨", "١٢", "١٠", "٦"], answer: "١٢" },
            { q: "إذا كانت د(س) = س + ٧، فما قيمة د(-٢)؟", options: ["٥", "-٥", "٩", "-٩"], answer: "٥" },
            { q: "إذا كانت د(س) = ٥س، فما قيمة د(٣)؟", options: ["٨", "١٥", "١٠", "٢٥"], answer: "١٥" },
            { q: "إذا كانت د(س) = س² + ١، فما قيمة د(٠)؟", options: ["٠", "١", "٢", "-١"], answer: "١" },
            { q: "إذا كانت د(س) = ٢س²، فما قيمة د(٣)؟", options: ["١٨", "١٢", "٣٦", "٦"], answer: "١٨" },
            { q: "إذا كانت د(س) = ١٠ - س، فما قيمة د(٤)؟", options: ["٦", "١٤", "٤", "٠"], answer: "٦" },
            { q: "إذا كانت د(س) = ٣س + ٢س، فما قيمة د(٢)؟", options: ["١٠", "١٢", "٨", "٢٠"], answer: "١٠" }
        ];

        let currentIdx = 0;
        let score = 0;

        function loadQuestion() {
            if (currentIdx < questions.length) {
                document.getElementById('score-tracker').innerText = `السؤال: ${currentIdx + 1} من ${questions.length}`;
                document.getElementById('question-text').innerText = questions[currentIdx].q;
                
                const optContainer = document.getElementById('options-container');
                optContainer.innerHTML = '';
                
                questions[currentIdx].options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.innerText = opt;
                    btn.onclick = () => checkAnswer(opt);
                    optContainer.appendChild(btn);
                });
            } else {
                document.getElementById('quiz-container').innerHTML = `
                    <h3 style="color: #f1c40f;">انتهى الاختبار بنجاح!</h3>
                    <p style="font-size: 18px;">درجتك النهائية هي: ${score} من ${questions.length}</p>
                    <p>أحسنت يا أستاذ نبيل، طلابك جاهزون للتميز!</p>
                `;
            }
        }

        function checkAnswer(selected) {
            if (selected === questions[currentIdx].answer) {
                score++;
            }
            currentIdx++;
            loadQuestion();
        }

        window.onload = loadQuestion;
    </script>
</body>
</html>
