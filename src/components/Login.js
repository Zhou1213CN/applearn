import React, { useState } from "react";
import publicUrl from '../utils/publicUrl';
import css from './Login.module.css';
import login from '../utils/CSdpt.jpeg';
import Header from './Header.js';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        opacity: 1,
    }
})

function Login() {
    const classes = useStyles();
    return (
   <div className={css.App} style={{backgroundImage: `url(${login})`}}>
            <div>
                <Header/>
            </div>
            <div className={css.Appcontent}>
            <Link to="/home">
                <Button classes={{root: classes.root}}variant="contained" color="primary" size="large">
                    Start Learning
                </Button>
            </Link>
            </div>
            <div>
      <Navbar/>
    </div>
        </div>
    )
}

export default Login;