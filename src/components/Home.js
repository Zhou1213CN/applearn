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
    hotkey: true,

    video: {
       //url: publicUrl('/assets/Firstclass.mp4'),
       pic: publicUrl('/assets/bclogo.jpeg'),
       quality: [{
        name: 'HD',
        url: publicUrl('/assets/Firstclass.mp4'),
        type: 'hls',
    },
    {
        name: 'SD',
        url: publicUrl('/assets/test.mov'),
        type: 'normal',
    },
    ],
      defaultQuality: 0,


    },
    danmaku: {
      id:'Firstclass',
      api: 'https://api.prprpr.me/dplayer/',
      //api:'https://dplayer.moerats.com/',
      //api:'http://ip:1207',
      addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
      //addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142'],
    },
  };

  const dp = new DPlayer(options);

  dp.danmaku.draw({
    text: 'DIYgod is amazing',
    color: '#fff',
    type: 'top',
});

dp.danmaku.send(
  {
      text: 'dplayer is amazing',
      color: '#b7daff',
      type: 'right', // should be `top` `bottom` or `right`
  },
  function () {
      console.log('success');
  }
);

dp.danmaku.send(
  {
      text: 'dplayer is amazing',
      color: '#b7dafe',
      type: 'right', // should be `top` `bottom` or `right`
  },
  function () {
      console.log('success');
  }
);


  dp.danmaku.show();


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
