---
# 页面布局模式：首页
layout: home

# 首页大标题信息 (Hero Section)
hero:
  name: '技术瓜实时监控 Pro'
  text: '全域社交媒体情报雷达'
  tagline: 'AI 驱动 · 秒级响应 · 跨越海内外社媒鸿沟'

  # 这里引用你放在 public 目录下的 logo.png
  image:
    src: /logo.png
    alt: Tech Melon Logo

  actions:
    # 🔥 [修改] 点击“立即开始使用”先跳到介绍页看价格和功能
    - theme: brand
      text: 🚀 立即开始使用
      link: /guide/intro

    # [建议] 第二个按钮可以改为“直接登录”或者保留原样
    - theme: alt
      text: 🔐 已有密钥？登录
      link: /guide/login

# 核心特性展示 (Features Section)
# 这里对应我们刚才总结的四大亮点
features:
  - icon: ⚡️
    title: 极速聚合响应
    details: 采用 WS 长连接技术，**秒级**捕获微博、微信、抖音、Instagram 与 TikTok 最新情报。

  - icon: 🧠
    title: AI 智能过滤与翻译
    details: 自动拦截 80% 的生活噪音，并集成 DeepSeek 异步翻译引擎，消除海外信息外语门槛。

  - icon: 🖥️
    title: 双模自适应工作流
    details: 首创快讯聚合模块“四象限交互”，大小屏智能流转，打造沉浸式彭博终端体验。

  - icon: 🔔
    title: 沉浸式声场通知
    details: 根据信息类别自动匹配独立提示音效，支持自定义配置，挂后台也不错过核心异动。
---

<style>
/* 首页标题的渐变色特效 */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #fa7d3c 30%, #f5222d);
}
.VPImage.image-src {
  border-radius: 20px; /* 让大图带一点圆角，增加高级感 */
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
</style>
