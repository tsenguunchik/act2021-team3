import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components";
import Error404page from "./pages/Error404page";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Boardpage from './pages/Boardpage';
import MyProfile from './pages/MyProfile';
import MyPosts from './pages/MyPosts';
import PreUniversity from './pages/PreUniversity';
import PostUniversity from './pages/PostUniversity';
import InUniversity from './pages/InUniversity';
import React from "react";

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn}/>
            <Route path='/boards' component={Boardpage}/>
            <Route path='/myprofile' component={MyProfile}/>
            <Route path='/myposts' component={MyPosts}/>
            <Route path='/boards/pre-university' component={PreUniversity}/>
            <Route path='/boards/in-university' component={InUniversity}/>
            <Route path='/boards/post-university' component={PostUniversity}/>
            <Route component={Error404page}/>

        </Switch>
      </Router>
  );
}

export default App;