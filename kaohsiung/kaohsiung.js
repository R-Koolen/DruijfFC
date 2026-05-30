// ════════════════════════════════════════════════════════════
// Drakenpad — Kaohsiung scavenger hunt (flat iFruijt 2013)
// 6 stops × 3 questions — same phase machine as Schatzoeker
// ════════════════════════════════════════════════════════════

const STOPS = [
  {
    id: 'formosa',
    emoji: '🌈',
    name: 'Formosa Boulevard Station',
    coords: [22.6273, 120.3014],
    desc: "We starten bij het meest fotogenieke metrostation ter wereld — Formosa Boulevard. De Dome of Light is een duizelingwekkend glasmozaïek van 660 m² dat boven je hoofd hangt als je door de hal loopt.",
    info: "Formosa Boulevard Station is het drukste knooppunt van de Kaohsiung MRT en wordt door CNN beschreven als een van de mooiste metrostations ter wereld. De Dome of Light — 光之穹頂 — werd ontworpen door de Italiaanse glaskunstenaar Narcissus Quagliata en bestaat uit meer dan 4.500 afzonderlijke glazen panelen. Het werk stelt de spirituele cyclus van het leven voor in vier kwarten: Water, Aarde, Licht en Vuur. Quagliata werkte ruim tien jaar aan dit meesterwerk, dat in 2008 werd onthuld. Het station zelf werd geopend in 1999 als onderdeel van de Red Line.",
    travelTip: "Neem de MRT Orange of Red Line naar Formosa Boulevard Station — je kunt het niet missen, het is het enige station met een gigantisch glazen koepel boven het kruispunt.",
    questions: [
      {
        task: "Kijk omhoog naar de Dome of Light. Het kunstwerk verbeeldt vier thema's of elementen van het leven. Noem één van de vier thema's die op de informatiepanelen in de hal worden beschreven.",
        answerKeywords: ['water', 'aarde', 'earth', 'vuur', 'fire', 'licht', 'light'],
        hints: [
          "De vier thema's staan op de informatiepanelen vlak naast de trap die naar de perrons leidt."
        ],
        successMsg: "Correct! Het kunstwerk verbeeldt Water, Aarde, Licht en Vuur — de vier elementen van de levenscyclus, gemaakt door Narcissus Quagliata."
      },
      {
        task: "Hoeveel uitgangen heeft Formosa Boulevard Station in totaal? Loop een rondje door de hal en tel ze.",
        answerKeywords: ['4', 'vier', 'four'],
        hints: [
          "Er zijn uitgangen op alle vier de hoekpunten van het kruispunt boven het station."
        ],
        successMsg: "Juist! Vier uitgangen, één op elke hoek van het grote kruispunt — samen met de metro-lijnen maakt dit het centrale knooppunt van Kaohsiung."
      },
      {
        task: "In welk jaar werd Formosa Boulevard Station officieel geopend? Kijk op de herdenkingsplaquette bij de kaartjeshal.",
        answerKeywords: ['1999', 'negentiennegentig'],
        hints: [
          "De plaquette hangt bij de incheckpoortjes, dicht bij de informatiebalie."
        ],
        successMsg: "Correct! Het station opende in 1999 als onderdeel van de eerste fase van de Kaohsiung MRT Red Line."
      }
    ]
  },
  {
    id: 'pier2',
    emoji: '🎨',
    name: 'Pier-2 Art Center',
    coords: [22.6239, 120.2823],
    desc: "Een oud havenmagazijncomplex dat is omgebouwd tot het grootste kunstdistrict van Taiwan. Straatkunst, installaties en gerecycled industrieel materiaal overal.",
    info: "Pier-2 Art Center — 駁二藝術特區 — is ontstaan uit de havenmagazijnen die de Japanse koloniale overheid in het begin van de 20e eeuw bouwde voor de opslag van suiker en andere exportgoederen. Na decennia van verwaarlozing werd het complex in 2000 voor het eerst opengesteld als experimentele kunstplek. Sindsdien groeide het uit tot een bruisend kunstdistrict met ateliers, galeries, winkels en buiteninstallaties. De loodsen zijn genummerd: de historische C-loodsen (C1, C7, C8) liggen het dichtst bij het water en zijn het oudste gedeelte van het complex.",
    travelTip: "Loop van Formosa Boulevard Station circa 20 minuten langs de Love River richting de haven, of neem de Light Rail naar 駁二大義 Station.",
    questions: [
      {
        task: "De loodsen van Pier-2 zijn genummerd met letters en cijfers. Met welke letter worden de originele historische loodsen aangeduid die het dichtst bij het water liggen?",
        answerKeywords: ['c', 'pier c', 'c-loodsen'],
        hints: [
          "Loop richting de haven en kijk naar de metalen naamplaatjes aan de gevels van de loodsen."
        ],
        successMsg: "Juist! De C-loodsen — C1, C7 en C8 — zijn de originele havenmagazijnen en het oudste deel van het complex."
      },
      {
        task: "Er zijn grote kunstinstallaties gemaakt van gerecycled industrieel materiaal te vinden in het complex. Van welk materiaal zijn ze voornamelijk gemaakt?",
        answerKeywords: ['metaal', 'metal', 'schroot', 'staal', 'steel', 'ijzer', 'iron'],
        hints: [
          "Bekijk het oppervlak van de grote installatie bij de hoofdpoort goed — wat is het gemaakt van?"
        ],
        successMsg: "Klopt! De installaties bij Pier-2 zijn gemaakt van oud schroot en gerecycled industrieel materiaal — een knipoog naar de industriële geschiedenis van de haven."
      },
      {
        task: "In welk jaar werd Pier-2 voor het eerst opengesteld als kunstlocatie? Zoek het op het informatiepaneel bij de ingang.",
        answerKeywords: ['2000', 'tweeduizend'],
        hints: [
          "Het openingsjaar staat op het geschiedkundige paneel bij de hoofdpoort."
        ],
        successMsg: "Goed! Pier-2 opende in 2000 en groeide uit tot het grootste kunstdistrict van Taiwan."
      }
    ]
  },
  {
    id: 'cijin',
    emoji: '🏮',
    name: 'Cijin Island',
    coords: [22.6176, 120.2678],
    desc: "Een smal schiereiland bereikbaar per veerpont — een 5 minuten durende oversteek naar een heel andere wereld: een vuurtoren uit 1883, een Japans kustfort en de beste oesteromelet van Taiwan.",
    info: "Cijin — 旗津 — is een langgerekt schiereiland aan de westkant van Kaohsiung, van het vasteland gescheiden door de havenuitgang. De enige manier om er te komen is per veerpont vanuit de Gushan Ferry Terminal, een oversteek van slechts 5 minuten. Op het eiland staan de Cijin Lighthouse (1883, Qing-dynastie) en een gedeeltelijk bewaard gebleven Japans kustfort. De Oude Marktstraat staat vol met kraampjes die de befaamde oesteromelet — 蚵仔煎 — verkopen, het culinaire visitekaartje van het eiland.",
    travelTip: "Neem de Light Rail of bus naar Gushan Ferry Terminal. Koop een veerpont-kaartje (een paar NT$) en stap aan boord — fietsen mag mee.",
    questions: [
      {
        task: "Hoe lang duurt de veerbootoversteek van Gushan naar Cijin Island? Lees het op het informatiebord bij de aanlegsteiger.",
        answerKeywords: ['5', 'vijf', 'five', '5 minuten'],
        hints: [
          "Het bord met vaarinformatie hangt naast de kassa van de veerpont, aan de kant van het vasteland."
        ],
        successMsg: "Correct! Slechts 5 minuten varen — maar eenmaal aan de overkant lijkt het alsof je de stad ver achter je hebt gelaten."
      },
      {
        task: "Ga naar de Cijin Lighthouse en lees de informatieplaquette aan de voet van de toren. In welk jaar werd de toren gebouwd?",
        answerKeywords: ['1883', 'achttienhonderddrieëntachtig'],
        hints: [
          "De plaquette staat onderaan de trap die naar de vuurtoren leidt — let op het oprichtingsjaar."
        ],
        successMsg: "Juist! De Cijin Lighthouse dateert uit 1883, gebouwd tijdens de Qing-dynastie. Het is een van de oudste moderne vuurtorens van Taiwan."
      },
      {
        task: "Op de Oude Marktstraat van Cijin is er één gerecht dat op bijna elk kraampje staat. Schrijf de twee Chinese tekens over die je op de meeste uithangtekens ziet voor dit oestergerecht.",
        answerKeywords: ['蚵仔煎', 'oester', 'oyster', 'oesteromelet', 'oa jian'],
        hints: [
          "Loop langs de kraampjes — de tekens staan in het rood op bijna elk uithangbord."
        ],
        successMsg: "Lekker! 蚵仔煎 — oesteromelet — is het handelsmerk van Cijin. Knapperig van buiten, zacht van binnen."
      }
    ]
  },
  {
    id: 'lotus',
    emoji: '🐉',
    name: 'Lotus Pond',
    coords: [22.6886, 120.2966],
    desc: "Het iconische meer net buiten het centrum, bekend om de Draak- en Tijgerpagodes die op het water staan — en de traditionele regel die bepaalt hoe je ze moet doorlopen.",
    info: "Lotus Pond — 蓮池潭 — is een meer van zo'n 75 hectare aan de noordkant van Kaohsiung, omzoomd door tempels en paviljoens. De Draak- en Tijgerpagodes (龍虎塔), gebouwd in 1953, zijn het meest bekende koppel: twee zevenstorenpagodes op het water waarvan men traditioneel door de muil van de Draak naar binnen loopt en via de muil van de Tijger naar buiten gaat, zodat het kwaad van je wordt afgewassen. Op het meer staan ook een tempel gewijd aan Xuantian Shang Di (de God van de Noordelijke Pool), en het Zuoying Confucius-heiligdom.",
    travelTip: "Neem de MRT Red Line naar Zuoying Station, dan bus 301 of een taxi naar het meer (circa 10 minuten).",
    questions: [
      {
        task: "Volgens de traditie moet je via welk dier de linker pagode betreden en via welk dier verlaat je de rechter? Zoek het informatiebord bij de hoofdingang.",
        answerKeywords: ['draak', 'dragon', 'tijger', 'tiger'],
        hints: [
          "Er hangt een bord bij de hoofdtrap dat de traditionele looproute uitlegt."
        ],
        successMsg: "Goed gedaan! Door de Draak naar binnen, door de Tijger naar buiten — zo wast het kwaad van je af. Een traditie die mensen al decennia volgen."
      },
      {
        task: "Hoeveel verdiepingen telt elke pagode? Tel de dakranden van beneden naar boven.",
        answerKeywords: ['7', 'zeven', 'seven'],
        hints: [
          "Elk niveau heeft zijn eigen uitstekende dakrand — tel ze van de waterrand tot de spits."
        ],
        successMsg: "Precies! Zeven verdiepingen — het geluksgetal in de Chinese cultuur. Je mag trouwens ook naar boven klimmen voor het uitzicht."
      },
      {
        task: "Aan het water staat ook een tempel gewijd aan Xuantian Shang Di. Welk paar dieren staat aan de voet van zijn standbeeld of afgebeeld op de poort?",
        answerKeywords: ['schildpad', 'turtle', 'slang', 'snake', 'schildpad en slang'],
        hints: [
          "Zoek de tempel aan de noordoever — zijn kenmerkende dier-symbolen staan bij de basis van zijn afbeelding."
        ],
        successMsg: "Correct! Xuantian Shang Di staat op een schildpad die gewikkeld is in een slang — symbolen van kracht, wijsheid en eeuwigheid."
      }
    ]
  },
  {
    id: 'liuhe',
    emoji: '🍢',
    name: 'Liuhe Night Market',
    coords: [22.6281, 120.3103],
    desc: "Een van de beroemdste nachtmarkten van Taiwan, actief sinds 1972. Ruim 60 kraampjes vol straatvoedsel, en de onmisbare papayamelk van Kaohsiung.",
    info: "De Liuhe Night Market — 六合夜市 — is een van de langst bestaande en meest bezochte nachtmarkten van Taiwan, geopend in 1972 langs een straat die ooit door de Japanners werd aangelegd. De markt is zo'n 350 meter lang en herbergt meer dan 60 vaste kraampjes. Kaohsiung staat bekend als de papayahoofdstad van Taiwan, en 木瓜牛奶 (papayamelk) is hier het absolute drankje. Andere klassiekers: geroosterd vlees op een stokje, oestereieren, schorpioenvlees voor de durvers, en stinky tofu voor de echte liefhebbers.",
    travelTip: "De markt ligt op loopafstand van Formosa Boulevard Station — loop richting het zuiden langs Zhongshan 1st Road, dan sla je rechts af de marktstraat in.",
    questions: [
      {
        task: "Hoe lang is de Liuhe Night Market van begin tot einde? Zoek het op het informatiebord bij de hoofdingang.",
        answerKeywords: ['350', 'driehonderdvijftig', '380', '400'],
        hints: [
          "Het bord met marktinformatie staat bij de ingang aan de kant van Zhongshan 1st Road."
        ],
        successMsg: "Goed! De markt is circa 350 meter lang — en als je heen en terug loopt heb je al zeker 700 meter aan verleidingen weerstaan (of niet)."
      },
      {
        task: "Kaohsiung staat bekend als de papayahoofdstad van Taiwan. Welke twee Chinese tekens staan bovenaan de uithangtekens bij de papaya-melkkraampjes?",
        answerKeywords: ['木瓜', 'mu gua', 'mugua', 'papaya'],
        hints: [
          "Zoek een kraampje met grote foto's van papaya — de twee tekens staan bovenaan het uithangbord in grote letters."
        ],
        successMsg: "Goed! 木瓜 (mù guā) = papaya — en 木瓜牛奶 (papayamelk) is het must-drink van Kaohsiung."
      },
      {
        task: "In welk jaar werd Liuhe Night Market officieel geopend? Lees het op het informatiepaneel bij de ingang.",
        answerKeywords: ['1972', 'negentientweeënzeventig'],
        hints: [
          "Het jaar staat op het informatiepaneel aan de Zhongshan Road-kant van de ingang."
        ],
        successMsg: "Juist! Liuhe Night Market bestaat al sinds 1972 — meer dan vijftig jaar vol straatvoedsel en nachtleven."
      }
    ]
  },
  {
    id: 'loveriver',
    emoji: '💕',
    name: 'Love River',
    coords: [22.6329, 120.2951],
    desc: "De rivier die Kaohsiung doormidden snijdt en het symbool is van de stad. De promenade langs het water is het romantische hart van Kaohsiung, vol sculpturen, lichten en koppels.",
    info: "De Love River — 愛河 — is een rivier van ongeveer 12 kilometer lang die door het centrum van Kaohsiung stroomt en uitmondt in de Kaohsiung Haven. In de jaren 80 was de rivier ernstig vervuild, maar na een grootschalig saneringsproject werd ze in de jaren 90 omgetoverd tot een van de mooiste promenades van Taiwan. Langs de oevers staat het voormalige Stadhuis van Kaohsiung (1939, nu het Historisch Museum van Kaohsiung), een prachtig voorbeeld van Japanse art-deco-architectuur. 's Avonds kleurt de rivier roze en blauw door de verlichting op de bruggen.",
    travelTip: "Loop van Formosa Boulevard Station westwaarts richting de rivier — de promenade is zo'n 10 minuten lopen. Of neem de Light Rail naar 愛河之心 Station.",
    questions: [
      {
        task: "Hoe lang is de Love River in totaal? Zoek het op een informatiepaneel langs de promenade bij de Zhongzheng Bridge.",
        answerKeywords: ['12', 'twaalf', '12,1', '12.1'],
        hints: [
          "Informatiepanelen hangen langs de promenade — zoek het bord dat de rivier als geheel beschrijft."
        ],
        successMsg: "Juist! De Love River is circa 12 kilometer lang — van het Baolai-gebergte tot de haven van Kaohsiung."
      },
      {
        task: "Vlak bij de Love River staat het voormalige Stadhuis van Kaohsiung (nu het Historisch Museum). Uit welke koloniale periode stamt dit gebouw? Lees het op de informatieplaquette.",
        answerKeywords: ['japans', 'japanse', 'japanese', 'japan', '1939', '1938'],
        hints: [
          "Kijk naar de architectuurstijl en het informatiebord bij de hoofdingang van het museum."
        ],
        successMsg: "Correct! Het gebouw dateert uit 1939, gebouwd tijdens de Japanse koloniale periode — een mooi voorbeeld van Japanse art-deco."
      },
      {
        task: "Zoek een sculptuur of kunstinstallatie langs de Love River promenade die verwijst naar de naam 'Love River'. Welk symbool of figuur staat centraal?",
        answerKeywords: ['hart', 'heart', 'love', 'liefde', 'koppel', 'couple'],
        hints: [
          "Loop langs de promenade richting de Zhongzheng Bridge — er staan meerdere romantische installaties."
        ],
        successMsg: "Mooi gevonden! De Love River promenade staat vol hartsymbolen en koppelsilhouetten — Kaohsiung leunt graag op haar romantische reputatie."
      }
    ]
  }
];

