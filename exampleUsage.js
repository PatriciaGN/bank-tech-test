const Bank = require('./bank');
const DateStamp = require('./dateStamp');
const StatementPrinter = require('./statementPrinter');

let bank = new Bank();
let statementPrinter = new StatementPrinter(bank);
statementPrinter.printStatement();

bank.makeDeposit(500);
bank.makeDeposit(1000);
bank.makeWithdrawal(700);
console.log(statementPrinter.printStatement());
