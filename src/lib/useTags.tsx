import { useUpdate } from 'hooks/useUpdate'
import { createId } from 'lib/createId'
import { useEffect, useState } from 'react'

// const defaultTags = [
//   {id: createId(), name: 'Food'},
//   {id: createId(), name: 'Clothes'},
//   {id: createId(), name: 'Rent'},
//   {id: createId(), name: 'Traffic fees'}
// ]

let useTags = () => {
  const [tags, setTags] = useState<{id: number; name: string}[]>([])
  
  // 如果第二个参数是一个空数组，那就相当于 mounted
  useEffect(()=>{
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
  }, [])

  useUpdate(() => {
    console.log('set item')
    console.log(JSON.stringify(tags))
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