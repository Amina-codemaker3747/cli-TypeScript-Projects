import inquirer from "inquirer";
import { Calculator } from "./calculator.js";
import { currencyConverter } from "./Curr-Converter.js";
import { ticTacToeGame } from "./tic-tac-toe.js";
import { birthdayGuess } from "./birthday.js";
import { noGuessingGame } from "./Number-Guessing.js";
// Main menu
const mainMenu = async () => {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select a game to play:',
        choices: ['Currency Converter', 'Tic Tac Toe', 'Calculator', 'Bithday Guessing Game', 'Number Guessing Game', 'Quit']
    });
    switch (choice) {
        case 'Currency Converter':
            await currencyConverter();
            break;
        case 'Tic Tac Toe':
            await ticTacToeGame();
            break;
        case 'Calculator':
            await Calculator();
            break;
        case 'Birthday Guessing Game':
            await birthdayGuess();
            break;
        case 'Number Guessing Game':
            await noGuessingGame();
            break;
        case 'Quit':
            console.log('Goodbye!');
            process.exit(0);
    }
};
// Start the main menu
mainMenu();
