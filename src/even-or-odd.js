import { showWinMessageSection, showWrongAnswer } from "./views.js";

const evenBtn = document.querySelector('#even');
const oddBtn = document.querySelector('#odd');
let numberSpan = document.querySelector('#number');
let score = document.querySelector('#points');
export function evenOrOdd(e) {
    e.preventDefault();
    
    let number = Number(numberSpan.textContent);
    const isEven = number % 2 === 0;
    if (isEven) {
        if (e.currentTarget.name === 'even') {
            score.textContent = Number(score.textContent) + 1;
            number = generateNumber();
            numberSpan.textContent = number;
        } else {
            score.textContent = 0;
            showWrongAnswer();
        }
    } else {
        if (e.currentTarget.name === 'odd') {
            score.textContent = Number(score.textContent) + 1;
            number = generateNumber();
            numberSpan.textContent = number;
        } else {
            score.textContent = 0;
            showWrongAnswer();
        };
    };

    if (Number(score.textContent) === 10) {
        score.textContent = 0;
        showWinMessageSection();
    }
}


 export function generateNumber() {
    const number = Math.floor(Math.random() * 20);
    return number;
}