import { useState } from 'react'

let useTags = () => {
  const [tags, setTags] = useState<{id: number; name: string}[]>([
    {id: 1, name: 'Food'},
    {id: 2, name: 'Clothes'},
    {id: 3, name: 'Rent'},
    {id: 4, name: 'Traffic fees'}
  ])
  return {tags, setTags}
}

export { useTags }