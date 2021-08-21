import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Error404page from "./pages/Error404page";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <div className="Home">
          <Home/>
          <div className="login">
          </div>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/boardpage'>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup/>
            </Route>
            <Route component={Error404page}/>
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;