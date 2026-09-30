const progress = {
  assessmentPassed: false,
  sortPassed: false,
  quizPassed: false
};

const assessmentQuestions = [
  {
    q: "What is the central message of the Dietary Guidelines for Americans, 2025–2030?",
    options: [
      "Choose mostly packaged convenience foods and limit fresh produce at meals",
      "Build meals around real, nutrient-dense foods and keep highly processed choices limited",
      "Follow calorie targets only and do not focus on food quality or processing level",
      "Avoid all animal-based foods and rely mainly on supplements for nutrients"
    ],
    answer: 1
  },
  {
    q: "Which food groups does the 2025–2030 Guidelines prioritize at the center of a healthy diet?",
    options: [
      "Refined grains, sweetened drinks, and snack foods as the main daily pattern",
      "Fruits and vegetables alone, without grains, protein foods, or dairy",
      "Protein, dairy, vegetables, fruits, healthy fats, and whole grains across meals",
      "Processed meats and fried foods with limited produce and whole grains"
    ],
    answer: 2
  },
  {
    q: "According to the Guidelines, how much added sugar should one meal contain at most?",
    options: [
      "50 grams or less of added sugar per meal",
      "25 grams or less of added sugar per meal",
      "10 grams or less of added sugar per meal",
      "75 grams or less of added sugar per meal"
    ],
    answer: 2
  },
  {
    q: "For ages 14 and above, what is the recommended daily sodium limit?",
    options: [
      "1,500 milligrams of sodium or less per day",
      "2,300 milligrams of sodium or less per day",
      "3,500 milligrams of sodium or less per day",
      "5,000 milligrams of sodium or less per day"
    ],
    answer: 1
  },
  {
    q: "Which choice best matches the Guidelines’ advice on protein?",
    options: [
      "Choose one protein source daily and repeat the same food at most meals",
      "Limit protein to red meat only and avoid plant proteins and seafood",
      "Replace whole-food protein with powders and bars at most meals",
      "Include a variety of protein foods such as seafood, poultry, eggs, beans, nuts, and lean meats"
    ],
    answer: 3
  }
];

const foods = [
  { name: "Grilled chicken breast", emoji: "🍗", desc: "A high-quality protein food with no added sugars or chemical additives.", category: "whole", categoryLabel: "Nutrient-dense / whole food" },
  { name: "Canned black beans", emoji: "🫘", desc: "A plant protein preserved in a can; check the label for sodium.", category: "processed", categoryLabel: "Processed (moderate)" },
  { name: "Sugar-sweetened soda", emoji: "🥤", desc: "A beverage with added sugars that the Guidelines say to avoid.", category: "ultra", categoryLabel: "Highly processed" },
  { name: "Fresh spinach", emoji: "🥬", desc: "A colorful, nutrient-dense vegetable in its whole form.", category: "whole", categoryLabel: "Nutrient-dense / whole food" },
  { name: "Whole-grain bread", emoji: "🍞", desc: "A packaged food made from whole grains.", category: "processed", categoryLabel: "Processed (moderate)" },
  { name: "Plain Greek yogurt", emoji: "🥛", desc: "Full-fat dairy with protein and no added sugars.", category: "whole", categoryLabel: "Nutrient-dense / whole food" },
  { name: "Packaged cheese-flavored chips", emoji: "🧀", desc: "A salty, highly processed snack with additives.", category: "ultra", categoryLabel: "Highly processed" },
  { name: "Steel-cut oats", emoji: "🌾", desc: "A fiber-rich whole grain.", category: "whole", categoryLabel: "Nutrient-dense / whole food" },
  { name: "Sweetened breakfast cereal", emoji: "🥣", desc: "A ready-to-eat option with added sugars and refined carbs.", category: "ultra", categoryLabel: "Highly processed" }
];

const quizQuestions = [
  {
    q: "Which beverage do the Guidelines recommend for hydration?",
    options: [
      "Sugar-sweetened fruit drinks served with most meals and snacks",
      "Water and other unsweetened drinks as your usual choice throughout the day",
      "Energy drinks used regularly for hydration during school or work",
      "Regular soda or sweet tea paired with lunch and dinner daily"
    ],
    answer: 1
  },
  {
    q: "A practical way to follow the Guidelines at each meal is to:",
    options: [
      "Build meals from refined carbohydrates and limit vegetables, fruits, and protein",
      "Use mostly ready-to-eat packaged meals and limit fresh or minimally processed foods",
      "Include protein foods along with a variety of nutrient-dense whole foods at meals",
      "Avoid fats from whole foods and rely on highly processed low-fat snack products"
    ],
    answer: 2
  },
  {
    q: "For a 2,000-calorie eating pattern, how many vegetable servings per day do the Guidelines suggest?",
    options: [
      "1 cup-equivalent of vegetables per day",
      "5 cup-equivalents of vegetables per day",
      "3 cup-equivalents of vegetables per day",
      "7 cup-equivalents of vegetables per day"
    ],
    answer: 2
  },
  {
    q: "Which foods support a healthy gut microbiome according to the Guidelines?",
    options: [
      "Sugar-sweetened beverages and candy eaten frequently between meals",
      "Highly processed snack chips and packaged desserts as daily staples",
      "Foods chosen mainly for long shelf life and artificial preservatives",
      "Vegetables, fruits, fermented foods, and other high-fiber whole foods"
    ],
    answer: 3
  },
  {
    q: "When comparing packaged foods, a useful strategy from the Guidelines is to:",
    options: [
      "Choose products based mainly on front-of-package health claims and images",
      "Read ingredient lists and Nutrition Facts for added sugars and sodium content",
      "Select the largest package size because it is usually the better value",
      "Skip label reading when a product is marketed as natural or wholesome"
    ],
    answer: 1
  }
];

const categoryLabels = {
  whole: "Nutrient-dense / whole food",
  processed: "Processed (moderate)",
  ultra: "Highly processed"
};

function renderQuestions(targetId, questions, prefix) {
  const target = document.getElementById(targetId);
  target.innerHTML = questions.map((item, i) => `
    <div class="question" id="${prefix}-question-${i}">
      <h3>${i + 1}. ${item.q}</h3>
      ${item.options.map((opt, j) => `
        <label class="option" data-option="${j}">
          <input type="radio" name="${prefix}-${i}" value="${j}">
          ${opt}
        </label>
      `).join("")}
      <div class="question-feedback"></div>
    </div>
  `).join("");
}

function gradeQuestions(questions, prefix) {
  let score = 0;

  questions.forEach((q, i) => {
    const questionEl = document.getElementById(`${prefix}-question-${i}`);
    const feedbackEl = questionEl.querySelector(".question-feedback");
    const chosen = document.querySelector(`input[name="${prefix}-${i}"]:checked`);
    const chosenValue = chosen ? Number(chosen.value) : null;
    const isCorrect = chosenValue === q.answer;

    if (isCorrect) score += 1;

    questionEl.classList.remove("question-correct", "question-incorrect");
    questionEl.classList.add(isCorrect ? "question-correct" : "question-incorrect");

    questionEl.querySelectorAll(".option").forEach((optEl) => {
      const optIndex = Number(optEl.dataset.option);
      optEl.classList.remove("option-correct", "option-wrong");
      if (optIndex === q.answer) optEl.classList.add("option-correct");
      else if (chosenValue === optIndex) optEl.classList.add("option-wrong");
    });

    questionEl.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });

    if (isCorrect) {
      feedbackEl.textContent = "✓ Correct";
      feedbackEl.className = "question-feedback correct-text";
    } else if (chosenValue === null) {
      feedbackEl.textContent = `✗ Not answered. The correct answer is: ${q.options[q.answer]}`;
      feedbackEl.className = "question-feedback incorrect-text";
    } else {
      feedbackEl.textContent = `✗ Incorrect. You chose: ${q.options[chosenValue]}. The correct answer is: ${q.options[q.answer]}`;
      feedbackEl.className = "question-feedback incorrect-text";
    }
  });

  return {
    score,
    total: questions.length
  };
}

function resetQuestions(questions, prefix) {
  questions.forEach((_, i) => {
    const questionEl = document.getElementById(`${prefix}-question-${i}`);
    questionEl.classList.remove("question-correct", "question-incorrect");
    const feedbackEl = questionEl.querySelector(".question-feedback");
    feedbackEl.textContent = "";
    feedbackEl.className = "question-feedback";
    questionEl.querySelectorAll(".option").forEach((optEl) => {
      optEl.classList.remove("option-correct", "option-wrong");
    });
    questionEl.querySelectorAll("input").forEach((input) => {
      input.checked = false;
      input.disabled = false;
    });
  });
}

function showResultMessage(resultEl, score, total, message) {
  const percent = Math.round((score / total) * 100);
  resultEl.className = "result show result-pass";
  resultEl.innerHTML = `<strong>You scored ${score}/${total} (${percent}%).</strong> ${message}`;
}

function showRefresher() {
  const refresher = document.getElementById("refresher");
  refresher.classList.remove("hidden");
  refresher.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateStepLocks() {
  const step2 = document.querySelector('[data-step="2"]');
  const step3 = document.querySelector('[data-step="3"]');
  const step2Btn = step2.querySelector("button[data-go]");
  const step3Btn = step3.querySelector("button[data-go]");

  if (progress.assessmentPassed) {
    step2.classList.remove("locked");
    step2.classList.add("complete");
    step2.querySelector(".step-num").textContent = "✓";
    step2Btn.disabled = false;
    step2.querySelector(".lock-note")?.remove();
  } else {
    step2.classList.add("locked");
    step2Btn.disabled = true;
  }

  if (progress.sortPassed) {
    step3.classList.remove("locked");
    step3.classList.add("complete");
    step3.querySelector(".step-num").textContent = "✓";
    step3Btn.disabled = false;
    step3.querySelector(".lock-note")?.remove();
  } else {
    step3.classList.add("locked");
    step3Btn.disabled = true;
  }
}

renderQuestions("assessment-questions", assessmentQuestions, "assessment");
renderQuestions("quiz-questions", quizQuestions, "quiz");
updateStepLocks();

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    const id = btn.dataset.go;
    const panel = document.getElementById(id);
    panel.classList.remove("hidden");
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("assessment-submit").addEventListener("click", () => {
  const submitBtn = document.getElementById("assessment-submit");
  const result = document.getElementById("assessment-result");

  if (submitBtn.dataset.mode === "retry") {
    resetQuestions(assessmentQuestions, "assessment");
    result.classList.remove("show");
    result.textContent = "";
    submitBtn.textContent = "Check answers";
    submitBtn.dataset.mode = "grade";
    submitBtn.disabled = false;
    return;
  }

  const unanswered = assessmentQuestions.some((_, i) => !document.querySelector(`input[name="assessment-${i}"]:checked`));
  if (unanswered) {
    result.className = "result show result-fail";
    result.textContent = "Please answer every question before checking your answers.";
    return;
  }

  const { score, total } = gradeQuestions(assessmentQuestions, "assessment");
  progress.assessmentPassed = true;
  updateStepLocks();
  showResultMessage(result, score, total, "Step 2 is now unlocked — continue whenever you’re ready.");

  submitBtn.textContent = "Completed";
  submitBtn.disabled = true;
  submitBtn.dataset.mode = "done";
});

/* ---------- Step 2: drag-and-drop one food at a time ---------- */

let sortIndex = 0;
let sortCorrect = 0;
let sortFinished = false;
let sortBusy = false;
const sortResults = [];

const dragFood = document.getElementById("drag-food");
const dropZones = document.querySelectorAll(".drop-zone");
const dndStage = document.getElementById("dnd-stage");

function clearZoneItems() {
  document.querySelectorAll(".zone-items").forEach((list) => {
    list.innerHTML = "";
  });
  dropZones.forEach((zone) => zone.classList.remove("has-items"));
}

function saveFoodInZone(category, food, isCorrect) {
  const list = document.querySelector(`[data-zone-items="${category}"]`);
  const zone = document.querySelector(`.drop-zone[data-category="${category}"]`);
  if (!list) return;

  const chip = document.createElement("div");
  chip.className = `zone-chip ${isCorrect ? "zone-chip-correct" : "zone-chip-incorrect"}`;
  chip.title = isCorrect ? "Correct" : `Correct category: ${food.categoryLabel}`;
  chip.innerHTML = `<span class="zone-chip-emoji">${food.emoji}</span><span>${food.name}</span>`;
  list.appendChild(chip);
  zone?.classList.add("has-items");
}

function renderDragFood() {
  if (sortIndex >= foods.length) return;

  const food = foods[sortIndex];
  document.getElementById("sort-progress").textContent = `Food ${sortIndex + 1} of ${foods.length}`;
  dragFood.innerHTML = `
    <div class="food-emoji">${food.emoji}</div>
    <div class="food-name">${food.name}</div>
    <div class="food-desc">${food.desc}</div>
  `;
  dragFood.dataset.category = food.category;
  dragFood.classList.remove("dragging", "hidden");
  dragFood.setAttribute("draggable", "true");
  document.getElementById("sort-feedback").className = "feedback";
  document.getElementById("sort-feedback").textContent = "";
  // Re-enable drop zones for the next food, but keep previously saved chips
  dropZones.forEach((zone) => zone.classList.remove("drag-over", "disabled"));
  sortBusy = false;
}

function resetSortActivity() {
  sortIndex = 0;
  sortCorrect = 0;
  sortFinished = false;
  sortBusy = false;
  sortResults.length = 0;
  clearZoneItems();
  const result = document.getElementById("sort-result");
  result.className = "result";
  result.innerHTML = "";
  dndStage.classList.remove("hidden");
  document.querySelector(".dnd-item-wrap")?.classList.remove("hidden");
  renderDragFood();
}

function showSortResults() {
  const result = document.getElementById("sort-result");
  progress.sortPassed = true;
  updateStepLocks();

  // Keep the filled category board visible so dropped foods stay saved on screen
  document.querySelector(".dnd-item-wrap")?.classList.add("hidden");
  dropZones.forEach((zone) => zone.classList.add("disabled"));

  const percent = Math.round((sortCorrect / foods.length) * 100);
  result.className = "result show result-pass";

  const itemsHtml = sortResults.map((item) => `
    <li class="${item.isCorrect ? "sort-item-correct" : "sort-item-incorrect"}">
      <strong>${item.name}</strong>
      ${item.isCorrect
        ? `✓ Correct — ${item.correctLabel}`
        : `✗ Incorrect — you chose ${item.chosenLabel}; correct answer: ${item.correctLabel}`}
    </li>
  `).join("");

  result.innerHTML = `
    <strong>You scored ${sortCorrect}/${foods.length} (${percent}%).</strong>
    Step 3 is now unlocked. Your sorted foods are saved in the categories above.
    <ul class="sort-review">${itemsHtml}</ul>
    <button class="primary" type="button" id="sort-retry">Practice again</button>
  `;

  document.getElementById("sort-retry").addEventListener("click", resetSortActivity);
}

function handleSortDrop(selectedCategory) {
  if (sortFinished || sortBusy) return;
  sortBusy = true;

  const food = foods[sortIndex];
  const feedback = document.getElementById("sort-feedback");
  const isCorrect = selectedCategory === food.category;
  const zone = document.querySelector(`.drop-zone[data-category="${selectedCategory}"]`);

  if (isCorrect) sortCorrect += 1;

  sortResults.push({
    name: food.name,
    isCorrect,
    chosenLabel: categoryLabels[selectedCategory],
    correctLabel: food.categoryLabel
  });

  // Persist the food chip inside the chosen category
  saveFoodInZone(selectedCategory, food, isCorrect);
  zone?.classList.add("has-items");

  dragFood.classList.add("hidden");
  dropZones.forEach((z) => z.classList.add("disabled"));

  feedback.className = "feedback show";
  if (isCorrect) {
    feedback.textContent = `✓ Saved under “${categoryLabels[selectedCategory]}.”`;
    feedback.style.background = "#eef6e9";
    feedback.style.color = "#38532f";
  } else {
    feedback.textContent = `✗ Saved under “${categoryLabels[selectedCategory]}.” Correct category: ${food.categoryLabel}.`;
    feedback.style.background = "#fbefef";
    feedback.style.color = "#6b3f3f";
  }

  setTimeout(() => {
    if (sortIndex < foods.length - 1) {
      sortIndex += 1;
      renderDragFood();
    } else {
      sortFinished = true;
      showSortResults();
    }
  }, 850);
}

dragFood.addEventListener("dragstart", (e) => {
  if (sortFinished || sortBusy) {
    e.preventDefault();
    return;
  }
  dragFood.classList.add("dragging");
  e.dataTransfer.setData("text/plain", "food");
  e.dataTransfer.effectAllowed = "move";
});

dragFood.addEventListener("dragend", () => {
  dragFood.classList.remove("dragging");
  dropZones.forEach((zone) => zone.classList.remove("drag-over"));
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    if (sortFinished || sortBusy) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    zone.classList.add("drag-over");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("drag-over");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("drag-over");
    handleSortDrop(zone.dataset.category);
  });
});

/* Touch / pen fallback (mouse uses native HTML5 drag above) */
let pointerDragging = false;

dragFood.addEventListener("pointerdown", (e) => {
  if (sortFinished || sortBusy) return;
  if (e.pointerType === "mouse") return;
  pointerDragging = true;
  dragFood.classList.add("dragging");
  dragFood.setPointerCapture(e.pointerId);
});

dragFood.addEventListener("pointerup", (e) => {
  if (!pointerDragging) return;
  pointerDragging = false;
  dragFood.classList.remove("dragging");

  const el = document.elementFromPoint(e.clientX, e.clientY);
  const zone = el ? el.closest(".drop-zone") : null;
  dropZones.forEach((z) => z.classList.remove("drag-over"));
  if (zone && !zone.classList.contains("disabled")) {
    handleSortDrop(zone.dataset.category);
  }
});

dragFood.addEventListener("pointercancel", () => {
  pointerDragging = false;
  dragFood.classList.remove("dragging");
  dropZones.forEach((z) => z.classList.remove("drag-over"));
});

document.addEventListener("pointermove", (e) => {
  if (!pointerDragging) return;
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const zone = el ? el.closest(".drop-zone") : null;
  dropZones.forEach((z) => z.classList.toggle("drag-over", z === zone));
});

renderDragFood();

document.getElementById("quiz-submit").addEventListener("click", () => {
  const submitBtn = document.getElementById("quiz-submit");
  const result = document.getElementById("quiz-result");

  if (submitBtn.dataset.mode === "retry") {
    resetQuestions(quizQuestions, "quiz");
    result.classList.remove("show");
    result.textContent = "";
    submitBtn.textContent = "Submit knowledge check";
    submitBtn.dataset.mode = "grade";
    submitBtn.disabled = false;
    return;
  }

  const unanswered = quizQuestions.some((_, i) => !document.querySelector(`input[name="quiz-${i}"]:checked`));
  if (unanswered) {
    result.className = "result show result-fail";
    result.textContent = "Please answer every question before submitting.";
    return;
  }

  const { score, total } = gradeQuestions(quizQuestions, "quiz");
  progress.quizPassed = true;
  showResultMessage(
    result,
    score,
    total,
    "Great work — you completed the module! Scroll down for a refresher."
  );

  submitBtn.textContent = "Completed";
  submitBtn.disabled = true;
  submitBtn.dataset.mode = "done";
  showRefresher();
});
