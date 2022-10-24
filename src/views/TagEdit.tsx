import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useTags } from 'lib/useTags'
import { PageLayout } from 'components/PageLayout'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Center } from 'components/Center'
import { Input } from 'components/Input'

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 20px;

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
    editTag(parseInt(id), e.target.value)
  }
  const tagContent = (currentTag: {id: number, name: string}) => (
    <div>
      <InputWrapper>
        <Input label="标签名" value={currentTag.name} type="text" onChange={onChange}></Input>
      </InputWrapper>
      <Center>
        <Button onClick={() => deleteTag(parseInt(id))}>删除标签</Button>
      </Center>
    </div>
  )

  return (
    <PageLayout>
      <Header>
        {/* 使用 hash 模式时，浏览器的前进/后退都只是页面状态在切换，但页面本身不会刷新，也不会发出任何新的请求 */}
        <Icon name="left"></Icon>
        <span>编辑标签</span>
      </Header>
      {currentTag ? tagContent(currentTag) : <p>该标签不存在</p>}
    </PageLayout>
  )
}

export { TagEdit }