let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
console.log(mainTitle.innerText);
mainTitle.innerText= "Hola Chicas Tech";
console.log(mainTitle.innerText);
//para mostrar parrafos//
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);
console.log(mainTexts[0].innerText);
//getElementsByTagName//
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);
//queryselector//
let querymainTitle = document.querySelector("#main-title");
console.log(querymainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);
//EVENTOS//
document.getElementById("main-button").addEventListener("click", function() {
    console.log("BOTON PRESIONADO");
    });

let magicNumber = document.querySelector("#magic-number").value;
  console.log(`Valor ingresado en el input: ${magicNumber}`);
  let greetParagraph = document.querySelector("#greet");

  if (magicNumber == "" || magicNumber.length === 0) {
    greetParagraph.innerText = "NO INGRESASTE UN NOMBRE";
} else {
  greetParagraph.innerText = `Buenas noches ${magicNumber}`;
}

let togglerButton = document.querySelector("#toggler");
togglerButton.innerText = "MOSTRAR";

let hiddenText = document.querySelector("#hidden-text");

hiddenText.style.display = "none";

togglerButton.addEventListener("click", function () {
  let currentTextDisplay = hiddenText.style.display;

  if (currentTextDisplay == "none") {
   
    hiddenText.style.display = "block";
    togglerButton.innerText = "OCULTAR";
  } else {
 
    hiddenText.style.display = "none";
    togglerButton.innerText = "MOSTRAR";
  }
});

let togglerButton2 = document.querySelector("#toggler-2");
togglerButton2.innerText = "MOSTRAR";
let hiddenText2 = document.querySelector("#hidden-text-2");
togglerButton2.addEventListener("click", function () {
  if (hiddenText2.classList.contains("hide-text")) {
    hiddenText2.classList.remove("hide-text");
    togglerButton2.innerText = "OCULTAR";
  } else {
    console.log("ELSE");
    hiddenText2.classList.add("hide-text");
    togglerButton2.innerText = "MOSTRAR";
  }
});
