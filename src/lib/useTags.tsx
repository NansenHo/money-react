import { useUpdate } from 'hooks/useUpdate'
import { createId } from 'lib/createId'
import { useEffect, useState } from 'react'

let useTags = () => {
  const [tags, setTags] = useState<{id: number; name: string}[]>([])
  
  // 如果第二个参数是一个空数组，那就相当于 mounted
  useEffect(()=>{
    let tags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (tags.length === 0) {
      tags = [
        {id: 1, name: 'Food'},
        {id: 2, name: 'Clothes'},
        {id: 3, name: 'Rent'},
        {id: 4, name: 'Traffic fees'}
      ]
      window.localStorage.setItem('max_id', '4')
    }
    setTags(tags)
  }, [])

  useUpdate(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

  const addTags = () => {
    let tagName = window.prompt('请输入标签名')
    if (tagName) {
      setTags([...tags, {id: createId(), name: tagName}])
    }
  }
  const findTag = (id: number) => {
    return tags.filter(t => t.id === id)[0]
  }
  const editTag = (id: number, name: string) => {
    setTags(tags.map(t => t.id === id ? {id, name} : t))
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter(t => t.id !== id))
  }
  return { tags, setTags, addTags, findTag, editTag, deleteTag }
}

export { useTags }