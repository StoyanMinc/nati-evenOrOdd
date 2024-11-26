import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { generateNumber } from './generate-numbers.js';

const rootEl = document.querySelector('.container');

const playFormTemp = (number, onPlay) => html`
    <section id="form">
        <div class="form">
            <h4 class="score" id="score">точки: <span id="points">0</span></h4>
            <h1 id="question">Нати, числото <span id="number">${number}</span> четно ли е, или нечетно ?</h1>
            <div id="btn-container">
                <button class="btn" name="even" @click = ${onPlay} id="even">Четно</button>
                <button class="btn" name="odd" @click=${onPlay} id="odd">Нечетно</button>
            </div>
        </div>
    </section>
`;

const youWinTemp = () => html`
    <section id="you-win">
        <h1>Бравоооо!!! Ти победи, спечели <span>10</span> точки!!! </h1>
        <a class="btn" href="/even-or-odd">Да играем отново?</a>
    </section>
`;

const youLoseTemp = () => html`
    <section id="wrong-answer">
        <h1>Грешен отговор :(</h1>
        <a class="btn" id="start" href="/even-or-odd" >Опитай отново :)</a>
    </section>
`;

export function playView() {

    document.querySelector("#greeting-msg").style.display = 'none';
    const number = generateNumber();
    console.log(number);
    render(playFormTemp(number, onPlay), rootEl);

    function onPlay(e) {
        const points = document.querySelector('#points');
        let result;
        if (number % 2 === 0) {
            result = 'even'
        } else {
            result = 'odd'
        }
        const answer = e.target.name;

        if (result === answer) {
            points.textContent = Number(points.textContent) + 1;
            if (Number(points.textContent) === 10) {
                return render(youWinTemp(), rootEl)
            }
            page.redirect('/even-or-odd');
        } else {
            return render(youLoseTemp(), rootEl)
        }
    }
};