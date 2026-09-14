const questions = [
  { tense: "Present Simple", es: "Ella dice eso todos los días.", en: "She says that every day.", enPh: "shi séz dat évri déi.", verb: { base: "say", past: "said", participle: "said", meaning: "decir", basePh: "seí", pastPh: "sed", participlePh: "sed" } },
  { tense: "Present Simple", es: "Yo trabajo desde casa los viernes.", en: "I work from home on Fridays.", enPh: "ai uérk from jóum on fráideis.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Present Simple", es: "Él estudia inglés por la noche.", en: "He studies English at night.", enPh: "ji stádis ínglish at náit.", verb: { base: "study", past: "studied", participle: "studied", meaning: "estudiar", basePh: "stádi", pastPh: "stádid", participlePh: "stádid" } },
  { tense: "Present Simple", es: "Nosotros usamos esta herramienta todos los días.", en: "We use this tool every day.", enPh: "uí iúz dis túl évri déi.", verb: { base: "use", past: "used", participle: "used", meaning: "usar", basePh: "iúz", pastPh: "iúzd", participlePh: "iúzd" } },
  { tense: "Past Simple", es: "Ayer terminé el informe.", en: "I finished the report yesterday.", enPh: "ai fínisht de ripórt yésterdei.", verb: { base: "finish", past: "finished", participle: "finished", meaning: "terminar", basePh: "fínish", pastPh: "fínisht", participlePh: "fínisht" } },
  { tense: "Past Simple", es: "Ella fue a la oficina ayer.", en: "She went to the office yesterday.", enPh: "shi uent tu di ófis yésterdei.", verb: { base: "go", past: "went", participle: "gone", meaning: "ir", basePh: "góu", pastPh: "uent", participlePh: "gon" } },
  { tense: "Past Simple", es: "Compramos comida después del trabajo.", en: "We bought food after work.", enPh: "uí bot fúd áfter uérk.", verb: { base: "buy", past: "bought", participle: "bought", meaning: "comprar", basePh: "bái", pastPh: "bot", participlePh: "bot" } },
  { tense: "Past Simple", es: "Él escribió un correo esta mañana.", en: "He wrote an email this morning.", enPh: "ji róut an ímeil dis mórning.", verb: { base: "write", past: "wrote", participle: "written", meaning: "escribir", basePh: "ráit", pastPh: "róut", participlePh: "ríten" } },
  { tense: "Present Continuous", es: "Estoy estudiando inglés ahora.", en: "I am studying English now.", enPh: "ai am stádiing ínglish náu.", verb: { base: "study", past: "studied", participle: "studied", meaning: "estudiar", basePh: "stádi", pastPh: "stádid", participlePh: "stádid" } },
  { tense: "Present Continuous", es: "Ella está trabajando en un nuevo proyecto.", en: "She is working on a new project.", enPh: "shi iz uérking on a niú próyekt.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Present Continuous", es: "Estamos preparando la presentación.", en: "We are preparing the presentation.", enPh: "uí ar pripéring de prezentéishon.", verb: { base: "prepare", past: "prepared", participle: "prepared", meaning: "preparar", basePh: "pripér", pastPh: "pripérd", participlePh: "pripérd" } },
  { tense: "Present Perfect", es: "Ya terminé el informe.", en: "I have finished the report.", enPh: "ai jav fínisht de ripórt.", verb: { base: "finish", past: "finished", participle: "finished", meaning: "terminar", basePh: "fínish", pastPh: "fínisht", participlePh: "fínisht" } },
  { tense: "Present Perfect", es: "Ella ha trabajado aquí durante tres años.", en: "She has worked here for three years.", enPh: "shi jaz uérkt jir for zrí yírs.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Present Perfect", es: "Hemos visto esa película.", en: "We have seen that movie.", enPh: "uí jav sín dat múvi.", verb: { base: "see", past: "saw", participle: "seen", meaning: "ver", basePh: "sí", pastPh: "só", participlePh: "sín" } },
  { tense: "Future Simple", es: "Mañana llamaré al cliente.", en: "I will call the client tomorrow.", enPh: "ai uil kol de kláient tumórou.", verb: { base: "call", past: "called", participle: "called", meaning: "llamar", basePh: "kol", pastPh: "kold", participlePh: "kold" } },
  { tense: "Future Simple", es: "Ella enviará el archivo esta tarde.", en: "She will send the file this afternoon.", enPh: "shi uil send de fáil dis áfternún.", verb: { base: "send", past: "sent", participle: "sent", meaning: "enviar", basePh: "send", pastPh: "sent", participlePh: "sent" } },
  { tense: "Future Simple", es: "Revisaremos los costos mañana.", en: "We will review the costs tomorrow.", enPh: "uí uil riviú de kosts tumórou.", verb: { base: "review", past: "reviewed", participle: "reviewed", meaning: "revisar", basePh: "riviú", pastPh: "riviúd", participlePh: "riviúd" } },

  { tense: "Present Perfect Continuous", es: "He estado trabajando durante dos horas.", en: "I have been working for two hours.", enPh: "ai jav bin uérking for tú áuers.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Past Continuous", es: "Estaba trabajando a las diez de la mañana.", en: "I was working at 10 a.m.", enPh: "ai uaz uérking at ten ei em.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Past Perfect", es: "Había trabajado antes de la reunión.", en: "I had worked before the meeting.", enPh: "ai jad uérkt bifór de míting.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Past Perfect Continuous", es: "Había estado trabajando durante dos horas antes del almuerzo.", en: "I had been working for two hours before lunch.", enPh: "ai jad bin uérking for tú áuers bifór lanch.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Be Going To", es: "Voy a trabajar mañana.", en: "I am going to work tomorrow.", enPh: "ai am góuing tu uérk tumórou.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Future Continuous", es: "Estaré trabajando a las diez de la mañana.", en: "I will be working at 10 a.m.", enPh: "ai uil bi uérking at ten ei em.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Future Perfect", es: "Habré trabajado para el viernes.", en: "I will have worked by Friday.", enPh: "ai uil jav uérkt bai fráidei.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
  { tense: "Future Perfect Continuous", es: "Para el mediodía, habré estado trabajando durante dos horas.", en: "I will have been working for two hours by noon.", enPh: "ai uil jav bin uérking for tú áuers bai nún.", verb: { base: "work", past: "worked", participle: "worked", meaning: "trabajar", basePh: "uérk", pastPh: "uérkt", participlePh: "uérkt" } },
];

document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(section => section.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const els = {
  tenseFilter: document.getElementById("tenseFilter"),
  newQuestion: document.getElementById("newQuestion"),
  tenseBadge: document.getElementById("tenseBadge"),
  spanishSentence: document.getElementById("spanishSentence"),
  verbBase: document.getElementById("verbBase"),
  verbPast: document.getElementById("verbPast"),
  verbParticiple: document.getElementById("verbParticiple"),
  verbMeaning: document.getElementById("verbMeaning"),
  verbBasePh: document.getElementById("verbBasePh"),
  verbPastPh: document.getElementById("verbPastPh"),
  verbParticiplePh: document.getElementById("verbParticiplePh"),
  listenCorrect: document.getElementById("listenCorrect"),
  answer: document.getElementById("answer"),
  checkAnswer: document.getElementById("checkAnswer"),
  speakAnswer: document.getElementById("speakAnswer"),
  showAnswer: document.getElementById("showAnswer"),
  listenSpanish: document.getElementById("listenSpanish"),
  listenVerb: document.getElementById("listenVerb"),
  feedback: document.getElementById("feedback"),
  correctCount: document.getElementById("correctCount"),
  totalCount: document.getElementById("totalCount"),
  accuracy: document.getElementById("accuracy"),
  mistakes: document.getElementById("mistakes")
};

let current = questions[0];
let correct = Number(localStorage.getItem("evt_correct") || 0);
let total = Number(localStorage.getItem("evt_total") || 0);
let mistakeList = JSON.parse(localStorage.getItem("evt_mistakes") || "[]");

function normalize(text) {
  return text.toLowerCase().trim().replace(/[.,!?;:]/g, "").replace(/’/g, "'").replace(/\s+/g, " ");
}
function getPool() {
  const filter = els.tenseFilter.value;
  return filter === "all" ? questions : questions.filter(q => q.tense === filter);
}
function pickQuestion() {
  const pool = getPool();
  current = pool[Math.floor(Math.random() * pool.length)];
  renderQuestion();
}
function renderQuestion() {
  els.tenseBadge.textContent = current.tense;
  els.spanishSentence.textContent = current.es;
  els.verbBase.textContent = current.verb.base;
  els.verbPast.textContent = current.verb.past;
  els.verbParticiple.textContent = current.verb.participle;
  els.verbMeaning.textContent = current.verb.meaning;
  els.verbBasePh.textContent = current.verb.basePh;
  els.verbPastPh.textContent = current.verb.pastPh;
  els.verbParticiplePh.textContent = current.verb.participlePh;
  els.answer.value = "";
  els.feedback.className = "feedback hidden";
  els.feedback.innerHTML = "";
}
function saveStats() {
  localStorage.setItem("evt_correct", String(correct));
  localStorage.setItem("evt_total", String(total));
  localStorage.setItem("evt_mistakes", JSON.stringify(mistakeList));
}
function renderStats() {
  els.correctCount.textContent = correct;
  els.totalCount.textContent = total;
  els.accuracy.textContent = total ? Math.round((correct / total) * 100) + "%" : "0%";
  if (!mistakeList.length) {
    els.mistakes.innerHTML = '<p class="muted">Todavía no tienes errores guardados.</p>';
    return;
  }
  els.mistakes.innerHTML = mistakeList.slice(0, 8).map(m => `
    <div class="mistake"><div><strong>${m.es}</strong></div><div>Correcta: ${m.en}</div></div>
  `).join("");
}
function checkAnswer() {
  const user = els.answer.value.trim();
  if (!user) return;
  total++;
  const isCorrect = normalize(user) === normalize(current.en);
  if (isCorrect) {
    correct++;
    els.feedback.className = "feedback correct";
    els.feedback.innerHTML = `✅ Correcto.<br><strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" data-action="play-correct">🔊 Escuchar frase correcta</button>`;
  } else {
    els.feedback.className = "feedback incorrect";
    els.feedback.innerHTML = `❌ Tu respuesta: <strong>${user}</strong><br>✅ Correcta: <strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" data-action="play-correct">🔊 Escuchar frase correcta</button>`;
    if (!mistakeList.some(m => m.es === current.es)) {
      mistakeList.unshift({ es: current.es, en: current.en, tense: current.tense });
      mistakeList = mistakeList.slice(0, 30);
    }
  }
  saveStats();
  renderStats();
}
let availableVoices = [];
function refreshVoices() {
  availableVoices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
}
refreshVoices();
if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = refreshVoices;
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) {
    alert("Tu navegador no tiene síntesis de voz disponible.");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.82;
  utterance.pitch = 1;
  const base = lang.toLowerCase().slice(0,2);
  const voice = availableVoices.find(v => v.lang && v.lang.toLowerCase().startsWith(base));
  if (voice) utterance.voice = voice;
  setTimeout(() => speechSynthesis.speak(utterance), 80);
}
function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("El reconocimiento de voz no está disponible en este navegador. Prueba Chrome o Edge.");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = event => {
    els.answer.value = event.results[0][0].transcript;
    checkAnswer();
  };
  recognition.onerror = () => alert("No pude reconocer la voz. Puedes escribir la respuesta manualmente.");
  recognition.start();
}

