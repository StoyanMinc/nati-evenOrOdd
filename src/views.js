import { generateNumber } from "./even-or-odd.js";
import { evenOrOdd } from "./even-or-odd.js";
function showGreetingMsg() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const greetingSection = document.querySelector('#greeting-msg');
    greetingSection.style.display = 'block';
    document.querySelector('#greeting-msg button').addEventListener('click', showForm);
    const numberSpan = document.querySelector('#number');
    const number = generateNumber();
    numberSpan.textContent = number;
};

function showForm() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const formSection = document.querySelector('#form');
    formSection.style.display = 'block';
    formSection.querySelector('#even').addEventListener('click', evenOrOdd);
    formSection.querySelector('#odd').addEventListener('click', evenOrOdd);
    
};

function showWrongAnswer() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const wrongAnswerSection = document.querySelector('#wrong-answer');
    wrongAnswerSection.style.display = 'block';
    wrongAnswerSection.querySelector('button').addEventListener('click', showForm);
};

function showWinMessageSection() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const youWinSection = document.querySelector('#you-win');
    youWinSection.style.display = 'block';
    youWinSection.querySelector('button').addEventListener('click', showForm)
};


export {
    showGreetingMsg,
    showForm,
    showWrongAnswer,
    showWinMessageSection
}