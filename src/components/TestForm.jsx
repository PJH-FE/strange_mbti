import { questions } from '../data/questions';

const TestForm = () => {
  console.log(questions);
  return (
    <>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <label htmlFor="">{question.question}</label>
            {question.options.map((option) => {
              return (
                <label key={question + option}>
                  <input type="checkbox" />;
                </label>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default TestForm;
