import inquirer from "inquirer";

// Calculator
const Calculator =async () => {
    const answer: {
        "NO1": number,
        "NO2": number,
        "Operator": string
     
     } = await inquirer.prompt([{
         type: "number",
         name: "NO1",
         message: "Write your NO1: "  
     },
     
     {
         type: "number",
         name: "NO2",
         message: "Write your NO2: "
     },
     
     {
         type: "list",
         name: "Operator",
         message: "Select You Operator",
         choices: ["+", "-", "*", "/"]
     }
     
     ])
     
     const {NO1, NO2, Operator} = answer;
     
     if(NO1 && NO2 && Operator) {
           let result:Number = 0;
           if(Operator === "+") {
             result = NO1 + NO2;
           } else if(Operator === "-") {
             result = NO1 - NO2;
           }else  if(Operator === "*") {
             result = NO1 * NO2;
           } else if(Operator === "/") {
             result = NO1 / NO2;
         
           } 
     
           console.log("Your result is: ", result);
     
     } else {
         console.log("Please select a valid operator.");
     }
    
    }


    export {Calculator};