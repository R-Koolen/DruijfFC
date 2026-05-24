const CATEGORIES = [
  {
    id: 'pittig',
    name: 'Pittig',
    emoji: '🌶️',
    color: '#C8321E',
    questions: [
      { a: 'Voor de rest van je leven alleen maar stamppot eten', b: 'Voor de rest van je leven alleen maar bami goreng' },
      { a: 'Altijd 10 graden kouder zijn dan iedereen om je heen', b: 'Altijd 10 graden warmer zijn dan iedereen om je heen' },
      { a: 'Nooit meer kunnen liegen', b: 'Nooit meer de waarheid kunnen vertellen' },
      { a: 'Altijd in slow motion bewegen', b: 'Altijd twee keer zo snel praten als normaal' },
      { a: 'Een week lang geen telefoon', b: 'Een week lang geen douche' },
      { a: 'Beroemd zijn maar altijd blut', b: 'Schatrijk zijn maar compleet anoniem' },
      { a: 'Elke dag precies dezelfde kleren dragen', b: 'Nooit meer muziek mogen luisteren' },
      { a: 'Altijd om 3 uur \'s nachts wakker worden en niet meer slapen', b: 'Altijd precies om 5 uur \'s ochtends wakker worden' },
    ]
  },
  {
    id: 'grappig',
    name: 'Grappig',
    emoji: '😂',
    color: '#C49A10',
    questions: [
      { a: 'Elke keer als je lacht een kippengegaak maken', b: 'Elke keer als je niest een dramatische schreeuw geven' },
      { a: 'De rest van je leven rondlopen in een clownspak', b: 'De rest van je leven rondlopen in een hazenpak' },
      { a: 'Altijd zingen als je iets zegt', b: 'Altijd dansen als je loopt' },
      { a: 'Elke dag wakker worden met een compleet andere haarstijl', b: 'Elke dag wakker worden met een compleet andere stem' },
      { a: 'Handjes geven met je voet', b: 'Eten als een hond — met je mond direct uit de bak' },
      { a: 'Altijd fluisteren, wat de situatie ook is', b: 'Altijd schreeuwen, wat de situatie ook is' },
      { a: 'Automatisch "boe!" roepen elke keer dat je een kamer binnenloopt', b: 'Automatisch klappen elke keer dat iemand de kamer uitloopt' },
      { a: 'Elke keer als je niest een confettiexplosie', b: 'Elke keer als je lacht een luide toeter' },
    ]
  },
  {
    id: 'vakantie',
    name: 'Vakantie',
    emoji: '🌴',
    color: '#2878C0',
    questions: [
      { a: 'Altijd op vakantie naar hetzelfde land, maar dat land zelf kiezen', b: 'Elke vakantie een compleet verrassingsbestemming — je weet niks van tevoren' },
      { a: 'Luxe vijfsterrenhotel in een saaie stad', b: 'Een matras op de grond maar in de meest geweldige stad ter wereld' },
      { a: 'Je vlucht heeft 6 uur vertraging maar is gratis', b: 'Je vlucht vertrekt stipt op tijd maar kost drie keer zoveel als normaal' },
      { a: 'Twee weken strand, 40 graden en cocktails', b: 'Twee weken skiën in de Alpen met vers poedersneeuw' },
      { a: 'Twee weken backpacken door Azië met een rugzak', b: 'Twee weken all-inclusive in de Malediven' },
      { a: 'Elke vakantie naar een warm land', b: 'Elke vakantie naar een koud land' },
      { a: 'Alles zelf plannen en regelen tot in de kleinste details', b: 'Alles door een reisorganisatie laten regelen — jij weet alleen wanneer je vertrekt' },
      { a: 'Elke avond lokaal straateten opeten voor een paar euro', b: 'Elke avond een sterrenrestaurant van drie gangen' },
    ]
  },
  {
    id: 'geld',
    name: 'Geld',
    emoji: '💰',
    color: '#3A8040',
    questions: [
      { a: '€1 miljoen nu op je rekening', b: '€10.000 per maand voor de rest van je leven' },
      { a: 'Een jaar lang gratis wonen maar nul inkomsten', b: 'Een jaar lang €5.000 extra per maand maar dubbele huur' },
      { a: 'Je spaargeld verdubbelen maar een jaar lang niks nieuws kopen', b: 'Elke maand €500 extra maar nooit meer op vakantie' },
      { a: 'Een supermarkt met onbeperkt gratis eten', b: 'Alle winkels gratis maar geen supermarkt' },
      { a: 'Gratis vliegen overal ter wereld voor de rest van je leven', b: 'Gratis eten in elk restaurant ter wereld voor de rest van je leven' },
      { a: '€50.000 nu maar je verliest je huidige baan', b: 'Je baan houden maar geen extra geld' },
      { a: 'Al je schulden kwijt maar je verliest al je spaargeld', b: 'Je spaargeld houden maar ook al je schulden houden' },
      { a: 'De loterij winnen maar het groot nieuws worden', b: '€100.000 krijgen maar niemand mag het weten' },
    ]
  },
  {
    id: 'avontuur',
    name: 'Avontuur',
    emoji: '🧗',
    color: '#C06010',
    questions: [
      { a: 'Bungeejumpen van een brug van 100 meter', b: 'Vrij vallen met een parachute van 4000 meter hoogte' },
      { a: 'Een nacht alleen overleven in het bos zonder telefoon', b: 'Een dag lang opgesloten zitten in een escape room' },
      { a: 'Duiken met witte haaien in open zee', b: 'Klimmen op een bergtop van 4000 meter zonder ervaring' },
      { a: 'Een heel jaar rondreizen zonder vaste slaapplek', b: 'Een heel jaar op één exotische bestemming wonen' },
      { a: 'Meedoen aan een survivalprogramma op tv', b: 'Meedoen aan een grote danscompetitie op tv' },
      { a: 'Een nacht doorbrengen in een berucht spookhuis', b: 'Een nacht doorbrengen in een ijshotel bij -10 graden' },
      { a: 'Met een zeiljacht de Atlantische Oceaan oversteken', b: 'Met de Trans-Siberische spoorlijn van Moskou naar Vladivostok rijden' },
      { a: 'Een maand overleven op een onbewoond eiland', b: 'Een maand in een camper dwars door de VS rijden' },
    ]
  },
  {
    id: 'dilemma',
    name: 'Dilemma',
    emoji: '🧠',
    color: '#7060C8',
    questions: [
      { a: 'Alles weten maar niks kunnen veranderen', b: 'Niks weten maar alles kunnen veranderen' },
      { a: 'Geliefd zijn door iedereen maar je doelen nooit halen', b: 'Al je doelen halen maar niet geliefd zijn' },
      { a: 'De gave hebben om gedachten van anderen te lezen', b: 'De gave hebben om volledig onzichtbaar te worden' },
      { a: 'Altijd volledig eerlijk zijn, ook als het pijn doet', b: 'Altijd aardig zijn, ook als het niet klopt' },
      { a: 'Een kort maar intensief en avontuurlijk leven', b: 'Een lang maar rustig en voorspelbaar leven' },
      { a: 'Één echte, onverwoestbare beste vriend', b: 'Honderd goede kennissen die altijd klaarstaan' },
      { a: 'Al je herinneringen wissen en helemaal opnieuw beginnen', b: 'Alles onthouden zoals het was, ook de pijnlijke dingen' },
      { a: 'De wereld aantoonbaar verbeteren maar anoniem blijven', b: 'Wereldberoemd worden maar geen verschil maken' },
    ]
  },
];

