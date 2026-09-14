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
  { tense: "Future Simple", es: "Revisaremos los costos mañana.", en: "We will review the costs tomorrow.", enPh: "uí uil riviú de kosts tumórou.", verb: { base: "review", past: "reviewed", participle: "reviewed", meaning: "revisar", basePh: "riviú", pastPh: "riviúd", participlePh: "riviúd" } }
];

document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(section => section.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
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
    els.feedback.innerHTML = `✅ Correcto.<br><strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" onclick="speak(current.en, 'en-US')">🔊 Escuchar frase correcta</button>`;
  } else {
    els.feedback.className = "feedback incorrect";
    els.feedback.innerHTML = `❌ Tu respuesta: <strong>${user}</strong><br>✅ Correcta: <strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" onclick="speak(current.en, 'en-US')">🔊 Escuchar frase correcta</button>`;
    if (!mistakeList.some(m => m.es === current.es)) {
      mistakeList.unshift({ es: current.es, en: current.en, tense: current.tense });
      mistakeList = mistakeList.slice(0, 30);
    }
  }
  saveStats();
  renderStats();
}
function speak(text, lang) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
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
  els.feedback.innerHTML = `Respuesta correcta: <strong>${current.en}</strong><div class="answer-pronunciation">🗣️ ${current.enPh}</div><button class="feedback-audio" onclick="speak(current.en, 'en-US')">🔊 Escuchar frase correcta</button>`;
});
els.listenSpanish.addEventListener("click", () => speak(current.es, "es-ES"));
els.listenVerb.addEventListener("click", () => speak(
  `${current.verb.base}. Past: ${current.verb.past}. Past participle: ${current.verb.participle}.`,
  "en-US"
));
els.speakAnswer.addEventListener("click", startSpeechRecognition);
els.listenCorrect.addEventListener("click", () => speak(current.en, "en-US"));
els.answer.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    checkAnswer();
  }
});

renderQuestion();
renderStats();