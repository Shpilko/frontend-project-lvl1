#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const name = readlineSync.question();

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (min, max) => {
  let minNum = min;
  let maxNum = max;
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

let count = 0;

while (count !== 3) {
  const randomInt = getRandomInt(1, 100);
  console.log(`Question: ${randomInt}`);

  const evenNum = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const userAnswer = readlineSync.question();
  const correctAnswer = evenNum(randomInt);

  if (userAnswer === correctAnswer) {
    count += 1;
    console.log('Correct!');
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);

    break;
  }
}
