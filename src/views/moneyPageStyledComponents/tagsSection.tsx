// import { createId } from 'lib/createId'
import React from 'react'
import styled from 'styled-components'
import { useTags } from 'lib/useTags'

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

type Props = { 
  value: number[];
  // onChange: Function; 也可以，但这样不能定义参数和返回值的类型
  // void 表明无返回值
  // 函数参数的类型在括号中，用 : 声明类型即可（对象中声明函数的时候）
  onChange: (value: number[]) => void;
}

// FC 是 functionComponent 的缩写
// 如果 React.FC 的参数需要定义类型，那写法就是 React.FC<Type>
// 虽然 React.FC 只是一个函数类型，并不是一个函数，但它可以接受一个参数，其类型写法也和函数是一样的
// <> 括号里面写类型，() 里面写值
// 参数的类型都是用 <> 包起来的（执行函数的时候）
const TagsSection: React.FC<Props> = (props) => {
  const selectedTags = props.value
  // 函数的参数在括号中用 : 声明即可（声明函数的时候）
  const { tags, addTags } = useTags()
  const onToggleTags = (tagId: number) => {
    if (selectedTags.includes(tagId)) {
      // React 不允许子组件写 props ，只能读，如果要改，就通知父组件改
      props.onChange(selectedTags.filter(item => item !== tagId))
    } else {
      props.onChange([...selectedTags, tagId])
    }
  }
  const getClass = (tagId: number) => { return (selectedTags.includes(tagId) ? 'selected' : '') }
  return (
    <Wrapper>
      <ul>
        {tags.map(tag => {
          // 如果接受的是一个函数 fn，那不能是一个执行函数 fn()
          return <li key={tag.id}
              onClick={()=>{onToggleTags(tag.id)}}
              // className 接受一个字符串，对应 getClass(tag) 的返回值是一个字符串
              className={getClass(tag.id)}>
            {tag.name}
          </li>
        })}
      </ul>
      <button onClick={addTags}>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection }