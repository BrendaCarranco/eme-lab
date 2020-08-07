import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase';
import Building from './components/buildingPage/Building';
import Login from './components/login/Login';
import Reset from './components/login/Reset';
import Storage from './components/client/Storage';

function App() {

  const [firebaseUser, setFirebaseUser] = useState(null);

  //Observador
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
        return firebaseUser;
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
          <Storage firebaseUser={firebaseUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
