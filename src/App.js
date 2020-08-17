import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase';
import Building from './components/buildingPage/Building';
import Landing from './components/buildingPage/Landing';
import Reset from './components/login/Reset';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/login/SignInSide';
import Admin from './components/admin/Admin';
function App() {

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [fbName, setFbName] = useState('');
  const [fbMail, setFbMail] = useState('');
  const [usersFiles, setUsersFiles] = useState([]);

  //Observador
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setFbName(user.displayName);
        setFbMail(user.email);
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
          <Landing />
        </Route>

        <Route path='/admin'>
          <Admin usersFiles={usersFiles} />
        </Route>

        <Route path='/Inicio'>
          <Dashboard firebaseUser={firebaseUser} setUsersFiles={setUsersFiles} usersFiles={usersFiles} fbName={fbName} fbMail={fbMail} />
        </Route>

        <Route path='/SignIn'>
          <SignInSide />
        </Route>

        <Route path='/Admin'>
          <Admin />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
