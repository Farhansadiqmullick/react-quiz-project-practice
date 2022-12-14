import _ from "lodash";
import { useEffect, useState, useReducer } from "react";
import useQuestions from "../../hooks/useQuestion";
import {useNavigate, useParams} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, set, ref} from "firebase/database";
import Answers from "../Answers";
import ProgressBar from "../ProgressBar"
import MiniPlayer from "../Miniplayer";


const initialState = null;
const reducer = (state, action) => {
switch(action.type){
    case "questions":
        action.value.forEach((question) => {
            question.options.forEach((option) => {
                option.checked = false;
            });
        });
        return action.value;
    case "answer":
    const questions = _.cloneDeep(state);
    questions[action.questionID].options[action.optionIndex].checked = action.value;
        return questions;
    default:
    return state;
}
}

export default function Quiz(){
    const {id} = useParams();
    const {questions, error, loading} = useQuestions(id);
    const[currentQuestion, setCurrentQuestion] = useState(0);

    const[qna, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const {currentUser} = useAuth();


    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions
        });
    }, [questions]);


    function handleAnswerChange(e, index){
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked

        });
    }

    //handle when user clicks the next button
    function nextQuestion(){
        if(currentQuestion <= questions.length){
            setCurrentQuestion((prevState) => prevState + 1);
        }
    }

        //handle when user clicks the prev button
        function prevQuestion(){
            if(currentQuestion >= 1 && currentQuestion <= questions.length){
                setCurrentQuestion((prevState) => prevState - 1);
            }
        }

    //Quiz Submit
    async function submit(){
        const {uid} = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        //set the value to firebase database
        await set(resultRef, {
            [id]: qna,
        });

        navigate(
            `/result/${id}`,
            {state: qna}
        )
    }
    
//calculate precentage of progress
const percentage = questions.length > 0 ? ((currentQuestion + 1)/ questions.length) *100 : 0;

return (
    <>
     {loading && <div>Loadng...</div>}
     {error && <div>Error Occured!</div>}
     {!loading && !error && qna && qna.length > 0 && (
        <>
        <h1>{qna[currentQuestion].title}</h1>
        <h4>Question might have muliple answers</h4>
        <Answers input={true}
        options={qna[currentQuestion].options} handleChange={handleAnswerChange}
        ></Answers>
        <ProgressBar next={nextQuestion} prev={prevQuestion} submit={submit} progress={percentage}>
        </ProgressBar>
        <MiniPlayer/>
        </>
     )
     }
    </>
   
    );

}