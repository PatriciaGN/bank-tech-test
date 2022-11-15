## Introduction

This is a bank application you can run from your command line using Node. You can make deposits and withdrawals (using the bank.makeDeposit(amount) and .makeWithdrawal(amount) functions) and print a statement using the statementPrinter.printStatement() function.

## Setup

To do the application setup, please run the following commands:

nvm use node
npm install -g esbuild jest
npm install

npm init -y
npm install jest-environment-jsdom

To use the application from your command line, run:
node

How to run the tests:
jest

## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
