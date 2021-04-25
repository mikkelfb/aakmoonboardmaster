import Info from './components/Info'
import About from './components/About'
import UserPage from './components/UserPage'
import Scoreboard from './components/Scoreboard'
import Problemviewer from './components/Problemviewer'
import {Home} from './components/Home'
import Footer from './components/Footer'
import 'firebase/database'

import { config } from "./credentials/config";

import 'firebase/auth'



import './css/styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  render
} from "react-router-dom"



const App = () => {
  return (
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
                <li>
                    <Link to="/user">User</Link>
                </li>
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
                <Home></Home>
              </Route>
              <Route path="/scoreboard">
                <Scoreboard signedIn = {true}></Scoreboard>
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
        <Footer></Footer>
      </div>
  );
}

export default App;
