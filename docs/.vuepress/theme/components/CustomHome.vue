<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'
import { useLocalePostList } from 'vuepress-theme-plume/composables'
import { VPHomeBox } from 'vuepress-theme-plume/client'
import { computed } from 'vue'
import VPPostItem from 'vuepress-theme-plume/components/Blog/VPPostItem.vue'
import VPTransitionDrop from 'vuepress-theme-plume/components/VPTransitionDrop.vue'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
const props = defineProps<
  PlumeHomeConfigBase & {
    type: string
    repo: string[]
  }
>()
const postList = useLocalePostList()
const postListRecent = computed(() => {
  return postList.value.slice(0, 2)
})
</script>

<template>
  <VPHomeBox :type="type">
    <div class="custom-container">
      <div class="projects">
        <h2 class="title">开源项目</h2>
        <div class="line"></div>
        <div class="content">
          <CardGrid>
            <RepoCard v-for="item in repo" :repo="item" :key="item" />
          </CardGrid>
        </div>
        <div class="more" @click="$router.push('/projects/')">MORE...</div>
      </div>
      <div class="article">
        <h2 class="title">最近文章</h2>
        <div class="line"></div>
        <div class="vp-blog-post-list">
          <template v-for="(post, index) in postListRecent" :key="post.path">
            <VPTransitionDrop appear :delay="index * 0.025">
              <VPPostItem :key="post.path" :post="post" :index="index" />
            </VPTransitionDrop>
          </template>
        </div>
        <div class="more" @click="$router.push('/blog/')">MORE...</div>
      </div>
    </div>
  </VPHomeBox>
</template>

<style lang="scss" scoped>
.custom-container {
  .title {
    text-align: center;
    height: 32px;
    line-height: 32px;
    font-size: 24px;
    font-weight: 900;
  }
  .line {
    border: none;
    border-top: 1px solid var(--vp-c-gutter); /* 设置分割线颜色 */
    margin: 20px 0; /* 上下间距 */
  }
}
.vp-blog-post-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}
@media (min-width: 419px) {
  .vp-blog-post-list {
    gap: 24px;
    padding-bottom: 24px;
  }
}
.more {
  width: 6rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem auto;
  margin-bottom: 4rem;
  background-color: var(--vp-c-brand-1);
  cursor: pointer;
  &:hover {
    background-color: var(--vp-c-brand-2);
  }
}
</style>
