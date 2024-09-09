import { questions } from '../data/questions';

const mbtiCalculator = (answers) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  Object.values(answers).forEach((answer, index) => {
    const question = questions[index];

    scores[answer === true ? question.type[0] : question.type[1]]++;
  });

  const result = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${
    scores.T >= scores.F ? 'T' : 'F'
  }${scores.J >= scores.P ? 'J' : 'P'}`;

  return result;
};

export default mbtiCalculator;
