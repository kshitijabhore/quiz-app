import react from "react";
import JSQueSet from "./JSQueSet";
import "./style.css";
import { useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const { questions } = JSQueSet;
  const navigate = useNavigate();

  return (
    <>
      <div className="heading" style={{marginTop:'0px'}}>
        <h1>Quiz Preview</h1>
      </div>
      <div className="queBox">
        {questions.map((num,index) => (
          <div style={{marginBottom:'2rem'}}>
            <h2 className="styleQue">{index+1}.{num.question}</h2>

            {num.choices.map((ans, index) => (
              <div className="styleOption">               
                <span>{index+1}.{" "}{ans}</span>
              </div>
            ))}

            <div className="correctAns">
                <p>Correct Ans : {num.correctAnswer}</p>
                </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'end', marginRight:'2rem'}}>
      <button
             onClick={()=>navigate('/')}
               type="button"
               class="btn btn-primary"
               style={{marginLeft:'1.5rem'}}
             >
                Back To Home Page              
             </button>
      </div>
    </>
  );
};

export default PreviewPage;
