let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector(".newGame");
let winner = document.querySelector(".wining");
let turnX = true;
let count = 0;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      box.style.color = "#780000";
      turnX = false;
    } else {
      box.innerHTML = "O";
      box.style.color = "#606c38";
      turnX = true;
    }
    box.disabled = true;
    let isWinner = checkWinner();
    count++

    if(count === 9 && !isWinner){
        gameDraw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if(pos1 != "" &&  pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            return true;
        };
    };
  };

};
const gameDraw = ()=>{
  winner.classList.remove("hide");
  newGame.classList.remove("hide");
  
  winner.innerHTML = `<h2> Game is Draw </h2> \n <h4>Play Again</h4> \n<h4> Best of Luck</h4> `;
  winner.style.color = "#f7b538";
};

const showWinner = (pos1)=>{
  disableBox();
  winner.classList.remove("hide");
  newGame.classList.remove("hide");
  if(pos1 === "X"){
    winner.style.color = "#e71d36";
  }else{
    winner.style.color = "#70e000";
  }
    winner.innerHTML = `<h1>Congratulation</h1>\n<h2>Winner is ${pos1}</h2>`;
};
const enableBox = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerHTML ="";
  }
};
  const disableBox = ()=>{
    for(let box of boxes){
      box.disabled = true;
    }
};
const resetGame = ()=>{
      turnX = true;
    count = 0;
    enableBox();
    winner.classList.add("hide");
    newGame.classList.add("hide");
};

reset.addEventListener("click", resetGame);
reset.addEventListener("mouseover", ()=> {
  console.log("click here for reset the game");
});
newGame.addEventListener("click", resetGame );