const catBadge = document.getElementById('catBadge');
const wyrCard  = document.getElementById('wyrCard');
const wyrOptA  = document.getElementById('wyrOptA');
const wyrOptB  = document.getElementById('wyrOptB');
const btnSkip  = document.getElementById('btnSkip');
const btnNext  = document.getElementById('btnNext');

wyrOptA.dataset.letter = 'A';
wyrOptB.dataset.letter = 'B';

let currentCat = null;
let currentQ   = null;
const shown    = {};

function pickQuestion(cat, exclude = null) {
  if (!shown[cat.id]) shown[cat.id] = [];
  let pool = cat.questions.filter(q => q !== exclude && !shown[cat.id].includes(q));
  if (pool.length === 0) {
    shown[cat.id] = exclude ? [exclude] : [];
    pool = cat.questions.filter(q => q !== exclude);
  }
  const q = pool[Math.floor(Math.random() * pool.length)];
  shown[cat.id].push(q);
  return q;
}

function pickDifferentCategory(current) {
  const others = CATEGORIES.filter(c => c !== current);
  return others[Math.floor(Math.random() * others.length)];
}

function animateCard(exitClass, callback) {
  wyrCard.classList.add(exitClass);
  setTimeout(() => {
    wyrCard.classList.remove(exitClass);
    callback();
    void wyrCard.offsetWidth;
    wyrCard.classList.add('enter');
    setTimeout(() => wyrCard.classList.remove('enter'), 500);
  }, 300);
}

function showQuestion(cat, q) {
  currentCat = cat;
  currentQ   = q;

  document.documentElement.style.setProperty('--cat-color', cat.color);
  catBadge.textContent = `${cat.emoji}  ${cat.name.toUpperCase()}`;

  wyrOptA.textContent = q.a;
  wyrOptB.textContent = q.b;
}

function chooseAndNext(chosen) {
  chosen.classList.add('wyr-chosen');
  setTimeout(() => {
    chosen.classList.remove('wyr-chosen');
    animateCard('exit-right', () => {
      const q = pickQuestion(currentCat, currentQ);
      showQuestion(currentCat, q);
    });
  }, 350);
}

wyrOptA.addEventListener('click', () => chooseAndNext(wyrOptA));
wyrOptB.addEventListener('click', () => chooseAndNext(wyrOptB));

btnNext.addEventListener('click', () => {
  animateCard('exit-right', () => {
    const q = pickQuestion(currentCat, currentQ);
    showQuestion(currentCat, q);
  });
});

btnSkip.addEventListener('click', () => {
  animateCard('exit-left', () => {
    const cat = pickDifferentCategory(currentCat);
    const q   = pickQuestion(cat);
    showQuestion(cat, q);
  });
});

// Initialise with a random category
(function init() {
  const cat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const q   = pickQuestion(cat);
  showQuestion(cat, q);
  wyrCard.classList.add('enter');
  setTimeout(() => wyrCard.classList.remove('enter'), 500);
})();
