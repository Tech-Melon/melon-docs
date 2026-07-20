# 技术瓜文档站全面更新规划（对照线上 2026-07）

> **状态：Phase A+B 已落地（2026-07-20）**  
> 宽屏截图 13 张（2548×1272）+ 新侧边栏/新页面 + `npm run docs:build` 通过。  
> 本地预览：`npm run docs:dev` · 构建：`npm run docs:build`

> 文档仓库：`melon-docs`（VitePress）  
> 产品站点：`https://weibo.tech-melon.top`  
> 产品源码：`58.weibo_monitor`  
> 截图批次：`public/screenshots/2026-07/`（js-mcp 最大化实拍）

---

## 0. 现状诊断

### 0.1 文档站现有结构

| 路由 | 文件 | 覆盖内容 |
|------|------|----------|
| `/` | `index.md` | 首页 Hero + 4 大卖点 |
| `/guide/intro` | 产品简介 / 订阅 | 平台只写到 Ins/TikTok |
| `/guide/notice` | 注意事项 | 仍可用，需补新信源风险说明 |
| `/guide/login` | 登录 | 基本可用，截图偏旧 |
| `/guide/cards` | 读懂卡片 | **严重滞后**：无 YouTube / 快讯子源 / X狙 / 币安 |
| `/guide/filter` | AI 过滤 | 缺内容拦截、搜索与 AI 的关系 |
| `/guide/layout` | 分屏盯盘 | 缺「大屏快讯入流 / 双模」详细说明 |
| `/guide/audio` | 声音 | **严重滞后**：无分平台音源、X狙/币安/SEC 等 |
| `/guide/theme` | 黑夜模式 | 基本可用 |
| `/guide/faq` | FAQ | 缺搜索/拦截/多平台相关 Q |
| `/guide/contact` | 联系 | 可用 |

### 0.2 产品已上线、文档几乎未写的能力（差距清单）

按用户感知优先级：

1. **超级工具箱**（聚合搜索 / 赛道监测 / 官方防伪 / 内容拦截）
2. **快讯矩阵**：律动、律动文章、42Space、Flap、Four、狗妈、币安系、SEC IPO、**X狙**
3. **YouTube** 监控（视频 + 帖子）与海外 Tab
4. **分平台提示音 / 数据接收开关**（设置面板）
5. **聚合搜索**（平台勾选、天数、AI 分；搜索结果不受内容拦截；快讯/X狙可搜正文与译文）
6. **X狙结构化卡片** + 中文自动翻译
7. **大屏快讯入流**、双模布局
8. **热榜播报音效**（若对外宣传）

首页 `features` 文案仍写「微博、微信、抖音、Instagram 与 TikTok」，与现网能力不符。

### 0.3 商业文案注意

`intro.md` 里「限时活动至 5月13日」已过期，需改写或删除，避免误导。

---

## 1. 更新原则

1. **用户视角优先**：写「怎么用」，不写后端架构（架构留在产品仓库 `README` / `CLAUDE.md`）。
2. **一功能一页 + 一张主截图**：能点进工具箱看到的，必须有截图。
3. **旧图替换，不堆积**：`demo_home.png` 等老图用新批次覆盖或改路径加 `?v=2026-07`。
4. **密钥/密码永不进文档仓库**。
5. **搜索 vs 拦截语义写清楚**：
   - 信息流：AI 过滤 + 内容拦截 + 平台/赛道 Tab 生效；
   - 主动搜索：只服从搜索过滤器；**内容拦截不屏蔽搜索结果**。

---

## 2. 目标信息架构（建议侧边栏）

```text
👋 欢迎使用
  - 产品简介          /guide/intro          （改）
  - 注意事项          /guide/notice         （小改）
  - 更新日志          /guide/changelog      （新建，可选）

🚀 快速上手
  - 登录系统          /guide/login          （改截图）
  - 读懂监控卡片      /guide/cards          （大改）
  - AI 过滤与筛选     /guide/filter         （改）
  - 快讯与情报源      /guide/newsflash      （新建 ⭐）
  - 超级工具箱        /guide/toolbox        （新建 ⭐）
  - 聚合搜索          /guide/search         （新建 ⭐）
  - 内容拦截器        /guide/blocker        （新建 ⭐）

⚙️ 个性化设置
  - 打造盯盘桌面      /guide/layout         （改）
  - 声音与信源开关    /guide/audio          （大改）
  - 黑夜模式          /guide/theme          （小改）

🆘 帮助中心
  - 常见问题          /guide/faq            （改）
  - 联系管理员        /guide/contact        （基本不动）
```

