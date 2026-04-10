let voitureMauve = document.getElementById("mauve");
let voitureRouge = document.getElementById("rouge");
let translationX1;
let translationX2;
let containerWidth = document.getElementById("courseContainer").offsetWidth;






function demarrerCourse() {
  let message = document.getElementById("message");
  message.style.display = "block";

  let textes = ["À vos marque,", "prêt?", "PARTEZ"];
  let index = 0;

  let interval = setInterval(() => {
    message.textContent = textes[index];

    index++;

    if (index === textes.length) {
      clearInterval(interval);

      setTimeout(() => {
        message.style.display = "none";
        lancerCourse(); // 👉 démarre après le compte à rebours
      }, 1000);
    }
  }, 1000);
}