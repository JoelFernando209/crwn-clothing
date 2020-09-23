import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component.jsx';

const HatsPage = ({ history }) => {
  return(
    <div>
      <h1>HATS PAGE</h1>
      <p onClick={() => history.push('/')}>Return to Homepage</p>
    </div>
  )
};

function App() {
  return (
    <div>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
