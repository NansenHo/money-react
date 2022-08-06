import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  background: #fff;

  > ul {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      text-align: center;
      border-radius: 18px;
      padding: 3px 18px;
      margin: 6px 12px 0 12px;
      font-size: 14px;
    }
  }
  > button {
    padding: 0 4px;
    margin-top: 6px;
    border-bottom: 1px solid #333;
    color: #666;
  }
`

// FC 是 functionComponent 的缩写
const TagsSection: React.FC = (props) => {
  return (
    <Wrapper>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
      </ul>
      <button>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection }