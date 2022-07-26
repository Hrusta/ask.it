import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LogInPage/LoginPage";
import { Routes, Route, Link, useHistory , useNavigate } from "react-router-dom";


function NavBar(){
  const navigate = useNavigate();
    return (

        <div className="navDiv">



    <Navbar  expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{cursor: "pointer"}} onClick={() => navigate("/")} >Ask.it</Navbar.Brand>
          <Nav className="gap-4">
          <Button onClick={() => navigate("/login")}  style={{background:"#18bc9c", borderColor:"#18bc9c"}}>Log In</Button>
          <Button onClick={() => navigate("/register")}   style={{background:"#18bc9c", borderColor:"#18bc9c"}}>Register</Button>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default NavBar;