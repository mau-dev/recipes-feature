import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
     <div>
         <nav className="nav-menu">
      
              <ul>
                <li>Feed</li>               
                <li>Near Me</li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li>Articles</li>
                <li>Challenge</li>
                <li>About</li>
                
              </ul>
         </nav>

     </div>
    )
}

export default NavMenu;