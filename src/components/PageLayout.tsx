import React from 'react';
import Nav from './Nav';
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1; 
  overflow: auto;
`

const PageLayout = (props: any) => {
   return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
   )
};

export default PageLayout;