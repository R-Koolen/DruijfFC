const STOPS = [
  {
    id: 'cks',
    emoji: '🏛️',
    name: 'Chiang Kai-shek Memorial Hall',
    coords: [25.0344, 121.5214],
    desc: "We beginnen onze dag bij CKS memorial hall — een van de meest iconische plekken van Taipei. Het enorme plein, geflankeerd door traditionele Chinese gebouwen en omringd door weelderige tuinen, is een eerbetoon aan de voormalige leider Chiang Kai-shek.",
    travelTip: "Rub woont hier vlakbij, dus we starten meteen bij de ingang aan de zuidkant van het plein, bij het grote rode poortgebouw.",
    task: "Klim de voortrap naar de hoofdhal. Hoeveel treden leiden naar de ingang? (Het getal heeft een bijzondere betekenis in het leven van Chiang Kai-shek.)",
    answerKeywords: ['89', 'negenentachtig', 'eighty-nine', 'eighty nine'],
    hints: [
      "Dit is het gewicht van Daan na Finland",
      "De leeftijd waarop Chiang Kai-shek overleed"
    ],
    successMsg: "Correct — 89 treden, één voor elk levensjaar van Chiang Kai-shek."
  },
  {
    id: 'botanical',
    emoji: '🌸',
    name: 'Botanische Tuin Taipei',
    coords: [25.0280, 121.5158],
    desc: "Een groene oase midden in de stad met meer dan 1500 plantensoorten. Het pronkstuk is de beroemde lotusvijver — in de zomer staat die vol prachtige roze bloemen.",
    travelTip: "Verlaat het CKS-plein aan de zuidkant richting Nanhai Road — de ingang van de botanische tuin is zo'n 5 minuten lopen naar het zuiden.",
    task: "De lotusvijver is het hart van de tuin. Welke bloem groeit hier in overvloed en staat in de Aziatische cultuur symbool voor zuiverheid?",
    answerKeywords: ['lotus', 'lotusbloem', 'lotusbloemen', 'waterlelie', 'water lily'],
    hints: [
      "Het rijmt op judocus",
      "De naam van de vijver verraadt alles — dus dit moet net zo makkelijk zijn als links en rechts ;)"
    ],
    successMsg: "Precies! De lotus — symbool van zuiverheid en verlichting in het Boeddhisme. Ze groeien vanuit het modderige water omhoog en bloeien schitterend op."
  },
  {
    id: 'ximending',
    emoji: '🌈',
    name: 'Ximending',
    coords: [25.0436, 121.5050],
    desc: "De jeugd- en modewijk van Taipei — neonreclames, straatartiesten, vintage winkels en de lekkerste snacks van de stad. Het perfecte plekje voor de lunch!",
    travelTip: "Neem de MRT Green Line van Xiaonanmen Station (2 min lopen van de botanische tuin) één stop naar Ximen Station.",
    task: "Zoek het eerste joehoe pad van Taiwan, vlak bij het Rode Huis (Ximen Red House). Welke kleur heeft de middelste streep?",
    answerKeywords: ['geel', 'yellow', 'gold'],
    hints: [
      "Het zebrapad ligt vlak bij het iconische achthoekige rode bakstenen gebouw uit 1908.",
      "Deze kleur wordt Robin een beetje als hij bruin wordt."
    ],
    successMsg: "Precies goed! De middelste streep van het regenboogzebrapad is geel — een symbool van zon en trots."
  },
  {
    id: 'longshan',
    emoji: '🛕',
    name: 'Longshan Tempel',
    coords: [25.0376, 121.4997],
    desc: "De beroemdste tempel van Taipei, gebouwd in 1738. De lucht is zwaar van wierook en locals komen hier voor alles — van liefdesadvies tot gelukswensen voor een nieuwe baan.",
    travelTip: "Neem de MRT Blue Line één stop naar het zuiden tot Longshan Temple Station, Uitgang 1. De tempel ligt recht tegenover het park.",
    task: "Zoek de hoofdgotteid die vereerd wordt bij het hoofdaltaar aan de voorkant van de tempel. Wie is het?",
    answerKeywords: ['guanyin', 'guan yin', 'kuan yin', 'godin van genade', 'goddess of mercy', 'avalokitesvara'],
    hints: [
      "Het is een vrouwelijke bodhisattva, diep geliefd in heel Oost-Azië om haar mededogen.",
      "Haar naam begint met een 'G'. Ze staat bekend als de Godin van Genade."
    ],
    successMsg: "Correct! Guanyin, de Godin van Genade — het hart van de Longshan Tempel."
  },
  {
    id: 'bopiliao',
    emoji: '🏮',
    name: 'Bopiliao Historisch Blok',
    coords: [25.0363, 121.5009],
    desc: "Stap één minuut verder terug in de tijd. Rode bakstenen arcades, vintage borden en oude apotheken — een tijdcapsule midden in de stad, vlak naast de Longshan Tempel.",
    travelTip: "Verlaat de Longshan Tempel en loop oostwaarts over Guangzhou Street — Bopiliao is zo'n 2 minuten lopen.",
    task: "De karakteristieke rode bakstenen arcades van Bopiliao zijn een mix van welke twee architectuurperiodes?",
    answerKeywords: ['qing', 'japans', 'japanese', 'qing en japans', 'qing dynasty', 'japanese colonial', 'japanse koloniale'],
    hints: [
      "Één periode eindigde in 1895, de andere begon meteen daarna en duurde 50 jaar.",
      "Denk aan 'keizerlijk Chinees' + de koloniale periode die daarna volgde."
    ],
    successMsg: "Ja! Late Qing-dynastie ontmoet Japans kolonialisme — dát is de architectonische mix."
  },
  {
    id: 'taipei101',
    emoji: '🏙️',
    name: 'Taipei 101',
    coords: [25.0339, 121.5645],
    desc: "Ooit het hoogste gebouw ter wereld, nog steeds het symbool van de stad. Neem de snelste lift ter wereld (37 seconden!) naar het observatiedek op de 89e verdieping.",
    travelTip: "Loop terug naar Longshan Temple Station en neem de Blue Line naar Zhongxiao Fuxing. Stap over op de Rode Lijn richting Taipei 101 / World Trade Center Station, Uitgang 4.",
    task: "Tussen de 87e en 92e verdieping hangt een reusachtige gouden bol zichtbaar vanuit het observatiedek. Waarvoor dient die?",
    answerKeywords: ['demper', 'trillingsdemper', 'massa demper', 'damper', 'tuned mass damper', 'slinger', 'pendulum', 'aardbeving', 'stabilisatie', 'stabilize'],
    hints: [
      "Het ding weegt 660 ton en slingert als een pendulum.",
      "Het neutraliseert iets wat het gebouw doet bij zware wind en aardbevingen."
    ],
    successMsg: "Precies! Het is een trillingsdemper — een pendulum van 660 ton die de toren stabiel houdt tijdens tyfoons en aardbevingen."
  },
  {
    id: 'elephant',
    emoji: '🐘',
    name: 'Olifantenberg (Xiangshan)',
    coords: [25.0268, 121.5763],
    desc: "Sluit je dag af met het meest iconische uitzicht van Taipei. Een korte maar steile wandeling van 15 minuten beloont je met een zonsondergangpanorama over Taipei 101 en de hele skyline.",
    travelTip: "Neem de MRT Rode Lijn één stop zuidwaarts naar Xiangshan Station. Uitgang 2, volg dan de borden ongeveer 10 minuten naar het begin van het wandelpad.",
    task: "Vlak bij de top vind je het beroemde fotoplekje met zes enorme rotsblokken. Wat is de Engelse naam van dit plekje?",
    answerKeywords: ['six giant rocks', 'six rocks', 'giant rocks', 'six boulders', 'zes rotsen', 'zes stenen', 'zes rotsblokken'],
    hints: [
      "Het is vernoemd naar het aantal grote stenen waarop je kunt klimmen.",
      "Drie woorden in het Engels: een getal + een maat + het type steen."
    ],
    successMsg: "Ja! De Six Giant Rocks — het meest gefotografeerde plekje van Taipei. Maak de skylinefoto en geniet van de zonsondergang!"
  }
];

