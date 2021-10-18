import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const progressionLength = 10;
  const progression = getProgression(getRandomInt(1, 50), getRandomInt(2, 5), progressionLength);
  const elementCount = 10;
  const firstElement = 0;
  const lastElement = elementCount - 1;
  const elementToHide = getRandomInt(firstElement, lastElement);
  const correctAnswer = progression[elementToHide].toString();

  progression[elementToHide] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
