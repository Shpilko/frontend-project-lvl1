import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }

  return i;
};

const getQuestionAndCorrectAnswer = () => {
  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt(1, 100);
  const question = `${randomInt1} ${randomInt2}`;
  const correctAnswer = gcd(randomInt1, randomInt2).toString();

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
