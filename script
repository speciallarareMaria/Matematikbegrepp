const cardButtons = document.querySelectorAll(".card-front");
const toggleAllBtn = document.getElementById("toggleAllBtn");

function setCardState(button, expanded) {
  const answer = button.nextElementSibling;
  button.setAttribute("aria-expanded", expanded ? "true" : "false");
  answer.hidden = !expanded;
}

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setCardState(button, !isExpanded);
    updateToggleAllButtonText();
  });
});

function allCardsOpen() {
  return [...cardButtons].every(
    (button) => button.getAttribute("aria-expanded") === "true"
  );
}

function openAllCards() {
  cardButtons.forEach((button) => setCardState(button, true));
}

function closeAllCards() {
  cardButtons.forEach((button) => setCardState(button, false));
}

function updateToggleAllButtonText() {
  toggleAllBtn.textContent = allCardsOpen() ? "Dölj alla svar" : "Visa alla svar";
}

toggleAllBtn.addEventListener("click", () => {
  if (allCardsOpen()) {
    closeAllCards();
  } else {
    openAllCards();
  }
  updateToggleAllButtonText();
});

updateToggleAllButtonText();
