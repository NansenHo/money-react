import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
    return (
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    )
  }

  // 404 页面
  function NoMatch() {
    return <h2>404</h2>;
  }


export default App;
