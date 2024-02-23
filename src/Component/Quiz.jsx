import react, { useState } from "react";
import JSQueSet from "./JSQueSet";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [activeQue, setActiveQue] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [selectedAnsIndex, setSelectedAnsIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showMsg, setShowMsg] = useState("");

  const [result, setResult] = useState({
    score: 0,
    correctAns: 0,
    wrongAns: 0,
  });
  const navigate = useNavigate();

  const { questions } = JSQueSet;
  const { question, choices, correctAnswer } = questions[activeQue];

  const handleNextQue = () => {
    setShowMsg("");
    setSelectedAnsIndex(null);
    setActiveQue((activeQue) => activeQue + 1);

    setResult((prev) =>
      selectedAns
        ? {
            ...prev,
            score: prev.score + 5,
            correctAns: prev.correctAns + 1,
          }
        : { ...prev, wrongAns: prev.wrongAns + 1 }
    );

    if (activeQue !== questions.length - 1) {
      setActiveQue(activeQue + 1);
    } else {
      setActiveQue(0);
      setShowResult(true);
    }
  };

  const handlePrevQue = () => {
    setShowMsg("");
    setSelectedAnsIndex(null);
    setActiveQue((activeQue) => activeQue - 1);
  };

  const onAnsSelect = (answer, index) => {
    setSelectedAnsIndex(index);
    if (answer === correctAnswer) {
      setSelectedAns(true);
      setShowMsg("Correct Answer");
    } else {
      setSelectedAns(false);
      setShowMsg("Wrong Answer");
    }
  };

  const handleBackButton = () => {
    setShowResult(false);
  };

  const addLeadingZero = (num) => {
    return num > 9 ? num : `0${num}`;
  };

  return (
    <div>
      <nav className="navbar ">
        <div class="container-fluid justify-content-center navBarHeading">
          <span class="navbar-brand mb-0 fs-2 fw-mediumbold">
            Welcome To JavaScript Quiz
          </span>
        </div>
      </nav>
      {!showResult ? (
        <div>
          <div className="queBox">
            <span className="queNumStyle">
              {addLeadingZero(activeQue + 1)}/{addLeadingZero(questions.length)}
            </span>
            <h2 className="styleQue">{question}</h2>

            {choices.map((ans, index) => (
              <div className="styleOption">
                {" "}
                <input
                  type="radio"
                  name="ans"
                  value={ans}
                  onClick={() => onAnsSelect(ans, index)}
                  key={ans}
                />
                {ans}
              </div>
            ))}

            <div className={selectedAns ? "correctAns" : "wrongAns"}>
              <span>{showMsg}</span>
            </div>

            <div>
              <button
                onClick={handleNextQue}
                disabled={selectedAnsIndex === null}
                type="button"
                class="btn btn-outline-primary"
              >
                {activeQue === questions.length - 1 ? "Finish" : "Next"}
              </button>

              {activeQue === 0 ? 
             <button
             onClick={()=>navigate('/')}
               type="button"
               class="btn btn-outline-primary"
               style={{marginLeft:'1.5rem'}}
             >
                Back To Home Page              
             </button>
              : 
              <button
              onClick={handlePrevQue}
                type="button"
                class="btn btn-outline-primary"
                style={{marginLeft:'1.5rem'}}
              >
                 Previous Question
              </button>}
            </div>
          </div>
        </div>
      ) : (
        <div className="showRes">
          <h1 className="heading">Result</h1>
          <ul>
            <li>
              Total Question : <span>{questions.length}</span>
            </li>
            <li>
              Correct Answer : <span>{result.correctAns}</span>
            </li>
            <li>
              Wrong Answer : <span>{result.wrongAns}</span>
            </li>
            <li>
              Total Score :{" "}
              <span>
                {result.score}/{questions.length * 5}
              </span>
            </li>
          </ul>
          <div className="buttonShow">
          <button
              type="button"
              class="btn btn-outline-primary btn-sm fw-semibold previewBtn"
              onClick={()=>navigate('/previewPage')}
            >
              Preview
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm fw-semibold tryAgainBtn"
              onClick={handleBackButton}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
