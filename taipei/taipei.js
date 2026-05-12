const STOPS = [
  {
    id: 'cks',
    emoji: '🏛️',
    name: 'Chiang Kai-shek Memorial Hall',
    coords: [25.0344, 121.5214],
    desc: "Begin je dag bij dit imposante witte marmeren monument met zijn iconische blauwe achthoekige dak. Plan het goed en je kunt de wisseling van de erewacht meemaken — die vindt elk uur op het hele uur plaats.",
    travelTip: "Neem de MRT naar CKS Memorial Hall Station (rode of groene lijn). Uitgang 5 brengt je direct het plein op.",
    questions: [
      {
        task: "Kijk goed naar het dak van de hoofdhal. Welke geometrische vorm heeft het dak als je het van boven zou bekijken?",
        answerKeywords: ['achthoek', 'octagon', 'octagonaal', 'achtkant', '8-hoek', 'achthoekig'],
        hints: [
          "De vorm past bij een geluksgetal in de Chinese cultuur.",
          "Het heeft meer hoeken dan een vierkant, maar minder dan een cirkel."
        ],
        successMsg: "Correct! Het dak is achthoekig. Het getal acht wordt in de Chinese cultuur verbonden met geluk en voorspoed."
      },
      {
        task: "Aan weerszijden van het grote plein staan twee enorme traditionele gebouwen. Waar worden die vooral voor gebruikt?",
        answerKeywords: ['theater', 'concert', 'voorstellingen', 'concerten', 'opera', 'national theater', 'national concert hall', 'muziek'],
        hints: [
          "Het ene gebouw draait meer om toneel en opera.",
          "Het andere gebouw draait meer om muziek en orkesten."
        ],
        successMsg: "Klopt! Het plein wordt geflankeerd door het National Theater en de National Concert Hall."
      },
      {
        task: "Klim de voortrap naar de hoofdhal. Hoeveel treden leiden naar de ingang? (Het getal heeft een bijzondere betekenis in het leven van Chiang Kai-shek.)",
        answerKeywords: ['89', 'negenentachtig', 'eighty-nine', 'eighty nine'],
        hints: [
          "Dit is de leeftijd waarop Chiang Kai-shek overleed.",
          "Minder dan 100, meer dan 80. Denk aan de late tachtig."
        ],
        successMsg: "Correct — 89 treden, één voor elk levensjaar van Chiang Kai-shek."
      }
    ]
  },
  {
    id: 'botanical',
    emoji: '🌸',
    name: 'Botanische Tuin Taipei',
    coords: [25.0280, 121.5158],
    desc: "Een groene oase midden in de stad met meer dan 1500 plantensoorten. Het pronkstuk is de beroemde lotusvijver — in de zomer staat die vol prachtige roze bloemen.",
    travelTip: "Verlaat het CKS-plein aan de zuidkant richting Nanhai Road — de ingang van de botanische tuin is zo'n 5 minuten lopen naar het zuiden.",
    questions: [
      {
        task: "De lotusvijver is het hart van de tuin. Welke bloem groeit hier in overvloed en staat in de Aziatische cultuur symbool voor zuiverheid?",
        answerKeywords: ['lotus', 'lotusbloem', 'lotusbloemen', 'waterlelie', 'water lily'],
        hints: [
          "Het is een waterplant met grote roze of witte bloemen.",
          "De naam van de vijver verraadt alles — en de bloem staat ook symbool voor het Boeddhisme."
        ],
        successMsg: "Precies! De lotus — symbool van zuiverheid en verlichting in het Boeddhisme. Ze groeien vanuit het modderige water omhoog."
      },
      {
        task: "De botanische tuin is niet alleen een park, maar ook een plek voor wetenschappelijk onderzoek. Waarover gaat dat onderzoek vooral?",
        answerKeywords: ['planten', 'botanie', 'flora', 'plantensoorten', 'natuur', 'trees', 'plants'],
        hints: [
          "De naam van de plek verraadt het eigenlijk al.",
          "Het gaat niet om dieren, maar om alles wat groeit."
        ],
        successMsg: "Goed! De tuin is gericht op planten, plantensoorten en botanisch onderzoek."
      },
      {
        task: "Bij de lotusvijver staat een opvallend gebouw met rode muren en groene dakpannen. Welk soort gebouw is dit?",
        answerKeywords: ['museum', 'nationaal historisch museum', 'national museum of history', 'historisch museum'],
        hints: [
          "Het gebouw bewaart geen planten, maar geschiedenis en cultuur.",
          "De naam bevat iets met 'geschiedenis'."
        ],
        successMsg: "Correct! Dat is het National Museum of History, herkenbaar aan de rode muren en groene dakpannen."
      }
    ]
  },
  {
    id: 'ximending',
    emoji: '🌈',
    name: 'Ximending',
    coords: [25.0436, 121.5050],
    desc: "De jeugd- en modewijk van Taipei — neonreclames, straatartiesten, vintage winkels en de lekkerste snacks van de stad. Het perfecte plekje voor de lunch!",
    travelTip: "Neem de MRT Green Line van Xiaonanmen Station (2 min lopen van de botanische tuin) één stop naar Ximen Station.",
    questions: [
      {
        task: "Kijk naar het Ximen Red House. Welke geometrische vorm heeft het bekende voorste deel van het gebouw?",
        answerKeywords: ['achthoek', 'octagon', 'octagonaal', 'achtkant', '8-hoek', 'achthoekig'],
        hints: [
          "Tel de kanten van het gebouw als je er recht voor staat.",
          "Het heeft evenveel hoeken als het dak van CKS Memorial Hall."
        ],
        successMsg: "Goed! Het Red House heeft een opvallende achthoekige vorm."
      },
      {
        task: "Zoek het eerste regenboogzebrapad van Taiwan, vlak bij het Rode Huis. Welke kleur heeft de middelste streep?",
        answerKeywords: ['geel', 'yellow', 'gold'],
        hints: [
          "Het zebrapad ligt vlak bij het achthoekige rode bakstenen gebouw.",
          "Kijk naar het allerste midden van het zebrapad — het is een warme, zonnige kleur."
        ],
        successMsg: "Precies goed! De middelste streep is geel — een symbool van zon en trots."
      },
      {
        task: "Het Red House werd oorspronkelijk niet gebouwd als theater of winkelcentrum. Wat was de oorspronkelijke functie?",
        answerKeywords: ['markt', 'public market', 'openbare markt', 'market'],
        hints: [
          "Denk aan eten, handel en kraampjes.",
          "Het was een plek waar mensen dingen kochten en verkochten."
        ],
        successMsg: "Precies! Het Red House werd in 1908 gebouwd als openbare markt tijdens de Japanse periode."
      }
    ]
  },
  {
    id: 'longshan',
    emoji: '🛕',
    name: 'Longshan Tempel',
    coords: [25.0376, 121.4997],
    desc: "De beroemdste tempel van Taipei, gebouwd in 1738. De lucht is zwaar van wierook en locals komen hier voor alles — van liefdesadvies tot gelukswensen voor een nieuwe baan.",
    travelTip: "Neem de MRT Blue Line één stop naar het zuiden tot Longshan Temple Station, Uitgang 1. De tempel ligt recht tegenover het park.",
    questions: [
      {
        task: "Zoek de hoofdgotteid die vereerd wordt bij het hoofdaltaar aan de voorkant van de tempel. Wie is het?",
        answerKeywords: ['guanyin', 'guan yin', 'kuan yin', 'godin van genade', 'goddess of mercy', 'avalokitesvara'],
        hints: [
          "Het is een vrouwelijke bodhisattva, diep geliefd in heel Oost-Azië om haar mededogen.",
          "Haar naam begint met een 'G'. Ze staat bekend als de Godin van Genade."
        ],
        successMsg: "Correct! Guanyin, de Godin van Genade — het hart van de Longshan Tempel."
      },
      {
        task: "Zoek bij de tempel naar de decoraties op of rond het dak. Welke mythische dieren zie je het meest terug?",
        answerKeywords: ['draak', 'draken', 'dragon', 'dragons', 'feniks', 'phoenix', 'phoenixes'],
        hints: [
          "Eén ervan spuugt in verhalen vuur.",
          "De ander is een vogel die symbool staat voor wedergeboorte."
        ],
        successMsg: "Goed gezien! Draken en feniksen zijn veelgebruikte symbolen in tempeldecoraties."
      },
      {
        task: "In de tempel gebruiken mensen twee halvemaanvormige blokjes om een vraag aan de goden te stellen. Hoe heet dit soort waarzegging?",
        answerKeywords: ['jiaobei', 'moon blocks', 'divination blocks', 'poe', 'waarzegblokjes'],
        hints: [
          "Je gooit twee houten of rode blokjes op de grond.",
          "In het Engels worden ze vaak 'moon blocks' genoemd."
        ],
        successMsg: "Correct! Dat zijn jiaobei, ook wel moon blocks of divination blocks genoemd."
      }
    ]
  },
  {
    id: 'bopiliao',
    emoji: '🏮',
    name: 'Bopiliao Historisch Blok',
    coords: [25.0363, 121.5009],
    desc: "Stap één minuut verder terug in de tijd. Rode bakstenen arcades, vintage borden en oude apotheken — een tijdcapsule midden in de stad, vlak naast de Longshan Tempel.",
    travelTip: "Verlaat de Longshan Tempel en loop oostwaarts over Guangzhou Street — Bopiliao is zo'n 2 minuten lopen.",
    questions: [
      {
        task: "Let op de straat zelf. Is Bopiliao breed en kaarsrecht, of eerder smaller en licht gebogen?",
        answerKeywords: ['smal en gebogen', 'smaller', 'licht gebogen', 'curved', 'narrow', 'smalle', 'gebogen', 'smal'],
        hints: [
          "Vergelijk het met moderne rechte stadswegen.",
          "Oude straten volgen vaak minder strakke lijnen dan nieuwbouw."
        ],
        successMsg: "Klopt! De straat is relatief smal en licht gebogen, wat goed past bij de oudere stadsstructuur."
      },
      {
        task: "De karakteristieke rode bakstenen arcades van Bopiliao zijn een mix van welke twee architectuurperiodes?",
        answerKeywords: ['qing', 'japans', 'japanese', 'qing en japans', 'qing dynasty', 'japanese colonial', 'japanse koloniale'],
        hints: [
          "Één periode eindigde in 1895, de andere begon meteen daarna en duurde 50 jaar.",
          "Denk aan 'keizerlijk Chinees' + de koloniale periode die daarna volgde."
        ],
        successMsg: "Ja! Late Qing-dynastie ontmoet Japans kolonialisme — dát is de architectonische mix."
      },
      {
        task: "Bopiliao ligt in een van de oudste delen van Taipei. Wat is de historische naam van dit gebied?",
        answerKeywords: ['mengjia', 'mangka', 'bangka', '艋舺'],
        hints: [
          "Je hoort deze naam ook terug bij Longshan Temple Station.",
          "Het wordt soms gespeld als Bangka of Mangka."
        ],
        successMsg: "Goed! Bopiliao ligt in het historische Mengjia, ook bekend als Bangka of Mangka."
      }
    ]
  },
  {
    id: 'taipei101',
    emoji: '🏙️',
    name: 'Taipei 101',
    coords: [25.0339, 121.5645],
    desc: "Ooit het hoogste gebouw ter wereld, nog steeds het symbool van de stad. Neem de snelste lift ter wereld (37 seconden!) naar het observatiedek op de 89e verdieping.",
    travelTip: "Loop terug naar Longshan Temple Station en neem de Blue Line naar Zhongxiao Fuxing. Stap over op de Rode Lijn richting Taipei 101 / World Trade Center Station, Uitgang 4.",
    questions: [
      {
        task: "De vorm van Taipei 101 is geïnspireerd op een plant die staat voor groei en veerkracht. Welke plant is dat?",
        answerKeywords: ['bamboe', 'bamboo'],
        hints: [
          "Deze plant groeit snel en heeft duidelijke segmenten.",
          "Panda's vinden dit ook lekker."
        ],
        successMsg: "Correct! Taipei 101 is geïnspireerd op bamboe, symbool van groei en veerkracht."
      },
      {
        task: "Tussen de 87e en 92e verdieping hangt een reusachtige gouden bol zichtbaar vanuit het observatiedek. Waarvoor dient die?",
        answerKeywords: ['demper', 'trillingsdemper', 'massa demper', 'damper', 'tuned mass damper', 'slinger', 'pendulum', 'aardbeving', 'stabilisatie', 'stabilize'],
        hints: [
          "Het ding weegt 660 ton en slingert als een pendulum.",
          "Het neutraliseert iets wat het gebouw doet bij zware wind en aardbevingen."
        ],
        successMsg: "Precies! Het is een trillingsdemper — een pendulum van 660 ton die de toren stabiel houdt tijdens tyfoons en aardbevingen."
      },
      {
        task: "Kijk naar de buitenkant van Taipei 101. De ronde ornamenten op de gevel verwijzen naar welk oud Chinees voorwerp?",
        answerKeywords: ['munten', 'coins', 'oude munten', 'chinese coins', 'geld'],
        hints: [
          "Het past bij het thema rijkdom en voorspoed.",
          "Oude Chinese versies hadden vaak een gat in het midden."
        ],
        successMsg: "Correct! De ronde vormen verwijzen naar oude Chinese munten — passend bij het thema voorspoed."
      }
    ]
  },
  {
    id: 'elephant',
    emoji: '🐘',
    name: 'Olifantenberg (Xiangshan)',
    coords: [25.0268, 121.5763],
    desc: "Sluit je dag af met het meest iconische uitzicht van Taipei. Een korte maar steile wandeling van 15 minuten beloont je met een zonsondergangpanorama over Taipei 101 en de hele skyline.",
    travelTip: "Neem de MRT Rode Lijn één stop zuidwaarts naar Xiangshan Station. Uitgang 2, volg dan de borden ongeveer 10 minuten naar het begin van het wandelpad.",
    questions: [
      {
        task: "De Chinese naam van Olifantenberg is Xiangshan. Wat betekent 'xiang' in deze context?",
        answerKeywords: ['olifant', 'elephant'],
        hints: [
          "Het dier zit al in de Nederlandse naam.",
          "Groot dier, slurf, grote oren."
        ],
        successMsg: "Goed! Xiangshan betekent letterlijk Olifantenberg."
      },
      {
        task: "Waarom is Olifantenberg zo'n bekende fotoplek in Taipei?",
        answerKeywords: ['uitzicht op taipei 101', 'skyline', 'view of taipei 101', 'taipei 101', 'uitzicht over taipei', 'uitzicht'],
        hints: [
          "Je komt hier niet alleen voor de natuur.",
          "Het bekendste gebouw van Taipei staat perfect in beeld."
        ],
        successMsg: "Precies! Vanaf hier heb je een van de bekendste uitzichten op Taipei 101 en de skyline."
      },
      {
        task: "Vlak bij de top vind je het beroemde fotoplekje met zes enorme rotsblokken. Wat is de Engelse naam van dit plekje?",
        answerKeywords: ['six giant rocks', 'six rocks', 'giant rocks', 'six boulders', 'zes rotsen', 'zes stenen', 'zes rotsblokken'],
        hints: [
          "Het is vernoemd naar het aantal grote stenen waarop je kunt klimmen.",
          "Drie woorden in het Engels: een getal + een maat + het type steen."
        ],
        successMsg: "Ja! De Six Giant Rocks — het meest gefotografeerde plekje van Taipei. Geniet van de zonsondergang!"
      }
    ]
  }
];

