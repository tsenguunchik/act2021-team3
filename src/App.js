import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error404page from "./pages/Error404page";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Boards from './pages/Boards';
import PreUniversity from './pages/PreUniversity';
import PostUniversity from './pages/PostUniversity';
import InUniversity from './pages/InUniversity';
import User from './pages/User';
import React from "react";
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/sign-up' exact component={SignUp} />
            <Route path='/sign-in' exact component={SignIn}/>
            <Route path='/boards' exact component={Boards}/>
            <Route path='/boards/pre-university' exact component={PreUniversity}/>
            <Route path='/boards/in-university' exact component={InUniversity}/>
            <Route path='/boards/post-university' exact component={PostUniversity}/>
            <Route exact path="/users/:handle" component={User} />
            <Route component={Error404page}/>

        </Switch>
        <div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;