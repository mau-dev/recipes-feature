import React, {  Fragment } from 'react';
import TopNavbar from './components/layout/TopNavbar';
import NavMenu from './components/layout/NavMenu';

import './App.scss'


const App = () => 
  <Fragment >
    <TopNavbar />
    <NavMenu />
    <div>
    <h1>app</h1>
    </div>
    
  </Fragment>

export default App;
