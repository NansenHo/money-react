import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from './Icon'

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    
    > li {
      width: calc(100% / 3);
      text-align: center;
      
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
        <ul>
          <li>
            <Link to="/tags">
              <Icon name="tags"></Icon>
              标签页
            </Link>
          </li>
          <li>
            <Link to="/money">
              <Icon name="book"></Icon> 
              记账页
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <Icon name="logs"></Icon>
              统计页
            </Link>
          </li>
        </ul>
        </NavWrapper>
    )
}

export default Nav;