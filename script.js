const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python"],
    answer: 1
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Django"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
    resultEl.textContent = "✅ Correct!";
  } else {
    resultEl.textContent = "❌ Wrong!";
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  resultEl.textContent = "";
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your score: ${score}/${questions.length}`;
  }
};

loadQuestion();
