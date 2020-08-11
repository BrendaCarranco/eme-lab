import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase';
import Building from './components/buildingPage/Building';
import Login from './components/login/Login';
import Reset from './components/login/Reset';
import Storage from './components/client/Storage';
import Sidenav from './components/sidenav/Sidenav';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/login/SignInSide';
function App() {

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [fbName, setFbName] = useState('');
  const [usersFiles, setUsersFiles] = useState([]);

  //Observador
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      setFbName(user.displayName);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
        return;
      }
    });
  }, [firebaseUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Building />
        </Route>

        <Route path='/reset'>
          <Reset />
        </Route>

        <Route path='/login' >
          <Login firebaseUser={firebaseUser} />
        </Route>

        <Route path='/storage'>
          <Storage firebaseUser={firebaseUser} fbName={fbName} />
        </Route>

        <Route path='/Inicio'>
          <Dashboard firebaseUser={firebaseUser} setUsersFiles={setUsersFiles} usersFiles={usersFiles} />
        </Route>

        <Route path='/SignIn'>
          <SignInSide />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
