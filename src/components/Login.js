import React, { useState } from "react";
import publicUrl from '../utils/publicUrl';
import css from './Login.module.css';
import login from '../utils/CSdpt.jpeg';
import Header from './Header.js';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';


function Login() {
   
    return (
    <div className={css.App}>
            
            <div> <Header/></div>
        
        <div className={css.Appcontent}>
        <div className = {css.bg-image}>
        < img src={publicUrl('/assets/hunt1.jpg')} alt="Hunt Library"/>
        </div>
        <a id = "classroom" href="dan.html" ><Button variant="contained" color="primary" size="large">
        <img src={publicUrl('/assets/Classroom.png')} alt="Classroom"/> Danmaku Mode
            </Button></a>
    
        
      
        <a id = "quiz" href="quiz.html"><Button variant="contained" color="primary" size="large">
        <img src={publicUrl('/assets/Question.png')} alt="Question"/> Quiz Mod
            </Button></a>
        </div>
    
            
    </div>
        
    );
}

export default Login;
