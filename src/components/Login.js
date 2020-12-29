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
   //  <img id="bg-image" src={publicUrl('/assets/hunt1.jpg')} alt="Hunt Library"/>
    // <!--<base target="_black" href="dan.html"> --></base>
   return (
    <div className={css.App}>
            
            <div> <Header/></div>
        
          
        <div className={css.Appcontent}>
       
      
       <p> </p>
        <a id = "classroom" href="/applearn/dan.html" >
            
       
            <Button variant="contained" color="primary" size="large">
     
        <img src={publicUrl('/assets/Classroom.png')} alt="Classroom"/> Danmaku Mode
            </Button></a>
    
            <Link to="/NewLecture"><Button variant="contained" color="primary" size="large">
                    <img src={publicUrl('/assets/add1.png')} alt="Add1"/> Lecture Mode
                    </Button>
             </Link> 

      
        <a id = "quiz" href="/applearn/quiz.html"><Button variant="contained" color="primary" size="large">
        <img src={publicUrl('/assets/Question.png')} alt="Question"/> Question Mode
            </Button></a>
        </div>
    
            
    </div>
        
    );
}

export default Login;
