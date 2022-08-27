import styled from 'styled-components'
import React, { useState, useRef } from 'react'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block; 
      width: 100%;
      height: 70px;
      background: none;
      border: none;
      
      &:focus {
        outline: none;
      }
    }
  }
`

const NoteSection: React.FC = () => {
  const [note, setNote] = useState<string>('')
  // 不需要实时监听 value 的变化 - 选择非受控模式
  const ref_input = useRef<HTMLInputElement>(null)
  const onBlur_getNote = () => {
    if (ref_input !== null) {
      setNote(ref_input.current?.value!)
    }
  }
  return (
   <Wrapper>
    <label>
      <span>备注：</span>
      <input type="text" 
             ref={ref_input}
             defaultValue={note}
             onBlur={onBlur_getNote}
      />
    </label>
   </Wrapper> 
  )
}

export { NoteSection }