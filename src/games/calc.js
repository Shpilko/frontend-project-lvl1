import { getRandomInt } from '../getRandomInt.js';
import newGame from '../index.js';

const description = 'What is the result of the expression?';

const calculated = (num1, num2, character) => {
  switch (character) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw Error('Unknown operator');
  }
};

const getQuestionAndCorrectAnswer = () => {
  const randomInt1 = getRandomInt(1, 10);
  const randomInt2 = getRandomInt(1, 10);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomInt(0, 2)];
  const question = `${randomInt1} ${randomOperator} ${randomInt2}`;
  const correctAnswer = calculated(randomInt1, randomInt2, randomOperator).toString();

  return [question, correctAnswer];
};

export default () => newGame(description, getQuestionAndCorrectAnswer);
