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

const progressionLength = 10;

const getQuestionAndCorrectAnswer = () => {
  const firstElement = 0;
  const lastElement = progressionLength - 1;
  const lastElementIndex = getRandomInt(firstElement, lastElement);
  const progression = getProgression(getRandomInt(1, 50), getRandomInt(2, 5), progressionLength);

  const progressionWithHiddenElement = hideNumberInProgression(progression, lastElementIndex);

  const question = progressionWithHiddenElement.join(' ');
  const correctAnswer = progression[lastElementIndex].toString();

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
