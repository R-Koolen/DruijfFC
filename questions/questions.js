const CATEGORIES = [
  {
    id: 'memories',
    name: 'Herinneringen',
    emoji: '💛',
    color: '#D4A017',
    questions: [
      "Wat is je mooiste herinnering uit je jeugd?",
      "Wat was de leukste familietraditie waar je mee opgroeide?",
      "Welk moment zou je het liefst opnieuw willen beleven?",
      "Wat is het grappigste dat je als kind is overkomen?",
      "Welke geur of welk liedje brengt je meteen terug naar vroeger?",
      "Wie was je beste vriend als kind en wat deden jullie allemaal?",
      "Wat is het beste cadeau dat je ooit hebt gekregen?",
      "Welke angst uit je jeugd ben je volledig ontgroeid?",
      "Wat is het eerste waarop je je echt trots herinnert?",
      "Welke plek uit je jeugd zou je het liefst nog eens bezoeken?",
      "Welke film of welk boek heeft jou gevormd als persoon?",
      "Wat wilde je worden toen je klein was?",
      "Wat is het stoeiigste dat je ooit als kind hebt uitgehaald?",
      "Wat is een les die je op de harde manier hebt geleerd?",
    ]
  },
  {
    id: 'dreams',
    name: 'Dromen',
    emoji: '🚀',
    color: '#E8604C',
    questions: [
      "Wat is een droom die je nog nooit aan iemand hebt verteld?",
      "Als je overal ter wereld kon wonen, waar zou dat dan zijn?",
      "Hoe ziet jouw ideale leven er over 10 jaar uit?",
      "Als geld geen rol speelt, hoe zou je dan je dagen vullen?",
      "Wat zou je heel graag willen leren maar ben je nog niet aan begonnen?",
      "Als je een vaardigheid in één nacht kon beheersen, welke zou dat zijn?",
      "Welke reis staat al heel lang op je lijstje?",
      "Wat is een project dat je wil starten maar steeds uitstelt?",
      "Wat zou je doen als je wist dat je niet kon falen?",
      "Aan welke versie van jezelf werk je nog?",
      "Als je een boek zou schrijven, waar zou het over gaan?",
      "Wat is op dit moment je grootste ambitie?",
    ]
  },
  {
    id: 'values',
    name: 'Waarden',
    emoji: '⭐',
    color: '#5DB075',
    questions: [
      "Welke waarde zou je nooit opgeven?",
      "Wat is het beste advies dat je ooit hebt gekregen?",
      "Wat betekent succes écht voor jou?",
      "Wat begrijpen mensen het vaakst verkeerd over jou?",
      "Wat is iets waar je vroeger in geloofde maar nu heel anders over denkt?",
      "Wat is de belangrijkste eigenschap in een goede vriend?",
      "Wanneer voel jij je het meest levend?",
      "Welke gewoonte ben je trots op dat je hebt opgebouwd?",
      "Hoe geef en ontvang jij het liefst liefde of genegenheid?",
      "Wat zou jij zeggen dat iedereen minstens één keer in het leven moet doen?",
      "Wat is een klein ding dat jouw dag echt beter maakt?",
      "Waarover zou jij willen dat mensen openlijker praten?",
    ]
  },
  {
    id: 'fun',
    name: 'Lol',
    emoji: '😂',
    color: '#F5C842',
    questions: [
      "Wat is jouw grootste guilty pleasure?",
      "Wat is een mening die jij hebt maar die de meeste mensen niet delen?",
      "Wat is het slechtste kapsel of de slechtste modekeuze die je ooit hebt gehad?",
      "Wat is het meest gênante liedje op jouw afspeellijst?",
      "Als je voor de rest van je leven maar één gerecht mocht eten, wat zou dat zijn?",
      "Waar zou jij absoluut geen compromis over sluiten, hoe belachelijk ook?",
      "Wat is jouw vaste karaokenummer?",
      "Wat is het vreemdste dat je ooit hebt gegoogeld?",
      "Welke serie ben je op dit moment stiekem geobsedeerd door?",
      "Wat is het meest bizarre talent dat je hebt?",
      "Wat is jouw meest irrationele angst?",
      "Als je een hond was, welk ras zou je dan zijn?",
    ]
  },
  {
    id: 'relationships',
    name: 'Relaties',
    emoji: '❤️',
    color: '#E07070',
    questions: [
      "Wat zorgt er meteen voor dat je je dicht bij iemand voelt?",
      "Wat heb je van anderen nodig maar vraag je zelden om?",
      "Hoe weet jij dat je iemand écht vertrouwt?",
      "Hoe ziet een perfecte dag eruit met iemand van wie je houdt?",
      "Welke eigenschap bewonder je het meest in de mensen om je heen?",
      "Wat is een klein gebaar waardoor jij je echt gezien voelt?",
      "Wat is het aardigste dat iemand ooit voor jou heeft gedaan?",
      "Wat denk jij dat een vriendschap laat standhouden?",
      "Hoe ga jij meestal om met een conflict met iemand die je dierbaar is?",
      "Wat heb je iemand nooit gezegd maar eigenlijk wel zou moeten?",
    ]
  },
  {
    id: 'deep',
    name: 'Diep',
    emoji: '🔮',
    color: '#9B8AE0',
    questions: [
      "Welke vraag over het leven houdt jou echt wakker 's nachts?",
      "Wat probeer je op dit moment nog uit te vogelen over jezelf?",
      "Wat geeft jouw leven op dit moment de meeste betekenis?",
      "Als je één ding over jouw toekomst mocht weten, wat zou dat zijn?",
      "Wat heb je pas recent echt begrepen over jezelf?",
      "Wat is de moeilijkste beslissing die je ooit hebt moeten nemen?",
      "Wat is iets waar je spijt van hebt en wat heb je ervan geleerd?",
      "Als je één ding tegen je jongere zelf mocht zeggen, wat zou dat zijn?",
      "Welke angst probeer je actief te overwinnen?",
      "Wat betekent thuis voor jou?",
      "Wat heeft jouw kijk op het leven compleet veranderd?",
      "Wat wil je dat mensen echt over jou weten?",
    ]
  },
];

