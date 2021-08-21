import './App.css';
import Boardpage from './pages/boardpage';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/boardpage">
            <Boardpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
