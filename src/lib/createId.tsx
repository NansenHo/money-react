// ():number 表示返回值的类型是 number
const createId = ():number => {
  let id = Number(window.localStorage.getItem('max_id')) || 0
  id += 1
  window.localStorage.setItem('max_id', id.toString())
  return id
}

export { createId }
// 也可以用类来做，面向对象的好处是拓展性更强