// ── STATE ──
const STORAGE_KEY = 'taipei_progress';
let currentIdx         = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
let hintsShown         = 0;
let phase              = 'travel';
let currentQuestionIdx = 0;
let stopCorrect        = 0;
let skipped = JSON.parse(localStorage.getItem('taipei_skipped') || '[]');
let solved  = JSON.parse(localStorage.getItem('taipei_solved')  || '[]');

if (currentIdx >= STOPS.length) {
  phase = 'finish';
  currentIdx = STOPS.length - 1;
}

// ── DOM REFS ──
const stage      = document.getElementById('huntStage');
const progressEl = document.getElementById('progressPill');

// ── HELPERS ──
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, String(currentIdx));
  localStorage.setItem('taipei_skipped', JSON.stringify(skipped));
  localStorage.setItem('taipei_solved',  JSON.stringify(solved));
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function checkAnswer(input, keywords) {
  const cleaned = input.toLowerCase().trim().replace(/[.,!?]/g, '');
  return keywords.some(k => cleaned.includes(k.toLowerCase()));
}

// ── MAP ──
function initMap(idx) {
  const stop     = STOPS[idx];
  const prevStop = idx > 0 ? STOPS[idx - 1] : null;

  const map = L.map('stopMap', {
    scrollWheelZoom: false,
    dragging: !L.Browser.mobile,
    doubleClickZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://openstreetmap.org">OSM</a>',
    maxZoom: 19,
  }).addTo(map);

  const destIcon = L.divIcon({
    html: `<div style="width:18px;height:18px;border-radius:50%;background:#FF8A3D;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>`,
    className: '', iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -12],
  });

  L.marker(stop.coords, { icon: destIcon }).addTo(map)
    .bindPopup(`<strong>${stop.name}</strong>`, { closeButton: false }).openPopup();

  if (prevStop) {
    const prevIcon = L.divIcon({
      html: `<div style="width:13px;height:13px;border-radius:50%;background:#9E9890;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.25)"></div>`,
      className: '', iconSize: [13, 13], iconAnchor: [6, 6], popupAnchor: [0, -9],
    });
    L.marker(prevStop.coords, { icon: prevIcon }).addTo(map)
      .bindPopup(`<strong>${prevStop.name}</strong><br><small style="color:#9E9890">Vorige stop</small>`, { closeButton: false });

    L.polyline([prevStop.coords, stop.coords], {
      color: '#FF8A3D', weight: 3.5, opacity: 0.75, dashArray: '7, 10',
    }).addTo(map);

    map.fitBounds(L.latLngBounds([prevStop.coords, stop.coords]), { padding: [36, 36] });
  } else {
    map.setView(stop.coords, 16);
  }
}

