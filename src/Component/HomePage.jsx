import react from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

const HomePage = () =>{

    const navigate = useNavigate();

    return(
        <>
        <div className="heading navBarHeading">
            <h1>Welcome To Quiz App</h1>
            <h3>Select below topic to start Quiz</h3>
        </div>
        <div className="quizTopic">
            <ul>
                <li onClick={()=>navigate('/quiz')}>JavaScript</li>
                <li>React JS</li>
                <li style={{textAlign:'center'}}>HTML</li>
            </ul>
        </div>
        </>
    )
}

export default HomePage;