import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase';
import Building from './components/buildingPage/Building';
import Landing from './components/buildingPage/Landing';
import Reset from './components/login/Reset';
import Dashboard from './components/Dashboard/Dashboard';
import SignInSide from './components/login/SignInSide';
import Admin from './components/admin/Admin';

import { UserContext } from './context/UserProvider';
import NoMember from './components/Dashboard/NoMember';
import Checkout from './components/Cotizacion/Checkout';

function App() {

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [fbName, setFbName] = useState('');
  const [fbMail, setFbMail] = useState('');
  const [usersFiles, setUsersFiles] = useState([]);


  const { userProvider } = useContext(UserContext);

  console.log(userProvider, 'akaaaa');

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
        {/* 
        <Route path='/admin'>
          <Admin usersFiles={usersFiles} />
        </Route> */}

        <Route path='/dashboard'>

          {
            userProvider.role === 'Admin' && <Admin usersFiles={usersFiles} />
          }
          {
            userProvider.role === 'Miembro' && <Dashboard firebaseUser={firebaseUser} setUsersFiles={setUsersFiles} usersFiles={usersFiles} fbMail={fbMail} />
          }
          {
            userProvider.role === 'Invitado' && <NoMember />
          }



        </Route>

        <Route path='/signin'>
          <SignInSide />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
