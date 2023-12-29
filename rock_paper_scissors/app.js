let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");


const genCompChoice=()=>{
 const options=["rock","paper","scissors"];
   const randInx= Math.floor(Math.random()*3);
   return options[randInx];
};
const draw=()=>{
  console.log("game was draw");
  msg.innerText="Game Was Draw,play again";
  msg.style.backgroundColor="#081b31";
};
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
         compScore++;
         compScoreP.innerText=compScore;
        msg.innerText= `You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playgame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice === compChoice){
      draw();
    }else{
        let userWin=true;
        if(userChoice == "rock"){
            userWin=compChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){
            userWin=compChoice === "scissors" ? false : true;
        }else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice); 
    })
})