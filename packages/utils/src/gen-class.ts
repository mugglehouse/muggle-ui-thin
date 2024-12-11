export function useClassNames(componentName: string) {
  const prefix = 'mg'
  // mg-组件名
  const componentClass = `${prefix}-${componentName}`
  // mg-组件名-自定义类名
  const c = (suffix: string) => `${componentClass}-${suffix}`
  // 返回一个对象，其中c是一个函数，用于生成类名
  return {
    c,
  }
}
