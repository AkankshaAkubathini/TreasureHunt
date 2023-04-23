import React from 'react'
import img1 from './doraa.jpg'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div className="text-center">
            <img src={img1} className="w-100" alt="no img"/>
            <h2 >Hola! I am Dora. I love adventures. Currently, I am on a quest to find the lost city of Gold, Parapata. Would you like to join me and my friends? If Yes, Press the start button below.
            </h2>
          <Link className="nav-link" to="Signin"><img src="https://www.pngall.com/wp-content/uploads/9/Start-Button-Vector-PNG.png" width="100px" alt="no img"/></Link>
        </div>
    )
}
export default Home