---
# 页面布局模式：首页
layout: home

# 首页大标题信息 (Hero Section)
hero:
  name: '技术瓜实时监控 Pro'
  text: '全域社交媒体情报雷达'
  tagline: 'AI 驱动 · 秒级响应 · 快讯矩阵 · 跨越海内外社媒鸿沟'

  image:
    src: /logo.png?v=1.1
    alt: Tech Melon Logo

  actions:
    - theme: brand
      text: 🚀 立即开始使用
      link: /guide/intro

    - theme: alt
      text: 🔐 已有密钥？登录
      link: /guide/login

features:
  - icon: ⚡️
    title: 极速聚合响应
    details: WebSocket 长连接，秒级捕获微博、公众号、抖音、Instagram、TikTok、YouTube 与律动/币安/X狙等快讯矩阵。

  - icon: 🧠
    title: AI 智能过滤与翻译
    details: 自动拦截约 80% 生活噪音，DeepSeek 异步翻译海外与 X狙 正文，卡片动态回显中文译文。

  - icon: 🧰
    title: 超级工具箱
    details: 聚合搜索、赛道监测、官方防伪、内容拦截四合一。主动搜索只服从搜索过滤器，不受信息流拦截干扰。

  - icon: 🖥️
    title: 双模自适应工作流
    details: 宽屏右侧快讯栏 + 中间信息流；窄屏自动合流。支持大屏快讯入流与分屏盯盘。

  - icon: 🔔
    title: 分源声场通知
    details: 微博到 X狙 可独立开关提示音与数据接收；支持自定义 MP3 与后台弹窗。

  - icon: 🎯
    title: X狙 推文狙击
    details: 结构化展示推文/转发/回复与 CA，异步中文翻译，聚合搜索可按作者与正文溯源。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #fa7d3c 30%, #f5222d);
}
.VPImage.image-src {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
</style>
