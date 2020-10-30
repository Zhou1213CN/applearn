import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import {Animated} from "react-animated-css";

function Header() {
    return (
        <div>
    
            <nav className={css.navbar}>
                <div className={css.navItem}>
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                    <h1>Welcome to Virtual Classroom !</h1>
                    <p>Our learning app is designed to provide an interactive virtual classroom.</p>
                </Animated>
                </div>
            </nav>
        </div>
    );
}

export default Header;