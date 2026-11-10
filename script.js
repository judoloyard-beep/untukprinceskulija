
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openBtn").addEventListener("click", () => {
  showScreen("home");
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.go;
    showScreen(target);

    if (target === "letter") {
      startLetter();
    }
  });
});

document.querySelectorAll(".back-btn").forEach(button => {
  button.addEventListener("click", () => {
    showScreen("home");
  });
});

// SURAT CINTA
const letter = `aku mungkin bukan seseorang yang sempurna.

aku juga nggak selalu punya kata-kata indah
untuk menjelaskan apa yang aku rasakan.

tapi ada satu hal yang ingin kamu tahu...

aku senang bisa mengenal kamu.
senang mendengar cerita-cerita kecilmu.
senang melihat kamu tersenyum.
bahkan hal sederhana tentang kamu
sering kali menjadi bagian favorit hariku.

aku nggak ingin menjanjikan dunia yang sempurna.
aku hanya ingin menjadi seseorang
yang bisa menghargai kehadiranmu,
mendengarkanmu, dan tumbuh bersama kamu.

terima kasih sudah menjadi bagian
dari cerita hidupku, princesskuu.

jangan pernah lupa betapa berharganya dirimu.

you deserve all the beautiful things in life. ♡`;

let letterStarted = false;

function startLetter() {
  if (letterStarted) return;

  letterStarted = true;

  const element = document.getElementById("letterText");
  let index = 0;

  function typeLetter() {
    if (index < letter.length) {
      element.textContent += letter[index];
      index++;
      setTimeout(typeLetter, 32);
    }
  }

  typeLetter();
}

// ALASAN KENAPA DIA SPESIAL
const reasons = [
  "senyummu punya cara sendiri untuk membuat hariku lebih indah.",
  "aku suka caramu menjadi dirimu sendiri.",
  "cerita sederhana darimu selalu menarik untuk didengar.",
  "kehadiranmu membuat hari biasa terasa lebih berarti.",
  "kamu punya tempat spesial dalam ceritaku.",
  "aku suka ketika kita bisa tertawa bersama.",
  "kamu mengajarkanku arti menghargai seseorang.",
  "aku senang bisa mengenal sisi-sisi kecil tentangmu.",
  "kamu pantas mendapatkan cinta dan kebahagiaan.",
  "karena dari sekian banyak orang, aku bersyukur bertemu kamu."
];

let reasonIndex = 0;

document.getElementById("nextReason").addEventListener("click", () => {
  const text = document.getElementById("reasonText");
  const number = document.getElementById("reasonNumber");

  reasonIndex = (reasonIndex + 1) % reasons.length;

  text.style.opacity = 0;

  setTimeout(() => {
    text.textContent = reasons[reasonIndex];
    number.textContent =
      String(reasonIndex + 1).padStart(2, "0") + " / 10";
    text.style.opacity = 1;
  }, 250);
});

// KEJUTAN TERAKHIR
document.getElementById("surpriseBtn").addEventListener("click", () => {
  const message = document.getElementById("secretMessage");
  const button = document.getElementById("surpriseBtn");

  message.classList.add("show");
  button.style.display = "none";

  createHearts();
});

// PARTIKEL BINTANG
const starContainer = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";

  starContainer.appendChild(star);
}

// EFEK HATI
function createHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");

    heart.textContent = "♥";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.color = "#d65b78";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10";
    heart.style.transition = "transform 3s ease, opacity 3s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-${window.innerHeight + 100}px) rotate(360deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 3100);
  }
}