// ── STATE ──
const STORAGE_KEY = 'taipei_progress';
let currentIdx  = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
let hintsShown  = 0;
let phase       = 'travel';
let skipped     = JSON.parse(localStorage.getItem('taipei_skipped') || '[]');
let solved      = JSON.parse(localStorage.getItem('taipei_solved')  || '[]');

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
  return str.replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
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

  // Current stop: coral filled circle
  const destIcon = L.divIcon({
    html: `<div style="
      width:18px;height:18px;border-radius:50%;
      background:#E8604C;border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,0.35)"></div>`,
    className: '',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -12],
  });

  L.marker(stop.coords, { icon: destIcon })
    .addTo(map)
    .bindPopup(`<strong>${stop.name}</strong>`, { closeButton: false })
    .openPopup();

  if (prevStop) {
    // Previous stop: gray circle
    const prevIcon = L.divIcon({
      html: `<div style="
        width:13px;height:13px;border-radius:50%;
        background:#9E9890;border:2px solid #fff;
        box-shadow:0 1px 4px rgba(0,0,0,0.25)"></div>`,
      className: '',
      iconSize: [13, 13],
      iconAnchor: [6, 6],
      popupAnchor: [0, -9],
    });

    L.marker(prevStop.coords, { icon: prevIcon })
      .addTo(map)
      .bindPopup(`<strong>${prevStop.name}</strong><br><small style="color:#9E9890">Vorige stop</small>`, { closeButton: false });

    // Dashed route line
    L.polyline([prevStop.coords, stop.coords], {
      color: '#E8604C',
      weight: 3,
      opacity: 0.65,
      dashArray: '7, 10',
    }).addTo(map);

    // Fit both in view with padding
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
    progressEl.textContent = 'Complete!';
    renderFinish();
    return;
  }

  const stop = STOPS[currentIdx];
  progressEl.textContent = `Stop ${currentIdx + 1} of ${STOPS.length}`;

  if      (phase === 'travel') renderTravel(stop);
  else if (phase === 'task')   renderTask(stop);
  else if (phase === 'done')   renderDone(stop);
}

