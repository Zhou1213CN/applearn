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

function Home(props){
  let player = new Player(publicUrl('/assets/Firstclass.mp4'));
  player.appendTo("body");

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