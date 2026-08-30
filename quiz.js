// ==========================================
// 1. بنك الأسئلة التفاعلي الشامل (20 سؤالاً من درس الدوال والعمليات عليها)
// ==========================================

const questions = [
    {
        question: "في تعريف الدالة، يسمى المتغير س بـ:",
        options: ["المتغير التابع", "المتغير المستقل", "المجال المقابل", "المدى"],
        correct: 1
    },
    {
        question: "الدالة الحقيقية هي الدالة التي يكون كل من مجالها ومجالها المقابل مجموعة جزئية من:",
        options: ["الأعداد الطبيعية ط", "الأعداد الصحيحة ص", "الأعداد الحقيقية ح", "الأعداد النسبية ن"],
        correct: 2
    },
    {
        question: "إذا كانت د(س) = س² + 2س، فإن صورة العنصر 3 أي د(3) تساوي:",
        options: ["15", "9", "12", "6"],
        correct: 0
    },
    {
        question: "إذا كانت هـ(س) = (2س + 1) / (س - 1)، فإن صورة العنصر -2 هي:",
        options: ["-1", "1", "3", "-3"],
        correct: 1
    },
    {
        question: "في الدالة د(س) = 3س + 7، النقطة المقابلة للعنصر 2 في المجال هي:",
        options: ["10", "13", "14", "6"],
        correct: 1
    },
    {
        question: "وفق الدالة ص = 3س + 7، صورة العدد -3 هي:",
        options: ["-2", "2", "-9", "16"],
        correct: 0
    },
    {
        question: "إذا كانت ت(س) = (3س² + 1) / (س + 2)، فإن مجال الدالة ت هو:",
        options: ["ح", "ح - {2}", "ح - {-2}", "ح - {0}"],
        correct: 2
    },
    {
        question: "مجموعة صور عناصر المجال وفق الدالة تسمى:",
        options: ["المجال المقابل", "المدى", "المتغير المستقل", "القاعدة"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = 5 - س²، فإن قيمة د(3) تساوي:",
        options: ["-4", "4", "14", "-14"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = 5 - س²، فإن قيمة د(0) تساوي:",
        options: ["0", "5", "-5", "25"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = 5 - س²، فإن قيمة د(2) تساوي:",
        options: ["1", "3", "-1", "9"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = (1 - س) / (2 + س)، فإن قيمة د(-1) تساوي:",
        options: ["2", "0", "1", "غير معرفة"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = (1 - س) / (2 + س)، فإن قيمة د(0) تساوي:",
        options: ["1", "1/2", "0", "-1"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = (2س + 1) / (2س - 1)، فإن قيمة د(3) تساوي:",
        options: ["7/5", "1", "5/7", "3"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = أ س + ب، فإن المقدار [د(س + و) - د(س)] / و يساوي (حيث و ≠ 0):",
        options: ["أ", "ب", "أ + ب", "و"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = س²، هـ(س) = 3س + 1، فإن قاعدة دالة الجمع (د + هـ)(س) هي:",
        options: ["س² - 3س - 1", "س² + 3س + 1", "3س³ + 1", "س² + 3س"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س² + 1، هـ(س) = س³، فإن تركيب الدالتين (د o هـ)(س) يساوي:",
        options: ["س⁶ + 1", "س⁵ + 1", "س⁹ + 1", "(س² + 1)³"],
        correct: 0
    },
    {
        question: "إذا كانت د(س) = س² + 1، هـ(س) = س³، فإن تركيب الدالتين (هـ o د)(س) يساوي:",
        options: ["س⁶ + 1", "(س² + 1)³", "س⁵ + 1", "س³ + 1"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س³، هـ(س) = 2س - 1، فإن دالة الفرق (د - هـ)(س) هي:",
        options: ["س³ + 2س - 1", "س³ - 2س + 1", "2س⁴ - س³", "س³ - 2س - 1"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س³، هـ(س) = 2س - 1، فإن دالة الضرب (د · هـ)(س) هي:",
        options: ["2س⁴ - س³", "2س³ - 1", "س³ - 2س + 1", "2س⁴ + س³"],
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

// ==========================================
// 2. كود العرض التقديمي (السلايدر)
// ==========================================

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        slides.forEach(s => s.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4500);
    }
}

// ==========================================
// 3. تهيئة التفاعلية والعرض عند التحميل
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // تشغيل العرض التقديمي (السلايدر)
    showSlides();

    // تشغيل الاختبار المباشر فقط في حال عدم وجود زر بدء التحدي
    const questionText = document.getElementById("question-text");
    const startBtn = document.getElementById("start-quiz-btn");
    if (questionText && !startBtn) {
        showQuestion();
    }
});
