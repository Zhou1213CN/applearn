import React from 'react';
import publicUrl from '../utils/publicUrl';

function Home() {
  return (
    <div>
      CSCI3359 is interesting
      <video width="320" height="240" controls src={publicUrl('/assets/Firstclass.mp4')}></video> 
    </div>
    
  );
}

export default Home;