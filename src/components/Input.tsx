import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block; 
    width: 100%;
    height: 44px;
    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }
`

// Props 的类型是自定义的一两个和 React.InputHTMLAttributes 里面支持的所有类型
type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props 
  return (
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}

export { Input }