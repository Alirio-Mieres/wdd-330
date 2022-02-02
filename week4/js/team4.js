const show = document.getElementsByTagName('h2');
const text1 = "Player 1 is your turn";
const text2 = "Player 2 is your turn";
const player1 = "x";
const player2 = "o";
let player = player2;

let value = [];

document.querySelector('.container').addEventListener("click", addPiece);
document.querySelector('.container').addEventListener("click", winner);
document.querySelector('.container').addEventListener("click", tie);

function addPiece(piece) {

    if (player == player1) {
        player = player2;
    } else {
        player = player1;
    }
    piece.target.innerHTML = player;
}

function reset() {
    const board = document.getElementsByClassName("box");
    let i;
    for (i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }

}

function tie() {

    const checkWinner = winner();

    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "x") {
            count++;
        }
    }

    if (count == 5 && checkWinner !== "win") {
        show[0].innerHTML = "TIE";
    }
}

function winner() {

    const board = document.getElementsByClassName("box");
    let i;
    for (i = 0; i < board.length; i++) {
        value[i] = board[i].innerText;
    }


    if (value[0] === "x" && value[1] === "x" && value[2] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[3] === "x" && value[4] === "x" && value[5] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[6] === "x" && value[7] === "x" && value[8] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[0] === "x" && value[3] === "x" && value[6] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[1] === "x" && value[4] === "x" && value[7] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[2] === "x" && value[5] === "x" && value[8] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[0] === "x" && value[4] === "x" && value[8] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    } else if (value[6] === "x" && value[4] === "x" && value[2] === "x") {
        show[0].innerHTML = "PLAYER 1 WINS !!!";
        return "win";
    }

    if (value[0] === "o" && value[1] === "o" && value[2] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[3] === "o" && value[4] === "o" && value[5] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[6] === "o" && value[7] === "o" && value[8] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[0] === "o" && value[3] === "o" && value[6] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[1] === "o" && value[4] === "o" && value[7] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[2] === "o" && value[5] === "o" && value[8] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[0] === "o" && value[4] === "o" && value[8] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    } else if (value[6] === "o" && value[4] === "o" && value[2] === "o") {
        show[0].innerHTML = "PLAYER 2 WINS !!!";
        return "win";
    }
}


/*const gameBoard = document.querySelector('.container');
const p1 = 'X';
const p2 = 'O';
let player = p1;
function placeMark(event) {
    console.log(event.target);
    event.target.innerHTML = player;
    if (player === p1) player = p2;
    else player = p1;
    event.target.innerHTML = player;
}
gameBoard.addEventListener('click', placeMark)
document.querySelector('.container').addEventListener("click", placeMark);
function reset() {
    const board = document.getElementsByClassName("box");
    for (i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }
}*/