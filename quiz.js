// بنك الأسئلة التفاعلي الشامل (20 سؤالاً من مقرر الدوال) //
const questions = [
    {
        question: "إذا كانت د(س) = 3س + 6، فإن صورة العنصر 3 أي د(3) تساوي:",
        options: ["15", "9", "12", "6"],
        correct: 0
    },
    {
        question: "إذا كانت هـ(س - 1) = س2، فإن هـ(-2) تساوي:",
        options: ["-1", "1", "3", "-3"],
        correct: 1
    },
    {
        question: "إذا كانت الدالة د: ح ← ح حيث د(س) = 2س + 1، فإن المجال والمجال المقابل هما:",
        options: ["مجموعة الأعداد الطبيعية ط، مجموعة الأعداد الصحيحة ص", "مجموعة الأعداد الحقيقية ح، مجموعة الأعداد الحقيقية ح", "مجموعة الأعداد النسبية ن، مجموعة الأعداد الحقيقية ح", "مجموعة الأعداد الصحيحة ص، مجموعة الأعداد الطبيعية ط"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س2 + 5، فإن صورة العدد 2 وفق هذه الدالة هي:",
        options: ["10", "13", "14", "6"],
        correct: 1
    },
    {
        question: "إذا كانت د(س) = س3 + 7، فإن صورة العدد -3 تساوي:",
        options: ["-2", "2", "-9", "16"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = (currentQuestionIndex + 1) + ". " + currentQuestion.question;
    
    let optionsContainer = document.getElementById("options-container");
    currentQuestion.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
}

function resetState() {
    selectedOptionIndex = null;
    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    document.getElementById("next-btn").disabled = true;
}

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
    document.getElementById("result-text").innerText = "لقد أتممت الاختبار بنجاح! نتيجتك هي: " + score + " من " + questions.length;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

if (document.getElementById("question-text")) {
    showQuestion();
}

// سكريبت العرض التقديمي (السلايدر)
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    if (slides.length > 0) {
        slides.forEach(s => s.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4500);
    }
}
if (slides.length > 0) {
    showSlides();
}
