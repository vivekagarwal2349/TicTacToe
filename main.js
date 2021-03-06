const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.box');
var index=0;
console.log(index)
// game constants
const xSymbol = '×';
const oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;
 
const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
      statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
      var i=parseInt(document.getElementById("p1").innerText);
      i+=1;
      document.getElementById("p1").innerText="";
      document.getElementById("p1").innerText=i;
    } else {
      statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
      var i=parseInt(document.getElementById("p2").innerText);
      i+=1;
      document.getElementById("p2").innerText="";
      document.getElementById("p2").innerText=i;
    }
  };

  const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];
  
    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[1].classList.add('won');
      cellDivs[2].classList.add('won');
      
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
      handleWin(middleLeft);
      cellDivs[3].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
      handleWin(bottomLeft);
      cellDivs[6].classList.add('won');
      cellDivs[7].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[3].classList.add('won');
      cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
      handleWin(topMiddle);
      cellDivs[1].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[5].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[8].classList.add('won');



    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[6].classList.add('won');



    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
      gameIsLive = false;
      statusDiv.innerHTML = 'Game is tied!';
      var i=parseInt(document.getElementById("tie").innerText);
      i+=1;
      document.getElementById("tie").innerText="";
      document.getElementById("tie").innerText=i;
    } else {
      xIsNext = !xIsNext;
      if (xIsNext) {
        statusDiv.innerHTML = `${xSymbol} is next`;
      } else {
        statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
      }
    }
  };
  
  
  // event Handlers
  const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
      cellDiv.classList.remove('x');
      cellDiv.classList.remove('o');
      cellDiv.classList.remove('won');
    }
    index+=1;
    gameIsLive = true;
    if (index%2){
      document.getElementById("xop1").innerText="O";
      document.getElementById("xop2").innerText="X";
    }
    else{
      document.getElementById("xop1").innerText="X";
      document.getElementById("xop2").innerText="O";
    }
  };
  
  const handleCellClick = (e) => {
    const classList = e.target.classList;
  
    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
      return;
    }
  
    if (xIsNext) {
      classList.add('x');
      checkGameStatus();
    } else {
      classList.add('o');
      checkGameStatus();
    }
  };
  
  
  // event listeners
  resetDiv.addEventListener('click', handleReset);
  
  for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
  }


// console.log(letterToSymbol)