// Track shown questions per category to avoid repeats in a session
const shown = {};
CATEGORIES.forEach(c => { shown[c.id] = []; });

let currentCategoryId = null;

function pickQuestion(categoryId, excludeQuestion = null) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  let pool = cat.questions.filter(q => !shown[categoryId].includes(q) && q !== excludeQuestion);
  if (pool.length === 0) {
    // Reset if all seen
    shown[categoryId] = excludeQuestion ? [excludeQuestion] : [];
    pool = cat.questions.filter(q => q !== excludeQuestion);
  }
  const q = pool[Math.floor(Math.random() * pool.length)];
  shown[categoryId].push(q);
  return q;
}

function pickDifferentCategory(currentId) {
  const others = CATEGORIES.filter(c => c.id !== currentId);
  return others[Math.floor(Math.random() * others.length)].id;
}

// ── DOM refs ──
const card       = document.getElementById('qCard');
const cardBlob   = document.getElementById('qCardBlob');
const qEmoji     = document.getElementById('qEmoji');
const qText      = document.getElementById('qText');
const catBadge   = document.getElementById('catBadge');
const btnSkip    = document.getElementById('btnSkip');
const btnNext    = document.getElementById('btnNext');

let currentQuestion = null;

function showQuestion(categoryId, question, exitDirection = null) {
  const cat = CATEGORIES.find(c => c.id === categoryId);

  function renderNew() {
    currentCategoryId = categoryId;
    currentQuestion   = question;

    catBadge.textContent = `${cat.emoji}  ${cat.name}`;
    document.documentElement.style.setProperty('--cat-color', cat.color);
    cardBlob.style.background = cat.color;
    qEmoji.textContent = cat.emoji;
    qText.textContent  = question;

    card.classList.remove('exit-left', 'exit-right', 'enter');
    // force reflow so the animation restarts
    void card.offsetWidth;
    card.classList.add('enter');
  }

  if (exitDirection) {
    card.classList.add(exitDirection === 'left' ? 'exit-left' : 'exit-right');
    setTimeout(renderNew, 300);
  } else {
    renderNew();
  }
}

function startRandom() {
  const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const q   = pickQuestion(cat.id);
  showQuestion(cat.id, q);
}

// ✓ — same category, new question
btnNext.addEventListener('click', () => {
  const q = pickQuestion(currentCategoryId, currentQuestion);
  showQuestion(currentCategoryId, q, 'right');
});

// ✗ — different category
btnSkip.addEventListener('click', () => {
  const newCat = pickDifferentCategory(currentCategoryId);
  const q      = pickQuestion(newCat);
  showQuestion(newCat, q, 'left');
});

// Init
startRandom();
