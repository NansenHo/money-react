// 封装对 record 的所有操作

import { useEffect, useState } from 'react'
import { useUpdate } from 'hooks/useUpdate'

type RecordItem = {
  tagIds: number[]
  category: '+' | '-'
  note: string
  amount: string
  // createdAt 不能是 Date 类型，JSON 不支持 Date
  createdAt: string // ISO 8601
}
// Omit<RecordItem, 'createdAt'> 表示忽略 RecordItem 的 createdAt 属性
// Omit<RecordItem, 'createdAt' | 'updatedAt'> 使用 | 来忽略多个属性
type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecord = () => {
  const [records, setRecord] = useState<newRecordItem[]>([])

  useEffect(()=>{
    const local_records = window.localStorage.getItem('records')
    const records = (local_records === 'undefined' ? '[]' : local_records)
    setRecord(JSON.parse(records || '[]'))
  }, [])
  
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = (newRecord: newRecordItem) => {
    const record_item = {...newRecord, createdAt: (new Date()).toISOString()}
    setRecord([...records, record_item])
  }

  return { records, addRecord }
}

export { useRecord }