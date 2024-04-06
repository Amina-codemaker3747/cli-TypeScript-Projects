import inquirer from "inquirer";

import chalk from "chalk";

let noTries: number = 3;

const birthdayGuess =async () => {
// Define the range of possible birthdays (e.g., January 1st to December 31st)
const birthdays: string[] = [// January
 "January-1", "January-2",  "January-10", "January-11", "January-12", "January-13", 
// Februrary
"February-1",  "February-19", "February-20", "February-22", "February-23", "February-24", "February-25", 
// March
"March-1", "March-2", "March-3", "March-4", "March-5", "March-6", "March-7", "March-8", "March-9", "March-10",
// April
"April-1", "April-2", "April-3", "April-4",  "April-10",
"April-11",  "April-15", "April-16", "April-17", "April-18", "April-19", "April-20",
 
// May
 "May-16", "May-17", "May-18", "May-19", "May-20",
"May-21", "May-22", "May-23", "May-24", "May-25", "May-26", "May-27", "May-28", "May-29", "May-30", "May-31",
// June
"June-1", "June-2", "June-3", "June-4", "June-5", "June-6", "June-7", "June-8", "June-9", "June-20",
"June-21", "June-22", "June-23", "June-24", "June-25", "June-26", "June-27", "June-28", "June-29", "June-30", 
// July
"July-1", "July-2", "July-3", "July-4", "July-5", "July-6", "July-7", "July-8", "July-9", "July-10", "July-29", "July-30", "July-31",
// August
"August-1", "August-2",  "August-7", "August-8", "August-9", "August-10", "August-11", "August-12", "August-13", "August-14",  "August-20",

// September
"September-1", "September-2", "September-26", "September-27", "September-28", "September-29", "September-30", 
// October
"October-1", "October-2", "JOctober-3", "October-4", "October-28", "October-29", "October-30", "October-31",
// November
"November-1", "November-2",  "November-25", "November-26", "November-27", "November-28", "November-29", "November-30",
// December 
"December-1", "December-2",  "December-24", "December-25", "December-26", "December-27", "December-28", "December-29", "December-30", "December-31",
]

// Function to generate a random birthday from the list
function generateRandomBirthday() {
    const idx = Math.floor(Math.random() * birthdays.length);
    return birthdays[idx];
}

// Main function to play the game


while(noTries) {

      console.log(chalk.bold.green("Welcome to Birthday Guessing game... !"));
      console.log(chalk.bold.grey(`\tAssalam-o-Alaikum!\t`));

       const greetings = await inquirer.prompt([
        {
          type: "input",
          name: "manners",
          message: chalk.bold.cyanBright("How are you...?"),
        }
       ]);


      const randomBirthday = generateRandomBirthday();

      const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Guess",
            message: "Guess a birthday (e.g., January 1):",
            validate: (input: string) => {
                // Validate that the input is one of the valid birthdays
                return birthdays.includes(input.trim()) || `Please enter a valid birthday... !`;
            },
      },

    ]);
 
    let {Guess} = answers;
    console.log(`User Guess: ${Guess} \t Correct Answer: ${randomBirthday}`);
    
 // Check if the guessed birthday matches the randomly generated one
  if(answers.Guess.trim() === randomBirthday) {
    console.log(chalk.bold.greenBright("Congratulations ! You guessed the Birthday correctly..."));
    noTries = 0;

  } else {
    console.log(chalk.bold.red(`Sorry, the correct birthday was ${randomBirthday}. Try again!`));
  

    if(randomBirthday > answers.Guess) {
      console.log("Think Higher!🤔");
  } else {
      console.log("Think Lower!🤔")
  }
console.log(`You have ${noTries - 1} left.`);

}
   noTries--;

} 

}
  
export {birthdayGuess};