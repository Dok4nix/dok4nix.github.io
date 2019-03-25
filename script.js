let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", playLoveMachine);

function playLoveMachine() {
  let yourLoveNumber = document.getElementById("your-name").value;
  let partnersLoveNumber = document.getElementById("partner-name").value;
  let loveDisplay = document.getElementById("love-display");
  let lovePercent = document.getElementById("love-percent");
  yourLoveNumber = getNumberFromName(yourLoveNumber);
  partnersLoveNumber = getNumberFromName(partnersLoveNumber);
  let loveScore = calculateLoveScore(yourLoveNumber, partnersLoveNumber);

  if (yourLoveNumber > 0 && partnersLoveNumber > 0) {
    loveDisplay.style.display = "block";
    lovePercent.innerHTML = `${loveScore}%`;
  }
}

function calculateLoveScore(yourLoveNumber, partnersLoveNumber) {
  let myLoveNumber = getNumberFromName("Dominik");
  let gfLoveNumber = getNumberFromName("Patrycja");

  loveDifference = (myLoveNumber + gfLoveNumber) - (yourLoveNumber + partnersLoveNumber);
  loveValue = 100 - Math.abs(loveDifference * 3);
  return loveValue;
}

function getNumberFromName(name) {
  return name.replace(/ą/g, 'a').replace(/Ą/g, 'A')
    .replace(/ć/g, 'c').replace(/Ć/g, 'C')
    .replace(/ę/g, 'e').replace(/Ę/g, 'E')
    .replace(/ł/g, 'l').replace(/Ł/g, 'L')
    .replace(/ń/g, 'n').replace(/Ń/g, 'N')
    .replace(/ó/g, 'o').replace(/Ó/g, 'O')
    .replace(/ś/g, 's').replace(/Ś/g, 'S')
    .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
    .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
    .toUpperCase().charCodeAt(0);
}
