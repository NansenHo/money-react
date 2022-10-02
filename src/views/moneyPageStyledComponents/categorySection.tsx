import styled from 'styled-components'
import React, { useState } from 'react'

const Wrapper = styled.section`
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

const CategorySection: React.FC = () => {
  // <('-' | '+')>[] 是在限定 categoryList 一个仅由 '-' 和 '+' 组成的字符串数组
  const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
  const [key, setKey] = useState<string>('-')
  const keyMap = {'-': '支出', '+': '收入'}
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => 
          <li className={key === c ? 'selected' : ''}
              key={c}
              // onClick 等于一个函数，如果你要在里面直接执行一个函数，那这个函数需要返回一个函数
              onClick={()=>{setKey(c)}}
          >{keyMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }