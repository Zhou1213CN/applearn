import React from 'react';
import publicUrl from '../utils/publicUrl';
import Navbar from './Navbar';
import DPlayer from 'dplayer';
import css from './Home.module.css';

function Home() {

  const options = {
    container: document.getElementById('dplayer'),
    //live: true,
    screenshot: true,
    video: {
       url: publicUrl('/assets/Firstclass.mp4'),
       pic: publicUrl('/assets/bclogo.jpeg'),
    },
    danmaku: {
      id:'Firstclass',
   //api: 'https://api.prprpr.me/dplayer/',
      api:'https://dplayer.moerats.com/',
      //addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
      addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
    },
  };

  const dp = new DPlayer(options);


  //dp.danmaku.show();


  return (
   
    <div>

      <div>
      <h2>CSCI3359 Interactive Classroom</h2>
      <br></br>

    </div>
    <div>
      <Navbar/>
    </div>
    </div>
  );
}

export default Home;