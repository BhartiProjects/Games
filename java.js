let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice =", compChoice);
    
    if (userChoice === compChoice) {
        drawGame();
        } else {
        const userWin = determineWinner(userChoice, compChoice);
        showWinner(userWin);

    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * options.length);
    return options[ranIdx];

  };

const determineWinner = (userChoice, compChoice) => {
    if (userChoice === "rock") return compChoice === "paper" ? false : true;
    if (userChoice === "paper") return compChoice === "scissors" ? false : true;
    return compChoice === "rock" ? false : true;
};

const drawGame = () => {
    msg.innerText = "Game draw! Play again";
    msg.style.backgroundColor = "#A0AAB2";
};

   const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore; 
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++; 
        compScorepara.innerText = compScore; 
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
      }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    
});
