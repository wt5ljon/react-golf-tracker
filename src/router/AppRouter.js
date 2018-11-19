import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from '../components/IndexPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import AddRoundPage from '../components/AddRoundPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/add" component={AddRoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