// Per-stop avatar colors
const STOP_COLORS = {
  formosa:   '#7B5FCC',
  pier2:     '#C86010',
  cijin:     '#C8321E',
  lotus:     '#2878C0',
  liuhe:     '#2A7A3C',
  loveriver: '#B8306A',
};

// ── STATE ──
const STORAGE_KEY = 'kaohsiung_progress';
let currentIdx         = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
let hintsShown         = 0;
let phase              = 'list';
let taskView           = 'list';
let currentQuestionIdx = 0;
let stopCorrect        = 0;
let hintsUsedThisStop  = 0;
let perQuestionState   = {};

let skipped     = JSON.parse(localStorage.getItem('kaohsiung_skipped') || '[]');
let solved      = JSON.parse(localStorage.getItem('kaohsiung_solved')  || '[]');
let starsByStop = JSON.parse(localStorage.getItem('kaohsiung_stars')   || '{}');
let startTime   = parseInt(localStorage.getItem('kaohsiung_start_ts')  || '0', 10);

if (currentIdx >= STOPS.length) currentIdx = STOPS.length - 1;
phase = (solved.length + skipped.length >= STOPS.length) ? 'finish' : 'list';

// ── DOM REFS ──
const stage         = document.getElementById('huntStage');
const headerTitleEl = document.getElementById('jlHeaderTitle');

