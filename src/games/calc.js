import { generateRandomInt } from '../utils.js';
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

const generateRound = () => {
  const number1 = generateRandomInt(30);
  const number2 = generateRandomInt(30);
  const indexOfOperator = generateRandomInt(3);
  const operators = ['+', '-', '*'];
  const operator = operators[indexOfOperator];
  const correctAnswer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return { question, correctAnswer };
};

const runCalcGame = () => run(generateRound, gameDescription);

export default runCalcGame;
