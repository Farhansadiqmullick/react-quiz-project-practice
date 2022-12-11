import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";
import _ from "lodash";

export default function Result() {
  const { id } = useParams();
  const navigate = useNavigate();
  navigate(`/result/${videoId}`, {
    state: {
      qna,
    },
  });
  const { state } = useLocation();
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);

  function calculate() {
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }
  const userScore = calculate();
  return (
    <>
      {loading && <div>Laoding...</div>}
      {error && <div>There is an error...</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length}></Summary>
          <Analysis answers={answers}></Analysis>
        </>
      )}
    </>
  );
}
