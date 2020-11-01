import React from 'react';
import publicUrl from '../utils/publicUrl';
import Navbar from './Navbar';
import DPlayer from 'dplayer';
import css from './Home.module.css';

function Home() {
  const options = {
    container: document.getElementById('dplayer'),
    screenshot: true,
    video: {
       url: publicUrl('/assets/Firstclass.mp4'),
       pic: publicUrl('/assets/bclogo.jpeg'),
    },
    danmaku: {
      id:'Firstclass',
      api: 'https://api.prprpr.me/dplayer/',
      addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=[aid]'],
    },
};
  const dp = new DPlayer(options);
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
dp.danmaku.draw({
  text: 'DIYgod is amazing',
  color: '#fff',
  type: 'top',
});
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