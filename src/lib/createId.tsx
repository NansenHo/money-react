let id = 0

// ():number 表示返回值的类型是 number
const createId = ():number => {
  id += 1
  return id
}

export { createId }

// 也可以用类来做，面向对象的好处是拓展性更强