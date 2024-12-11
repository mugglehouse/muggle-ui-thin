import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import { blue, gold, green, orange, red } from '@ant-design/colors'

// console.log(orange) // orange返回一个数组，存放所有颜色的值

let colors = ''

// 使用一个循环将颜色提取出来，并生成一个CSS表
// 主色
orange.forEach((color, index) => {
  colors = `${colors}--mg-color-primary-${index + 1}: ${color};\n`
})
colors = `${colors}\n`

blue.forEach((color, index) => {
  colors = `${colors}--mg-color-link-${index + 1}: ${color};\n`
})
colors = `${colors}\n`

green.forEach((color, index) => {
  colors = `${colors}--mg-color-success-${index + 1}: ${color};\n`
})
colors = `${colors}\n`

gold.forEach((color, index) => {
  colors = `${colors}--mg-color-warn-${index + 1}: ${color};\n`
})
colors = `${colors}\n`

red.forEach((color, index) => {
  colors = `${colors}--mg-color-error-${index + 1}: ${color};\n`
})
console.log(colors)

// 将生成的CSS表写入到文件中
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/muggle-ui/src/style/theme/colors.css')
// 必须要加root选择器，否则无法使用
fs.writeFileSync(cssFile, `root{\n${colors}\n}`)
