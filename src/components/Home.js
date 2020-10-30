import React from 'react';
import publicUrl from '../utils/publicUrl';
import Navbar from './Navbar';
import css from './Home.module.css';

function Home() {
  return (
    <div>
      <div>
      <h2>CSCI3359 Interactive Classroom</h2>
      <br></br>
      <video width="1000" height="1000" controls src={publicUrl('/assets/Firstclass.mp4')}></video> 
    </div>
    <div>
      <Navbar/>
    </div>
    </div>
  );
}

export default Home;