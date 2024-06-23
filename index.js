const buttonEl = document.querySelector(".btn")
const diceEl = document.querySelector(".dice")
let historyList = [];//creating an empty array
const rollHistoryEl= document.querySelector(".roll-history")

function rollDice(){
  const rollResult = Math.floor(Math.random() * 6)  + 1//geting a random no between 1-6
  const diceFace = getDiceFace(rollResult)
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult) //pushing the reults in array
  updateRollHistroy()


}
function updateRollHistroy(){
    rollHistoryEl.innerHTML = "" ;//first emptying the hardcode
    for(let i=0; i<historyList.length; i++){
        const listItem = document.createElement("li") 
        //now create dynamically
        listItem.innerHTML= `Roll ${i + 1}:  <span>${getDiceFace(historyList[i])}</span> `
        rollHistoryEl.appendChild(listItem)
    }
}

function getDiceFace(rollResult) { //based on input giving output
    switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:  
            return "&#9860;";
        case 6:
         return "&#9861;";
        default:
        return ""                    
    }
}


buttonEl.addEventListener("click", ()=>{
    
 diceEl.classList.add("roll-animation")
 setTimeout(()=>{
    diceEl.classList.remove("roll-animation")
 }, 1000) 
 rollDice(); //to addd again afer 1s
})