import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PageLayout from 'components/PageLayout';

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
  
  // tags 页面
  function Tags() {
    return (
      <PageLayout>
        <h2>Tags</h2>
      </PageLayout>
    );
  }
  
  // 记账页面
  function Money() {
    return (
      <PageLayout>
        <h2>Money</h2>
      </PageLayout>
    );
  }
  
  // 统计页面
  function Statistics() {
    return (
      <PageLayout>
        <h2>Statistics</h2>
      </PageLayout>
    );
  }

  // 404 页面
  function NoMatch() {
    return <h2>404</h2>;
  }


export default App;
