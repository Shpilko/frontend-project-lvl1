import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getQuestionAndCorrectAnswer = () => {
  const randomInt = getRandomInt(1, 101);
  const question = `${randomInt}`;
  const correctAnswer = isPrime(randomInt);

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
