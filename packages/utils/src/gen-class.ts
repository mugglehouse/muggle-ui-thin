import classNames from 'classnames'
import { computed } from 'vue'

// classNames插件常用用法
console.log(classNames('a', ['b', 'c'], { d: true, e: false })) // a b c d

export function useClassNames(componentName: string) {
  const prefix = 'mg'
  // mg-组件名
  const componentClass = `${prefix}-${componentName}`
  // mg-组件名-自定义类名
  const c = (suffix: string) => `${componentClass}-${suffix}`

  // 使用classnames插件生成类名
  // const cx = (cls: Record<string, boolean>) => classNames(cls)
  // 若想className返回的是响应式类名，将参数cls变为getter类型的，然后className依然传入的是对象，cls()执行一下即可
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }

  // 返回一个对象，其中c是一个函数，用于生成类名
  return {
    c,
    cx,
  }
}
