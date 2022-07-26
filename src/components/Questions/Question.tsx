import React, { useState } from "react";
import {AiFillLike, AiFillDislike} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AnswerInput from "./AnswerInput";
import Answer from "./Answer";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Question(props) {

  const [answer, setAnswerr] = useState("");
    
  function handleChange(event) {
    setAnswerr(event.target.value);
  }

  function submitAnswer(event) {
    addAnswer(answer);
    setAnswerr("");
    event.preventDefault();
  }

  
  const [answers, setAnswer] = useState<string[]>([""]);

  function addAnswer(newAnswer) {
    setAnswer(prevAnswer => {
    return [...prevAnswer, newAnswer];
  });
}

function deleteAnswer(id) {
  setAnswer(prevAnswer => {
    return prevAnswer.filter((answerItem, index) => {
      return index !== id;
    });
  });
}
  
  
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const id = props.id;

  const [liked, setLike] = useState(false);
  

  function handleLike(){
    if(liked){
      setLike(false);
    }
    else{
      setLike(true);
    }
  }


    
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (

    
    <div style={{
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        width: "auto",
        maxWidth:"300px",
        margin: "46px",
        float: "left",
        
    }}>
    
    <div style={{
      display:"flex",
      maxWidth:"300px",
      width: "auto",
    }}>
      <h1 style={{
        fontSize: "1.1em",
        marginBottom: "10px",
        maxWidth:"270px",
        width: "auto",
       
        whiteSpace: "pre-wrap", 
        overflowWrap: "break-word"
        
        
        
      }}>{props.title}</h1>
      
      </div>
      <p  style={{
        fontSize: "1.1em",
        marginBottom: "10px",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
      }}>{props.content}</p>

      

          <CardActions disableSpacing>
                  <IconButton onClick={handleLike} style={{color: liked? "black" : "gray"}} >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton onClick={handleClick}> 
                  <DeleteIcon /> 
                    </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
               
                  <div style={{display:"flex"}}>
                  <input
            name="answer"
            placeholder="Answer"
            onChange={handleChange}
            style={{
            width: "100%",
            border: "none",
            padding: "4px",
            outline: "none",
            fontSize: "1.2em",
            fontFamily: "inherit",
            resize: "none"
          }}    />
           <button type="button"
           onClick={submitAnswer}
           style={{
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
                   




                  {answers.map((answerItem, index) => {
        return (
          <Answer
            key={index}
            id={index}
            content={answerItem}
            onDelete={deleteAnswer}
          />
        );
      })}
                 
                 
                  </CardContent>
                </Collapse>

    </div>
  );
}

export default Question;
