// 封装监听更新（第一次渲染不触发）

import { useRef, useEffect } from 'react'

const useUpdate = (fn: () => void, deps: any[]) => {
  // 计数
  // count.current === 1 时，为第一次渲染
  const count = useRef(0)
  useEffect(()=>{
    count.current += 1
  })

  // useEffect 在首次 render 后，或是在某数据更新后触发
  // useEffect(触发行为 function, 需要监听的数据)
  useEffect(()=>{
    if (count.current > 1) {
      fn()
    }
  }, deps)
}

export { useUpdate }