import styled from "styled-components";
import { Link } from "react-router-dom";
require("../icons/tags.svg");
require("../icons/book.svg");
require("../icons/logs.svg");

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
            <svg className="icon">
              <use xlinkHref="#tags" />
            </svg>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#book" />
            </svg>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#logs" />
            </svg>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
        </NavWrapper>
    )
}

export default Nav;