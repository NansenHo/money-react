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

      &.selected {
        background: yellow;
      }
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
  // <> 括号里面写类型，() 里面写值
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const addSelectedTags = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const getClass = (tag: string) => {return (selectedTags.includes(tag) ? 'selected' : '')}
  return (
    <Wrapper>
      <ul>
        {tags.map(tag => {
          // 如果接受的是一个函数 fn，那不能是一个执行函数 fn()
          return <li key={tag}
              onClick={()=>{addSelectedTags(tag)}}
              // 如果接受的是一个字符串，里面就可以直接写执行函数 fn()，该函数返回一个字符串
              className={getClass(tag)}>
            {tag}
          </li>
        })}
      </ul>
      <button>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection }