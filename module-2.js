const assessmentQuestions = [
  {
    q: "According to USDA MyPlate, about how much of your plate should be fruits and vegetables?",
    choices: [
      "About 25% of the plate (roughly one quarter fruits and vegetables combined)",
      "About 50% of the plate (roughly half fruits and vegetables combined)",
      "About 33% of the plate (roughly one third fruits and vegetables combined)",
      "About 75% of the plate (roughly three quarters fruits and vegetables combined)"
    ],
    answer: 1
  },
  {
    q: "Which choice best fits the Grains group on MyPlate?",
    choices: [
      "Grilled chicken breast served as the main item on the plate",
      "Low-fat yogurt or cheese counted as the main grain food",
      "Brown rice, whole-wheat bread, oatmeal, or other grain foods",
      "Apple slices or orange wedges counted as the grain portion"
    ],
    answer: 2
  },
  {
    q: "MyPlate protein foods include:",
    choices: [
      "Dairy products such as milk, yogurt, and cheese as the protein group",
      "Seafood, poultry, eggs, beans, nuts, seeds, and lean meats",
      "Fruits and 100% fruit juice as the main protein foods",
      "Grain foods such as bread, pasta, and rice as the protein group"
    ],
    answer: 1
  },
  {
    q: "Which drink fits MyPlate guidance most of the time?",
    choices: [
      "Regular soda or sweetened fruit drinks with most meals",
      "Energy drinks used daily for hydration during activities",
      "Water or other unsweetened beverages with meals and snacks",
      "Sweet tea or flavored coffee drinks with added sugar at each meal"
    ],
    answer: 2
  },
  {
    q: "On MyPlate, dairy foods can include:",
    choices: [
      "Butter and heavy cream as the main daily dairy choices",
      "Ice cream and whipped toppings counted as the dairy serving",
      "Coffee creamers and sweetened dessert drinks as dairy foods",
      "Milk, yogurt, cheese, or fortified soy alternatives"
    ],
    answer: 3
  }
];

const foodLibrary = [
  {
    category: "Grains & Starches",
    icon: "🌾",
    items: [
      { id: "dinner-roll", name: "Dinner Roll", emoji: "🍞", serving: "1 roll", cal: 120, carbs: 22, protein: 4, fat: 2, fiber: 1, group: "grains", veg: true },
      { id: "mashed-potato", name: "Mashed Potatoes", emoji: "🥔", serving: "1/2 cup", cal: 110, carbs: 20, protein: 2, fat: 4, fiber: 2, group: "grains", veg: true },
      { id: "tater-tots", name: "Tater Tots", emoji: "🍟", serving: "8 tots", cal: 160, carbs: 20, protein: 2, fat: 8, fiber: 2, group: "grains", veg: true },
      { id: "spaghetti", name: "Spaghetti", emoji: "🍝", serving: "1 cup cooked", cal: 220, carbs: 43, protein: 8, fat: 1, fiber: 2.5, group: "grains", veg: true },
      { id: "soft-pretzel", name: "Soft Pretzel", emoji: "🥨", serving: "1 pretzel", cal: 180, carbs: 36, protein: 5, fat: 1.5, fiber: 1, group: "grains", veg: true },
      { id: "tortilla", name: "Flour Tortilla", emoji: "🫓", serving: "1 medium", cal: 140, carbs: 24, protein: 4, fat: 3.5, fiber: 1, group: "grains", veg: true }
    ]
  },
  {
    category: "Hot Lunch & Dinner Mains",
    icon: "🍽️",
    subgroups: [
      {
        label: "Vegetarian",
        veg: true,
        items: [
          { id: "mac-cheese", name: "Mac & Cheese", emoji: "🧀", serving: "1 cup", cal: 310, carbs: 32, protein: 12, fat: 15, fiber: 1, group: "protein", veg: true },
          { id: "cheese-pizza", name: "Cheese Pizza", emoji: "🍕", serving: "1 slice", cal: 285, carbs: 36, protein: 12, fat: 10, fiber: 2, group: "protein", veg: true },
          { id: "pbj", name: "PB&J Sandwich", emoji: "🥪", serving: "1 sandwich", cal: 370, carbs: 46, protein: 12, fat: 16, fiber: 4, group: "protein", veg: true },
          { id: "bean-burrito", name: "Bean Burrito", emoji: "🌯", serving: "1 burrito", cal: 320, carbs: 48, protein: 12, fat: 8, fiber: 9, group: "protein", veg: true }
        ]
      },
      {
        label: "Non-Vegetarian",
        veg: false,
        items: [
          { id: "chicken-nuggets", name: "Chicken Nuggets", emoji: "🍗", serving: "5 nuggets", cal: 250, carbs: 14, protein: 14, fat: 15, fiber: 1, group: "protein", veg: false },
          { id: "hamburger", name: "Hamburger", emoji: "🍔", serving: "1 sandwich", cal: 350, carbs: 30, protein: 20, fat: 16, fiber: 1, group: "protein", veg: false },
          { id: "hot-dog", name: "Hot Dog", emoji: "🌭", serving: "1 with bun", cal: 290, carbs: 24, protein: 11, fat: 17, fiber: 1, group: "protein", veg: false },
          { id: "meat-sauce", name: "Spaghetti & Meat Sauce", emoji: "🍝", serving: "1 cup sauce + pasta", cal: 340, carbs: 38, protein: 18, fat: 12, fiber: 4, group: "protein", veg: false },
          { id: "tacos", name: "Beef Tacos", emoji: "🌮", serving: "2 soft tacos", cal: 360, carbs: 28, protein: 22, fat: 18, fiber: 3, group: "protein", veg: false },
          { id: "meatloaf", name: "Meatloaf", emoji: "🍖", serving: "1 slice (4 oz)", cal: 280, carbs: 10, protein: 22, fat: 16, fiber: 1, group: "protein", veg: false },
          { id: "roast-chicken", name: "Roast Chicken", emoji: "🍗", serving: "3 oz", cal: 160, carbs: 0, protein: 25, fat: 6, fiber: 0, group: "protein", veg: false },
          { id: "fish-sticks", name: "Fish Sticks", emoji: "🐟", serving: "4 sticks", cal: 230, carbs: 18, protein: 12, fat: 12, fiber: 1, group: "protein", veg: false }
        ]
      }
    ]
  },
  {
    category: "Vegetables & Sides",
    icon: "🥦",
    items: [
      { id: "corn", name: "Corn", emoji: "🌽", serving: "1/2 cup", cal: 80, carbs: 18, protein: 3, fat: 1, fiber: 2, group: "vegetables", veg: true },
      { id: "green-beans", name: "Green Beans", emoji: "🥒", serving: "1/2 cup", cal: 25, carbs: 5, protein: 1, fat: 0, fiber: 2, group: "vegetables", veg: true },
      { id: "peas", name: "Peas", emoji: "🟢", serving: "1/2 cup", cal: 60, carbs: 11, protein: 4, fat: 0.5, fiber: 4, group: "vegetables", veg: true },
      { id: "side-salad", name: "Side Salad", emoji: "🥗", serving: "1 cup", cal: 35, carbs: 6, protein: 2, fat: 0.5, fiber: 2, group: "vegetables", veg: true },
      { id: "broccoli", name: "Steamed Broccoli", emoji: "🥦", serving: "1/2 cup", cal: 30, carbs: 6, protein: 2.5, fat: 0.5, fiber: 3, group: "vegetables", veg: true },
      { id: "carrot-sticks", name: "Carrot Sticks", emoji: "🥕", serving: "1 cup", cal: 50, carbs: 12, protein: 1, fat: 0.5, fiber: 3.5, group: "vegetables", veg: true },
      { id: "coleslaw", name: "Coleslaw", emoji: "🥬", serving: "1/2 cup", cal: 90, carbs: 8, protein: 1, fat: 6, fiber: 2, group: "vegetables", veg: true }
    ]
  },
  {
    category: "Fruits & Dairy",
    icon: "🍎",
    items: [
      { id: "apple", name: "Fresh Apple", emoji: "🍎", serving: "1 medium", cal: 95, carbs: 25, protein: 0, fat: 0.5, fiber: 4, group: "fruits", veg: true },
      { id: "banana", name: "Banana", emoji: "🍌", serving: "1 medium", cal: 105, carbs: 27, protein: 1, fat: 0.5, fiber: 3, group: "fruits", veg: true },
      { id: "orange", name: "Orange Wedges", emoji: "🍊", serving: "1 medium", cal: 65, carbs: 16, protein: 1, fat: 0, fiber: 3, group: "fruits", veg: true },
      { id: "canned-peaches", name: "Canned Peaches", emoji: "🍑", serving: "1/2 cup", cal: 70, carbs: 18, protein: 1, fat: 0, fiber: 1.5, group: "fruits", veg: true },
      { id: "white-milk", name: "Carton of Milk", emoji: "🥛", serving: "8 fl oz", cal: 120, carbs: 12, protein: 8, fat: 5, fiber: 0, group: "dairy", veg: true },
      { id: "choc-milk", name: "Chocolate Milk", emoji: "🍫", serving: "8 fl oz", cal: 160, carbs: 26, protein: 8, fat: 3, fiber: 0, group: "dairy", veg: true },
      { id: "string-cheese", name: "String Cheese", emoji: "🧀", serving: "1 stick", cal: 80, carbs: 1, protein: 7, fat: 6, fiber: 0, group: "dairy", veg: false },
      { id: "yogurt", name: "Yogurt Cup", emoji: "🥛", serving: "6 oz", cal: 130, carbs: 18, protein: 7, fat: 2, fiber: 0, group: "dairy", veg: true }
    ]
  },
  {
    category: "Desserts & Treats",
    icon: "🍪",
    items: [
      { id: "cookie", name: "Chocolate Chip Cookie", emoji: "🍪", serving: "1 cookie", cal: 160, carbs: 22, protein: 2, fat: 8, fiber: 1, group: "extras", veg: true },
      { id: "brownie", name: "Brownie", emoji: "🍫", serving: "1 square", cal: 250, carbs: 32, protein: 3, fat: 13, fiber: 2, group: "extras", veg: true },
      { id: "apple-pie", name: "Apple Pie", emoji: "🥧", serving: "1 slice", cal: 320, carbs: 45, protein: 3, fat: 15, fiber: 2, group: "extras", veg: true },
      { id: "ice-cream", name: "Ice Cream", emoji: "🍨", serving: "1/2 cup", cal: 140, carbs: 17, protein: 2, fat: 7, fiber: 0, group: "dairy", veg: true }
    ]
  }
];

const allFoods = foodLibrary.flatMap((cat) =>
  cat.subgroups ? cat.subgroups.flatMap((s) => s.items) : cat.items
);

const quizQuestions = [
  {
    q: "A balanced MyPlate-style dinner usually includes:",
    choices: [
      "Mostly fried sides and dessert with little or no vegetables or fruit",
      "Vegetables or fruit, a grain or starchy side, and a protein food on the same plate",
      "Protein foods only, without grains, vegetables, or fruit on the plate",
      "Sweet drinks and snack foods without balanced food groups at the meal"
    ],
    answer: 1
  },
  {
    q: "Which plate is closest to MyPlate guidance?",
    choices: [
      "Large soda, french fries, and a chocolate chip cookie as the main meal",
      "Three hamburger patties with no vegetables, fruit, or grain foods",
      "Roast chicken, mashed potatoes, green beans, corn, and fresh apple slices",
      "Candy, chips, and a sweet drink with no protein or produce foods"
    ],
    answer: 2
  },
  {
    q: "Dairy on MyPlate can include:",
    choices: [
      "Ice cream and whipped toppings counted as the main dairy serving each day",
      "Butter and cream used in cooking counted as the full dairy group",
      "Sweetened coffee creamers and dessert drinks as the daily dairy choice",
      "Milk, yogurt, cheese, or fortified soy alternatives as part of meals or snacks"
    ],
    answer: 3
  },
  {
    q: "Making half your grains whole grains means choosing foods like:",
    choices: [
      "White bread, white rice, and refined pasta at every meal",
      "Brown rice, oatmeal, whole-wheat bread, or whole-grain pasta",
      "Sugar-sweetened breakfast cereal as the main grain choice daily",
      "Fried chips and crackers made from refined flour most days"
    ],
    answer: 1
  },
  {
    q: "About how much of a MyPlate-style plate should be fruits and vegetables together?",
    choices: [
      "About 10% of the plate (a small garnish of produce only)",
      "About 25% of the plate (roughly one quarter fruits and vegetables combined)",
      "About 50% of the plate (roughly half fruits and vegetables combined)",
      "About 0% of the plate (protein and grains only, no produce needed)"
    ],
    answer: 2
  }
];

const state = {
  assessmentDone: false,
  plateDone: false,
  quizDone: false,
  plateItems: []
};

function $(id) {
  return document.getElementById(id);
}

function unlock(step) {
  const card = document.querySelector(`.step[data-step="${step}"]`);
  if (!card) return;
  card.classList.remove("locked");
  const btn = card.querySelector("button");
  btn.disabled = false;
  const note = card.querySelector(".lock-note");
  if (note) note.remove();
}

function showPanel(id) {
  ["assessment", "plate", "quiz", "refresher"].forEach((panel) => {
    $(panel).classList.toggle("hidden", panel !== id && !(panel === "refresher" && state.quizDone && id === "quiz"));
  });
  if (id === "quiz" && state.quizDone) {
    $("refresher").classList.remove("hidden");
  }
  $(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestions(containerId, questions, namePrefix) {
  const root = $(containerId);
  root.innerHTML = questions
    .map(
      (item, index) => `
      <article class="question" id="${namePrefix}-question-${index}" data-q="${index}">
        <h3>${index + 1}. ${item.q}</h3>
        <div class="choices">
          ${item.choices
            .map(
              (choice, choiceIndex) => `
            <label class="option" data-option="${choiceIndex}">
              <input type="radio" name="${namePrefix}-${index}" value="${choiceIndex}" />
              <span>${choice}</span>
            </label>`
            )
            .join("")}
        </div>
        <div class="question-feedback"></div>
      </article>`
    )
    .join("");
}

function grade(containerId, questions, namePrefix, resultId, onPass) {
  const root = $(containerId);
  let correct = 0;
  questions.forEach((item, index) => {
    const selected = root.querySelector(`input[name="${namePrefix}-${index}"]:checked`);
    const article = root.querySelector(`.question[data-q="${index}"]`);
    const feedback = article.querySelector(".question-feedback");
    const options = article.querySelectorAll(".option");
    const value = selected ? Number(selected.value) : null;
    const isCorrect = value === item.answer;

    if (isCorrect) correct += 1;

    article.classList.remove("question-correct", "question-incorrect");
    article.classList.add(isCorrect ? "question-correct" : "question-incorrect");

    options.forEach((optEl) => {
      const optIndex = Number(optEl.dataset.option);
      optEl.classList.remove("option-correct", "option-wrong");
      if (optIndex === item.answer) optEl.classList.add("option-correct");
      else if (value === optIndex) optEl.classList.add("option-wrong");
    });

    article.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });

    if (isCorrect) {
      feedback.textContent = "✓ Correct";
      feedback.className = "question-feedback correct-text";
    } else if (value === null) {
      feedback.textContent = `✗ Not answered. The correct answer is: ${item.choices[item.answer]}`;
      feedback.className = "question-feedback incorrect-text";
    } else {
      feedback.textContent = `✗ Incorrect. The correct answer is: ${item.choices[item.answer]}`;
      feedback.className = "question-feedback incorrect-text";
    }
  });

  const score = Math.round((correct / questions.length) * 100);
  const result = $(resultId);
  result.className = "result show result-pass";
  const nextMessage =
    resultId === "quiz-result"
      ? "Module complete — scroll down for a refresher."
      : "Next step unlocked — continue whenever you’re ready.";
  result.innerHTML = `<strong>You scored ${correct}/${questions.length} (${score}%).</strong> ${nextMessage}`;
  onPass();
}

function foodById(id) {
  return allFoods.find((f) => f.id === id);
}

function foodCardHtml(food) {
  return `
    <div class="food-card" draggable="true" data-id="${food.id}" title="Drag or click to add to your plate">
      <div class="food-card-media">
        <span class="food-emoji">${food.emoji}</span>
        <span class="diet-badge ${food.veg ? "veg" : "nonveg"}" title="${food.veg ? "Vegetarian" : "Non-vegetarian"}"></span>
      </div>
      <strong>${food.name}</strong>
      <span class="serving">${food.serving}</span>
      <span class="macros">${food.cal} cal · ${food.protein}g protein</span>
    </div>`;
}

function bindFoodCards(root) {
  root.querySelectorAll(".food-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", card.dataset.id);
      event.dataTransfer.effectAllowed = "copy";
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
    card.addEventListener("click", () => addFoodToPlate(card.dataset.id));
  });
}

function renderFoodLibrary() {
  const root = $("food-library");
  root.innerHTML = foodLibrary
    .map((cat) => {
      if (cat.subgroups) {
        return `
          <div class="food-category">
            <h4><span class="cat-icon">${cat.icon}</span> ${cat.category}</h4>
            ${cat.subgroups
              .map(
                (sub) => `
              <div class="food-subgroup">
                <div class="subgroup-label ${sub.veg ? "veg" : "nonveg"}">
                  <span class="subgroup-dot"></span> ${sub.label}
                </div>
                <div class="food-card-grid">
                  ${sub.items.map(foodCardHtml).join("")}
                </div>
              </div>`
              )
              .join("")}
          </div>`;
      }
      return `
        <div class="food-category">
          <h4><span class="cat-icon">${cat.icon}</span> ${cat.category}</h4>
          <div class="food-card-grid">
            ${cat.items.map(foodCardHtml).join("")}
          </div>
        </div>`;
    })
    .join("");

  bindFoodCards(root);
}

function clearPlateMessages() {
  closeScoreModal();
}

function addFoodToPlate(id) {
  if (!foodById(id)) return;
  if (state.plateItems.length >= 8) {
    openScoreModal({
      score: 0,
      statusHtml: `<span class="status-warn">Plate is full</span>`,
      tips: ["Remove an item or reset to add more foods."],
      nutrition: { cal: 0, fiber: 0, carbs: 0, protein: 0, fat: 0 },
      macros: { carbs: 0, protein: 0, fat: 0 },
      passed: false,
      forceTipsOnly: true
    });
    return;
  }
  state.plateItems.push(id);
  clearPlateMessages();
  updatePlateUI();
}

