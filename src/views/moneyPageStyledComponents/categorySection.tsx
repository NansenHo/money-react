import styled from 'styled-components'


const CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      width: 50%;
      text-align: center;
      line-height: 36px;
      background: #fff;
      padding: 18px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        width: 100%; 
        position: absolute;
        bottom: 0;
        left: 0;
        background: #000;
      }
    }
  }
`

export { CategorySection }