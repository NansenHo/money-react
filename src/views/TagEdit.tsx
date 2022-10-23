import React from 'react'
import { useParams } from 'react-router-dom'
import { useTags } from 'lib/useTags'

const TagEdit: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const { findTag } = useTags()
  const currentTag = findTag(parseInt(id))
  return (
    <span>{currentTag ? currentTag.name : '该标签不存在'}</span>
  )
}

export { TagEdit }