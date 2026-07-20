import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "技术瓜实时监控 Pro",
    description: "全域社交媒体情报雷达 · 微博/公众号/抖音/海外/快讯/X狙",

    // 部署到 GitHub Pages 时需要配置 base，如果用 Vercel 根目录部署则不需要
    // base: '/melon-docs/',

    // 内部规划稿不进入站点
    srcExclude: ['**/DOCS_UPDATE_PLAN.md'],

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        logo: '/logo.png',

        nav: [
            { text: '首页', link: '/' },
            { text: '功能介绍', link: '/guide/intro' },
            { text: '快速上手', link: '/guide/login' },
            { text: '工具箱', link: '/guide/toolbox' },
            { text: '常见问题', link: '/guide/faq' },
        ],

        sidebar: [
            {
                text: '👋 欢迎使用',
                items: [
                    { text: '产品简介', link: '/guide/intro' },
                    { text: '注意事项 (必读)', link: '/guide/notice' },
                    { text: '更新日志', link: '/guide/changelog' },
                ]
            },
            {
                text: '🚀 快速上手',
                items: [
                    { text: '第一步：登录系统', link: '/guide/login' },
                    { text: '第二步：读懂监控卡片', link: '/guide/cards' },
                    { text: '第三步：AI 过滤与筛选', link: '/guide/filter' },
                    { text: '快讯与情报源', link: '/guide/newsflash' },
                ]
            },
            {
                text: '🧰 超级工具箱',
                items: [
                    { text: '工具箱总览', link: '/guide/toolbox' },
                    { text: '聚合搜索', link: '/guide/search' },
                    { text: '内容拦截器', link: '/guide/blocker' },
                ]
            },
            {
                text: '⚙️ 个性化设置',
                items: [
                    { text: '📺 打造极致盯盘桌面', link: '/guide/layout' },
                    { text: '声音与信源开关', link: '/guide/audio' },
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

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Tech-Melon' },
            { icon: 'twitter', link: 'https://x.com/0xTechMelon' },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 Tech Melon'
        },

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

        outline: {
            label: '页面导航'
        },

        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '深色模式'
    }
})