同步修改：`.vitepress/config.mts` 的 `nav` / `sidebar`，以及 `index.md` features。

---

## 3. 分文档改写要点

### 3.1 `index.md`（首页）

| 项 | 动作 |
|----|------|
| tagline / features | 平台列表补 **YouTube、律动快讯、币安公告、X狙** |
| 第 1 特性 | 「秒级捕获」改为覆盖 **海内外社媒 + 链上/快讯矩阵** |
| 可加第 5 特性 | 「超级工具箱：搜索 · 赛道 · 防伪 · 拦截」 |

### 3.2 `guide/intro.md`

- 监控源列表改为表格（主站平台 vs 快讯子源）。
- 替换 `demo_home.png` → `screenshots/2026-07/01-home-feed.png`（或覆盖原文件）。
- 增加 1～2 张新图：工具箱、快讯面板。
- 清理过期活动文案；保留机器人与人工表单入口。

### 3.3 `guide/cards.md`（大改）

建议章节：

1. 主站平台色卡：微博橙 / 公众号绿 / 抖音粉 / Ins 紫 / TK 黑 / YouTube 红  
2. 高分红色高亮（AI ≥ 8）  
3. AI 标签 + 摘要框（配 `09-ai-card-weibo.png`）  
4. 快讯卡片：律动 / Flap / 币安 / X狙 等 badge 差异  
5. 央视印章、改名提醒  
6. 海外翻译块「中文自动翻译」

### 3.4 `guide/newsflash.md`（新建）

| 信源 | 用户能看到什么 | 声音/入流 |
|------|----------------|-----------|
| 律动快讯 / 文章 | 标题+正文 / 文章摘要 | 可独立开关 |
| 42Space / 上链 | 预测市场、链上同步 | 可开关 |
| Flap / Four | 新币、审计、玩法 | 可开关 |
| 币安系 | 公告与配置类 | 可开关 |
| SEC IPO | 招股信息 | 可开关 |
| 狗妈 | 专属信源 | 可开关 |
| **X狙** | 推文结构化卡片 + 异步中文翻译 | 可开关 |

说明双模：

- 宽屏右侧快讯栏（≥1360 且未强制入流）  
- 窄屏 / 「大屏快讯入流」→ 进入中间信息流  

配图：`07-newsflash-panel.png`

### 3.5 `guide/toolbox.md`（新建）

入口：右下角 / 悬浮 **🧰 超级工具箱**（`#toolbox-fab`）。

四个 Tab：

| Tab | 文档要点 | 截图 |
|-----|----------|------|
| 🔍 聚合搜索 | 见 search 页 | `02-toolbox-search.png` |
| 🌟 赛道监测 | 多选赛道后确认筛选 | `03-toolbox-track.png` |
| 🛡️ 官方防伪 | Binance/OKX 等一键跳转 | `04-toolbox-verify.png` |
| 🚫 内容拦截 | 见 blocker 页 | `05-toolbox-blocker.png` |

### 3.6 `guide/search.md`（新建）

操作路径：工具箱 → 聚合搜索。

过滤器（仅这些约束搜索结果）：

- 关键词 / 定向账号  
- 时间范围（24h～完整生命周期）  
- AI 打分门槛  
- 监控平台：微博 / 公众号 / 抖音 / Ins / TK / YT / ⚡快讯  

必须写清：

1. **快讯（含 X狙）** 可搜：标题、正文、译文、作者、推文结构化字段。  
2. **内容拦截规则不作用于搜索结果**（用户主动溯源）。  
3. 退出搜索：点横幅「退出搜索 (恢复实时)」。  

配图：`02-toolbox-search.png`

### 3.7 `guide/blocker.md`（新建）

- 维度：平台 / 账号 / 关键词 / AI 标签；精确/模糊账号匹配  
- 生效范围：**实时信息流 + 快讯侧栏**  
- **不生效**：聚合搜索结果  
- 规则存本地浏览器（换设备需重配）  

配图：`05-toolbox-blocker.png`

### 3.8 `guide/audio.md`（大改）

对照设置面板实拍：

- 主开关 + 音量 + 换文件 / 测试  
- **平台提示音独立开关**：微博…YouTube + 快讯子源（含 X狙）  
- **平台数据接收开关**：关闭后不再接收该源新内容  
- 大屏快讯入流开关说明（可交叉链到 layout）  

配图：`06-settings-audio-sources.png`

