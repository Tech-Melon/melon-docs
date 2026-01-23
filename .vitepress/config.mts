import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "技术瓜实时监控 Pro",
    description: "聚合微博与微信公众号热门媒体监控",

    // 部署到 GitHub Pages 时需要配置 base，如果用 Vercel 根目录部署则不需要
    // base: '/melon-docs/', 

    // 标头也就是 HTML head 里的配置，这里我帮你加个 favicon (网页标签小图标)
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        // 【新增】左上角的 Logo 配置 (需要你把 logo.png 放在 public 文件夹下)
        logo: '/logo.png',

        // 1. 顶部导航栏
        nav: [
            { text: '首页', link: '/' },
            // 🔥 [修改] 将这里指向 /guide/intro，符合“先看介绍再上手”的逻辑
            { text: '功能介绍', link: '/guide/intro' },
            { text: '登录系统', link: '/guide/login' }, // 建议单独加一个登录入口
            { text: '常见问题', link: '/guide/faq' },
        ],

        // 2. 左侧侧边栏 (核心目录结构)
        sidebar: [
            {
                text: '👋 欢迎使用',
                items: [
                    { text: '产品简介', link: '/guide/intro' },
                    { text: '注意事项 (必读)', link: '/guide/notice' },
                ]
            },
            {
                text: '🚀 快速上手',
                items: [
                    { text: '第一步：登录系统', link: '/guide/login' },
                    { text: '第二步：读懂监控卡片', link: '/guide/cards' },
                    { text: '第三步：AI 过滤与筛选', link: '/guide/filter' },
                ]
            },
            {
                text: '⚙️ 个性化设置',
                items: [
                    { text: '📺 打造极致盯盘桌面', link: '/guide/layout' },
                    { text: '开启声音提醒', link: '/guide/audio' },
                    { text: '切换黑夜模式', link: '/guide/theme' },
                ]
            },
            {
                text: '🆘 帮助中心',
                items: [
                    { text: '常见问题 (FAQ)', link: '/guide/faq' },
                    { text: '联系管理员', link: '/guide/contact' },
                ]
            }
        ],

        // 3. 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Tech-Melon' },
            { icon: 'twitter', link: 'https://x.com/0xTechMelon' },
        ],

        // 4. 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 Tech Melon'
        },

        // 5. 搜索功能 (已配置汉化)
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },

        // 【新增】大纲（右侧目录）标题汉化
        outline: {
            label: '页面导航'
        },

        // 【新增】移动端菜单文字汉化
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '深色模式'
    }
})