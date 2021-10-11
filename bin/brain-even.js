#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let raundCount = 1; raundCount <= 3; raundCount += 1) {
  const randomInt = getRandomInt(1, 100);
  console.log(`Question: ${randomInt}`);

  const evenNum = (randomInt % 2 === 0) ? 'yes' : 'no';

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = evenNum;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  }
  if (raundCount === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);

    break;
  }
}
