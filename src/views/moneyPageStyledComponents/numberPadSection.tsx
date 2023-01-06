import styled from "styled-components"
import React, { useState } from 'react'

const Wrapper = styled.section`
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
     }
  }
`

type Props = {
  value: string
  onChange: (value: string) => void
  onOK?: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [buttonList] = useState<string[]>(['1', '2', '3', '删除', '4', '5', '6', '清空', '7', '8', '9', 'OK', '0', '.'])
  const output = props.value || '0'
  // 封装 _setOutput 函数
  const setOutput = (target_number: string) => {
    // 增加【判断有效位数（不包括小数点）】逻辑
    const output_length = (target_number.includes('.') ? (target_number.length - 1) : target_number.length)
    if (output_length > 16) { return }
    props.onChange(target_number)
  }
  // 也可以使用 HTML 的 MouseEvent 但是它不好用
  // React.MouseEvent 是 React 封装的 MouseEvent 更好用
  const handleOutput = (e: React.MouseEvent) => {
    // 因为不是每个元素都有 textContent 
    // 所以我们还需要限定元素的类型，这里使用 as 强制限定为 button
    const text = (e.target as HTMLButtonElement).textContent
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        const output_added_number = ((output === '0') ? text : (output + text))
        // 小数点后不得超过两位数
        const over_two: boolean = output.split('.')[1]?.length >= 2
        if (!over_two) {
          setOutput(output_added_number)
        }
        break;
      case '.':
        const has_full_stop = output.includes('.')        
        if (has_full_stop) { return }
        setOutput(output + '.')
        break;
      case '清空':
        setOutput('0')
        break;
      case '删除':
        const output_after_delete = ((output.length === 1) ? '0' : output.slice(0, -1))
        setOutput(output_after_delete)
        break;
      case 'OK':
        if (props.onOK) { props.onOK() }
        break;
    }
  }
  
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      {/* 这里的 handleOutput 采用【事件委托】的方式来写 */}
      <div className='pad clearfix' onClick={handleOutput}>
        {/* 如果使用循环来写的话，对清空删除等几个特殊按钮的处理会非常麻烦 */}
        {buttonList.map(i => 
          <button className={i === 'OK' ? 'number-pad-ok-button' : i === '0' ? 'zero' : ''}
                  key={i}
          >{i}</button>
        )}
      </div>
    </Wrapper>
  )
}

// 最好导出具体的内容，而不是使用 export default ...
export { NumberPadSection }