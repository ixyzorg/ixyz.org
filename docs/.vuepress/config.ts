import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { path } from 'vuepress/utils'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'IXYZ',
      lang: 'zh-CN',
      description: 'IXYZ,Front-end Developer',
    },
    '/en/': {
      title: 'IXYZ',
      lang: 'en-US',
      description: 'IXYZ,Front-end Developer',
    },
  },

  bundler: viteBundler(),

  theme: plumeTheme({
    hostname: 'https://ixyz.org',
    blog: {
      include: ['前端/**/*.md'],
    },
    plugins: {
      shiki: {
        languages: ['typescript', 'javascript', 'html', 'css', 'shell', 'bash'],
        theme: { light: 'night-owl', dark: 'night-owl' },
      },
      markdownEnhance: {
        align: true, // 对齐容器
        mark: true, // 标记语法
        tasklist: true, // 任务列表语法
        attrs: true, // 属性语法
        sup: true, // 上标语法
        sub: true, // 下标语法
        footnote: true, // 注脚语法
        include: true, // Markdown 导入支持
        chart: true, // 图表支持
        echarts: true, // ECharts 图表支持
        flowchart: true, // 流程图支持
        markmap: true, // Markmap 图表支持
        kotlinPlayground: true, // Kotlin 交互演示
        vuePlayground: true, // Vue 交互演示
        sandpack: true, // sandpack 交互演示
        demo: true, // 代码案例
      },
      docsearch:{
        appId:'DQLBVJ2169',
        apiKey:'0bf272a3d308773b3e7b5fa72b68af03',
        indexName:'IXYZ',
      },
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus',
        comment: true,
        repo: 'ixyzorg/ixyz.org', 
        repoId: 'R_kgDONEsDCg', 
        category: 'Announcements', 
        categoryId: 'DIC_kwDONEsDCs4Cj6j0', 
      },
    },
  }),
  alias: {
    '@theme/Home/VPHomeBanner.vue': path.resolve(
      __dirname,
      './theme/components/CustomHomeBanner.vue'
    ),
  },
})
