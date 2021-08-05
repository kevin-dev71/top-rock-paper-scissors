Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const moves = ['Rock', 'Paper', 'Scissors']
let playerScore = 0, cpuScore = 0;

const computerPlay = () => {  
  return moves.random()
}

const playRound = ( playerSelection, computerSelection ) => {
  const playerPlay = playerSelection.trim().toLowerCase()
  const cpuPlay = computerSelection.trim().toLowerCase()
  console.log("Player: " , playerPlay)
  console.log("CPU: " , cpuPlay)
  const RULES = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
  }
  if(playerPlay == cpuPlay){
    console.log("its a tie")
    console.log("==============")
    return;
  }
  if(RULES[playerPlay] == cpuPlay){
    console.log("Player win")
    playerScore += 1
  } else {
    console.log("CPU win")
    cpuScore += 1
  }
  console.log("==============")
}

const game = () => {
  let playerSelection  
  for(let i = 0; i < 5; i++){
    playerSelection = prompt("Choose your play: ")    
    playRound(playerSelection, computerPlay())
  }
  console.log("Player score: ", playerScore)
  console.log("CPU score: ", cpuScore)
  
}

game()