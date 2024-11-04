import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/favicon.ico',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',
  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/ixyzorg' },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>',
        name: 'mail',
      },
      link: 'mailto:m@ixyz.org',
    },
  ],

  locales: {
    '/': {
      profile: {
        avatar: '/favicon.ico',
        name: 'IXYZ',
        description: 'IXYZ,Front-end Developer',
        circle: true,
        location: '四川成都',
        organization: '自由职业者',
      },
      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: '/favicon.ico',
        name: 'IXYZ',
        description: 'IXYZ,Front-end Developer',
        circle: true,
        location: 'Chengdu Sichuan',
        organization: 'Freelance',
      },
      navbar: enNavbar,
      notes: enNotes,
    },
  },
  footer: {
    message: '',
    copyright: 'Copyright © 2022-present IXYZ',
  },
  createTime:'only-blog'
})
