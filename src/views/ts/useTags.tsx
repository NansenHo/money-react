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
  return {tags, setTags}
}

export { useTags }