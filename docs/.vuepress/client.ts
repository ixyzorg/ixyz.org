import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import CustomHome from './theme/components/CustomHome.vue'
import CustomLayout from './theme/components/CustomLayout.vue'
import './theme/styles/custom.css'
import './theme/styles/index.css'

export default defineClientConfig({
  layouts: {
    Layout: CustomLayout,
  },
  enhance({ app }) {
    app.component('CustomHome', CustomHome)
  },
})