function updatePlateUI() {
  const empty = $("plate-empty");
  const servings = $("plate-servings");
  const count = $("plate-count");
  const checkBtn = $("check-plate");

  if (state.plateItems.length === 0) {
    empty.hidden = false;
    servings.innerHTML = "";
  } else {
    empty.hidden = true;
    servings.innerHTML = state.plateItems
      .map((id, index) => {
        const food = foodById(id);
        return `<div class="plate-bowl" data-index="${index}" title="${food.name}">
          <span class="bowl-emoji">${food.emoji}</span>
          <span class="bowl-name">${food.name}</span>
          <button type="button" class="chip-remove" aria-label="Remove ${food.name}">×</button>
        </div>`;
      })
      .join("");

    servings.querySelectorAll(".chip-remove").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        const chip = btn.closest(".plate-bowl");
        const index = Number(chip.dataset.index);
        state.plateItems.splice(index, 1);
        clearPlateMessages();
        updatePlateUI();
      });
    });
  }

  const n = state.plateItems.length;
  count.textContent = `${n} serving${n === 1 ? "" : "s"} added · Aim for 4–6 servings`;
  checkBtn.disabled = n < 2;
}

function nutritionTotals(items) {
  return items.reduce(
    (acc, food) => {
      acc.cal += food.cal || 0;
      acc.carbs += food.carbs || 0;
      acc.protein += food.protein || 0;
      acc.fat += food.fat || 0;
      acc.fiber += food.fiber || 0;
      return acc;
    },
    { cal: 0, carbs: 0, protein: 0, fat: 0, fiber: 0 }
  );
}

function macroPercents(nutrition) {
  const carbCal = nutrition.carbs * 4;
  const proteinCal = nutrition.protein * 4;
  const fatCal = nutrition.fat * 9;
  const total = carbCal + proteinCal + fatCal;
  if (total <= 0) return { carbs: 0, protein: 0, fat: 0 };
  return {
    carbs: Math.round((carbCal / total) * 100),
    protein: Math.round((proteinCal / total) * 100),
    fat: Math.round((fatCal / total) * 100)
  };
}

function scorePlate() {
  const items = state.plateItems.map(foodById);
  const groups = new Set(items.map((f) => f.group).filter((g) => g !== "extras"));
  const hasProtein = groups.has("protein");
  const hasGrains = groups.has("grains");
  const hasProduce = groups.has("vegetables") || groups.has("fruits");
  const hasDairy = groups.has("dairy");
  const extras = items.filter((f) => f.group === "extras").length;
  const count = items.length;
  const nutrition = nutritionTotals(items);
  const macros = macroPercents(nutrition);

  let score = 0;
  const notes = [];

  if (hasProtein) score += 25;
  else notes.push("Add a main protein (chicken nuggets, hamburger, roast chicken, PB&J, or bean burrito).");

  if (hasGrains) score += 25;
  else notes.push("Add a grain or starch (dinner roll, mashed potatoes, spaghetti, or tortilla).");

  if (hasProduce) score += 25;
  else notes.push("Add a vegetable or fruit.");

  if (count >= 4 && count <= 6) {
    score += 15;
  } else if (count === 3 || count === 7) {
    score += 8;
    notes.push("Aim for about 4–6 servings for a realistic meal.");
  } else if (count < 3) {
    notes.push("Add a few more foods to build a fuller meal (aim for 4–6 servings).");
  } else {
    score += 5;
    notes.push("That’s a lot of servings — try focusing on 4–6 key foods.");
  }

  if (hasDairy) score += 10;
  else notes.push("Optional boost: add dairy or a fortified soy alternative.");

  if (extras > 0) {
    score -= Math.min(15, extras * 8);
    notes.push("Desserts are fine sometimes — keep them as an extra, not the main meal.");
  }

  score = Math.max(0, Math.min(100, score));

  const coreOk = hasProtein && hasGrains && hasProduce;

  return { score, notes, coreOk, groups, count, nutrition, macros };
}

