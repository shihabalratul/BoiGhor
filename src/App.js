import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import SignIn from './Components/SignIn/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import Orders from './Components/Orders/Orders';
import Error from './Components/Error/Error';



function App() {

  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/home'>
          <Home />
        </Route>

        <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>

        <PrivateRoute path='/checkOut/:id'>
          <CheckOut />
        </PrivateRoute>

        <PrivateRoute path='/orders'>
          <Orders />
        </PrivateRoute>

        <Route path='/signIn'>
          <SignIn />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
