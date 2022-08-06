import styled from "styled-components"

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    padding: 0 16px;
  }
  > .pad {
    
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;

      &.number-pad-ok-button {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
      
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: green;
      }
     }
  }
`

// 最好导出具体的内容，而不是使用 export default ...
export { NumberPadSection }