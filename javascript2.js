let userscore = 0;
let compscore = 0;



//for taking the choice from the user
const choice = document.querySelectorAll(".choice");
// to access the msg box from html
const msg = document.querySelector("#msg");

// to access the user score 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//to generate computer choice 
const genComChoice = () => {
    const options = ["rock " , "paper" , "scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};

const drawGame = ()=> {
    msg.innerText = "Game was draw.play again!";
    msg.style.backgroundColor = "midnightblue";

};

const showWinner =(userWin ,userchoice , compChoice)=> {
    if(userWin){
        userscore++; //to update user score
        userScorePara.innerText = userscore;
        msg.innerText = `you Win! your ${userchoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else{
        compscore++; //to update computer score
        compScorePara.innerText = compscore;
        msg.innerText = `you lose! ${compChoice} beats your ${userchoice} `;
        msg.style.backgroundColor = "red";
    }
};
//to track the value from user
const playgame =(userchoice) => {
   console.log("user choice = " , userchoice);
   //generate computer choice 
   const compChoice =genComChoice();
   console.log("computer choice = " , compChoice);

   if(userchoice === compChoice){
    //draw game
    drawGame();
   }else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissor , paper
        userWin=compChoice === "paper" ? false :true ;
    }else if(userchoice==="paper"){
        //rock ,scissor
        userWin= compChoice === "scissor" ? false :true;
    }else{
        //rock , paper
        userWin =compChoice === "rock" ?false :true;
    }
    showWinner(userWin, userchoice , compChoice);
   };
};


choice.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});