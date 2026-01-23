---
# 页面布局模式：首页
layout: home

# 首页大标题信息 (Hero Section)
hero:
  name: '技术瓜实时监控 Pro'
  text: '微博、公众号监控雷达'
  tagline: 'AI 驱动 · 秒级响应 · 监控主流新闻媒体'

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
    title: 极速响应
    details: 采用 WS 长连接技术，微博/公众号发文后 **秒级触达**，让你总是快人一步。

  - icon: 🧠
    title: AI 智能大脑
    details: 内置大语言模型，自动识别“宏大叙事”、“硬核科技”、“Meme奇观”等 10+ 种高价值标签，自动折叠 80% 的生活水帖。

  - icon: 📱
    title: 极致阅读体验
    details: 专用的视觉卡片，支持**灵动岛导航**与**深色模式**，手机/电脑完美适配。

  - icon: 🔔
    title: 沉浸式通知
    details: 央视新闻专属“新闻联播”音效，支持自定义 MP3 提示音与后台播放，即使网页挂在后台也不错过任何重要情报。
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
