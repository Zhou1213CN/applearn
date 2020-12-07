import publicUrl from '../utils/publicUrl';
import Navbar from './Navbar';
import css from './Home.module.css';
import Player from './Player.js';
import TimeManager from './TimeManager.js';
import Bullet from './Bullet.js';
import { useParams } from 'react-router-dom';
//import Lecture from './Lecture';
// {lectures.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))}
// {lectures.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime)).map(lecture=> <Lecture lecture={lecture}/>)}

/*function Home(props){
 // let comments = [];
  //let player = new Player(publicUrl('/assets/Firstclass.mp4'));
  //player.appendTo("body");

  //let test = Player.;
//  let test = Player.danmaku1;
  //comments.push(test);
  //let test = Player.;
  console.log(comments,"test2");
  const store = props.store;
  let {lectureId} = useParams();
  const lectures = lectureId===undefined? store.lectures:store.lectures.filter(lecture => lecture.id === lectureId);
  console.log(lectures,"j")
  
  return (
    <div>
       
         Interactive Classroom
        
      </div>
    );
  }
  
  export default Home;
  */


  function Home(props){
    return (
      <div>
        hi
      </div>
    )
  }

  export default Home;