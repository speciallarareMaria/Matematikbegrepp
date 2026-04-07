const toggleButtons = document.querySelectorAll(".card-toggle");
const toggleAllBtn = document.getElementById("toggleAllBtn");

function setOpenState(button, isOpen) {
  const content = button.nextElementSibling;
  button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  content.hidden = !isOpen;
}

function areAllOpen() {
  return [...toggleButtons].every(
    (button) => button.getAttribute("aria-expanded") === "true"
  );
}

function updateMainButton() {
  toggleAllBtn.textContent = areAllOpen() ? "Stäng alla kort" : "Visa alla kort";
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setOpenState(button, !isOpen);
    updateMainButton();
  });
});

toggleAllBtn.addEventListener("click", () => {
  const shouldOpen = !areAllOpen();
  toggleButtons.forEach((button) => setOpenState(button, shouldOpen));
  updateMainButton();
});

updateMainButton();
