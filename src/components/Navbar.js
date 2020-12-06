import React from 'react';
import css from './Navbar.module.css';
import publicUrl from '../utils/publicUrl';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


function Navbar() {
        /*<div className={css.navItem}>
            <a href="barrage.html"> <img src={publicUrl('/assets/Classroom.png')} alt="Danmaku"/></a>

            </div>*/
            /*
            <div className={css.navItem}>
                <Link to="/Home">
                        <img src={publicUrl('/assets/Classroom.png')} alt="Classroom"/>
                </Link>
            
            </div>
          */
  return (
        <nav className={css.navbar}>

            <div className={css.navItem}>
            <Link to="/login">
                
                    <img src={publicUrl('/assets/Home.png')} alt="Home"/>
                
            </Link>

            </div>

            
        
            <div className={css.navItem}>
            <Link to="/NewLecture">
                    <img src={publicUrl('/assets/add.jpeg')} alt="Add"/>
             </Link>  
         
            </div>
            <div className={css.navItem}>
            <a href="quiz.html"> <img src={publicUrl('/assets/List.png')} alt="Quiz"/></a>
            </div>
            
        
        </nav>
  );
}

export default Navbar;