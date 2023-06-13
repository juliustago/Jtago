import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard/user" component={UserDashboard} />
        <Route path="/dashboard/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;

