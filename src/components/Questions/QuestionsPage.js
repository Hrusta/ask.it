import React, {useState} from "react";
import NavBar from "../Navbar";
import Question from "./Question.tsx";
import QuestionInput from "./QuestionInput";


function QuestionsPage(){

    const [questions, setQuestions] = useState([]);

    function addQuestion(newQuestion) {
    setQuestions(prevQuestions => {
      return [...prevQuestions, newQuestion];
    });
  }

  function deleteQuestion(id) {
    setQuestions(prevQuestions => {
      return prevQuestions.filter((questionItem, index) => {
        return index !== id;
      });
    });
  }

    const logedin = true;
    return  (
        <div>
        <NavBar/>
        {logedin ? <QuestionInput  onAdd={addQuestion} /> : null}
        {questions.map((questionItem, index) => {
        return (
          <div style={{align:"center"}}> 
          <Question
            key={index}
            id={index}
            title={questionItem.title}
            content={questionItem.content}
            onDelete={deleteQuestion}
          />
          </div>
        );
      })}
        </div>
    )
}

   
export default QuestionsPage;