// بنك الأسئلة التفاعلي الشامل (20 سؤالاً من مقرر الدوال)
const questions = [
    {
        question: "إذا كانت د(س) = س² + 2س ، فإن صورة العنصر 3 أي د(3) تساوي:",
        options: ["15", "9", "12", "6"],
        correct: 0
    },
    {
        question: "إذا كانت هـ(س) = (2س + 1) ÷ (س - 1) ، فإن هـ(-2) تساوي:",
        options: ["-1", "1", "3", "-3"],
        correct: 1
    },
    {
        question: "الدالة الحقيقية هي دالة حدية متغيرها عدد حقيقي والمجال والمجال المقابل هما:",
        options: ["مجموعة الأعداد الطبيعية ط", "مجموعة جزئية من الأعداد الحقيقية ح", "مجموعة الأعداد الصحيحة ص", "المجموعات الخالية فقط"],
        correct: 1
    },
    {
        question: "إذا كانت ص = 3س + 7 ، فإن صورة العدد 2 وفق هذه الدالة هي:",
        options: ["10", "13", "14", "6"],
        correct: 1
    },
    {
        question: "في الدالة ص = 3س + 7 ، صورة العدد -3 تساوي:",
        options: ["-2", "2", "-9", "16"],
        correct: 0
    },
    {
        question: "مجال الدالة ت(س) = (3س² + 1) ÷ (س + 2) هو:",
        options: ["ح كاملاً", "ح - {2}", "ح - {-2}", "ح - {0}"],
        correct: 2
    },
    {
        question: "إذا كانت د(س) = 5 - س² ، فإن د(3) تساوي:",
        options: ["4", "-4", "14", "-1"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = 5 - س² ، فإن د(5) تساوي:",
        options: ["0", "20", "-20", "10"],
        correct: 2
    },
    {
        question: "إذا كانت د(س) = 5 - س² ، فإن د(4 + و) تساوي:",
        options: ["11 + 8و + و²", "-11 - 8و - و²", "11 - 8و - و²", "9 - و²"],
        correct: 2
    },
    {
        question: "إذا كانت د(س) = 3س - 2 ، هـ(س) = س + 1 ، فإن (د + هـ)(س) تساوي:",
        options: ["4س - 1", "3س² - 1", "2س - 3", "4س + 1"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = س³ ، هـ(س) = 2س - 1 ، فإن (د - هـ)(س) تساوي:",
        options: ["س³ - 2س - 1", "س³ - 2س + 1", "2س - س³", "س³ + 2س - 1"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س³ ، هـ(س) = 2س - 1 ، فإن (د × هـ)(س) تساوي:",
        options: ["2س⁴ - س³", "2س³ - 1", "س⁴ - س³", "2س⁴ + س³"],
        correct: 0
    },
    {
        question: "مجال دالة القسمة (د ÷ هـ)(س) لـ د(س) = س³ و هـ(س) = 2س - 1 هو ح بشرط:",
        options: ["س ≠ 0", "س ≠ 1", "س ≠ 1/2", "س ≠ -1/2"],
        correct: 2
    },
    {
        question: "إذا كانت د(س) = س² + 1 ، هـ(س) = س³ ، فإن د ( هـ(س) ) أو (د o هـ)(س) تساوي:",
        options: ["س⁶ + 1", "س⁵ + 1", "(س² + 1)³", "س⁶ + س³"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = س² + 1 ، هـ(س) = س³ ، فإن هـ ( د(س) ) أو (هـ o د)(س) تساوي:",
        options: ["س⁶ + 1", "(س² + 1)³", "س⁵ + 1", "س⁶ + 3"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = 3 - 2س ، هـ(س) = س² + 1 ، فإن (د + هـ)(2) تساوي:",
        options: ["4", "5", "6", "3"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = 3 - 2س ، هـ(س) = س² + 1 ، فإن (د - هـ)(2) تساوي:",
        options: ["-6", "-4", "2", "6"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = 3 - 2س ، هـ(س) = س² + 1 ، فإن (د × هـ)(2) تساوي:",
        options: ["-5", "5", "-10", "0"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = 4س - 3 ، هـ(س) = -س² + 5س + 1 ، فإن (د + هـ)(س) تساوي:",
        options: ["-س² + 9س - 2", "س² + 9س + 2", "-س² + 5س - 2", "9س - 2"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = س² ، هـ(س) = جا س ، فإن تركيب الدالتين (هـ o د)(س) يساوي:",
        options: ["جا(س²)", "(جا س)²", "س² جا س", "جا(2س)"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let studentName = "";
let selectedOptionIndex = null;

function startQuiz() {
    const nameInput = document.getElementById("student-name").value.trim();
    if (!nameInput) return;
    studentName = nameInput;
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    selectedOptionIndex = null;
    document.getElementById("next-btn").disabled = true;
    const q = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = `السؤال ${currentQuestionIndex + 1} من ${questions.length}: ${q.question}`;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index) {
    selectedOptionIndex = index;
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    if (selectedOptionIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("result-text").innerText = `عزيزي الطالب (${studentName})، لقد حصلت على ${score} من ${questions.length}`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
    document.getElementById("student-name").value = "";
}
