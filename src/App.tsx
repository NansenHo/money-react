import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components"

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

const Nav = styled.nav`
  > ul {
    display: flex;

    > li {
      width: calc(100% / 2);
      text-align: center;
      padding: 16px;
    }
  }
`

function App() {
    return (
      <Router>
        <Wrapper>
          <Main>
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
          </Main>
          

          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Router>
    )
  }
  
  function Tags() {
    return <h2>Tags</h2>;
  }
  
  function Money() {
    return <h2>Money</h2>;
  }
  
  function Statistics() {
    return <h2>Statistics</h2>;
  }

  function NoMatch() {
    return <h2>404</h2>;
  }


export default App;
