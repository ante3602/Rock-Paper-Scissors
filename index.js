function getComputerChoice(){
   let computerChoice = Math.floor(Math.random() * 3);
   switch(computerChoice){
      case 0:
         computerChoice = "rock";
         break;
      case 1:
         computerChoice = "paper";
         break;
      case 2:
         computerChoice = "scissors";
         break;
   }
   console.log("computer choice:" + computerChoice)
   return computerChoice;
}

function getPlayerChoice(){
   let playerChoice = prompt("Choose rock, paper or scissors");
   playerChoice = playerChoice.toLowerCase();
   console.log("player choice:" + playerChoice);

   if(playerChoice !== "rock" && playerChoice!== "paper" && playerChoice !== "scissors"){
      console.log("wrong input, you have to choose: rock, paper or scissors");
      getPlayerChoice();
   }
   else{
      return playerChoice;
   }
}

function playRound(playerChoice, computerChoice){
   let outcome = 0;
   if((playerChoice === "rock" && computerChoice === "scissors")
   || (playerChoice === "scissors" && computerChoice === "paper")
   || (playerChoice === "paper" && computerChoice === "rock")
   ){
       outcome = 1;
       console.log("you win the round!")
   }
   else if(
      (computerChoice === "rock" && playerChoice === "scissors")
   || (computerChoice === "scissors" && playerChoice === "paper")
   || (computerChoice === "paper" && playerChoice === "rock")
   ){
      outcome = 2
      console.log("Computer wins the round")
   }
   else{
      console.log("The round is tied");
   }
   return outcome;
}

function game(){
   let playerRoundWinCounter = 0;
   let computerRoundWinCounter = 0;
   let numberOfRounds = prompt("How many rounds do you want to play?")
   for(let i = 0; i < numberOfRounds; i++){
      let result = playRound(getPlayerChoice(), getComputerChoice())
      console.log(result);
      if(result === 1){
         playerRoundWinCounter += 1;
      }
      else if (result === 2){
         computerRoundWinCounter += 1;
      }
      console.log(playerRoundWinCounter + ":" + computerRoundWinCounter);
   }
   if(playerRoundWinCounter > computerRoundWinCounter){
      console.log("player wins! Congrats");
   }
   else if(playerRoundWinCounter < computerRoundWinCounter){
      console.log("Game over, computer wins");
   }
   else{
      console.log("game is tied");
   }
}

game();





