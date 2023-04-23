import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


const clues = [
  { question: "What is always in front of you but can't be seen?", answer: "future" },
  { question: "What goes through cities and fields, but never moves?", answer: "road" },
  { question: "I am always hungry, I must always be fed. The finger I touch, Will soon turn red. What am I?", answer: "fire" }
];

function LevelOne() {
  const [currentClue, setCurrentClue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameState, setGameState] = useState("playing");
  const [timeRemaining, setTimeRemaining] = useState(45); 

  
  function handleSubmit(event) {
    event.preventDefault();

    if (userAnswer.toLowerCase() === clues[currentClue].answer) {
      if (currentClue < clues.length - 1) {
        setCurrentClue(currentClue + 1);
        setUserAnswer("");
      } else {
        setGameState("won");
      }
    } else {
      setUserAnswer("");
    }
  }

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
      <div className="timer text-center">
        <h1 className="question" >Welcome to the forest! You have {timeRemaining} seconds to escape the quick sand.</h1>
        <form onSubmit={handleSubmit}>
          <div className="clue mx-auto my-100">
          <h2>{clues[currentClue].question}</h2>
          </div>
          <input type="text" value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)} />
          <button type="submit">Submit Answer</button>
        </form>
      </div>
    );
  } else if (gameState === "won") {
    return (
      <div className="won text-center">
        <h1 className="question">Congratulations! You have solved all the clues and escaped the quicksand! 🎉🎉🎉</h1>
        <Link to="LevelTwo"><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4c2afc493b0756d.png" width="120px" alt="no img"/></Link>
      </div>
    );
  } else if (gameState === "lost") {
    return (
      <div className="lost text-center">
        <h1 className="question">Time's up! You drowned. 😞</h1>
        <Link to="GameRules"><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/7ec065111e818f9.png" width="120px" alt="no img"/></Link>
      </div>
    );
  }
}

export default LevelOne
