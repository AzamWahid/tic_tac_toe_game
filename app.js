console.log('welcome to tic tac toe');

let music = new Audio('./assets/music1.mp3');
let turnMusic = new Audio('./assets/ting.mp3');
let gameOverMusic = new Audio('./assets/gameover.mp3');
let gameOver = false;

let turn = "X";

// fucntion to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}



//fucntion to check win

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerHTML = boxText[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector('.line').style.width = "20vw"
            // document.querySelector('.line').style.transform = `translate(${[5]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}


//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })
})


// onclick for reset listner

reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.querySelector('.line').style.width = "0vw"

    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"

});

