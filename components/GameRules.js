import React from 'react';
import './GameRules.css';
import {Link} from 'react-router-dom';

const PostsData = [
  {
    "category": "Level-1",
    "title": "Quick Sand",
    "text": "Quick Sand is your first obstacle. Help Dora and her friends to overcome this danger. You are given three riddles, solve them to save everyone from drowning.",
    "image": "https://media.istockphoto.com/id/579424874/vector/businessman-sinking-in-quicksand-holding-up-wooden-sign-need-help.jpg?s=612x612&w=0&k=20&c=LttIaxCXmP5encgEYdf-RRMrm82DCwyp2nBoX6gtmEY="
  },
  {
    "category": "Level-2",
    "title": "Where is Boots?",
    "text": "Dora's best friend Boots is a furry, fuzzy, five-and-a-half-year-old monkey who speaks English. You lost him in woods. Can you draw him and help Dora find Boots?",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLqAjcYbsx2lutLXFLolhVnz-RRNWx5D1cRXGJx4g-Q&s"
  },
  {
    "category": "Level-3",
    "title": "Find the right key",
    "text": "You are one step away to find treasure, but do you have the right key to open the door? (Its a unique one!)",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbehxK7eq-pMFUzs6OJSJUwhpNSMW14WtOCA&usqp=CAU"
  },
];

function GameRules (){

    return(
        <div className="rules text-center">
            <h1 className="heading mx-auto" style={{color: 'white'}}>How to Play?</h1>
            <div class="row">
      {PostsData.map(item => (
        <div key={item.title} className="card mx-auto my-5" style={{ width: '22rem' }}>
          <h3>{item.category}</h3>
          <img src={item.image} alt={item.title} width="w-20" height="80%" />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    <div className="nav-item">
    <Link className="nav-link" to="LevelOne"><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4c2afc493b0756d.png" width="120px" alt="no img"/></Link>
    </div>
   
  
    </div>
    );
}
export default GameRules

