// ==========================================
// بنك الأسئلة التفاعلي الشامل (مقرر الدوال)
// ==========================================

const questions = [
    {
        question: "إذا كانت د(س) = 3س + 6، فإن صورة العنصر 3 أي د(3) تساوي:",
        options: ["15", "9", "12", "6"],
        correct: 0
    },
    {
        question: "إذا كانت هـ(س - 1) = س²، فإن هـ(-2) تساوي:",
        options: ["-1", "1", "3", "-3"],
        correct: 1
    },
    {
        question: "إذا كانت الدالة د: ح ← ح حيث د(س) = 2س + 1، فإن المجال والمجال المقابل هما:",
        options: [
            "مجموعة الأعداد الطبيعية ط، مجموعة الأعداد الصحيحة ص", 
            "مجموعة الأعداد الحقيقية ح، مجموعة الأعداد الحقيقية ح", 
            "مجموعة الأعداد النسبية ن، مجموعة الأعداد الحقيقية ح", 
            "مجموعة الأعداد الصحيحة ص، مجموعة الأعداد الطبيعية ط"
        ],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س² + 5، فإن صورة العدد 2 وفق هذه الدالة هي:",
        options: ["10", "9", "14", "6"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س³ + 7، فإن صورة العدد -3 تساوي:",
        options: ["-20", "2", "-9", "16"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// دالة لبدء الاختبار عند النقر على زر التحدي
function startQuiz() {
    const startBtn = document.getElementById("start-quiz-btn");
    const quizScreen = document.getElementById("quiz-screen");
    
    if (startBtn) {
        startBtn.style.display = "none";
    }
    if (quizScreen) {
        quizScreen.classList.remove("hidden");
    }
    
    resetQuiz();
}

// عرض السؤال الحالي مع الخيارات
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    
    const questionText = document.getElementById("question-text");
    if (questionText) {
        questionText.innerText = (currentQuestionIndex + 1) + ". " + currentQuestion.question;
    }
    
    let optionsContainer = document.getElementById("options-container");
    if (optionsContainer) {
        currentQuestion.options.forEach((option, index) => {
            let btn = document.createElement("button");
            btn.innerText = option;
            btn.classList.add("option-btn");
            btn.onclick = () => selectOption(index);
            optionsContainer.appendChild(btn);
        });
    }
}

// إعادة تصفير حالة السؤال القائم
function resetState() {
    selectedOptionIndex = null;
    let optionsContainer = document.getElementById("options-container");
    if (optionsContainer) {
        optionsContainer.innerHTML = "";
    }
    
    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.disabled = true;
    }
}

// اختيار إجابة من القائمة
function selectOption(index) {
    selectedOptionIndex = index;
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
    
    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// الانتقال للسؤال التالي
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

// عرض شاشة النتيجة النهائية
function showResult() {
    let quizScreen = document.getElementById("quiz-screen");
    let resultScreen = document.getElementById("result-screen");
    
    if (quizScreen) {
        quizScreen.classList.add("hidden");
    }
    if (resultScreen) {
        resultScreen.classList.remove("hidden");
        let resultText = document.getElementById("result-text");
        if (resultText) {
            resultText.innerText = "لقد أتممت الاختبار بنجاح! نتيجتك هي: " + score + " من " + questions.length;
        }
    }
}

// إعادة تشغيل الاختبار من البداية
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    let resultScreen = document.getElementById("result-screen");
    let quizScreen = document.getElementById("quiz-screen");
    
    if (resultScreen) {
        resultScreen.classList.add("hidden");
    }
    if (quizScreen) {
        quizScreen.classList.remove("hidden");
    }
    showQuestion();
}

// تهيئة الصفحة عند التحميل التلقائي
document.addEventListener("DOMContentLoaded", () => {
    const questionText = document.getElementById("question-text");
    const startBtn = document.getElementById("start-quiz-btn");
    
    // تشغيل مباشر فقط في حال كانت صفحة اختبار مستقلة ولا تحتوي على زر بدء التحدي
    if (questionText && !startBtn) {
        showQuestion();
    }
});
