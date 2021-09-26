#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num = getRandomInt(50);

for (let i = 0; i < 3; i += 1) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let num = getRandomInt(50); 

console.log(`Question: ${num}`);

const userAnswer = readlineSync.question();

if (num % 2 !== 0 && userAnswer === `yes`) {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
  Let's try again, ${name}!`);
  break;
}

if (num % 2 === 0 && userAnswer === `no`) {
  console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
  Let's try again, ${name}!`);
  break;
}

}
console.log(`Congratulations, ${name}!`);