els.newQuestion.addEventListener("click", pickQuestion);
els.tenseFilter.addEventListener("change", pickQuestion);
els.checkAnswer.addEventListener("click", checkAnswer);
els.showAnswer.addEventListener("click", () => {
  els.feedback.className = "feedback incorrect";
  els.feedback.innerHTML = `Respuesta correcta: <strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" data-action="play-correct">🔊 Escuchar frase correcta</button>`;
});
els.listenSpanish.addEventListener("click", () => speak(current.es, "es-ES"));
els.listenVerb.addEventListener("click", () => speak(
  `${current.verb.base}. Past: ${current.verb.past}. Past participle: ${current.verb.participle}.`,
  "en-US"
));
els.speakAnswer.addEventListener("click", startSpeechRecognition);
els.listenCorrect.addEventListener("click", () => speak(current.en, "en-US"));
els.feedback.addEventListener("click", (e) => {
  const button = e.target.closest('[data-action="play-correct"]');
  if (button) speak(current.en, "en-US");
});
els.answer.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    checkAnswer();
  }
});


const grammarData = {
  "Present Simple": {
    title: "Rutinas, hábitos y hechos",
    idea: "Se usa para acciones habituales, rutinas, hechos generales y horarios.",
    formula: "+ I/You/We/They + base verb<br>+ He/She/It + verb-s",
    negative: "do not / does not + verbo base",
    question: "Do/Does + sujeto + verbo base?",
    example: "<strong>She works every day.</strong><br><span>Ella trabaja todos los días.</span>",
    keywords: "Claves: every day, always, usually, often, sometimes, never"
  },
  "Present Continuous": {
    title: "Acciones que ocurren ahora",
    idea: "Se usa para algo que está sucediendo en este momento o es temporal.",
    formula: "Subject + am/is/are + verb-ing",
    negative: "am/is/are not + verb-ing",
    question: "Am/Is/Are + sujeto + verb-ing?",
    example: "<strong>She is working now.</strong><br><span>Ella está trabajando ahora.</span>",
    keywords: "Claves: now, right now, at the moment, currently"
  },
  "Present Perfect": {
    title: "Pasado conectado con el presente",
    idea: "Se usa para experiencias, resultados recientes o acciones pasadas que siguen siendo relevantes.",
    formula: "Subject + have/has + past participle",
    negative: "have/has not + participio",
    question: "Have/Has + sujeto + participio?",
    example: "<strong>I have finished the report.</strong><br><span>He terminado el informe.</span>",
    keywords: "Claves: already, yet, ever, never, just, for, since"
  },
  "Present Perfect Continuous": {
    title: "Duración hasta el presente",
    idea: "La acción comenzó antes y continúa ahora, o acaba de terminar.",
    formula: "Subject + have/has been + verb-ing",
    negative: "have/has not been + verb-ing",
    question: "Have/Has + sujeto + been + verb-ing?",
    example: "<strong>I have been studying for two hours.</strong><br><span>He estado estudiando durante dos horas.</span>",
    keywords: "Claves: for, since, all day, lately, recently"
  },
  "Past Simple": {
    title: "Acción terminada en el pasado",
    idea: "Se usa cuando la acción ocurrió y terminó en un momento pasado.",
    formula: "+ Subject + past verb<br>- Subject + did not + base verb<br>? Did + subject + base verb?",
    negative: "did not + verbo base",
    question: "Did + sujeto + verbo base?",
    example: "<strong>She went to the office yesterday.</strong><br><span>Ella fue a la oficina ayer.</span>",
    keywords: "Claves: yesterday, last week, ago, in 2025"
  },
  "Past Continuous": {
    title: "Acción en progreso en el pasado",
    idea: "Se usa para una acción que estaba ocurriendo en un momento pasado.",
    formula: "Subject + was/were + verb-ing",
    negative: "was/were not + verb-ing",
    question: "Was/Were + sujeto + verb-ing?",
    example: "<strong>I was working when you called.</strong><br><span>Yo estaba trabajando cuando llamaste.</span>",
    keywords: "Claves: while, when, at 8 p.m."
  },
  "Past Perfect": {
    title: "Una acción ocurrió antes de otra en el pasado",
    idea: "Marca cuál de dos acciones pasadas ocurrió primero.",
    formula: "Subject + had + past participle",
    negative: "had not + participio",
    question: "Had + sujeto + participio?",
    example: "<strong>She had left before I arrived.</strong><br><span>Ella se había ido antes de que yo llegara.</span>",
    keywords: "Claves: before, after, already, by the time"
  },
  "Past Perfect Continuous": {
    title: "Duración antes de un momento pasado",
    idea: "Enfatiza cuánto tiempo llevaba ocurriendo una acción antes de otra acción pasada.",
    formula: "Subject + had been + verb-ing",
    negative: "had not been + verb-ing",
    question: "Had + sujeto + been + verb-ing?",
    example: "<strong>I had been working for three hours before lunch.</strong><br><span>Había estado trabajando durante tres horas antes del almuerzo.</span>",
    keywords: "Claves: for, since, before"
  },
  "Future Simple": {
    title: "Predicciones, decisiones y promesas",
    idea: "Se usa para decisiones espontáneas, predicciones, promesas y ofertas.",
    formula: "Subject + will + base verb",
    negative: "will not / won't + verbo base",
    question: "Will + sujeto + verbo base?",
    example: "<strong>I will call you tomorrow.</strong><br><span>Te llamaré mañana.</span>",
    keywords: "Claves: tomorrow, next week, I think, probably"
  },
  "Be Going To": {
    title: "Planes e intenciones",
    idea: "Se usa cuando ya existe una intención o hay evidencia de lo que ocurrirá.",
    formula: "Subject + am/is/are going to + base verb",
    negative: "am/is/are not going to + verbo base",
    question: "Am/Is/Are + sujeto + going to + verbo base?",
    example: "<strong>I am going to study tonight.</strong><br><span>Voy a estudiar esta noche.</span>",
    keywords: "Claves: plan, intention, evidence"
  },
  "Future Continuous": {
    title: "Acción que estará en progreso",
    idea: "Describe algo que estará ocurriendo en un momento futuro.",
    formula: "Subject + will be + verb-ing",
    negative: "will not be + verb-ing",
    question: "Will + sujeto + be + verb-ing?",
    example: "<strong>I will be working at 10 a.m.</strong><br><span>Estaré trabajando a las 10.</span>",
    keywords: "Claves: this time tomorrow, at 10 a.m."
  },
  "Future Perfect": {
    title: "Acción completada antes de un momento futuro",
    idea: "Se usa para algo que ya estará terminado antes de una fecha o momento futuro.",
    formula: "Subject + will have + past participle",
    negative: "will not have + participio",
    question: "Will + sujeto + have + participio?",
    example: "<strong>I will have finished by Friday.</strong><br><span>Habré terminado para el viernes.</span>",
    keywords: "Claves: by Friday, by then, by the time"
  },
  "Future Perfect Continuous": {
    title: "Duración hasta un punto futuro",
    idea: "Enfatiza cuánto tiempo llevará ocurriendo una acción hasta un momento futuro.",
    formula: "Subject + will have been + verb-ing",
    negative: "will not have been + verb-ing",
    question: "Will + sujeto + have been + verb-ing?",
    example: "<strong>By June, I will have been working here for two years.</strong><br><span>En junio, llevaré dos años trabajando aquí.</span>",
    keywords: "Claves: for, by, by the time"
  }
};

