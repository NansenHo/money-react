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
      width: calc(100% / 2);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
        <ul>
          <li>
            <Icon name="tags"></Icon>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Icon name="book"></Icon>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Icon name="logs"></Icon>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
        </NavWrapper>
    )
}

export default Nav;