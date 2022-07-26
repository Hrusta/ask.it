import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";




function Register(){
  const navigate = useNavigate();

  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  const [clicked, setClick] = useState(false);

  function handleClick(){
    if(clicked){
      setClick(false);
    }
    else{
      setClick(true);
    }
  }

  const [user, setUser]= useState( {
    username:"",
    password:"",
    email:"",
    fullName:"",
    date:""
  })

  

 function handleChange(event) {
    const { name, value } = event.target;

    setUser((prevValue) => {
      if(name === "username"){
        return {
          username: value,
          password:prevValue.password,
          email:prevValue.email,
          fullName: prevValue.fullName,
          date:prevValue.date
        };
      } else if(name === "password"){
          return {
          username: prevValue.username,
          password:value,
          email:prevValue.email,
          fullName: prevValue.fullName,
          date:prevValue.date
          };
      } else if (name ==="email"){
        return {
          username: prevValue.username,
          password:prevValue.password,
          email:value,
          fullName: prevValue.fullName,
          date:prevValue.date
        };
      } else if(name === "fullName"){
        return {
          username: prevValue.username,
          password:prevValue.password,
          email:prevValue.email,
          fullName: value,
          date:prevValue.date
        };
      } else if (name ==="date"){
        return {
          username: prevValue.username,
          password:prevValue.password,
          email:prevValue.email,
          fullName: prevValue.fullName,
          date:value
        };
      }
    })
    
  }

  

    return  (
      
      

        <div>

      
            <div style={{paddingTop:"60px", }}>
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
        alignSelf:"center"}}>Register</h3>
        </div>

        <Form>
      <Form.Group  className="mb-4"  >
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleChange} name="username" value={user.username} style={{width:"500px"}} type="username"  />
        
      </Form.Group>
            
         {clicked && user.username.length < 6 ? <p style={{color:"red"}}>Username needs to be longer than 6 characters.</p>: null}
        
      <Form.Group  className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} name="password" value={user.password} type="password" />
      </Form.Group>

      {clicked && user.password.length < 6 ? <p style={{color:"red"}}>Password needs to be longer than 6 characters.</p>: null}


      <Form.Group  className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleChange} name="email" value={user.email} type="email" />
      </Form.Group>

      {clicked && !regex.test(user.email) ? <p style={{color:"red"}}>Please enter a valid email.</p> : null}

      <Form.Group  className="mb-3" >
        <Form.Label>Full name</Form.Label>
        <Form.Control  onChange={handleChange} name="fullName" value={user.fullName} type="fullname" />
      </Form.Group>

      {clicked && !user.fullName.length ? <p style={{color:"red"}}>Please enter your name.</p>: null}

      <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control onChange={handleChange} name="date" value={user.date}  style={{width:"500px", marginBottom:"20px"}} type="date" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            
        {clicked && !user.date.length ? <p style={{color:"red"}}>Please enter a date.</p>: null}

        <div style={{display: "flex",
                justifyContent: "right"}}>
      <Button onClick={handleClick} style={{background:"#2c3e50", borderColor:"#2c3e50"}} variant="primary" type="button">
        Register
      </Button>
      </div>
      <div style={{display: "flex",
  justifyContent:" right",
  paddingTop:"10px"}}>
  
        <a onClick={() => navigate("/")}  style={{paddingRight:"10px", textDecorationLine:"none", color:"#2c3e50"}}>Back to homepage</a>
        <a onClick={() => navigate("/login")}  style={{textDecorationLine:"none", color:"#2c3e50"}} >Log in here</a>
      </div>
    </Form>
        </div>
        </div>
        </div>
        
    )
}

   
export default Register;