# Manufacturing AI Quality & Test Copilot

制造业 AI 质量与测试工程助手是一个面向制造企业的 B2B 获客官网。第一版目标不是实现完整 AI SaaS，而是清晰展示业务定位、解决方案、Demo 案例、技术架构、服务模式，并收集客户需求。

## Product Direction

核心定位：

帮助制造企业使用 AI 自动提取测试文档、比对工程规范、生成质量报告，并构建可私有化部署的工程知识库。

目标客户：

- 中小制造企业
- 自动化设备公司
- 医疗器械制造企业
- 电子制造企业
- 精密制造供应商
- 质量工程、测试工程、制造工程、自动化工程团队

## First Version Scope

已实现：

- 顶部导航与移动端折叠菜单
- Hero 区域和模拟 Dashboard
- 制造业质量与测试文档痛点
- 核心价值区
- 3 个解决方案
- 6 个应用场景
- 测试文档比对 Demo 案例与表格
- 技术架构流程
- 3 个服务模式
- 资源中心静态卡片
- 后续 AI Demo 产品路线
- 联系表单模拟提交
- 公司联系邮箱：`service@instrtek.com`
- SEO title / description / keywords
- Official InstrTek logo assets in `public/instrtek-logo.png` and `public/instrtek-symbol.png`

暂不实现：

- 真实文档上传
- 真实 AI 文档解析
- 登录注册
- 支付
- 数据库
- 后台管理
- 联系表单自动发送邮件

## Tech Stack

- React 19
- Vite 8
- CSS modules are not used; global styles live in `src/styles.css`
- Serverless API route at `api/ai.js` remains available for future AI workflows, but the first website version does not call it.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Then visit:

```text
http://localhost:5173
```

Build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## Deployment Notes

The current website is static and can be deployed as a Vite React app.

Environment variables are only needed if future AI API workflows are enabled:

- `ANTHROPIC_API_KEY`
- `ANTHROPIC_MODEL`

## Design Log

Design decisions are tracked in [DESIGN.md](./DESIGN.md). Update that file whenever product positioning, UX, visual design, or conversion strategy changes.
