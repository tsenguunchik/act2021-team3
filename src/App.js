import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components";
import Error404page from "./pages/Error404page";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import React from "react";

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn}/>
            <Route component={Error404page}/>

        </Switch>
      </Router>
  );
}

export default App;