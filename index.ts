#! /usr/bin/env node
import inquirer from "inquirer"

const ans :{
    sent : string;
} = await inquirer.prompt([{
    name: "sent",
    type: "input",
    message: "Enter your sentence to count the word: "
}])

const done = ans.sent.trim().split(" ")
console.log(done)
console.log(`Your sentence word count is ${done.length}`)