function renderTravel(stop) {
  const idx        = currentIdx;
  const prevStop   = idx > 0 ? STOPS[idx - 1] : null;
  const dirLabel   = prevStop
    ? `🗺️ &nbsp;Route vanaf ${escapeHtml(prevStop.name)}`
    : `📍 &nbsp;Bekijk op Google Maps`;

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob"></div>
      <div class="stop-num">Stop ${idx + 1} of ${STOPS.length}</div>
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
    phase = 'task';
    render();
  });
}

function renderTask(stop) {
  const hintsHtml = stop.hints.slice(0, hintsShown).map(h =>
    `<div class="hint-box">💡 ${escapeHtml(h)}</div>`
  ).join('');

  const hintBtn = hintsShown < stop.hints.length
    ? `<button class="btn-hint" id="btnHint">💡 Hint (${hintsShown + 1}/${stop.hints.length})</button>`
    : '';

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob"></div>
      <div class="stop-num">Stop ${currentIdx + 1} of ${STOPS.length}</div>
      <div class="stop-emoji">${stop.emoji}</div>
      <div class="stop-name">${escapeHtml(stop.name)}</div>

      <div class="task-section">
        <div class="task-label">Taak:</div>
        <div class="task-question">${escapeHtml(stop.task)}</div>

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
    if (checkAnswer(input.value, stop.answerKeywords)) {
      solved.push(stop.id);
      saveProgress();
      phase = 'done';
      render();
    } else {
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
    }
  });

  skip.addEventListener('click', () => {
    skipped.push(stop.id);
    saveProgress();
    phase = 'done';
    render();
  });

  if (hint) {
    hint.addEventListener('click', () => {
      hintsShown++;
      render();
      document.getElementById('taskInput').focus();
    });
  }
}

function renderDone(stop) {
  const wasSkipped = skipped.includes(stop.id) && !solved.includes(stop.id);
  const isLast     = currentIdx === STOPS.length - 1;

  stage.innerHTML = `
    <div class="hunt-card">
      <div class="hunt-card-blob" style="background: var(--green);"></div>
      <div class="done-state">
        <div class="done-check">✓</div>
        <div class="done-title">${wasSkipped ? 'Stop overgeslagen' : 'Goed gedaan!'}</div>
        <div class="done-msg">${wasSkipped
          ? 'Geen probleem — door naar de volgende locatie.'
          : escapeHtml(stop.successMsg)}</div>
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
      phase      = 'travel';
      hintsShown = 0;
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
        <div class="stat-pill"><strong>${solved.length}</strong> opgelost</div>
        <div class="stat-pill"><strong>${skipped.length}</strong> overgeslagen</div>
        <div class="stat-pill"><strong>${STOPS.length}</strong> stops</div>
      </div>
      <button class="btn-primary btn-full" id="btnReset">Opnieuw beginnen</button>
    </div>
  `;
  document.getElementById('btnReset').addEventListener('click', () => {
    currentIdx = 0;
    hintsShown = 0;
    skipped    = [];
    solved     = [];
    phase      = 'travel';
    saveProgress();
    render();
  });
}

render();
