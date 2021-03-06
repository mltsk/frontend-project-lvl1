import readlineSync from 'readline-sync';

const RoundsCount = 3;
const run = (generateRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameDescription}`);
  for (let i = 0; i < RoundsCount; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
