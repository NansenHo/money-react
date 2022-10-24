import styled from 'styled-components'
import React, { useRef } from 'react'
import { Input } from 'components/Input'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
`

// type 里面每一项之间用 ; 或者 , 隔开都可以
type Props = {
  value: string;
  // void 表明无返回值
  onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }
  return (
   <Wrapper>
    <Input label="备注" type="text" value={note} onChange={onChange}></Input>
   </Wrapper> 
  )
}

export { NoteSection }