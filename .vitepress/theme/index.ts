import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

function applyImagePerf(root: ParentNode = document) {
  root.querySelectorAll('img').forEach((img) => {
    // 文档内容图默认懒加载；首屏 logo 保持浏览器默认 eager
    const isLogo =
      img.classList.contains('VPImage') ||
      (img.getAttribute('src') || '').includes('logo.')
    if (!isLogo) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy')
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
    }
  })
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    onMounted(() => {
      applyImagePerf()
      watch(
        () => route.path,
        () => nextTick(() => applyImagePerf()),
      )
    })
  },
} satisfies Theme
