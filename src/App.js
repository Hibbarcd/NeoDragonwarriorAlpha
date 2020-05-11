import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './config/redux/users/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import World from './features/world';

import Header from './features/header/header.component'
import GlobalAudio from './features/music';

import Town from './pages/enterTown/enterTown.component'
import Cave from './pages/cave1/cave1.component'
import CombatPage from './pages/combatPage/combatPage.component'
import SignUpSignInPage from './pages/signIn-SignUp/signIn-signUp.component'
import StartPage from './pages/startPage/startpage.component'

class App extends React.Component {

  // unsubscribeFromAuth = null


componentDidMount() {
  // const {setCurrentUser} = this.props

  // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth)
  //     userRef.onSnapshot(snapShot => {

  //       setCurrentUser ({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //       })
  //     })
  //   }

  //   setCurrentUser({userAuth})
  //   createUserProfileDocument(userAuth)
  //   console.log(userAuth)
  // })
  }
componentWillUnmount() {
  this.unsubscribeFromAuth()
}
//============================end experimental code block================
  render() {
    return (
      <div className='app-wrapper'>
      <GlobalAudio/>
      <Header />
      <Switch>
        <Route exact path='/' component={World} />
        <Route exact path='/start' component={StartPage} />
        <Route exact path='/combat' component={CombatPage} />
        <Route exact path='/signin' component={SignUpSignInPage}/>
        <Route exact path='/town' component={Town} />
        <Route exact path='/cave' component={Cave} />
      </Switch>
      </div>     
    );    
  }
}
//=====================================================redux code===================================================
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//==============================================================================================================

export default connect(
                      mapStateToProps,
                      mapDispatchToProps
                      )(App);

