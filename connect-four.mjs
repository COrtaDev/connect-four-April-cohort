import { Game } from './game.mjs';

let game = undefined;
const clickTargets = document.getElementById("click-targets");

function updateUI() {

    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById('game-name');
    let currentPlayer = game.currentPlayer;

    if (game === undefined) {
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }

    if (currentPlayer === 1) {
        clickTargets.classList.remove('black');
        clickTargets.classList.add('red');
    } else {
        clickTargets.classList.remove('red');
        clickTargets.classList.add('black');
    }
    for (let row = 5; row >= 0; row--) {
        for (let col = 0; col <= 6; col++) {
            let currentSquare = document.getElementById(`square-${row}-${col}`);
            let currentToken = game.getTokenAt(row, col);
            let div = document.createElement('div');
            currentSquare.innerHTML = "";
            if (currentToken === 1) {
                div.classList.add('token', 'red');
                currentSquare.appendChild(div);
            } else if (currentToken === 2) {
                div.classList.add('token', 'black');
                currentSquare.appendChild(div);
            }
        }
    }
    for (let i = 0; i <= 6; i++) {
        let selectedColumn = document.getElementById(`column-${i}`);
        if (game.isColumnFull(i)) {
            selectedColumn.classList.add("full");
        } else {
            selectedColumn.classList.remove("full");
        }
    }
    if (game.winnerNumber > 0) {
        gameName.innerHTML = game.getWinner();
    }
    // game.checkForColumnWin();
}

window.addEventListener("DOMContentLoaded", event => {

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const newButton = document.getElementById("new-game");

    function newGameButtonToggle() {
        let player1Content = player1.value;
        let player2Content = player2.value;

        newButton.disabled = player1Content.length === 0 || player2Content.value === 0;
    }

    player1.addEventListener('keyup', event => {
        newGameButtonToggle();
    });

    player2.addEventListener('keyup', event => {
        newGameButtonToggle();
    });

    newButton.addEventListener("click", event => {
        game = new Game(player1.value, player2.value);
        player1.value = '';
        player2.value = '';
        newButton.disabled = true;
        newGameButtonToggle();
        updateUI();
    });

    clickTargets.addEventListener("click", event => {
        if (event.target.id.startsWith("column-")) {
            const columnIndex = Number.parseInt(event.target.id.slice(event.target.id.length - 1));
            game.playInColumn(columnIndex);
            updateUI();
        }
    });

});