function mapsDirectionsUrl(idx) {
  const stop     = STOPS[idx];
  const prevStop = idx > 0 ? STOPS[idx - 1] : null;
  if (prevStop) {
    return `https://www.google.com/maps/dir/${prevStop.coords[0]},${prevStop.coords[1]}/${stop.coords[0]},${stop.coords[1]}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${stop.coords[0]},${stop.coords[1]}`;
}

// ── RENDER ──
function render() {
  if (phase === 'finish') {
    progressEl.textContent = 'Voltooid!';
    renderFinish();
    return;
  }

  const stop = STOPS[currentIdx];
  progressEl.textContent = `Stop ${currentIdx + 1} van ${STOPS.length}`;

  if      (phase === 'travel') renderTravel(stop);
  else if (phase === 'task')   renderTask(stop);
  else if (phase === 'done')   renderDone(stop);
}

function renderTravel(stop) {
  const idx      = currentIdx;
  const prevStop = idx > 0 ? STOPS[idx - 1] : null;
  const dirLabel = prevStop
    ? `🗺️ &nbsp;Route vanaf ${escapeHtml(prevStop.name)}`
    : `📍 &nbsp;Bekijk op Google Maps`;

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob"></div>
      <div class="stop-num">Stop ${idx + 1} van ${STOPS.length}</div>
      <div class="stop-emoji">${stop.emoji}</div>
      <div class="stop-name">${escapeHtml(stop.name)}</div>
      <div class="stop-desc">${escapeHtml(stop.desc)}</div>
      <div id="stopMap" class="stop-map"></div>
      <a href="${mapsDirectionsUrl(idx)}" target="_blank" rel="noopener" class="btn-directions">
        ${dirLabel}
      </a>
      <div class="travel-tip">
        <strong>Hoe kom je er:</strong>&nbsp;${escapeHtml(stop.travelTip)}
      </div>
      <button class="btn-primary btn-full" id="btnHere">📍 &nbsp;Ik ben hier</button>
    </div>
  `;

  initMap(idx);

  document.getElementById('btnHere').addEventListener('click', () => {
    hintsShown = 0;
    currentQuestionIdx = 0;
    stopCorrect = 0;
    phase = 'task';
    render();
  });
}

function renderTask(stop) {
  const q      = stop.questions[currentQuestionIdx];
  const qNum   = currentQuestionIdx + 1;
  const qTotal = stop.questions.length;

  const dotsHtml = stop.questions.map((_, i) => {
    if (i < currentQuestionIdx)  return `<span class="qdot qdot--done"></span>`;
    if (i === currentQuestionIdx) return `<span class="qdot qdot--active"></span>`;
    return `<span class="qdot"></span>`;
  }).join('');

  const hintsHtml = q.hints.slice(0, hintsShown).map(h =>
    `<div class="hint-box">💡 ${escapeHtml(h)}</div>`
  ).join('');

  const hintBtn = hintsShown < q.hints.length
    ? `<button class="btn-hint" id="btnHint">💡 Hint (${hintsShown + 1}/${q.hints.length})</button>`
    : '';

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob"></div>

      <div class="q-progress-row">
        <div class="q-dots">${dotsHtml}</div>
        <span class="q-step-label">Vraag ${qNum} van ${qTotal}</span>
      </div>

      <div class="stop-num">Stop ${currentIdx + 1} van ${STOPS.length} · ${escapeHtml(stop.name)}</div>

      <div class="task-section">
        <div class="task-label">Jouw opdracht</div>
        <div class="task-question">${escapeHtml(q.task)}</div>
        ${hintsHtml}
        <input type="text" class="task-input" id="taskInput" placeholder="Typ je antwoord..." autocomplete="off" />
        <div class="btn-row">
          <button class="btn-ghost" id="btnSkip">Overslaan</button>
          ${hintBtn}
          <button class="btn-primary" id="btnSubmit">Controleer</button>
        </div>
      </div>
    </div>
  `;

  const input  = document.getElementById('taskInput');
  const submit = document.getElementById('btnSubmit');
  const skip   = document.getElementById('btnSkip');
  const hint   = document.getElementById('btnHint');

  input.focus();
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit.click(); });

  submit.addEventListener('click', () => {
    if (checkAnswer(input.value, q.answerKeywords)) {
      // Visual feedback before showing success screen
      input.style.borderColor = '#34D399';
      input.style.boxShadow   = '0 0 0 4px rgba(52,211,153,0.18)';
      submit.textContent = '✓ Correct!';
      submit.style.background = 'linear-gradient(135deg, #34D399, #06B6D4)';
      submit.disabled = true;
      skip.disabled   = true;
      if (hint) hint.disabled = true;

      setTimeout(() => {
        stopCorrect++;
        renderQuestionSuccess(stop, q);
      }, 600);
    } else {
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
    }
  });

  skip.addEventListener('click', () => {
    hintsShown = 0;
    advanceQuestion(stop);
  });

  if (hint) {
    hint.addEventListener('click', () => {
      hintsShown++;
      renderTask(stop);
      document.getElementById('taskInput').focus();
    });
  }
}