function openScoreModal({ score, statusHtml, tips, nutrition, macros, passed }) {
  const modal = $("score-modal");
  $("score-number").textContent = String(score);
  $("score-number").className = `score-hero-number ${passed ? "pass" : "fail"}`;
  $("score-status").innerHTML = statusHtml;

  $("nut-cal").textContent = Math.round(nutrition.cal);
  $("nut-fiber").textContent = `${Math.round(nutrition.fiber)}g`;
  $("nut-carbs").textContent = `${Math.round(nutrition.carbs)}g`;
  $("nut-protein").textContent = `${Math.round(nutrition.protein)}g`;
  $("nut-fat").textContent = `${Math.round(nutrition.fat)}g`;

  $("macro-bars").innerHTML = `
    <div class="macro-row">
      <div class="macro-label"><span>Carbs</span><strong class="accent-carb">${macros.carbs}%</strong></div>
      <div class="macro-track"><div class="macro-fill carbs" style="width:${macros.carbs}%"></div></div>
    </div>
    <div class="macro-row">
      <div class="macro-label"><span>Protein</span><strong>${macros.protein}%</strong></div>
      <div class="macro-track"><div class="macro-fill protein" style="width:${macros.protein}%"></div></div>
    </div>
    <div class="macro-row">
      <div class="macro-label"><span>Fat</span><strong>${macros.fat}%</strong></div>
      <div class="macro-track"><div class="macro-fill fat" style="width:${macros.fat}%"></div></div>
    </div>
  `;

  const tipItems = tips.length
    ? tips.map((t) => `<li>${t}</li>`).join("")
    : "<li>Great job! Your plate has good variety and balanced macros.</li>";
  $("score-tips").innerHTML = `<div class="tips-title">💡 Tips to Improve</div><ul>${tipItems}</ul>`;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeScoreModal() {
  const modal = $("score-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function setupPlateBuilder() {
  renderFoodLibrary();
  updatePlateUI();

  const drop = $("plate-drop");
  drop.addEventListener("dragover", (event) => {
    event.preventDefault();
    drop.classList.add("drag-over");
  });
  drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
  drop.addEventListener("drop", (event) => {
    event.preventDefault();
    drop.classList.remove("drag-over");
    addFoodToPlate(event.dataTransfer.getData("text/plain"));
  });

  $("reset-plate").addEventListener("click", () => {
    state.plateItems = [];
    clearPlateMessages();
    updatePlateUI();
  });

  $("check-plate").addEventListener("click", () => {
    if (state.plateItems.length < 2) return;
    const { score, notes, coreOk, nutrition, macros } = scorePlate();

    if (!state.plateDone) {
      state.plateDone = true;
      unlock(3);
    }

    let statusHtml;
    if (coreOk && score >= 80) {
      statusHtml = `<span class="status-ok">● Balanced Plate! Excellent variety and nutrition!</span>`;
    } else if (coreOk) {
      statusHtml = `<span class="status-ok">● Nice effort — Step 3 is unlocked. Keep refining your plate for better balance.</span>`;
    } else {
      statusHtml = `<span class="status-warn">● Needs more balance — include protein, grains, and vegetable/fruit. Step 3 is still unlocked.</span>`;
    }

    openScoreModal({
      score,
      statusHtml,
      tips: notes,
      nutrition,
      macros,
      passed: coreOk && score >= 80
    });
  });

  document.querySelectorAll("[data-close-score]").forEach((el) => {
    el.addEventListener("click", closeScoreModal);
  });

  $("score-try-again").addEventListener("click", () => {
    state.plateItems = [];
    closeScoreModal();
    updatePlateUI();
  });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-go");
    if (target === "plate" && !state.assessmentDone) return;
    if (target === "quiz" && !state.plateDone) return;
    showPanel(target);
  });
});

$("assessment-submit").addEventListener("click", () => {
  grade("assessment-questions", assessmentQuestions, "a", "assessment-result", () => {
    state.assessmentDone = true;
    unlock(2);
  });
});

$("quiz-submit").addEventListener("click", () => {
  grade("quiz-questions", quizQuestions, "q", "quiz-result", () => {
    state.quizDone = true;
    $("refresher").classList.remove("hidden");
    $("refresher").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderQuestions("assessment-questions", assessmentQuestions, "a");
renderQuestions("quiz-questions", quizQuestions, "q");
setupPlateBuilder();
