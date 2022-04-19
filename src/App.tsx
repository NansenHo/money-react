import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components"
import Nav from "./components/Nav"

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1; 
  overflow: auto;
`

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
      <Wrapper>
        <Main>
          <h2>Tags</h2>
        </Main>
        <Nav/>
      </Wrapper>
    );
  }
  
  // 记账页面
  function Money() {
    return (
      <Wrapper>
        <Main>
          <h2>Money</h2>
        </Main>
        <Nav/>
      </Wrapper>
    );
  }
  
  // 统计页面
  function Statistics() {
    return (
      <Wrapper>
        <Main>
          <h2>Statistics</h2>
        </Main>
        <Nav/>
      </Wrapper>
    );
  }

  // 404 页面
  function NoMatch() {
    return <h2>404</h2>;
  }


export default App;
