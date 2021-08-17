import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/Hompage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-and-signup/signin-and-signup.component';

import CheckOutPage from './components/checkout/checkout.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth  => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          
        })
        // this.setState()
      }
      else {
        this.props.setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header/>  {/* making the header aware of the currentUser state */}
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckOutPage}/>
            <Route exact path='/signin' render={()=> 
            this.props.currentUser ? (
              <Redirect to='/'/>
            )
            : (<SignInAndSignUp/>)
            }
            />   
          </Switch>
        </Router>     
      </div>
    );

  }
  
}
const mapStateToProps = createStructuredSelector ({
  currentUser:setCurrentUser
})

const mapDispatchToProps= dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps )(App);
