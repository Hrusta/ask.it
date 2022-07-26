import React, {useState} from "react";


function AnswerInput(props){

    const [answer, setAnswer] = useState("");
    
      function handleChange(event) {
        setAnswer(event.target.value);
      }
    
      function submitAnser(event) {
        props.onAdd(answer);
        setAnswer("");
        event.preventDefault();
      }
    return (
        <div style={{display:"flex"}}>
                  <input
            name="answer"
            placeholder="Answer"
            style={{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none"
          }}    />
           <button type="button"  style={{
            verticalAlign:"right",
           
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

</div>
    )
}

export default AnswerInput;