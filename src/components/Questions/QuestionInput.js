import React, {useState} from "react";


function QuestionInput(props){

    const [question, setQuestion] = useState({
        title: "",
        content: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setQuestion(prevQuestion => {
          return {
            ...prevQuestion,
            [name]: value
          };
        });
      }
    
      function submitQuestion(event) {
        props.onAdd(question);
        setQuestion({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    return (
        <div>
        <div style={{}}>
        <form  style={{
            position: "relative",
            width: "480px",
            margin: "30px auto 20px auto",
            background: "#fff",
            padding: "15px",
            borderRadius: "7px",
            boxShadow: "0 1px 5px rgb(138, 137, 137)"
        }}>
        <input
          name="title"
          onChange={handleChange}
          value={question.title}
          placeholder="Titel"
          style={{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none"
            
          }}    
        />
        <textarea
            placeholder="Question"
            name="content"
            onChange={handleChange}
            value={question.content}
            style={{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none"
          }}   
          rows="2" 
        />

        <button type="button" onClick={submitQuestion} style={{
            position: "absolute",
            right: "18px",
            bottom: "-18px",
            background: "rgb(24, 188, 156)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            outline: "none"
        }}>Post</button>
   
      </form>
      
    
      </div>
        </div>
    )
}

export default QuestionInput;