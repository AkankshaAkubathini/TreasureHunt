import {Routes,Route,NavLink} from 'react-router-dom'
import Home from './components/Home';
import GameRules from './components/GameRules';
import Users from './components/Users';
import LevelOne from './components/LevelOne';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';
import Signin from './components/Signin';
import Final from './components/Final';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Treasure Hunt</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" aria-haspopup="True" role="button">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Users">Top Scorers</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" to="Signin">Game Rules</NavLink>
        </li>
      </ul>
      </div>
   </div>
   </nav>
          
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="Users" element={<Users/>}/>
        <Route path="Signin/GameRules" element={<GameRules/>}/>
        <Route path="Signin" element={<Signin/>}/>
        <Route path="Signin/GameRules/LevelOne" element={<LevelOne/>}/>
        <Route path="Signin/GameRules/LevelOne/LevelTwo" element={<LevelTwo/>}/>
        <Route path="Signin/GameRules/LevelOne/LevelTwo/LevelThree" element={<LevelThree/>}/>
        <Route path="Signin/GameRules/LevelOne/GameRules" element={<GameRules/>}/>
        <Route path="Signin/GameRules/LevelOne/LevelTwo/LevelThree/Final" element={<Final/>}/>
      </Routes>
    
    </div>
  );
}


export default App;