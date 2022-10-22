import { createId } from 'lib/createId';
import { useState } from 'react'

const defaultTags = [
  {id: createId(), name: 'Food'},
  {id: createId(), name: 'Clothes'},
  {id: createId(), name: 'Rent'},
  {id: createId(), name: 'Traffic fees'}
]

let useTags = () => {
  const [tags, setTags] = useState<{id: number; name: string}[]>(defaultTags)
  const addTags = () => {
    let tagName = window.prompt('请输入标签名')
    if (tagName) {
      setTags([...tags, {id: createId(), name: tagName}])
    }
  }
  return {tags, setTags, addTags}
}

export { useTags }