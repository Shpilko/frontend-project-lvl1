#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const gcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }

  return i;
};

for (let raundCount = 1; raundCount <= 3; raundCount += 1) {
  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt(1, 100);

  console.log(`Question: ${randomInt1} ${randomInt2}`);
  const correctAnswer = gcd(randomInt1, randomInt2);
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
