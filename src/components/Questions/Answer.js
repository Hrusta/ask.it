import React from "react";

function Answer(props) {
    

  return (
    <div >
      <p style={{whiteSpace: "pre-wrap",
        wordWrap: "break-word",}}>{props.content}</p>
      </div>
    
  );
}

export default Answer;
