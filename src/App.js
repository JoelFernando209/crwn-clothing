import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndUpPage}/>
      </Switch>
      </>
    );
  }
}

export default App;
