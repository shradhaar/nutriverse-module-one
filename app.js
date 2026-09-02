const assessmentQuestions = [
  {
    q: "Which choice is generally the least processed?",
    options: ["Fresh apple", "Flavored snack cake", "Sugary soda", "Instant cheese-flavored snack"],
    answer: 0
  },
  {
    q: "Which nutrient is one that U.S. dietary guidance encourages people to limit?",
    options: ["Added sugars", "Water", "Fiber", "Potassium"],
    answer: 0
  },
  {
    q: "What is the best way to use the Nutrition Facts label?",
    options: ["Compare foods and consider the serving information", "Ignore it if a package says “natural”", "Use it to decide which foods are morally good", "Only look at calories"],
    answer: 0
  }
];

const foods = [
  { name: "Apple", emoji: "🍎", desc: "A fresh whole fruit.", category: "whole" },
  { name: "Plain rolled oats", emoji: "🥣", desc: "Whole grain that has been rolled and steamed.", category: "whole" },
  { name: "Canned beans", emoji: "🫘", desc: "Beans preserved in a can; check the label for sodium.", category: "processed" },
  { name: "Whole-grain bread", emoji: "🍞", desc: "A packaged food made by processing grain into bread.", category: "processed" },
  { name: "Sweetened breakfast cereal", emoji: "🥣", desc: "A formulated packaged food that may contain added sugars and other ingredients.", category: "ultra" },
  { name: "Packaged cheese-flavored snack", emoji: "🧀", desc: "A highly formulated snack with multiple ingredients.", category: "ultra" }
];

const quizQuestions = [
  {
    q: "Which statement is most accurate?",
    options: ["All processed food is unhealthy", "Processing is a spectrum, and many processed foods can fit into a balanced eating pattern", "Only foods made at home are nutritious", "Packaging automatically makes a food unhealthy"],
    answer: 1
  },
  {
    q: "A practical way to build a balanced meal is to:",
    options: ["Include foods from several food groups", "Avoid all packaged foods", "Skip vegetables if the meal has protein", "Focus on one nutrient only"],
    answer: 0
  },
  {
    q: "Which group is emphasized by MyPlate?",
    options: ["Fruits, vegetables, grains, protein foods, and dairy or fortified soy alternatives", "Only meat and grains", "Only fruits and vegetables", "Desserts and snack foods"],
    answer: 0
  },
  {
    q: "When comparing packaged foods, which can be useful?",
    options: ["Nutrition Facts and ingredient lists", "Front-of-package buzzwords only", "Package size only", "The color of the label"],
    answer: 0
  }
];

function renderQuestions(targetId, questions, prefix) {
  const target = document.getElementById(targetId);
  target.innerHTML = questions.map((item, i) => `
    <div class="question">
      <h3>${i + 1}. ${item.q}</h3>
      ${item.options.map((opt, j) => `
        <label class="option">
          <input type="radio" name="${prefix}-${i}" value="${j}">
          ${opt}
        </label>
      `).join("")}
    </div>
  `).join("");
}

function scoreQuestions(questions, prefix) {
  let score = 0;
  questions.forEach((q, i) => {
    const chosen = document.querySelector(`input[name="${prefix}-${i}"]:checked`);
    if (chosen && Number(chosen.value) === q.answer) score++;
  });
  return score;
}

renderQuestions("assessment-questions", assessmentQuestions, "assessment");
renderQuestions("quiz-questions", quizQuestions, "quiz");

document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.go;
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("assessment-submit").addEventListener("click", () => {
  const score = scoreQuestions(assessmentQuestions, "assessment");
  const result = document.getElementById("assessment-result");
  result.classList.add("show");
  result.textContent = `You scored ${score}/${assessmentQuestions.length}. This is just a baseline — the module is designed to build your knowledge, not grade your eating habits.`;
});

let sortIndex = 0;
function renderFood() {
  const food = foods[sortIndex];
  document.getElementById("sort-progress").textContent = `Food ${sortIndex + 1} of ${foods.length}`;
  document.getElementById("food-card").innerHTML = `
    <div>
      <div class="food-emoji">${food.emoji}</div>
      <div class="food-name">${food.name}</div>
      <div class="food-desc">${food.desc}</div>
    </div>`;
  document.getElementById("sort-feedback").className = "feedback";
}
renderFood();

document.querySelectorAll(".choices button").forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.category;
    const food = foods[sortIndex];
    const feedback = document.getElementById("sort-feedback");
    feedback.className = "feedback show";
    if (selected === food.category) {
      feedback.textContent = "✓ Correct. Nice job.";
      feedback.style.background = "#eef6e9";
      feedback.style.color = "#38532f";
      setTimeout(() => {
        sortIndex = (sortIndex + 1) % foods.length;
        renderFood();
      }, 850);
    } else {
      feedback.textContent = "Not quite. Think about how much the food has been changed from its original form and the ingredients commonly used to make it.";
      feedback.style.background = "#fbefef";
      feedback.style.color = "#6b3f3f";
    }
  });
});

document.getElementById("quiz-submit").addEventListener("click", () => {
  const score = scoreQuestions(quizQuestions, "quiz");
  const result = document.getElementById("quiz-result");
  result.classList.add("show");
  result.textContent = `You scored ${score}/${quizQuestions.length}. ${score === quizQuestions.length ? "Excellent work!" : "Review the module concepts and try again."}`;
});
