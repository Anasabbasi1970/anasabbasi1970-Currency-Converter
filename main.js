import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GRB: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GRB', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GRB', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let totalAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency // 4
let convertedAmount = baseAmount * totalAmount;
console.log(convertedAmount);
