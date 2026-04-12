// Grundläggande navigation
document.querySelectorAll('.nav-link, .theme-card').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = (btn.dataset.section || "").toLowerCase();
    showSection(sectionId);
  });
});
function showSection(sectionId) {
  document.querySelectorAll('.cards-section, .overview').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (!sectionId || sectionId === "overview") {
    document.getElementById('overview-section').classList.add('active');
    document.querySelector('.nav-link[data-section="overview"]').classList.add('active');
  } else {
    document.getElementById(`${sectionId}-section`).classList.add('active');
    document.querySelector(`.nav-link[data-section="${sectionId}"]`).classList.add('active');
  }
}

// Exempeldata för kort
const procentCards = [
  {
    question: 'Vad betyder procent?',
    content: '<p>Procent betyder hundradel eller “per hundra”.</p><p>1% är 1 av 100. 25% är 25 av 100.</p>'
  },
  {
    question: 'Hur omvandlar man procent till decimal?',
    content: '<p>Dela procentsatsen med 100.<br>Ex: 75% = 0,75</p>'
  }
  // ...lägg till fler!
];
const brakCards = [
  {
    question: 'Vad är ett bråk?',
    content: '<p>Ett bråk är en del av en helhet. Exempel: ¼ är en fjärdedel.</p>'
  }
];
const tidCards = [
  {
    question: 'Vad är en timme?',
    content: '<p>En timme är 60 minuter.</p>'
  }
];

// Generera mattkort
function generateCards(cards, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";
  cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'math-card';
    div.innerHTML = `
      <div class="card-question">${card.question}</div>
      <button class="card-toggle-btn">Visa svar</button>
      <div class="card-content">${card.content}</div>
    `;
    div.querySelector('.card-toggle-btn').onclick = () => {
      div.classList.toggle('open');
    };
    grid.appendChild(div);
  });
}
// Initiera kort vid sidstart
generateCards(procentCards, 'procent-card-grid');
generateCards(brakCards, 'bråk-card-grid');
generateCards(tidCards, 'tid-card-grid');

// Dark mode
const darkBtn = document.getElementById('toggleDarkMode');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkBtn.textContent = document.body.classList.contains('dark') ? 'Ljust läge' : 'Dark Mode';
});
// Spara dark mode-inställning?
