import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Hompage.component';
import Header from './components/header/header.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-and-signup/signin-and-signup.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>  {/* making the header awaare of the currentUser state */}
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUp}/>   
          </Switch>
        </Router>     
      </div>
    );

  }
  
}

export default App;
