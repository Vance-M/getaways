import React from 'react';
import Getaways from '../../containers/Getaways';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import PlaceDetail from '../places/PlaceDetail';
import Header from '../../containers/Header';


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <Getaways {...routerProps} />} 
          />
          <Route
            path="/:id"
            exact
            component={PlaceDetail}
          />
        </Switch>
      </Router>
    </div>
  );
}
