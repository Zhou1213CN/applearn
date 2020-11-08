import React from 'react';
import css from './Navbar.module.css';
import publicUrl from '../utils/publicUrl';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <nav className={css.navbar}>

            <div className={css.navItem}>
            <Link to="/login">
                
                    <img src={publicUrl('/assets/Home.png')} alt="Home"/>
                
            </Link>
            </div>
            <div className={css.navItem}>
            <Link to="/Home">
                    <img src={publicUrl('/assets/Classroom.png')} alt="Classroom"/>
             </Link>
            </div>
            <div className={css.navItem}>
            <Link to="/Quiz">
               
                    <img src={publicUrl('/assets/List.png')} alt="Quiz"/>
                    </Link>
            </div>
        </nav>
  );
}

export default Navbar;