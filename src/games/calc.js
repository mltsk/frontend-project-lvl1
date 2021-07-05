import getRandomInt from '../utils.js';
import run from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const genQuestionAndCorrectAnswer = () => {
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(30);
  const indexOfMathOperators = getRandomInt(3);
  const mathOperators = ['+', '-', '*'];
  const correctAnswer = (calculate(number1, number2, mathOperators[indexOfMathOperators])).toString();
  const question = `Question: ${number1} ${mathOperators[number3]} ${number2}`;
  return { question, correctAnswer };
};

const brainCalc = run(genQuestionAndCorrectAnswer, gameDescription);

export default brainCalc;
