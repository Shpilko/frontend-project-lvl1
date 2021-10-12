#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const calculated = (num1, num2, character) => {
  switch (character) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

for (let raundCount = 1; raundCount <= 3; raundCount += 1) {
  const randomInt1 = getRandomInt(1, 10);
  const randomInt2 = getRandomInt(1, 10);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomInt(0, 2)];

  console.log(`Question: ${randomInt1} ${randomOperator} ${randomInt2}`);
  const correctAnswer = calculated(randomInt1, randomInt2, randomOperator);
  const userAnswer = readlineSync.question('Your answer: ');

  if (`${userAnswer}` === `${correctAnswer}`) {
    console.log('Correct!');
  }
  if (raundCount === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (`${userAnswer}` !== `${correctAnswer}`) {
    console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);

    break;
  }
}