// ── HELPERS ──
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, String(currentIdx));
  localStorage.setItem('kaohsiung_skipped', JSON.stringify(skipped));
  localStorage.setItem('kaohsiung_solved',  JSON.stringify(solved));
  localStorage.setItem('kaohsiung_stars',   JSON.stringify(starsByStop));
  if (startTime) localStorage.setItem('kaohsiung_start_ts', String(startTime));
}

function ensureStartTime() {
  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem('kaohsiung_start_ts', String(startTime));
  }
}

function calcStars(correctCount, total, hintsUsed) {
  if (correctCount < total) return correctCount > 0 ? 1 : 0;
  if (hintsUsed === 0) return 3;
  if (hintsUsed <= 2)  return 2;
  return 1;
}

function formatDuration(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (h > 0) return `${h}u ${m}m`;
  return `${m}m ${String(s).padStart(2,'0')}s`;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function checkAnswer(input, keywords) {
  const cleaned = input.toLowerCase().trim().replace(/[.,!?]/g, '');
  return keywords.some(k => cleaned.includes(k.toLowerCase()));
}

function stopIndexById(id) { return STOPS.findIndex(s => s.id === id); }
function isDone(stopId)    { return solved.includes(stopId) || skipped.includes(stopId); }
function isCurrent(stopId) { return stopIndexById(stopId) === currentIdx && !isDone(stopId); }
function isLocked(stopId)  { return stopIndexById(stopId) > currentIdx && !isDone(stopId); }
function truncate(str, n)  { return str.length <= n ? str : str.slice(0, n - 1) + '…'; }

function setHeader(title) { headerTitleEl.textContent = title; }

// ── LEAFLET MAP ──
function initMap(idx) {
  const stop     = STOPS[idx];
  const prevStop = idx > 0 ? STOPS[idx - 1] : null;

  const map = L.map('stopMap', {
    scrollWheelZoom: false,
    dragging: !L.Browser.mobile,
    doubleClickZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const destIcon = L.divIcon({
    html: `<div style="width:16px;height:16px;border-radius:50%;background:#C9302C;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.5)"></div>`,
    className: '', iconSize: [16, 16], iconAnchor: [8, 8], popupAnchor: [0, -10],
  });
  L.marker(stop.coords, { icon: destIcon }).addTo(map)
    .bindPopup(`<strong>${stop.name}</strong>`, { closeButton: false });

  if (prevStop) {
    const prevIcon = L.divIcon({
      html: `<div style="width:12px;height:12px;border-radius:50%;background:#8C8E93;border:2px solid #fff"></div>`,
      className: '', iconSize: [12, 12], iconAnchor: [6, 6], popupAnchor: [0, -8],
    });
    L.marker(prevStop.coords, { icon: prevIcon }).addTo(map)
      .bindPopup(`<strong>${prevStop.name}</strong>`, { closeButton: false });

    L.polyline([prevStop.coords, stop.coords], {
      color: '#C9302C', weight: 3, opacity: 0.7, dashArray: '6, 8',
    }).addTo(map);

    map.fitBounds(L.latLngBounds([prevStop.coords, stop.coords]), { padding: [30, 30] });
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

// ════════════════════════════════════════════════════════════
// RENDER
// ════════════════════════════════════════════════════════════

function render() {
  stage.scrollTop = 0;
  if      (phase === 'list')   renderList();
  else if (phase === 'travel') renderTravel(STOPS[currentIdx]);
  else if (phase === 'info')   renderInfo(STOPS[currentIdx]);
  else if (phase === 'task')   renderTask(STOPS[currentIdx]);
  else if (phase === 'finish') renderFinish();
}

// ── JOB LIST ──
function renderList() {
  setHeader('Job List');

  const rowsHtml = STOPS.map((s, i) => {
    const done       = isDone(s.id);
    const current    = i === currentIdx && !done;
    const locked     = i > currentIdx && !done;
    const stars      = starsByStop[s.id] || 0;
    const skippedHere = skipped.includes(s.id) && !solved.includes(s.id);

    let cls = 'jl-row';
    if (done)    cls += ' jl-row--done';
    if (current) cls += ' jl-row--current';
    if (locked)  cls += ' jl-row--locked';

    let statusHtml;
    if (done) {
      if (skippedHere && stars === 0) statusHtml = `<span class="jl-status">○</span>`;
      else statusHtml = `<span class="jl-status jl-status--done">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>`;
    } else if (current) {
      statusHtml = `<span class="jl-status jl-status--current">▶</span>`;
    } else {
      statusHtml = `<span class="jl-status">🔒</span>`;
    }

    return `
      <div class="${cls}" data-idx="${i}">
        <div class="jl-avatar" style="background:${STOP_COLORS[s.id] || '#3A6BD8'};">${s.emoji}</div>
        <div class="jl-body">
          <div class="jl-title">${escapeHtml(s.name)}</div>
          <div class="jl-sub">Stop ${i + 1} · ${s.questions.length} vragen</div>
        </div>
        ${statusHtml}
      </div>
    `;
  }).join('');

  stage.innerHTML = `<div class="jl-list">${rowsHtml}</div>`;

  stage.querySelectorAll('.jl-row').forEach(row => {
    row.addEventListener('click', () => {
      const idx  = parseInt(row.dataset.idx, 10);
      const stop = STOPS[idx];
      if (isLocked(stop.id)) {
        return showToast('🔒 Voltooi eerst de vorige stop');
      }
      currentIdx = idx;
      hintsShown = 0;
      hintsUsedThisStop = 0;
      currentQuestionIdx = 0;
      stopCorrect = 0;
      perQuestionState = {};
      taskView = 'list';
      phase = isDone(stop.id) ? 'info' : 'travel';
      ensureStartTime();
      saveProgress();
      render();
    });
  });
}

// ── TRAVEL ──
function renderTravel(stop) {
  setHeader(stop.name);
  const prevStop = currentIdx > 0 ? STOPS[currentIdx - 1] : null;
  const dirLabel = prevStop
    ? `🚇 Route vanaf ${escapeHtml(prevStop.name)}`
    : `📍 Bekijk op Google Maps`;

  stage.innerHTML = `
    <div class="jl-page">
      <div id="stopMap" class="jl-map"></div>
      <div class="jl-section-label">Hoe kom je er</div>
      <div class="jl-text">${escapeHtml(stop.travelTip)}</div>
      <div class="jl-actions">
        <a href="${mapsDirectionsUrl(currentIdx)}" target="_blank" rel="noopener" class="jl-btn jl-btn--blue">
          ${dirLabel}
        </a>
        <button class="jl-btn jl-btn--green" id="btnHere">📍 Ik ben hier</button>
      </div>
    </div>
  `;

  initMap(currentIdx);

  document.getElementById('btnHere').addEventListener('click', () => {
    hintsShown = 0;
    currentQuestionIdx = 0;
    stopCorrect = 0;
    hintsUsedThisStop = 0;
    perQuestionState = {};
    phase = 'info';
    render();
  });
}

// ── INFO ──
function renderInfo(stop) {
  setHeader(stop.name);
  stage.innerHTML = `
    <div class="jl-page">
      <div class="jl-hero">
        <div class="jl-hero-emoji">${stop.emoji}</div>
        <div class="jl-hero-name">${escapeHtml(stop.name)}</div>
      </div>
      <div class="jl-section-label">Briefing</div>
      <div class="jl-text">${escapeHtml(stop.info)}</div>
      <div class="jl-actions">
        <button class="jl-btn jl-btn--blue" id="btnStart">Laten we beginnen →</button>
      </div>
    </div>
  `;

  document.getElementById('btnStart').addEventListener('click', () => {
    taskView = 'list';
    phase = 'task';
    render();
  });
}

// ── TASK PHASE ──
function renderTask(stop) {
  if (taskView === 'list')        renderTaskList(stop);
  else if (taskView === 'detail') renderTaskDetail(stop);
}

function renderTaskList(stop) {
  setHeader(stop.name);

  const rowsHtml = stop.questions.map((q, i) => {
    const state     = perQuestionState[`${stop.id}_${i}`];
    const isCurr    = i === currentQuestionIdx && !state;
    const isLock    = i > currentQuestionIdx && !state;

    let cls = 'jl-row';
    if (state === 'done')    cls += ' jl-row--done';
    if (isCurr)              cls += ' jl-row--current';
    if (isLock)              cls += ' jl-row--locked';

    let status;
    if (state === 'done')         status = `<span class="jl-status jl-status--done">✓</span>`;
    else if (state === 'skipped') status = `<span class="jl-status">⏭</span>`;
    else if (isCurr)              status = `<span class="jl-status jl-status--current">▶</span>`;
    else                          status = `<span class="jl-status">🔒</span>`;

    return `
      <div class="${cls}" data-q="${i}">
        <div class="jl-avatar jl-avatar--num" style="background:${STOP_COLORS[stop.id]};">${i + 1}</div>
        <div class="jl-body">
          <div class="jl-title">Vraag ${i + 1}</div>
          <div class="jl-sub">${escapeHtml(truncate(q.task, 38))}</div>
        </div>
        ${status}
      </div>
    `;
  }).join('');

  stage.innerHTML = `<div class="jl-list">${rowsHtml}</div>`;

  stage.querySelectorAll('.jl-row').forEach(row => {
    row.addEventListener('click', () => {
      const i     = parseInt(row.dataset.q, 10);
      const state = perQuestionState[`${stop.id}_${i}`];
      const isCurr = i === currentQuestionIdx && !state;
      if (!isCurr && !state) return;
      currentQuestionIdx = i;
      hintsShown = 0;
      taskView = 'detail';
      render();
    });
  });
}

function renderTaskDetail(stop) {
  const q = stop.questions[currentQuestionIdx];
  setHeader(`${stop.name} · Vraag ${currentQuestionIdx + 1}/${stop.questions.length}`);
  renderQuestionForm(stop, q);
}

function renderQuestionForm(stop, q) {
  const hintsHtml = q.hints.slice(0, hintsShown).map(h =>
    `<div class="jl-hint">💡 ${escapeHtml(h)}</div>`
  ).join('');

  const maxHints = 1;
  const hintBtnHtml = hintsShown < maxHints && hintsShown < q.hints.length
    ? `<button class="jl-btn jl-btn--grey" id="btnHint">💡 Hint</button>`
    : '';

  stage.innerHTML = `
    <div class="jl-page">
      <div class="jl-question">${escapeHtml(q.task)}</div>
      ${hintsHtml}
      <div class="jl-actions">
        <input type="text" class="jl-input" id="taskInput" placeholder="Typ je antwoord..." autocomplete="off" />
        ${hintBtnHtml}
        <div class="jl-btn-row">
          <button class="jl-btn jl-btn--red" id="btnSkip">Overslaan</button>
          <button class="jl-btn jl-btn--green" id="btnSubmit">Controleer</button>
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
      input.classList.add('is-correct');
      submit.textContent = '✓ Correct!';
      submit.disabled = true;
      skip.disabled = true;
      if (hint) hint.disabled = true;

      const successEl = document.createElement('div');
      successEl.className = 'jl-success';
      successEl.textContent = q.successMsg || '✓ Goed gedaan!';
      input.insertAdjacentElement('afterend', successEl);

      const nextBtn = document.createElement('button');
      nextBtn.className = 'jl-btn jl-btn--green';
      nextBtn.id = 'btnCorrectNext';
      nextBtn.textContent = 'Volgende →';
      submit.replaceWith(nextBtn);
      nextBtn.addEventListener('click', () => {
        stopCorrect++;
        perQuestionState[`${stop.id}_${currentQuestionIdx}`] = 'done';
        advanceQuestion(stop);
      });
    } else {
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
    }
  });

  skip.addEventListener('click', () => {
    perQuestionState[`${stop.id}_${currentQuestionIdx}`] = 'skipped';
    hintsShown = 0;
    advanceQuestion(stop);
  });

  if (hint) {
    hint.addEventListener('click', () => {
      hintsShown++;
      hintsUsedThisStop++;
      renderTaskDetail(stop);
    });
  }
}

function advanceQuestion(stop) {
  const allAnswered = stop.questions.every((_, i) => perQuestionState[`${stop.id}_${i}`]);
  hintsShown = 0;
  if (allAnswered) {
    finishStop(stop);
  } else {
    for (let i = 0; i < stop.questions.length; i++) {
      if (!perQuestionState[`${stop.id}_${i}`]) {
        currentQuestionIdx = i;
        break;
      }
    }
    taskView = 'list';
    render();
  }
}

function finishStop(stop) {
  const total = stop.questions.length;
  const stars = calcStars(stopCorrect, total, hintsUsedThisStop);
  starsByStop[stop.id] = stars;

  if (!solved.includes(stop.id) && !skipped.includes(stop.id)) {
    if (stopCorrect === total) solved.push(stop.id);
    else skipped.push(stop.id);
  }

  const idx = stopIndexById(stop.id);
  if (idx === currentIdx) currentIdx++;

  saveProgress();

  setHeader('Stop voltooid');
  const headlineWord = stopCorrect === 0 ? 'Overgeslagen' : 'Voltooid!';
  const sub = stopCorrect === total
    ? `Alle ${total} vragen correct.`
    : stopCorrect === 0
      ? 'Door naar de volgende.'
      : `${stopCorrect} van ${total} vragen correct.`;

  stage.innerHTML = `
    <div class="jl-done-flash">
      <div class="jl-done-flash-check">${stopCorrect === 0 ? '→' : '✓'}</div>
      <div class="jl-done-flash-title">Missie ${headlineWord}</div>
      <div class="jl-done-flash-msg">${escapeHtml(sub)}</div>
    </div>
  `;

  setTimeout(() => {
    phase = currentIdx >= STOPS.length ? 'finish' : 'list';
    render();
  }, 1400);
}

// ── FINISH ──
function renderFinish() {
  setHeader('Kaohsiung Voltooid');
  const totalStars = Object.values(starsByStop).reduce((s, x) => s + x, 0);
  const maxStars   = STOPS.length * 3;
  const elapsed    = startTime ? Date.now() - startTime : 0;
  const timeStr    = elapsed > 0 ? formatDuration(elapsed) : '—';

  const rowsHtml = STOPS.map(s => {
    const stars = starsByStop[s.id] || 0;
    return `
      <div class="jl-row">
        <div class="jl-avatar" style="background:${STOP_COLORS[s.id]};">${s.emoji}</div>
        <div class="jl-body">
          <div class="jl-title">${escapeHtml(s.name)}</div>
          <div class="jl-sub">${stars > 0 ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : 'Overgeslagen'}</div>
        </div>
      </div>
    `;
  }).join('');

  stage.innerHTML = `
    <div class="jl-page">
      <div class="jl-finish-totals">
        <div class="jl-finish-totals-stars">${totalStars} / ${maxStars} ★</div>
        <div class="jl-finish-totals-sub">Tijd: ${timeStr} · ${solved.length} opgelost · ${skipped.length} overgeslagen</div>
      </div>
      <div class="jl-section-label">Alle stops</div>
      <div class="jl-list">${rowsHtml}</div>
      <div class="jl-actions">
        <button class="jl-btn jl-btn--red" id="btnResetFinish">Opnieuw beginnen</button>
      </div>
    </div>
  `;

  document.getElementById('btnResetFinish').addEventListener('click', () => doReset());
}

// ── TOAST ──
function showToast(msg) {
  let toast = document.getElementById('jl-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'jl-toast';
    Object.assign(toast.style, {
      position:'fixed', bottom:'90px', left:'50%', transform:'translateX(-50%)',
      background:'rgba(10,11,14,0.95)', color:'#fff',
      padding:'10px 18px', borderRadius:'999px', fontSize:'13px', fontWeight:'600',
      zIndex:'500', boxShadow:'0 8px 24px rgba(0,0,0,0.6)',
      border:'1px solid rgba(255,255,255,0.15)',
      opacity:'0', transition:'opacity 0.2s', pointerEvents:'none',
    });
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 1800);
}

// ── RESET ──
function doReset() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('kaohsiung_skipped');
  localStorage.removeItem('kaohsiung_solved');
  localStorage.removeItem('kaohsiung_stars');
  localStorage.removeItem('kaohsiung_start_ts');
  location.reload();
}

// ── BOTTOM 3-BUTTON ROW ──
document.getElementById('btnReset').addEventListener('click', () => {
  if (confirm('Voortgang wissen en opnieuw beginnen?')) doReset();
});

document.getElementById('btnJump').addEventListener('click', () => {
  if (phase === 'finish') {
    showToast('Klaar — alles voltooid!');
    return;
  }
  if (currentIdx >= STOPS.length) {
    phase = 'finish';
  } else {
    phase = 'travel';
  }
  hintsShown = 0;
  hintsUsedThisStop = 0;
  currentQuestionIdx = 0;
  stopCorrect = 0;
  perQuestionState = {};
  taskView = 'list';
  render();
});

document.getElementById('btnBack').addEventListener('click', () => {
  if (phase === 'list' || phase === 'finish') {
    window.location.href = '../index.html';
    return;
  }
  if (phase === 'task' && taskView === 'detail') {
    taskView = 'list';
    hintsShown = 0;
    render();
    return;
  }
  if (phase === 'task') {
    phase = 'info';
    render();
    return;
  }
  if (phase === 'info') {
    phase = 'travel';
    render();
    return;
  }
  if (phase === 'travel') {
    phase = 'list';
    render();
    return;
  }
});

// ── INIT ──
render();
