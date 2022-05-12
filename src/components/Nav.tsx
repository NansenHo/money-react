import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from './Icon'

const NavWrapper = styled.nav`
  background: #fff;
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
        color: grey;

        > .icon {
          fill: grey;
        }

        &.selected {
          color: red;

          > .icon {
            fill: red;
          }
        }
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
          <ul>
            <li>
              <NavLink to="/tags" activeClassName='selected'>
                <Icon name="tags"></Icon>
                标签页
              </NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName='selected'>
                <Icon name="book"></Icon> 
                记账页
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName='selected'>
                <Icon name="logs"></Icon>
                统计页
              </NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;