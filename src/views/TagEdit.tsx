import React from 'react'
import { useParams } from 'react-router-dom'
import { useTags } from 'lib/useTags'
import { PageLayout } from 'components/PageLayout'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'

const TagEdit: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { findTag } = useTags()
  const currentTag = findTag(parseInt(id))
  return (
    <PageLayout>
      <header>
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
      <Button>删除标签</Button>
    </PageLayout>
  )
}

export { TagEdit }