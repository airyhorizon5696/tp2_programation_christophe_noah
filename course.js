let voitureMauve = document.getElementById("mauve");
let voitureRouge = document.getElementById("rouge");
let maxTranslationXMauve;
let maxTranslationXRouge;
let containerWidth = document.getElementById("courseContainer").offsetWidth;

let voitureMauveWidth = document.getElementById("mauve").offsetWidth;
let voitureRougeWidth = document.getElementById("rouge").offsetWidth;
let message = document.getElementById("message");

console.log(voitureMauveWidth);
console.log(voitureRougeWidth);
console.log(containerWidth);
// Variables intervalles
let intervalChrono;
let intervalCourse;

// Compte a rebour:départ
function compteARebour() {
  let textes = ["À vos marque,", "prêt?", "PARTEZ"];
  let index = 0;
  message.textContent = textes[index];
  message.style.display = "flex";
  let intervalMessage = setInterval(() => {
    message.textContent = textes[index];
    index++;
    if (index === textes.length) {
      clearInterval(intervalMessage);
      setTimeout(() => {
        message.style.display = "none";
        chronometre();
        deplacerVoiture();
      }, 1000);
    }
  }, 1000);
}

// chrono
let debutMauve = 0;
let debutRouge = 0;
let chronometreMauve = document.getElementById("chrono1");
let chronometreRouge = document.getElementById("chrono2");

function chronometre() {
  debutMauve = Date.now();
  debutRouge = Date.now();
  intervalChrono = setInterval(() => {
    let tempsActuelle = Date.now();
    let tempsMauve = tempsActuelle - debutMauve;
    let tempsRouge = tempsActuelle - debutRouge;
    let minMauve = Math.floor(tempsMauve / 60000);
    let secMauve = Math.floor((tempsMauve % 60000) / 1000);
    let msMauve = tempsMauve % 1000;

    let minRouge = Math.floor(tempsRouge / 60000);
    let secRouge = Math.floor((tempsRouge % 60000) / 1000);
    let msRouge = tempsRouge % 1000;
    chronometreMauve.textContent =
      minMauve.toString().padStart(2, "0") +
      ":" +
      secMauve.toString().padStart(2, "0") +
      ":" +
      msMauve.toString().padStart(3, "0");

    chronometreRouge.textContent =
      minRouge.toString().padStart(2, "0") +
      ":" +
      secRouge.toString().padStart(2, "0") +
      ":" +
      msRouge.toString().padStart(3, "0");
  }, 10);
  // fin chrono
}

// Départ des voitures
function demarrerCourse() {
  compteARebour();
}

// Déplacement des voitures

function aleatoireTranslationX() {
  return Math.floor(Math.random() * 10);
}

function deplacerVoiture() {
  let translationX1 = 0;
  let translationX2 = 0;

  let maxXMauve = containerWidth - voitureMauveWidth;
  let maxXRouge = containerWidth - voitureRougeWidth;

  translationVoiture = setInterval(() => {
    translationX1 += aleatoireTranslationX();
    translationX2 += aleatoireTranslationX();

    if (translationX1 >= maxXMauve) {
      translationX1 = maxXMauve;
      document.getElementById("resultat").innerHTML = "Mauve a gagné !";
    }

    if (translationX2 >= maxXRouge) {
      translationX2 = maxXRouge;
      document.getElementById("resultat").innerHTML = "Rouge a gagné !";
    }

    voitureMauve.style.left = translationX1 + "px";
    voitureRouge.style.left = translationX2 + "px";

    if (translationX1 >= maxXMauve || translationX2 >= maxXRouge) {
      clearInterval(translationVoiture);
      clearInterval(intervalChrono);
    }
  }, 50);
}

// Arreter la voiture
function arreterCourse() {
  clearInterval(intervalChrono);
  clearInterval(translationVoiture);
}
