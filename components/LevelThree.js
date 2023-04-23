import React from 'react';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
function LevelThree () {
  
  const images = Array.from({ length: 500 }, (_, i) => (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpE9DIUiHg_StrcC9HtzAVmfSlZWPctaqgg&usqp=CAU" alt={`${i}`} key={`${i}`} width="50px" />
  ));
  const images1 = Array.from({ length: 1 }, (_, i) => (
    <Link to="Final"><img src="https://media.istockphoto.com/id/173847396/photo/metal-key.jpg?s=612x612&w=0&k=20&c=NUvjvPYIBGTxb2GJOXbDvHvW4rEisuaT7iaVrcwPZDU=" alt={`${i}`} key={`${i}`} width="50px" /></Link>
  ));
  const images2 = Array.from({ length: 181 }, (_, i) => (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpE9DIUiHg_StrcC9HtzAVmfSlZWPctaqgg&usqp=CAU" alt={`${i}`} key={`${i}`} width="50px" />
  ));
  const [gameState, setGameState] = useState("playing");
  const [timeRemaining, setTimeRemaining] = useState(30); 
  useEffect(() => {
    if (gameState === "playing") {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setGameState("lost");
    }
  }, [timeRemaining]);

  if (gameState === "playing") {
    return (
        <div>
        <h1 className='text-center'>Find the Odd One Out</h1>
        <h3 className="question text-center">Welcome to the forest! You have {timeRemaining} seconds to escape the quick sand.</h3>
      {images}
      {images1}
      {images2}
    </div>
    );
  } 
 
  else if (gameState === "lost") {
    return (
      <div className="lost text-center">
        <h1 className="question" style={{color:'white'}}>Time's up! You lost. 😞</h1>
        <Link to="GameRules"><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/7ec065111e818f9.png" width="120px" alt="no img"/></Link>
      </div>
    );
  }
}


export default LevelThree;
