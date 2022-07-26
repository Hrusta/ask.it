import React from "react";
import NavBar from "./components/Navbar";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (
    <div >
    <NavBar/>
    <div style={{paddingTop:"150px", }}>
        <h1 style = {{fontSize: "80px", textAlign:"center"}}>Ask.it</h1>
        <div style={{display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        
        
        <div style={{display:"grid",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center"}}>
        
        <h3 style={{alignItems:"center",
        alignSelf:"center", fontSize:"30px"}}>Welcome</h3>
        </div>
        
        <Button onClick={() => navigate("/login")}  style={{background:"#18bc9c", borderColor:"#18bc9c", fontSize:"20px"}}>Log In</Button>
        <div style={{height:"20px"}}/>
        <Button onClick={() => navigate("/register")}   style={{background:"#18bc9c", borderColor:"#18bc9c", fontSize:"20px"}}>Register</Button>
        </div>
        </div>

      </div>
    )
}

export default Home;