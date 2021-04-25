import Info from './components/Info'
import About from './components/About'
import UserPage from './components/UserPage'
import Scoreboard from './components/Scoreboard'
import Problemviewer from './components/Problemviewer'
import Home from './components/Home'
import Footer from './components/Footer'


import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/database"
import "firebase/auth";
import { config } from "./credentials/config";

import './css/styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  render
} from "react-router-dom"
import { FirebaseDatabaseProvider } from '@react-firebase/database'



const App = () => {
  return (
    <div>
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirebaseDatabaseProvider {...config} firebase={firebase}>
          <FirebaseAuthConsumer>
              {({isSignedIn, firebase}) =>{
                  return(
                    <div>
                      <Router>
                        <div class="header">
                          <h1 class="header">Aalborg Klatreklub Moonboard Master</h1>
                          <div class="logo"></div>
                        </div>
                        <nav>
                          <ul class="navbar">
                            <li>
                                <Link class="active" to="/">Home</Link>
                            </li>
                            <li >
                                <Link to="/rules">Rules</Link>
                            </li>
                            <IfFirebaseAuthed>
                              <li>
                                  <Link to="/user">User</Link>
                              </li>
                            </IfFirebaseAuthed>
                            <li>
                                <Link to="/scoreboard">Scoreboard</Link>
                            </li>
                            <li>
                                <Link to="/problems">Problems</Link>
                            </li>
                          </ul>
                        </nav>
                        <div class="contentContainer">
                          <Switch>
                            <Route path="/about">
                              <About></About>
                            </Route>
                            <Route path="/rules">
                              <Info></Info>
                            </Route>
                            <Route path="/user">
                              <UserPage></UserPage>
                            </Route>
                            <Route path="/scoreboard">
                              <Scoreboard signedIn = {isSignedIn}></Scoreboard>
                            </Route>
                            <Route path="/problems">
                              <Problemviewer></Problemviewer>  
                            </Route> 
                            <Route path="/">
                              <Home></Home>
                            </Route>
                          </Switch>
                        </div>
                      </Router>
                      <div>
                        <button onClick={() => {firebase.app().auth().signOut()}}>Sign out</button>
                        <button onClick={() => {firebase.app().auth().signInAnonymously()}}>Sign in</button>
                      </div>
                    </div>
                  )
                }
              }
          </FirebaseAuthConsumer>
        </FirebaseDatabaseProvider>
      </FirebaseAuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
