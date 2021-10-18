import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndCorrectAnswer = () => {
  const randomInt = getRandomInt(1, 100);
  const question = randomInt;
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