const grammarEls = {
  select: document.getElementById("grammarSelect"),
  badge: document.getElementById("grammarBadge"),
  title: document.getElementById("grammarTitle"),
  idea: document.getElementById("grammarIdea"),
  formula: document.getElementById("grammarFormula"),
  negative: document.getElementById("grammarNegative"),
  question: document.getElementById("grammarQuestion"),
  example: document.getElementById("grammarExample"),
  keywords: document.getElementById("grammarKeywords"),
  detail: document.querySelector(".grammar-detail"),
  summary: document.getElementById("grammarSummary")
};

function showGrammarTense(name) {
  if (name === "Summary") {
    grammarEls.select.value = "Summary";
    grammarEls.detail.classList.add("hidden");
    grammarEls.summary.classList.remove("hidden");
    return;
  }
  const item = grammarData[name];
  if (!item) return;
  grammarEls.summary.classList.add("hidden");
  grammarEls.detail.classList.remove("hidden");
  grammarEls.select.value = name;
  grammarEls.badge.textContent = name;
  grammarEls.title.textContent = item.title;
  grammarEls.idea.textContent = item.idea;
  grammarEls.formula.innerHTML = item.formula;
  grammarEls.negative.textContent = item.negative;
  grammarEls.question.textContent = item.question;
  grammarEls.example.innerHTML = item.example;
  grammarEls.keywords.textContent = item.keywords;
}

grammarEls.select.addEventListener("change", e => showGrammarTense(e.target.value));
showGrammarTense("Summary");

renderQuestion();
renderStats();