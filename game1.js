// 1. We use this for accessing elements
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset") // 2. accessing reset button
//  13.for accessing newgame and reset functionaity
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg") 

let turnO = true; // 3.storing the player turns that is here first turn is for player O

// 4.storing winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// we create this fun for restting the game 
const resetGame = () => {
    turnO = true;  // after resetting again game starts as player is O 
    enableboxes();
    msgContainer.classList.add("hide") // as hide class will be added again as the game is restarted 

}
// 5.so to click box events are used that is mouseclick evnt
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnO){                        // 6. after clicking we will get some text that is X,O
            box.innerText = "O"; // PLAYER O
            turnO = false;
        }

        else {
            box.innerText = "X"; // PLAYER X
            turnO = true;
        }
        box.disabled = true; // 7.Boxes are disabled to avoid twice clicking on same box
        checkWinner();
    });
});

// we create this function bcz as the winner is declared and still if few boxes are left empty for disabling those boxes to avoid multiple times of winning in same game 
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
// we create this function to enbale the boxes again after resetting the game or for new game 
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


    
// 12. displaying msg of winnning
const showWinner = (winner) => {
    msg.innerText = `Congrats ,Winner is ${winner}`;
    msgContainer.classList.remove("hide") // hide is a class used for hiding the msg before the game starts after the game ends it displays the msg 
    disableboxes();
}
// THE IMPORTANT PART...
 const checkWinner = () => {             // 8.checking the winninig patterns
    for (let pattern of winPatterns) {
        // 10. storing the 3 position values
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val !=""){        //firstly boxes innertext is empty
            if(pos1Val === pos2Val && pos2Val===pos3Val){     // if 3 position values are same then it is a win
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
 }
 newGameBtn.addEventListener("click",resetGame); // new game will be triggered as we click on newgamebutton
reset.addEventListener("click",resetGame); //the game will be reset if we click on reset button