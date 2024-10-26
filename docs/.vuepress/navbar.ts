import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '项目', link: '/projects/' },
  {
    text: '背包',
    items: [
      { text: '站点导航', link: '/bag/website-navigate/readme.md' },
      { text: '前端面试', link: '/bag/interview/readme.md' },
      { text: '备忘录', link: '/bag/memo/readme.md' },
    ],
  },
])
export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Projects', link: '/en/projects/' },
  {
    text: 'Bag',
    items: [
      { text: 'website-navigate', link: '/en/bag/website-navigate/readme.md' },
      { text: 'interview', link: '/en/bag/interview/readme.md' },
      { text: 'memo', link: '/en/bag/memo/readme.md' },
    ],
  },
])
