let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x . player 0
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO)
        {//Player O
            box.innerText = "O";
            // for next turn 
            turnO = false;
        } else 
        {//Player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count ++;
        
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    
    })
})
const gameDraw = () =>
{
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for( pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" &&  pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val == pos3Val){
               
        
                showWinner(pos1Val);
            }
        }
    }

};
const resetGame = () =>{
    turnO = true;
    count = 0 ;
    enableBoxes();
    msgcontainer.classList.add("hide");

};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);