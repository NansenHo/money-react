import React from 'react'
import { useParams } from 'react-router-dom'
import { useTags } from 'lib/useTags'
import { PageLayout } from 'components/PageLayout'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Center } from 'components/Center'

const TagEdit: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { findTag } = useTags()
  const currentTag = findTag(parseInt(id))
  return (
    <PageLayout>
      <header>
        {/* 使用 hash 模式时，浏览器的前进/后退都只是页面状态在切换，但页面本身不会刷新，也不会发出任何新的请求 */}
        <Icon name="left"></Icon>
        <span>编辑标签</span>
      </header>
      <label>
        <span>标签名：</span>
        <input type="text"
               placeholder="在这里输入标签名"
               value={currentTag.name}
        />
      </label>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </PageLayout>
  )
}

export { TagEdit }