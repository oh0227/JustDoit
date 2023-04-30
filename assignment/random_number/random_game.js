const gameForm = document.querySelector("#game-form");
const rangeInput = document.querySelector("#game-form h3 input");
const targetInput = document.querySelector("#game-form p input");
const resultDiv = document.querySelector(".hidden");
const resultNums = document.querySelector("div.hidden p:first-child");
const winOrLose = document.querySelector("div.hidden p:last-child");

const USER_NUMBER_KEY = "userNumber";
const CPT_NUMBER_KEY = "cptNumber";


const range = parseInt(rangeInput.value);
let myNum;
let cptNum;

function saveNums(){
    localStorage.setItem(USER_NUMBER_KEY, targetInput.value);
    localStorage.setItem(CPT_NUMBER_KEY, Math.ceil(Math.random()*rangeInput.value));
}

function paintNumbers(){
    myNum = parseInt(localStorage.getItem(USER_NUMBER_KEY));
    cptNum = parseInt(localStorage.getItem(CPT_NUMBER_KEY));
    resultNums.innerText = `You chose: ${myNum}, the machine chose: ${cptNum}.`;
    if(myNum === cptNum) {
        winOrLose.innerText = "You win!";
    } else {
        winOrLose.innerText = "You lost!";
    }
    resultDiv.classList.remove("hidden");

}

function gameStart(event) {
    event.preventDefault();
    saveNums();
    targetInput.max = rangeInput.value;
    paintNumbers();
}


gameForm.addEventListener("submit", gameStart);

