import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const randomInt = getRandomInt(1, 100);
  const evenNum = (randomInt % 2 === 0) ? 'yes' : 'no';
  const question = randomInt;
  const correctAnswer = evenNum;

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
