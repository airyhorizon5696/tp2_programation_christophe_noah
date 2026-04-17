let voitureMauve = document.getElementById("mauve");

let voitureRouge = document.getElementById("rouge");

let translationX1;

let translationX2;

let containerWidth = document.getElementById("courseContainer").offsetWidth;

let voitureMauveWidth = document.getElementById("mauve").offsetWidth;

let voitureRougeWidth = document.getElementById("rouge").offsetWidth;



// Compte a rebour:départ

function compteARebour() {

  let textes = ["À vos marque,", "prêt?", "PARTEZ"];

  let index = 0;



  let interval = setInterval(() => {

    message.textContent = textes[index];



    index++;



    if (index === textes.length) {

      clearInterval(interval);



      setTimeout(() => {

        message.style.display = "none";

        lancerCourse();

      }, 1000);

    }

  }, 1000);

}



// translation randomiser

function aleatoireTranslationX() {}



// Déplacement des voitures

function deplacerVoiture() {}



// Départ des voitures

function demarrerCourse() {

  // voitureMauve.animate([{}]);

  let message = document.getElementById("message");

  message.style.display = "block";

  compteARebour(message);

  setTimeout(() => {

    chronometre();

  }, 4000); // attendre 4 seconde avant de démarer le chrono



  chronometre();

}



// Arreter la voiture

function arreterCourse() {}

// chrono

let debutMauve = 0;

let debutRouge = 0;

let chronometreMauve = document.getElementById("chrono1");

let chronometreRouge = document.getElementById("chrono2");

function chronometre() {

  debutMauve = Date.now();

  debutRouge = Date.now();

  setInterval(() => {

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

      String(minMauve).padStart(2, "0") +

      ":" +

      String(secMauve).padStart(2, "0") +

      ":" +

      String(msMauve).padStart(3, "0");



    chronometreRouge.textContent =

      String(minRouge).padStart(2, "0") +

      ":" +

      String(secRouge).padStart(2, "0") +

      ":" +

      String(msRouge).padStart(3, "0");

  }, 10);

}

// fin chrono

