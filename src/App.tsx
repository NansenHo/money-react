import { Money } from './views/Money';
import { Statistics } from './views/Statistics';
import { Tags } from './views/Tags';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
    return (
      <AppWrapper>
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
      </AppWrapper>  
    )
  }

  // 404 页面
  function NoMatch() {
    return <h2>404</h2>;
  }


export default App;
