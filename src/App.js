import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Building from './components/buildingPage/Building';
import Login from './components/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Building} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
