let currPlayer="X";
let rst=document.querySelector("#reset");
const boxes=document.querySelectorAll(".box");
 const msg = document.getElementById("msg");
const boxArray = Array.from(boxes);
let gameOver = false;

const winningCombo = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]  
];
function checkWin(){
    for(let combo of winningCombo){
        const[a,b,c]=combo;
        const valA=boxArray[a].textContent;
        const valB=boxArray[b].textContent;
        const valC=boxArray[c].textContent;
        if(valA && valA==valB && valB==valC){
            msg.textContent = `${valA} wins!`;
            msg.style.display = "block"; // ✅ make it appear       
            gameOver=true;
            return;

        }
    }
const allFilled = boxArray.every(box => box.textContent !== "");
  if (allFilled && !gameOver) {
    msg.textContent = "Game Finished!";
    msg.style.display = "block";
    gameOver = true;
  }
}
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(box.textContent==""){
        box.textContent=currPlayer;
        box.style.fontSize = "2.5rem";
        checkWin();
        currPlayer=currPlayer==="X"?"O":"X";
        }
    })
})
rst.addEventListener("click",()=>{
    location.reload();
})
