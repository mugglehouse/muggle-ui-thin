import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'muggle-ui',
  description: 'This is muggle ui',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 可以修改导航栏的配置，link对应的是markdown文件的路径
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/markdown-examples' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/components/button/' },
          ],
        },
      ],
      '/utils/': [
        {
          text: '工具',
          items: [
            { text: '类名生成', link: '/utils/gen-class/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  rewrites: {
    'docs/(.*)': '(.)*',
    'packages/muggle-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
  },
})
