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
   <div className={css.App} style={{backgroundImage: `url(${login})`}}>
            <div>
                <Header/>
            </div>
            <div className={css.Appcontent}>
            
            
            <a href="dan.html"><Button onclick="myFunction()" variant="contained" color="primary" size="large">
            <img src={publicUrl('/assets/Classroom.png')} alt="Classroom"/> Danmakuhiuhg
                </Button></a>
        
            
            <br></br>
          
            <a href="quiz.html"><Button onclick="myFunction()" variant="contained" color="primary" size="large">
            <img src={publicUrl('/assets/Question.png')} alt="Question"/> With Quiz
                </Button></a>
            </div>
        
    
            <div><Navbar/></div>
        </div>
        
    )
}

export default Login;
