#! /usr/bin/env node
import inquirer from "inquirer";
//asking question from user through inquirer.
let answer = await inquirer.prompt([
    { message: "Enter your first number.", type: "number", name: "firstNumber" },
    { message: "Enter your 2nd number.", type: "number", name: "secondNumber" },
    { message: "select one of the operator to perform opration.", type: "list", name: "operator", choices: ["Addition", "Subtrtaction", "Multiplication", "Division"] },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
