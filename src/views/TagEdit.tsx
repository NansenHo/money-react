import React from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { useTags } from 'hooks/useTags'
import { PageLayout } from 'components/PageLayout'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Center } from 'components/Center'
import { Input } from 'components/Input'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  font-size: 16px;
  line-height: 20px;
  background: #fff;

  > span {
    margin-left: 8px;
  }
`

const InputWrapper = styled.div`
  margin: 8px 8px;
  padding: 4px 12px;
  border-radius: 4px;
  background: #fff;
`

const TagEdit: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { findTag, editTag, deleteTag } = useTags()
  const currentTag = findTag(parseInt(id))
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTag(currentTag.id, e.target.value)
  }

  // 把 html 内容放到函数里
  // 这样还可以把变量当做参数传进去
  const tagContent = (currentTag: {id: number, name: string}) => (
    <div>
      <InputWrapper>
        <Input label="标签名" value={currentTag.name} type="text" onChange={onChange}></Input>
      </InputWrapper>
      <Center>
        <Button onClick={() => deleteTag(currentTag.id)}>删除标签</Button>
      </Center>
    </div>
  )
  // 如果没有参数需要传进去
  // 那就直接 const tagContent = (HTML) 就可以了
  const noTag = (
    <Center>
      <p>该标签不存在</p>
    </Center>
  )
  
  const history = useHistory()
  const back = () => {
    // 当使用 hash 模式时，使用前进和后退都不会有新的网络请求
    // 这说明页面没有刷新，只是页面的状态在切换
    // window.history.back()
    history.goBack()
  }

  return (
    <PageLayout>
      <Header>
        {/* 使用 hash 模式时，浏览器的前进/后退都只是页面状态在切换，但页面本身不会刷新，也不会发出任何新的请求 */}
        <Icon name="left" onClick={back}></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </Header>
      {currentTag ? tagContent(currentTag) : noTag}
    </PageLayout>
  )
}

export { TagEdit }