import React from "react";
import { useRef, useEffect,useState } from 'react';
import { Link} from 'react-router-dom';
function LevelTwo()  {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleButtonClick = () => {
    setShowParagraph(true);
  };


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', e => {
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', e => {
      if (!isDrawing) return;
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
    });
  }, []);

  return (
    <div className="canva text-center">
     
      <h1> Missing!!!</h1>
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
      style={{ border: '1px solid #000', position: 'absolute', right: '30%', left: '30%', top: '20%'}}
    />
    <button onClick={handleButtonClick}>Submit after you draw</button>
      {showParagraph && <p>Congo You Found Boots. <Link to="LevelThree">Next</Link></p>}
</div>
  );
}



export default LevelTwo;

   
  
   
