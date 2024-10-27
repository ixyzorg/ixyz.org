import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  {
    text: '项目',
    link: '/projects/',
    icon: 'material-symbols:auto-awesome-mosaic-outline',
  },
  {
    text: '背包',
    icon: 'streamline-emojis:school-backpack',
    items: [
      {
        text: '站点导航',
        link: '/bag/website-navigate/readme.md',
        icon: 'ion:navigate-circle-outline',
      },
      {
        text: '前端面试',
        link: '/bag/interview/readme.md',
        icon: 'fluent:people-chat-20-regular',
      },
      {
        text: '备忘录',
        link: '/bag/memo/readme.md',
        icon: 'solar:notes-outline',
      },
    ],
  },
])
export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/', icon: 'material-symbols:home-outline' },
  { text: 'Blog', link: '/en/blog/', icon: 'material-symbols:article-outline' },
  {
    text: 'Projects',
    link: '/en/projects/',
    icon: 'material-symbols:auto-awesome-mosaic-outline',
  },
  {
    text: 'Bag',
    icon: 'streamline-emojis:school-backpack',
    items: [
      {
        text: 'website-navigate',
        link: '/en/bag/website-navigate/readme.md',
        icon: 'ion:navigate-circle-outline',
      },
      {
        text: 'interview',
        link: '/en/bag/interview/readme.md',
        icon: 'fluent:people-chat-20-regular',
      },
      {
        text: 'memo',
        link: '/en/bag/memo/readme.md',
        icon: 'solar:notes-outline',
      },
    ],
  },
])
