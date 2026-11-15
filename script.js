const choices = document.querySelectorAll(".choice");
let resultText = document.querySelector(".desc");
let userNum = document.querySelector("#userNum");
let compNum = document.querySelector("#compNum");

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const compGen = () =>{
    const option = ["rock","paper","scissor"];
    const optionIdx = Math.floor(Math.random()*3);
    return option[optionIdx];
}

let userCount = 0;
let compCount = 0;
let userWin = true;
const playGame = (userChoice) =>{
    const compChoice = compGen();
    if (userChoice === compChoice){
        resultText.innerText = "It was a Draw";
        resultText.style.backgroundColor = "#6AB0AF";
        resultText.style.color = "white";
    }
    else{
        if (userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "scissor" ? true:false;
        }
        else if (userChoice === "paper"){
            // scissor, rock
            userWin = compChoice === "scissor" ? false:true;
        }
        else if (userChoice === "scissor"){
            // rock, paper
            userWin = compChoice === "rock" ? false:true;
        }

        // shows the result to the user
        if (userWin){
            userCount++;
            userNum.innerText = userCount;
            resultText.innerText = `User Won as ${compChoice} beats ${userChoice}`;
            resultText.style.backgroundColor = "green";
            resultText.style.color = "white";
        }else{
            compCount++;
            compNum.innerText = compCount;
            resultText.innerText = `User Lost as ${compChoice} beats ${userChoice}`;
            resultText.style.backgroundColor = "red";
            resultText.style.color = "white";
        }
    }
}