// Shown after each correct answer; has a "next" button so successMsg is always visible
function renderQuestionSuccess(stop, q) {
  const isLastQuestion = currentQuestionIdx === stop.questions.length - 1;
  const qNum   = currentQuestionIdx + 1;
  const qTotal = stop.questions.length;

  const dotsHtml = stop.questions.map((_, i) => {
    if (i <= currentQuestionIdx) return `<span class="qdot qdot--done"></span>`;
    return `<span class="qdot"></span>`;
  }).join('');

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob" style="background:linear-gradient(135deg,#34D399,#06B6D4);"></div>

      <div class="q-progress-row">
        <div class="q-dots">${dotsHtml}</div>
        <span class="q-step-label">Vraag ${qNum} van ${qTotal}</span>
      </div>

      <div class="done-state" style="padding-top:12px;">
        <div class="done-check">✓</div>
        <div class="done-title">Correct!</div>
        <div class="done-msg">${escapeHtml(q.successMsg)}</div>
        <button class="btn-primary success btn-full" id="btnNextQ">
          ${isLastQuestion ? 'Stop afronden →' : 'Volgende vraag →'}
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnNextQ').addEventListener('click', () => {
    hintsShown = 0;
    advanceQuestion(stop);
  });
}

function advanceQuestion(stop) {
  currentQuestionIdx++;

  if (currentQuestionIdx >= stop.questions.length) {
    // All questions for this stop are done
    if (stopCorrect === stop.questions.length) {
      solved.push(stop.id);
    } else {
      skipped.push(stop.id);
    }
    saveProgress();
    phase = 'done';
    render();
  } else {
    renderTask(stop);
  }
}

