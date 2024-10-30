let userScore=0;
let comScore=0;

const choose=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userParse=document.querySelector("#you");
const comParse=document.querySelector("#computer");

const draw=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "cadetblue";

}

const showWinner=(userWin, userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        userParse.innerText= userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        comScore++;
        comParse.innerText= comScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }


}

const genComChoice=()=>{
    const options=["rock", "papper", "scissors"];
    const ranInd=Math.floor(Math.random()*3);
    return options[ranInd];
}


const playGame=(userChoice)=>{
    const compChoice = genComChoice();

    if(userChoice==compChoice){
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

}
};


choose.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id")
        playGame(userChoice);
    
    });

});
















    