### 3.9 `guide/filter.md`

补充：

- AI 开/关与「显示名额」关系  
- 与内容拦截、搜索的边界表  

### 3.10 `guide/faq.md` 新增 Q

- 为什么搜索不到某条 X狙？→ 是否勾选快讯、天数、关键词是否在正文/译文  
- 为什么拦截了的账号搜索还能看到？→ 设计如此  
- 为什么没有快讯提示音？→ 检查分源开关 + 浏览器解锁  
- 快讯只在右侧不在中间？→ 大屏入流开关 / 窗口宽度  

### 3.11 `guide/login.md` / `theme.md`

- 登录图可用 `00-login.png`（若本批完整）或重录 GIF  
- 黑夜模式配 `08-home-dark.png`

---

## 4. 已采集截图清单

目录：`public/screenshots/2026-07/`

| 文件 | 内容 | 建议用于 |
|------|------|----------|
| `01-home-feed.png` | 主信息流（聚合 Tab + AI 开） | intro / cards / 首页 |
| `02-toolbox-search.png` | 工具箱·聚合搜索（含平台勾选） | search / toolbox |
| `03-toolbox-track.png` | 工具箱·赛道监测 | toolbox |
| `04-toolbox-verify.png` | 工具箱·官方防伪 | toolbox |
| `05-toolbox-blocker.png` | 工具箱·内容拦截 | blocker |
| `06-settings-audio-sources.png` | 设置：音源/分源开关/入流 | audio |
| `07-newsflash-panel.png` | 快讯栏（律动 + Flap 等） | newsflash |
| `08-home-dark.png` | 深色主界面 | theme |
| `09-ai-card-weibo.png` | AI 标签微博卡片 | cards / filter |

### 4.1 仍建议补拍（第二轮）

| 场景 | 原因 |
|------|------|
| 登录页静态图 / GIF | 本轮登录态跳转后需无痕会话重拍 |
| YouTube / Ins 海外卡片特写 | 海外 Tab 需有数据时再拍 |
| X狙结构化卡片 + 翻译块 | 有实时 X狙 推送时再拍（最重要） |
| 搜索结果页（有结果横幅） | 跑一次真实关键词搜索 |
| 宽屏 Mode1 左右分栏全景 | 需 viewport ≥ 1360 |
| 币安公告卡片 | 有数据时补 |

补拍命令思路（js-mcp）：登录 → 操作 UI → `take_screenshot` 写到同目录。

---

## 5. 执行节奏（建议 3 个 PR / 提交批次）

### Phase A — 骨架（0.5～1 天）

1. 改 `config.mts` 侧边栏  
2. 新建 `newsflash.md` / `toolbox.md` / `search.md` / `blocker.md` 骨架文案  
3. 挂上已有截图  

### Phase B — 旧页大修（1 天）

1. `intro` / `cards` / `audio` / `filter` / `faq` / `index`  
2. 替换过期活动与平台列表  
3. 本地 `npm run docs:dev` 预览  

### Phase C — 补图与润色（0.5 天）

1. 补 X狙 / 搜索结果 / 宽屏分栏  
2. 压缩 PNG（可选 `pngquant`）  
3. 发布 GitHub Pages / 现有 CI  

---

## 6. 文案素材速查（来自产品内更新日志 v1.9.x）

可直接改写进 changelog / intro：

- 超级工具箱统一入口  
- 内容拦截器（平台/账号/关键词）  
- 聚合搜索增强（YouTube + 快讯）  
- 官方防伪中心  
- 币安官方油管帖子  
- X狙（结构化推文 + 自动翻译）  

---

## 7. 验收清单

- [ ] 侧边栏无死链  
- [ ] 所有 `![](/screenshots/...)` 图片 200  
- [ ] 平台列表与线上设置面板一致（含 X狙）  
- [ ] 明确写出「搜索不受内容拦截」  
- [ ] 无密钥/密码/内网 IP 泄露  
- [ ] 过期营销文案已清理  
- [ ] 手机窄屏下 VitePress 图片不溢出  

---

## 8. 下一步（你确认后我可以直接开写）

推荐顺序：

1. **先落 Phase A**：新建 4 页 + 改侧边栏 + 嵌入本批截图  
2. 再改 `cards` / `audio` / `intro`  
3. 有 X狙 实时数据时再约一轮补图  

回复例如：「按 Phase A 开写」或「全部写完」，即可在本仓库直接改 Markdown 并提交（需你确认是否 push）。
