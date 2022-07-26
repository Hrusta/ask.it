import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

function Login(){
  const navigate = useNavigate();
    return (<div style={{paddingTop:"60px", }}>
        <h1 style = {{fontSize: "50px", textAlign:"center"}}>Ask.it</h1>
        <div style={{display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        
        
        <div style={{display:"grid",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center"}}>
        
        <h3 style={{alignItems:"center",
        alignSelf:"center"}}>Log in</h3>
        </div>

        <Form>
      <Form.Group className="mb-4" >
        <Form.Label>Username</Form.Label>
        <Form.Control style={{width:"500px"}} type="username"  />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
        <div style={{display: "flex",
                justifyContent: "right"}}>
      <Button style={{background:"#2c3e50", borderColor:"#2c3e50"}} variant="primary" type="submit">
        Log in
      </Button>
      </div>
      <div style={{display: "flex",
  justifyContent:" right",
  paddingTop:"10px"}}>
        <a onClick={() => navigate("/")} style={{paddingRight:"10px", textDecorationLine:"none", color:"#2c3e50"}}>Back to homepage</a>
        <a onClick={() => navigate("/register")}  style={{textDecorationLine:"none", color:"#2c3e50"}} >Register here</a>
      </div>
    </Form>
        </div>
        </div>
            
    )
}

export default Login;