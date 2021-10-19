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

const hideNumberInProgression = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';

  return hiddenProgression;
};

const getQuestionAndCorrectAnswer = () => {
  const progressionLength = 10;
  const firstElement = 0;
  const lastElement = progressionLength - 1;
  const elementToHide = getRandomInt(firstElement, lastElement);
  const progression = getProgression(getRandomInt(1, 50), getRandomInt(2, 5), progressionLength);

  const progressionWithHiddenElement = hideNumberInProgression(progression, elementToHide);

  const question = progressionWithHiddenElement.join(' ');
  const correctAnswer = progression[elementToHide].toString();

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
