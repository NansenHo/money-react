import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from './Icon'

const NavWrapper = styled.nav`
  padding-top: 8px;
  line-height: 24px;
  border-top: 1px solid #E5E5E5;
  background: #fff;

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
        // 8C8C8C
        color: #8C8C8C;

        > .icon {
          width: 20px;
          height: 20px;
          fill: #8C8C8C;
          padding: 6px;
          border-radius: 50%;
        }

        &.selected {
          color: #FFAF25;

          > .icon {
            width: 16px;
            height: 16px;
            fill: #FFF;
            background: #FFAF25;
          }
        }
      }

      > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
          <ul>
            <li>
              {/* NavLink 里可以加 exact 属性来精确匹配 */}
              <NavLink to="/tags" activeClassName='selected'>
                <Icon name="tags"></Icon>
                <p className="nav-title">标签页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName='selected'>
                <Icon name="book"></Icon> 
                <p className="nav-title">记账页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName='selected'>
                <Icon name="logs"></Icon>
                <p className="nav-title">统计页</p>
              </NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;