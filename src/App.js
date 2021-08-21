import './App.css';
import Header from "./components/header"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Error404page from "./pages/Error404page";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
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