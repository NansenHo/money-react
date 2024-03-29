import { Money } from './views/Money';
import { Statistics } from './views/Statistics';
import { Tags } from './views/Tags';
import { TagEdit } from 'views/TagEdit';
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
            {/* exact 精确匹配路由，只有完全符合条件才会跳转 */}
            {/* 这里不用 name 而是用 id 来作为 url。是因为最好用一个不变的东西来做 url，否则改名了那个 url 就作废了 */}
            <Route exact path="/tags/:id">
              <TagEdit />
            </Route>
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route exact path="/statistics">
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
