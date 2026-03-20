let questions = [
  "Seberapa kenal kamu sama aku?",
  "Kamu kaget gaa dengan perubahan sifat akuu?",
  "Adakah sikap aku yang paling kamu suka?",
  "Adakah sikap aku yang paling kamu ga sukaa?",
];

let answers = [];
let current = 0;
let loveInterval;

window.onload = () => {
  showPage("opening");
};

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function startSlides() {
  showPage("slides");

  const music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play().catch(() => {});

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    } else clearInterval(fade);
  }, 200);

  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = questions[current];
}

function nextQuestion() {
  let val = document.getElementById("answer").value.trim();
  let warning = document.getElementById("warning");

  if (val === "") {
    warning.innerText = "Harus diisi yaa 😤";
    return;
  }

  warning.innerText = "";
  answers.push(val);
  document.getElementById("answer").value = "";
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showPage("gallery");
    startLoveRain();
  }
}

/* 💖 LOVE RAIN */
function startLoveRain() {
  loveInterval = setInterval(() => {
    const love = document.createElement("div");
    love.className = "love";

    const emojis = ["💙", "💖", "💕", "💘"];
    love.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.animationDuration = (3 + Math.random() * 2) + "s";
    love.style.fontSize = (16 + Math.random() * 20) + "px";

    document.body.appendChild(love);

    setTimeout(() => love.remove(), 5000);
  }, 300);
}

function stopLoveRain() {
  clearInterval(loveInterval);
}

function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
  showPage("thr");
  stopLoveRain();
}

function sendData() {
  document.getElementById("thankPopup").classList.remove("hidden");
}

function backToLogin() {
  document.getElementById("thankPopup").classList.add("hidden");
  current = 0;
  answers = [];
  document.getElementById("answer").value = "";
  showPage("opening");
}