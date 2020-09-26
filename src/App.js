import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <>
    <Header />
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndUpPage}/>

    </Switch>
    </>
  );
}

export default App;
