#! /usr/bin/env node
// Quiz system
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("**********QUIZ**********"));
let nameQuestion = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name:"
    }]);
console.log(`Instructions: You must score minimun 7 after that you passed`);
let score = 0;
//quiz questions
let question1 = await inquirer.prompt([{
        name: "q1",
        type: "rawlist",
        message: "What is programming language?",
        choices: ["Its a language to understand with eachother", "Language to communicate with computer", "Its a human language"],
    }]);
if (question1.q1 == "Language to communicate with computer") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question2 = await inquirer.prompt([{
        name: "q2",
        type: "rawlist",
        message: "How to used Programming language in ou industry?",
        choices: ["To build several programs ", "Such as softwares and other application", "Both 1 and 2"],
    }]);
if (question2.q2 == "Both 1 and 2") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question3 = await inquirer.prompt([{
        name: "q3",
        type: "rawlist",
        message: "Programming language such as easy to understand and... ",
        choices: ["Most understandable for animals", "useful or others", "Easily communicate with machine"],
    }]);
if (question3.q3 == "Easily communicate with machine") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question4 = await inquirer.prompt([{
        name: "q4",
        type: "rawlist",
        message: "An API stands for",
        choices: ["Application Programming Interface", "Artificial Purpose Interface", "Application Program Internet"],
    }]);
if (question4.q4 == "Application Programming Interface") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question5 = await inquirer.prompt([{
        name: "q5",
        type: "rawlist",
        message: "Programming language used in Datascience and machine learning",
        choices: ["Php", "Python", "Java"],
    }]);
if (question5.q5 == "Python") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question6 = await inquirer.prompt([{
        name: "q6",
        type: "rawlist",
        message: "What is the purpose of a loop in programming",
        choices: ["Declaring variables", "Repeating a block of code", "Handling user input"],
    }]);
if (question6.q6 == "Repeating a block of code") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question7 = await inquirer.prompt([{
        name: "q7",
        type: "rawlist",
        message: "What does the term Algorithm refer to in programming ",
        choices: ["A series of steps to solve a specific problem", "A library of pre-written code", "A type of variable"],
    }]);
if (question7.q7 == "A series of steps to solve a specific problem") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question8 = await inquirer.prompt([{
        name: "q8",
        type: "rawlist",
        message: "Which programming language is known for its use in developing dynamic web applications?",
        choices: ["Java", "C#", "Javascript"],
    }]);
if (question8.q8 == "Javascript") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question9 = await inquirer.prompt([{
        name: "q9",
        type: "rawlist",
        message: "Which programming language was developed by Guido van Rossum?",
        choices: ["PHP", "Python", "MySQL"],
    }]);
if (question9.q9 == "Python") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
let question10 = await inquirer.prompt([{
        name: "q10",
        type: "rawlist",
        message: "What is OOP stands for ?",
        choices: ["Object-Oriented Programming", "Object-Oriented Protocol", "Object-Oriented Processing"],
    }]);
if (question10.q10 == "Object-Oriented Programming") {
    console.log("Correct");
    score++;
}
else {
    console.log("Incorrect!");
}
setTimeout(() => {
    if (score >= 7) {
        console.log(`**********Result**********\nName:${nameQuestion.name}\nYour score:${score} out of 10\nProgress:Congratulations`);
    }
    else {
        console.log(`**********Result**********\nName:${nameQuestion.name}\nYour score:${score} out of 10\nProgress: You loss try again`);
    }
}, 4000);
