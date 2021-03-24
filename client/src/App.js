import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Board from './components/pages/Board';
import Alert from './components/other/Alert';

// Redux
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';
import {useDispatch} from 'react-redux'

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path={['/', '/login']} component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/board/:id' component={Board} />
      </Switch>
    </Fragment>
  );
};

export default App;
