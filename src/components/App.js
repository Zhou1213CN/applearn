import React, {useState} from 'react';
import css from './App.module.css'
import Header from './Header.js'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Login from './Login.js'
import NewLecture from './NewLecture.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import initialStore from '../utils/initialStore';
import uniqueId from '../utils/uniqueId';

function App() {
  //const [page, setPage] = useState('home');
 // const [page, setPage] = useState('login');

  const [store, setStore] = useState(initialStore);

  function addDanmaku(lectureId, text){
    const danmaku = {
      userId: store.currentUserId, 
      lectureId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      danmakus:store.danmakus.concat(danmaku)
    });
  }

  function addLecture(lecture, desc){

    const newlecture ={
      id: uniqueId('lecture'),
      userId : store.currentUserId,
      lecture,
      desc,
      datetime: new Date().toISOString()
    }
    console.log(newlecture, 'newPOST')
    setStore({
      ...store,
        lectures:store.lectures.concat(newlecture)
    });
  }

  /*<Route path="/home">
            <div>
              <Home
              store={store}
              onDanmaku={addDanmaku}/>
            </div>
            </Route>*/
  return (
		<Router basename={process.env.PUBLIC_URL}>
      
			<div className={css.content}>
        <Switch>
        <Route path="/login">
            <div>
              <Login/>
            </div>
            </Route>
            <Route path="/newLecture">
            <div>
              <NewLecture 
                store={store}
                addLecture={addLecture}/>
            </div>
            </Route>
            <Route path="/home">
            <div>
              <Home
              store={store}
              onDanmaku={addDanmaku}/>
            </div>
            </Route>
            
            <Route path="/">
            <div>
              <Login/>
            </div>
            </Route>
        </Switch>
			</div>
		</Router>
	);
}


export default App;
