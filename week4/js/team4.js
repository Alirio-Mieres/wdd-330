const show = document.getElementsByTagName('h2');
const text1 = "Player 1 is your turn";
const text2 = "Player 2 is your turn";
const player1 = "x";
const player2 = "o";
let player = player2;

let value = [];

/* This event listener is ready to detect a click in the container div  */
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
    /* go over all clases called .box one by one */
    const board = document.getElementsByClassName("box");
    let i;
    for (i = 0; i < board.length; i++) {
        /* Replace everything */
        board[i].innerHTML = "";
    }
    /* Reset the text at the beginning */
    show[0].innerHTML = "Player 1, starts the game";
    /* Reset the initial value */
    player = player2;
}

function tie() {

    const checkWinner = winner();

    /* check how many times the "x" was put on */
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "x") {
            count++;
        }
    }
    /* If the "X" appears 5 times it means that the table is full and nothing wins. */
    if (count == 5 && checkWinner !== "win") {
        show[0].innerHTML = "TIE :(";
    }
}

function winner() {

    /* Checks all elements with the "box" class */
    const board = document.getElementsByClassName("box");
    let i;
    for (i = 0; i < board.length; i++) {
        /* Replace everything */
        /*board[i].innerHTML = "";*/
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
    //console.log(value);
    //console.log(value[0]);
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