function renderDone(stop) {
  const allCorrect  = stopCorrect === stop.questions.length;
  const noneCorrect = stopCorrect === 0;
  const isLast      = currentIdx === STOPS.length - 1;

  const title = allCorrect  ? 'Stop voltooid! 🎉'
              : noneCorrect ? 'Stop overgeslagen'
              : 'Gedeeltelijk voltooid';

  const msg = allCorrect  ? 'Alle vragen goed beantwoord. Indrukwekkend!'
            : noneCorrect ? 'Geen probleem — door naar de volgende locatie.'
            : `${stopCorrect} van ${stop.questions.length} vragen correct beantwoord.`;

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob" style="background:${allCorrect ? 'linear-gradient(135deg,#34D399,#06B6D4)' : 'var(--surface-soft)'};"></div>
      <div class="done-state">
        <div class="done-check" style="${noneCorrect ? 'background:var(--surface-soft);color:var(--text-muted);box-shadow:none;border:1.5px solid var(--border)' : ''}">
          ${noneCorrect ? '→' : '✓'}
        </div>
        <div class="done-title">${title}</div>
        <div class="done-msg">${escapeHtml(msg)}</div>
        <button class="btn-primary success btn-full" id="btnNext">
          ${isLast ? '🎉 Speurtocht afronden' : 'Volgende stop →'}
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnNext').addEventListener('click', () => {
    currentIdx++;
    saveProgress();
    if (currentIdx >= STOPS.length) {
      phase = 'finish';
    } else {
      phase              = 'travel';
      currentQuestionIdx = 0;
      stopCorrect        = 0;
      hintsShown         = 0;
    }
    render();
  });
}

function renderFinish() {
  stage.innerHTML = `
    <div class="finish-card">
      <div class="finish-emoji">🎉</div>
      <div class="finish-title">Taipei veroverd!</div>
      <div class="finish-msg">Zeven stops, één onvergetelijke dag. Van het grandioze plein bij het CKS Memorial tot een zonsondergang boven de skyline op de Olifantenberg.</div>
      <div class="finish-stats">
        <div class="stat-pill"><strong>${solved.length}</strong> volledig opgelost</div>
        <div class="stat-pill"><strong>${skipped.length}</strong> overgeslagen</div>
        <div class="stat-pill"><strong>${STOPS.length}</strong> stops</div>
      </div>
      <button class="btn-primary btn-full" id="btnReset">Opnieuw beginnen</button>
    </div>
  `;

  document.getElementById('btnReset').addEventListener('click', () => {
    currentIdx         = 0;
    hintsShown         = 0;
    currentQuestionIdx = 0;
    stopCorrect        = 0;
    skipped            = [];
    solved             = [];
    phase              = 'travel';
    saveProgress();
    render();
  });
}

render();
