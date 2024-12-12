import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^muggle-ui/,
    replacement: path.resolve(baseUrl, 'packages/muggle-ui/src'),
  },
  {
    find: /^@muggle-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@muggle-ui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
