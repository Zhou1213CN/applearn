import React, { useState } from 'react';
import css from './NewLecture.module.css';
import FileLoader from './FileLoader.js';
import {
    useHistory
  } from "react-router-dom";

function NewLecture(props) {
  const [dragging, setDragging] = useState(false); // to show a dragging effect
  const [desc, setDesc] = useState('');
  const [lecture, setLecture] = useState(null);
  const [error, setError] = useState(''); // to show an error message
  const history = useHistory();
  function handleFileDragEnter(e){
    setDragging(true);
  }
  function handleFileDragLeave(e){
    setDragging(false);
  }
  function handleFileDrop(e){
    if (e.dataTransfer.types.includes('Files')===false){
			return;
    }
    if (e.dataTransfer.files.length>=1){
      let file = e.dataTransfer.files[0];
      if (file.size>1000000){// larger than 1 MB
        return;
      }
      if (file.type.match(/video.*/)){
        //if (file.type.match(/image.*/)){
				let reader = new FileReader();			
				reader.onloadend = (e) => {
					setLecture(e.target.result)
		
				};
				reader.readAsDataURL(file);
			}
    }
    setDragging(false);    
  }
  function handleDescChange(e){
		setDesc(e.target.value)
  }
  function handleSubmit(e){
      e.preventDefault();
      props.addLecture(lecture,desc)
    //setLecture(e.target.value)
    setError('');
  //  let player = new Player(publicUrl('/assets/Firstclass.mp4'));
   // player.appendTo("body");
   
  //  history.push('/');


  }
  function handleCancel(){
    history.goBack();
  }
  return (
    <div>
        
        <div className={css.lecture}>
          {!lecture?  <div className={css.message}>Drop your lecture</div>:
                    <video src={lecture} alt="New Post" controls/>}

            <FileLoader
              onDragEnter={handleFileDragEnter}
              onDragLeave={handleFileDragLeave}
              onDrop={handleFileDrop}
            >
	            <div className={[css.dropArea, dragging?css.dragging:null].join(' ')}
              ></div>
	          </FileLoader>
          
        </div>
        
        <div className={css.desc} >
		<textarea value={desc} onChange={handleDescChange}></textarea>
        </div>
        <div className={css.error}>
					{/* TODO: show error message */}
        </div>
        <div className={css.actions}>
          <button onClick={handleCancel}>Cancel</button>
            {/* 
            <a href="dan.html"> Share</a> */}
           
          <a href="dan.html"> <button onClick={handleSubmit}>Share</button> </a>
        </div>
        <div>{/* <Navbar/> */}
    
  </div>
    </div>
    
  );
}

export default NewLecture;

