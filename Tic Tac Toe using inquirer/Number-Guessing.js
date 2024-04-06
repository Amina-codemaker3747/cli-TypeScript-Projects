import inquirer from "inquirer";
const noGuessingGame = async () => {
    //  if we want to not include zero them simply add one
    let systemgeneratedNo = Math.floor(Math.random() * 10 + 1);
    // Print at the top
    console.log(`Game: Let's guess a number between 1 to 10 in 3 tries`);
    // No of tries in a game
    let noTries = 3;
    let playAgin = true;
    while (playAgin) {
        while (noTries > 0) {
            const answers = await inquirer.prompt([{
                    type: "number",
                    name: "userGuess",
                    mesaage: "Guess the number between 1 to 10 & Write it.",
                }]);
            let { userGuess } = answers;
            console.log(`User Guess: ${userGuess} \t Correct Answer: ${systemgeneratedNo}`);
            if (userGuess === systemgeneratedNo) {
                console.log(`Correct Answer!👏 Congratulations You Win🥳`);
                noTries = 0;
            }
            else {
                console.log(`Wrong Answer!☹️ Try Again. Better Luck Next Time!`);
                if (systemgeneratedNo > answers.userGuess) {
                    console.log("Think Higher!🤔");
                }
                else {
                    console.log("Think Lower!🤔");
                }
                console.log(`You have ${noTries - 1} left.`);
            }
            noTries--;
        }
        const playAgainAnswer = await inquirer.prompt([{
                type: "confirm",
                name: "playAgain",
                message: "Do you want to play again?",
            }]);
        console.log(playAgainAnswer);
        if (playAgainAnswer.playAgain == true) {
            systemgeneratedNo = Math.floor(Math.random() * 10 + 1);
            noTries = 3;
        }
        else {
            playAgin = false;
            console.log("Exiting game...");
        }
    }
};
export { noGuessingGame };
