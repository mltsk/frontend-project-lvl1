import { generateRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomInt(400);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = (number).toString();
  return { question, correctAnswer };
};

const runEvenGame = () => run(generateRound, gameDescription);

export default runEvenGame;
