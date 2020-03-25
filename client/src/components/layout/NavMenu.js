import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
     <div>
         <nav className="nav-menu">
      
              <ul>
                <li>Feed</li>               
                <li>Near Me</li>
                <li>Explore</li>
                <li>Recipes</li>
                <li>Articles</li>
                <li>Challenge</li>
                <li>About</li>
                
              </ul>
         </nav>

     </div>
    )
}

export default NavMenu;