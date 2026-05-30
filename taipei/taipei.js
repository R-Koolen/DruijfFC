const STOPS = [
  {
    id: 'cks',
    emoji: '🏛️',
    name: 'Chiang Kai-shek Memorial Hall',
    coords: [25.0344, 121.5214],
    desc: "We beginnen de dag in het Chiang Kai-shek Memorial Hall. Het hart van Taiwan en lekker dicht bij Rub 👍. Hieronder zie je waar het is, maar daar komen we wel uit!",
    info: "Dit monument werd gebouwd ter nagedachtenis aan Chiang Kai-shek, de leider die na de Chinese burgeroorlog (1949) met zijn regering naar Taiwan vluchtte. De bouw duurde van 1976 tot 1980 en kostte een fortuin — het witte marmer werd speciaal gehaald uit Hualien, de marmerstad aan de oostkust, bekend van de spectaculaire Taroko Gorge. In de hoofdhal staat een bronzen beeld van Chiang van vijf meter hoog, bewaakt door een erewacht die elk uur van positie wisselt. Het plein eromheen, Liberty Square, is een symbool geworden van Taiwan's democratische strijd: hier kwamen honderdduizenden mensen in de jaren negentig samen om vrijheid te eisen.",
    travelTip: "Als een daggoe achter Rub aan die het weet",
    questions: [
      {
        task: "Kijk goed naar het dak van de hoofdhal. Welke geometrische vorm heeft het dak als je het van boven zou bekijken?",
        answerKeywords: ['achthoek', 'octagon', 'octagonaal', 'achtkant', '8-hoek', 'achthoekig'],
        hints: [
          "De vorm past bij een geluksgetal in de Chinese cultuur.",
        ],
        successMsg: "Correct! Het dak is achthoekig. Het getal acht wordt in de Chinese cultuur verbonden met geluk en voorspoed."
      },
      {
        task: "Aan weerszijden van het grote plein staan twee enorme traditionele gebouwen. Waar wordt de linker vooral voor gebruikt?",
        answerKeywords: ['theater', 'voorstellingen', 'national theater'],
        hints: [
          "Links is dus niet rechts",
        ],
        successMsg: "Klopt! Het plein wordt geflankeerd door het National Theater."
      },
      {
        task: "Klim de voortrap naar de hoofdhal. Hoeveel treden leiden naar de ingang? (Het getal heeft een bijzondere betekenis in het leven van Chiang Kai-shek.)",
        answerKeywords: ['89', 'negenentachtig', 'eighty-nine', 'eighty nine'],
        hints: [
          "Dit is ongeveer het gewicht van Daan na Finland",
        ],
        successMsg: "Mooi spel — 89 treden, één voor elk levensjaar van Chiang Kai-shek."
      }
    ]
  },
  {
    id: 'botanical',
    emoji: '🌸',
    name: 'Botanische Tuin Taipei',
    coords: [25.0280, 121.5158],
    desc: "Een groene oase midden in de stad met meer dan 1500 plantensoorten. Het pronkstuk is de beroemde lotusvijver — in de zomer staat die vol prachtige roze bloemen.",
    info: "De botanische tuin werd in 1896 opgericht door de Japanse koloniale overheid als bosonderzoeksstation — een van de oudste wetenschappelijke tuinen van Taiwan. Vandaag de dag beslaat hij zo'n 8 hectare en herbergt hij meer dan 1500 plantensoorten uit heel Taiwan en de wereld. De lotusvijver, het pronkstuk van de tuin, bloeit prachtig van juni tot september. Naast de vijver staat het National Museum of History, herkenbaar aan de rode muren en groene dakpannen — een directe buurman die je niet mag missen.",
    travelTip: "Verlaat het CKS-plein aan de zuidkant richting Nanhai Road — de ingang van de botanische tuin is zo'n 5 minuten lopen naar het zuiden.",
    questions: [
      {
        task: "Zoek zowel het Herbarium als het Museum van het Keizerlijk Gezantschap. Welk gebouw is volgens de informatieborden het oudst?",
        answerKeywords: ["gezantschap", "guesthouse", "gezantshuis", "imperial envoy"],
        hints: [
          "Vergelijk de bouwjaren die bij beide historische gebouwen vermeld staan."
        ],
        successMsg: "Correct! Het voormalige gezantshuis dateert uit 1888 en is ouder dan het Herbarium uit 1924."
      },
      {
          task: "Ga naar de Lotus Pond en zoek een plek waar je tegelijk het water, de lotusvelden en het grote museumgebouw kunt zien. Welk museum wordt daar weerspiegeld in het water?",
          answerKeywords: ["historisch museum", "history museum", "museum"],
          hints: [
            "Kijk naar het grote traditionele gebouw direct naast de vijver."
          ],
          successMsg: "Correct! Dat is het National Museum of History naast de Lotus Pond."
      },
      {
         task: "Bij de Chinese Zodiac Plants Garden zijn twaalf planten gekoppeld aan dieren uit de dierenriem. Welk dier hoort bij de plantensoort Ulmus parvifolia volgens het informatiebord?",
         answerKeywords: ["rat", "muis"],
         hints: [
           "Zoek het bord waarop alle twaalf dieren en planten samen worden uitgelegd."
         ],
         successMsg: "Correct! Ulmus parvifolia staat in deze tuin gekoppeld aan de Rat uit de Chinese dierenriem."
      },
    ]
  },
  {
    id: 'ximending',
    emoji: '🌈',
    name: 'Ximending',
    coords: [25.0436, 121.5050],
    desc: "De jeugd- en modewijk van Taipei — neonreclames, straatartiesten, vintage winkels en de lekkerste snacks van de stad. Het perfecte plekje voor de lunch!",
    info: "Ximending werd in de jaren dertig door de Japanners aangelegd als uitgaanswijk, gemodelleerd naar de Ginza in Tokio. Na de Tweede Wereldoorlog bleef het het bruisende hart van Taipei's uitgaansleven. Het Rode Huis (1908), ooit een openbare markt, werd later theater en is nu een cultureel centrum dat bekendstaat als plek voor LGBTQ+-cultuur — in 2005 verscheen hier het eerste regenboogzebrapad van Taiwan. Vandaag is Ximending de plek waar tieners, toeristen en streetfoodverkopers samenkomen in een kleurrijke mix van nostalgie en moderniteit.",
    travelTip: "Neem de MRT Green Line van Xiaonanmen Station (2 min lopen van de botanische tuin) één stop naar Ximen Station.",
    questions: [
      {
          task: "Bij MRT-uitgang ligt de beroemde regenboogoversteekplaats. Welk cijfer komt zowel terug in de naam van de installatie als op de metro-uitgang?",
          answerKeywords: ["6", "zes"],
          hints: [
            "Lees de naam van de oversteekplaats en vergelijk die met het uitgangsnummer."
          ],
          successMsg: "Juist! De installatie verwijst direct naar uitgang 6."
      },
      {
        task: "Zoek het eerste regenboogzebrapad van Taiwan, vlak bij het Rode Huis. Welke kleur heeft de middelste streep?",
        answerKeywords: ['geel', 'yellow', 'gold'],
        hints: [
          "Het zebrapad ligt vlak bij het achthoekige rode bakstenen gebouw.",
        ],
        successMsg: "Precies goed! De middelste streep is geel — een symbool van zon en trots."
      },
      {
        task: "Het Red House werd oorspronkelijk niet gebouwd als theater of winkelcentrum. Wat was de oorspronkelijke functie?",
        answerKeywords: ['markt', 'public market', 'openbare markt', 'market'],
        hints: [
          "Denk aan eten, handel en kraampjes.",
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
    info: "Longshan Tempel (龍山寺, 'Drakenbergtempel') werd in 1738 gesticht door immigranten uit de Chinese provincie Fujian. Hij overleefde aardbevingen, tyfoons én een Amerikaans bombardement in 1945 dat de hoofdhal verwoestte — waarna de tempel elke keer werd herbouwd. Bijzonder aan Longshan is de mix van religies: boeddhisme, taoïsme en Chinese volksreligie leven hier vredig naast elkaar. Locals komen niet alleen om te bidden, maar ook om via jiaobei — halvemaanvormige houten blokjes — een vraag aan de goden te stellen. De tempel is van vroeg in de ochtend tot laat in de avond open en altijd in bedrijf.",
    travelTip: "Neem de MRT Blue Line één stop naar het zuiden tot Longshan Temple Station, Uitgang 1. De tempel ligt recht tegenover het park.",
    questions: [
      {
        task: "Zoek de hoofdgotteid die vereerd wordt bij het hoofdaltaar aan de voorkant van de tempel. Wie is het?",
        answerKeywords: ['guanyin', 'guan yin', 'kuan yin', 'godin van genade', 'goddess of mercy', 'avalokitesvara'],
        hints: [
          "Het is een vrouwelijke bodhisattva, diep geliefd in heel Oost-Azië om haar mededogen.",
        ],
        successMsg: "Correct! Guanyin, de Godin van Genade — het hart van de Longshan Tempel."
      },
      {
        type: 'duo',
        task: "Vertel elkaar wat je zag, Welk mythisch dier koos jij? Als jullie in 3..2..1.. hetzelfde noemen dan is de vraag fout. Anders vul je in wat jullie zeiden.",
        answerKeywords: ['draak en feniks', 'feniks en draak', 'draken en feniksen', 'feniksen en draken', 'dragon and phoenix', 'phoenix and dragon', 'draak', 'feniks', 'phoenix', 'dragon'],
        hints: [
          "Eén dier spuugt vuur. Het andere wordt herboren uit de as.",
        ],
        successMsg: "Geweldig samengewerkt! Draken (vuur & kracht) en feniksen (wedergeboorte) — de twee krachtigste symbolen in de Chinese tempeldecoratie.",
        roles: {
          player1: {
            label: "🔴 Speler 1",
            clues: [
              "Zoek de bronzen zuilen in de voorhal. Welk mythisch dier is op beide zuilen in een spiraalvorm omhoog afgebeeld? Kies degene waarvan je denkt dat de ander hem niet kiest, jullie mogen niet dezelfde kiezen.",
              "Onthoud goed wat je ziet — maar laat je scherm NIET zien aan Speler 2!"
            ]
          },
          player2: {
            label: "🔵 Speler 2",
            clues: [
              "Zoek de bronzen zuilen in de voorhal. Welk mythisch dier is op beide zuilen in een spiraalvorm omhoog afgebeeld? Kies degene waarvan je denkt dat de ander hem niet kiest, jullie mogen niet dezelfde kiezen.",
              "Onthoud goed wat je ziet — maar laat je scherm NIET zien aan Speler 1!"
            ]
          }
        }
      },
      {
          task: "Vergelijk de Dragon Gate en de Tiger Gate. Via welk dier verlaten bezoekers volgens de traditionele route de tempel?",
          answerKeywords: ["tiger", "tijger"],
          hints: [
            "De ingang en uitgang gebruiken verschillende symbolische dieren."
          ],
          successMsg: "Goed gezien! Volgens de traditie verlaat je de tempel via de Tiger Gate."
      },
    ]
  },
  {
    id: 'bopiliao',
    emoji: '🏮',
    name: 'Bopiliao Historisch Blok',
    coords: [25.0363, 121.5009],
    desc: "Stap één minuut verder terug in de tijd. Rode bakstenen arcades, vintage borden en oude apotheken — een tijdcapsule midden in de stad, vlak naast de Longshan Tempel.",
    info: "Bopiliao (剝皮寮) is een van de best bewaarde historische straten van Taipei en dateert uit de vroege Qing-dynastie, rond 1740. De naam verwijst waarschijnlijk naar het pellen van kamferbast dat hier vroeger gebeurde. De straat lag in het hart van Mengjia (艋舺), de allereerste nederzetting van Taipei — een drukke handelsplek met kooplieden, kruidendokters en ambachtslieden. Tijdens de Japanse koloniale periode (1895–1945) werden veel panden uitgebreid of verbouwd, wat de unieke mix van Qing- en Japanse architectuur opleverde die je nog steeds ziet. De straat was meerdere keren gedoemd te worden gesloopt, maar overleefde dankzij hardnekkig lokaal verzet.",
    travelTip: "Verlaat de Longshan Tempel en loop oostwaarts over Guangzhou Street — Bopiliao is zo'n 2 minuten lopen.",
    questions: [
      {
        task: "Let op de straat zelf. Is Bopiliao breed en kaarsrecht, of eerder smaller en licht gebogen?",
        answerKeywords: ['smal en gebogen', 'smaller', 'licht gebogen', 'curved', 'narrow', 'smalle', 'gebogen', 'smal'],
        hints: [
          "Vergelijk het met moderne rechte stadswegen.",
        ],
        successMsg: "Klopt! De straat is relatief smal en licht gebogen, wat goed past bij de oudere stadsstructuur."
      },
      {
        task: "De karakteristieke rode bakstenen arcades van Bopiliao zijn een mix van welke twee architectuurperiodes?",
        answerKeywords: ['qing', 'japans', 'japanese', 'qing en japans', 'qing dynasty', 'japanese colonial', 'japanse koloniale'],
        hints: [
          "Één periode eindigde in 1895, de andere begon meteen daarna en duurde 50 jaar.",
        ],
        successMsg: "Ja! Late Qing-dynastie ontmoet Japans kolonialisme — dát is de architectonische mix."
      },
      {
        task: "Bopiliao ligt in een van de oudste delen van Taipei. Wat is de historische naam van dit gebied?",
        answerKeywords: ['mengjia', 'mangka', 'bangka', '艋舺'],
        hints: [
          "Je hoort deze naam ook terug bij Longshan Temple Station.",
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
    info: "Taipei 101 was van 2004 tot 2010 het hoogste gebouw ter wereld met zijn 508 meter en 101 verdiepingen — tot de Burj Khalifa in Dubai hem van de troon stootte. Het ontwerp is geïnspireerd op bamboestengels: het gebouw bestaat uit acht opeengestapelde segmenten van elk acht verdiepingen, een verwijzing naar het Chinese geluksgetal 8. De ronde gevelornamenten verwijzen naar traditionele Chinese munten, symbool voor rijkdom en voorspoed. Binnenin hangt een stalen bol van 660 ton — een trillingsdemper die als een enorme slinger heen en weer swingt om het gebouw stabiel te houden bij tyfoons en de frequente aardbevingen in Taiwan.",
    travelTip: "Loop terug naar Longshan Temple Station en neem de Blue Line naar Zhongxiao Fuxing. Stap over op de Rode Lijn richting Taipei 101 / World Trade Center Station, Uitgang 4.",
    questions: [
      {
        task: "De vorm van Taipei 101 is geïnspireerd op een plant die staat voor groei en veerkracht. Welke plant is dat?",
        answerKeywords: ['bamboe', 'bamboo'],
        hints: [
          "Deze plant groeit snel en heeft duidelijke segmenten.",
        ],
        successMsg: "Correct! Taipei 101 is geïnspireerd op bamboe, symbool van groei en veerkracht."
      },
      {
          task: "Op de wind-demper (tuned mass damper) in het observatiegedeelte staan ornamenten die bescherming symboliseren. Welk mythisch dier is daar prominent afgebeeld volgens de uitlegpanelen?",
          answerKeywords: ["dragon", "draak"],
          hints: [
            "Zoek naar de enorme gouden bol en de decoratieve elementen eromheen."
          ],
          successMsg: "Goed gezien! De draak is een belangrijk beschermend symbool rond de demper."
      },
      {
        task: "Kijk naar de buitenkant van Taipei 101. De ronde ornamenten op de gevel verwijzen naar welk oud Chinees voorwerp?",
        answerKeywords: ['munten', 'coins', 'oude munten', 'chinese coins', 'geld'],
        hints: [
          "Het past bij het thema rijkdom en voorspoed.",
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
    info: "Xiangshan (象山), is een 183 meter hoge heuvel die deel uitmaakt van de 'Vier Dierenberegen' aan de oostkant van Taipei — samen met de Tijger-, Leeuw- en Luipaardberg. De heuvel was vroeger begroeid met theeplantages tijdens de Japanse periode. Pas nadat Taipei 101 in 2004 zijn deuren opende, ontdekte iedereen dat Xiangshan het perfecte uitkijkpunt is voor het icoon van de stad. De beroemde Zes Reusachtige Rotsen vlak bij de top zijn uitgegroeid tot een van de meest gefotografeerde plekken van heel Taiwan. De wandeling is kort maar snoeihard — goede schoenen zijn geen overbodige luxe.",
    travelTip: "Neem de MRT Rode Lijn één stop zuidwaarts naar Xiangshan Station. Uitgang 2, volg dan de borden ongeveer 10 minuten naar het begin van het wandelpad.",
    questions: [
      {
        task: "De Chinese naam is Xiangshan. Wat betekent 'xiang' in deze context?",
        answerKeywords: ['olifant', 'elephant'],
        hints: [
          "Het dier zit al in de Nederlandse naam.",
        ],
        successMsg: "Goed! Xiangshan betekent letterlijk Olifantenberg."
      },
      {
        task: "Waarom is Olifantenberg zo'n bekende fotoplek in Taipei?",
        answerKeywords: ['uitzicht op taipei 101', 'skyline', 'view of taipei 101', 'taipei 101', 'uitzicht over taipei', 'uitzicht'],
        hints: [
          "Je komt hier niet alleen voor de natuur.",
        ],
        successMsg: "Precies! Vanaf hier heb je een van de bekendste uitzichten op Taipei 101 en de skyline."
      },
      {
        task: "Vlak bij de top vind je het beroemde fotoplekje. Wat is de Engelse naam van dit plekje?",
        answerKeywords: ['six giant rocks', 'six rocks', 'giant rocks', 'six boulders', 'zes rotsen', 'zes stenen', 'zes rotsblokken'],
        hints: [
          "Het is vernoemd naar het aantal grote stenen waarop je kunt klimmen.",
        ],
        successMsg: "Ja! De Six Giant Rocks — het meest gefotografeerde plekje van Taipei. Geniet van de zonsondergang!"
      }
    ]
  }
];

// ════════════════════════════════════════════════════════════
// iFruijt Job-List Schatzoeker — flat 2013 style
// ════════════════════════════════════════════════════════════

// Per-stop avatar colors (used in Job List rows + question detail backdrop)
const STOP_COLORS = {
  cks:        '#3A6BD8',
  botanical:  '#4DA84D',
  ximending:  '#E0B23A',
  longshan:   '#C9302C',
  bopiliao:   '#8B5A2B',
  taipei101:  '#7A47C2',
  elephant:   '#2A8F94',
};

// ── STATE ──
const STORAGE_KEY = 'taipei_progress';
let currentIdx         = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
let hintsShown         = 0;
let phase              = 'list';   // 'list' | 'travel' | 'info' | 'task' | 'finish'
let taskView           = 'list';   // sub-phase for task: 'list' | 'detail'
let currentQuestionIdx = 0;
let stopCorrect        = 0;
let duoPhase           = 'role-select'; // 'role-select' | 'clues' | 'answer'
let duoRole            = null;
let hintsUsedThisStop  = 0;
let perQuestionState   = {};       // map of stopId_qIdx -> 'done' | 'skipped' (resets per stop)
let skipped     = JSON.parse(localStorage.getItem('taipei_skipped') || '[]');
let solved      = JSON.parse(localStorage.getItem('taipei_solved')  || '[]');
let starsByStop = JSON.parse(localStorage.getItem('taipei_stars')   || '{}');
let startTime   = parseInt(localStorage.getItem('taipei_start_ts')  || '0', 10);

if (currentIdx >= STOPS.length) currentIdx = STOPS.length - 1;

// On entry we always show the Job List, regardless of where progress was
phase = (solved.length + skipped.length >= STOPS.length) ? 'finish' : 'list';

// ── DOM REFS ──
const stage           = document.getElementById('huntStage');
const headerTitleEl   = document.getElementById('jlHeaderTitle');

// ── HELPERS ──
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, String(currentIdx));
  localStorage.setItem('taipei_skipped', JSON.stringify(skipped));
  localStorage.setItem('taipei_solved',  JSON.stringify(solved));
  localStorage.setItem('taipei_stars',   JSON.stringify(starsByStop));
  if (startTime) localStorage.setItem('taipei_start_ts', String(startTime));
}

function ensureStartTime() {
  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem('taipei_start_ts', String(startTime));
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
function isLocked(stopId)  {
  const idx = stopIndexById(stopId);
  return idx > currentIdx && !isDone(stopId);
}

function setHeader(title) {
  headerTitleEl.textContent = title;
}

// ── LEAFLET MAP (light Voyager tiles, simple markers) ──
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
    const done     = isDone(s.id);
    const current  = i === currentIdx && !done;
    const locked   = i > currentIdx && !done;
    const stars    = starsByStop[s.id] || 0;
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
      const idx = parseInt(row.dataset.idx, 10);
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
      duoPhase = 'role-select';
      duoRole = null;
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
    duoPhase = 'role-select';
    duoRole = null;
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

// ── TASK PHASE (sub-views) ──
function renderTask(stop) {
  if (taskView === 'list')   renderTaskList(stop);
  else if (taskView === 'detail') renderTaskDetail(stop);
}

function renderTaskList(stop) {
  setHeader(stop.name);

  const rowsHtml = stop.questions.map((q, i) => {
    const state = perQuestionState[`${stop.id}_${i}`];
    const isCurrent = i === currentQuestionIdx && !state;
    const isLocked  = i > currentQuestionIdx && !state;

    let cls = 'jl-row';
    if (state === 'done')    cls += ' jl-row--done';
    if (state === 'skipped') cls += '';
    if (isCurrent)           cls += ' jl-row--current';
    if (isLocked)            cls += ' jl-row--locked';

    let status;
    if (state === 'done')         status = `<span class="jl-status jl-status--done">✓</span>`;
    else if (state === 'skipped') status = `<span class="jl-status">⏭</span>`;
    else if (isCurrent)           status = `<span class="jl-status jl-status--current">▶</span>`;
    else                          status = `<span class="jl-status">🔒</span>`;

    const preview = q.type === 'duo' ? '🕵️ Duo-missie' : truncate(q.task, 38);

    return `
      <div class="${cls}" data-q="${i}">
        <div class="jl-avatar jl-avatar--num" style="background:${STOP_COLORS[stop.id]};">${i + 1}</div>
        <div class="jl-body">
          <div class="jl-title">Vraag ${i + 1}</div>
          <div class="jl-sub">${escapeHtml(preview)}</div>
        </div>
        ${status}
      </div>
    `;
  }).join('');

  stage.innerHTML = `
    <div class="jl-list">${rowsHtml}</div>
  `;

  stage.querySelectorAll('.jl-row').forEach(row => {
    row.addEventListener('click', () => {
      const i = parseInt(row.dataset.q, 10);
      const state = perQuestionState[`${stop.id}_${i}`];
      const isCurrent = i === currentQuestionIdx && !state;
      if (!isCurrent && !state) return; // locked
      currentQuestionIdx = i;
      hintsShown = 0;
      duoPhase = 'role-select';
      duoRole = null;
      taskView = 'detail';
      render();
    });
  });
}

function truncate(str, n) { return str.length <= n ? str : str.slice(0, n - 1) + '…'; }

function renderTaskDetail(stop) {
  const q = stop.questions[currentQuestionIdx];
  setHeader(`${stop.name} · Vraag ${currentQuestionIdx + 1}/${stop.questions.length}`);

  if (q.type === 'duo') {
    renderDuoPhase(stop, q);
    return;
  }

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

      // Show successMsg below the input
      const successEl = document.createElement('div');
      successEl.className = 'jl-success';
      successEl.textContent = q.successMsg || '✓ Goed gedaan!';
      input.insertAdjacentElement('afterend', successEl);

      // Replace submit button with a "Next" button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'jl-btn jl-btn--green';
      nextBtn.id = 'btnCorrectNext';
      nextBtn.textContent = 'Volgende →';
      submit.replaceWith(nextBtn);
      nextBtn.addEventListener('click', () => {
        stopCorrect++;
        perQuestionState[`${stop.id}_${currentQuestionIdx}`] = 'done';
        advanceQuestion(stop, q);
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
    advanceQuestion(stop, q);
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
  // After a question is answered or skipped, go back to the task list view
  // so the user sees the progress, then if all questions done, complete the stop
  const allAnswered = stop.questions.every((_, i) => perQuestionState[`${stop.id}_${i}`]);
  hintsShown = 0;
  if (allAnswered) {
    finishStop(stop);
  } else {
    // Advance currentQuestionIdx to the next unanswered question
    for (let i = 0; i < stop.questions.length; i++) {
      if (!perQuestionState[`${stop.id}_${i}`]) {
        currentQuestionIdx = i;
        break;
      }
    }
    taskView = 'list';
    duoPhase = 'role-select';
    duoRole = null;
    render();
  }
}

function finishStop(stop) {
  const total = stop.questions.length;
  const stars = calcStars(stopCorrect, total, hintsUsedThisStop);
  starsByStop[stop.id] = stars;

  // Determine solved vs skipped
  if (!solved.includes(stop.id) && !skipped.includes(stop.id)) {
    if (stopCorrect === total) solved.push(stop.id);
    else skipped.push(stop.id);
  }

  // Advance currentIdx if this was the current stop
  const idx = stopIndexById(stop.id);
  if (idx === currentIdx) currentIdx++;

  saveProgress();

  // Brief done flash, then return to Job List
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
    if (currentIdx >= STOPS.length) {
      phase = 'finish';
    } else {
      phase = 'list';
    }
    render();
  }, 1400);
}

// ── DUO MISSION (flat iFruijt style) ──
function renderDuoPhase(stop, q) {
  if      (duoPhase === 'role-select') renderDuoRoleSelect(stop, q);
  else if (duoPhase === 'clues')       renderDuoClues(stop, q);
  else if (duoPhase === 'answer')      renderDuoAnswer(stop, q);
}

function renderDuoRoleSelect(stop, q) {
  stage.innerHTML = `
    <div class="jl-page">
      <div class="jl-duo-header">
        <div class="jl-duo-title">🕵️ Geheime Missie</div>
        <div class="jl-duo-sub">Elk kiest een rol op zijn eigen telefoon</div>
      </div>
      <div class="jl-duo-roles">
        <button class="jl-duo-role jl-duo-role--p1" data-role="player1">
          <span class="jl-duo-role-icon">🔴</span>
          Speler 1
        </button>
        <button class="jl-duo-role jl-duo-role--p2" data-role="player2">
          <span class="jl-duo-role-icon">🔵</span>
          Speler 2
        </button>
      </div>
      <div class="jl-text" style="font-size:12px;color:var(--jl-text-muted);text-align:center;">
        Kies je rol en laat je scherm NIET zien aan de andere speler!
      </div>
    </div>
  `;

  stage.querySelectorAll('.jl-duo-role').forEach(btn => {
    btn.addEventListener('click', () => {
      duoRole = btn.dataset.role;
      duoPhase = 'clues';
      renderDuoPhase(stop, q);
    });
  });
}

function renderDuoClues(stop, q) {
  const role = q.roles[duoRole];
  const badgeCls = duoRole === 'player1' ? 'jl-duo-badge--p1' : 'jl-duo-badge--p2';
  const cluesHtml = role.clues.map(c => `<div class="jl-text" style="background:var(--jl-row);border-bottom:1px solid var(--jl-divider);">${escapeHtml(c)}</div>`).join('');

  stage.innerHTML = `
    <div class="jl-page">
      <span class="jl-duo-badge ${badgeCls}">${escapeHtml(role.label)}</span>
      ${cluesHtml}
      <div class="jl-duo-warning">🤫 Laat dit scherm NIET zien aan de andere speler!</div>
      <div class="jl-actions">
        <button class="jl-btn jl-btn--blue" id="btnReady">Ik ben klaar →</button>
      </div>
    </div>
  `;

  document.getElementById('btnReady').addEventListener('click', () => {
    duoPhase = 'answer';
    renderDuoPhase(stop, q);
  });
}

function renderDuoAnswer(stop, q) {
  // For duo, reuse the standard question form but show the combined question
  renderQuestionForm(stop, q);
}

// ── FINISH ──
function renderFinish() {
  setHeader('Taipei Voltooid');
  const totalStars = Object.values(starsByStop).reduce((s, x) => s + x, 0);
  const maxStars = STOPS.length * 3;
  const elapsed = startTime ? Date.now() - startTime : 0;
  const timeStr = elapsed > 0 ? formatDuration(elapsed) : '—';

  const rowsHtml = STOPS.map((s) => {
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
        <button class="jl-btn jl-btn--red" id="btnReset">Opnieuw beginnen</button>
      </div>
    </div>
  `;

  document.getElementById('btnReset').addEventListener('click', () => doReset());
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
  localStorage.removeItem('taipei_skipped');
  localStorage.removeItem('taipei_solved');
  localStorage.removeItem('taipei_stars');
  localStorage.removeItem('taipei_start_ts');
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
  // Jump to the current incomplete stop
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
  duoPhase = 'role-select';
  duoRole = null;
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
    duoPhase = 'role-select';
    duoRole = null;
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
