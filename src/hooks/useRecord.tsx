// 封装对 record 的所有操作

import { useState } from 'react'
import { useUpdate } from 'hooks/useUpdate'

type RecordItem = {
  tagIds: number[]
  category: '+' | '-'
  note: string
  amount: string
}

const useRecord = () => {
  const [records, setRecord] = useState<RecordItem[]>([])

  const addRecord = (record: RecordItem) => {
    setRecord([...records, record])
  }

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  return { records, addRecord }
}

export { useRecord }