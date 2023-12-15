let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play Again. 🔁";
    msgContainer.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 🥳🎉\nYour ${userChoice} beats computer's ${comChoice}.`;
        msgContainer.style.backgroundColor = "green";
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `You Lose. 😔😭\nComputer's ${comChoice} beats your ${userChoice}.`;
        msgContainer.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice
    const comChoice = genComChoice();

    if(userChoice === comChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = comChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});