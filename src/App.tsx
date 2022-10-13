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
            <Route exact path="/tags/:tag">
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
