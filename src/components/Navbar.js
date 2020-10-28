import React from 'react';
import css from './Navbar.module.css';
import publicUrl from '../utils/publicUrl';

function Navbar() {
  return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/Home.png')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/Classroom.jpg')} alt="Classroom"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/Quiz.jpg')} alt="Quiz"/>
                </button>
            </div>
        </nav>
  );
}

export default Navbar;