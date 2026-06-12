export type Lang = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      dashboard: 'Dashboard',
      docs: 'Docs',
      pricing: 'Pricing',
      login: 'Sign In',
      signup: 'Get Started',
    },
    hero: {
      line1: 'Infinite Scaling, Borderless Routing.',
      line2: 'ApexFlow, 就是顶流。',
      subtitle:
        'Enterprise-grade AI API gateway. Route any model, any scale, any edge — with zero cold starts and 99.9% uptime.',
      cta_primary: 'Start for Free',
      cta_secondary: 'View Docs',
      badge: 'Now in Global GA',
    },
    stats: {
      uptime: '99.9% Uptime',
      uptime_sub: 'SLA Guaranteed',
      latency: '<50ms',
      latency_sub: 'Global P95 Latency',
      models: '50+ Models',
      models_sub: 'One Unified API',
      regions: '12 Edge Regions',
      regions_sub: 'Worldwide Coverage',
    },
    features: {
      title: 'Built for Builders at Scale',
      subtitle:
        'Every component engineered for performance, reliability, and developer experience.',
      items: [
        {
          title: 'Global Edge Routing',
          desc: 'Automatic routing to the nearest inference node. Sub-50ms latency across 12 global regions.',
        },
        {
          title: 'Unified Model API',
          desc: 'One key for GPT-4o, Claude 3, Gemini, Llama, and 50+ models. No SDK switching.',
        },
        {
          title: 'Token Economics',
          desc: 'Pay-as-you-go token billing. Buy USDT, get 10% bonus. Track spend in real time.',
        },
        {
          title: 'Sub-key Management',
          desc: 'Issue isolated API keys per project, team, or customer. Full spend controls.',
        },
        {
          title: 'Rate Limit Shield',
          desc: 'Multi-layer throttling and quota enforcement. Protect upstream resources automatically.',
        },
        {
          title: 'Compliance Ready',
          desc: 'All upstream access via legally authorized accounts under provider ToS. SOC-ready logging.',
        },
      ],
    },
    topup: {
      title: 'Top Up Balance',
      usdt_title: 'USDT TRC-20 Deposit',
      usdt_address: 'USDT TRC-20 Address',
      usdt_copy: 'Copy Address',
      usdt_copied: 'Copied!',
      usdt_bonus: 'Pay with USDT to receive 10% bonus tokens on every deposit.',
      usdt_notice:
        'Send only TRC-20 USDT to this address. Other assets will be lost.',
      other_title: 'Other Payment Methods',
      other_desc:
        'Visa / Mastercard / Alipay / WeChat Pay available via local support. Contact our team for a payment link.',
      contact: 'Contact Support',
      qr_label: 'Scan to Pay',
    },
    apikeys: {
      title: 'API Keys',
      subtitle: 'Generate sub-keys scoped to your projects and budgets.',
      create: 'Create New Key',
      name_placeholder: 'Key name (e.g. my-app-prod)',
      modal_title: 'New API Key',
      modal_create: 'Generate Key',
      modal_cancel: 'Cancel',
      copy: 'Copy',
      copied: 'Copied!',
      revoke: 'Revoke',
      no_keys: 'No API keys yet. Create your first key to start.',
      key_warning:
        'This key is shown only once. Store it securely — it cannot be recovered.',
      created: 'Created',
      last_used: 'Last Used',
      never: 'Never',
      status_active: 'Active',
      status_revoked: 'Revoked',
    },
    dashboard: {
      tab_topup: 'Top Up',
      tab_keys: 'API Keys',
      balance: 'Token Balance',
      balance_unit: 'tokens',
      welcome: 'Welcome back',
    },
    footer: {
      platform_title: 'Platform',
      platform_links: ['Docs', 'Pricing', 'Status', 'Changelog'],
      legal_title: 'Legal',
      legal_links: ['Terms', 'Privacy', 'AUP'],
      about_title: 'About',
      disclaimer:
        'ApexFlowHub is an AI API gateway and usage management platform. Users are responsible for compliant use. All upstream model access is operated under legally authorized accounts and provider terms.',
      copy: '© 2026 ApexFlow Studio. ApexFlowHub brand and original assets reserved.',
      powered: 'Powered by ApexFlow Studio.',
      built: 'Built on New API.',
      newapi_credit:
        'New API frontend design and development by New API contributors.',
      newapi_link: 'https://github.com/songquanpeng/one-api',
    },
  },
  zh: {
    nav: {
      home: '首页',
      dashboard: '控制台',
      docs: '文档',
      pricing: '价格',
      login: '登录',
      signup: '立即注册',
    },
    hero: {
      line1: 'Infinite Scaling, Borderless Routing.',
      line2: 'ApexFlow，就是顶流。',
      subtitle:
        '企业级 AI API 网关。任意模型、任意规模、全球边缘节点 — 零冷启动，99.9% 可用性。',
      cta_primary: '免费开始',
      cta_secondary: '查看文档',
      badge: '全球正式发布',
    },
    stats: {
      uptime: '99.9% 可用',
      uptime_sub: 'SLA 承诺保障',
      latency: '<50ms',
      latency_sub: '全球 P95 延迟',
      models: '50+ 模型',
      models_sub: '统一 API 接入',
      regions: '12 边缘节点',
      regions_sub: '全球覆盖',
    },
    features: {
      title: '为规模化开发者而生',
      subtitle: '每一个模块都为性能、可靠性与开发体验精心打造。',
      items: [
        {
          title: '全球边缘路由',
          desc: '自动路由至最近推理节点，12 个全球节点 P95 延迟低于 50ms。',
        },
        {
          title: '统一模型 API',
          desc: '一个密钥接入 GPT-4o、Claude 3、Gemini、Llama 等 50+ 模型，无需切换 SDK。',
        },
        {
          title: 'Token 经济系统',
          desc: '按量付费 Token 计费，USDT 充值享 10% 加赠，实时追踪消费。',
        },
        {
          title: '子密钥管理',
          desc: '为每个项目、团队或客户签发独立 API Key，完善的消费限额控制。',
        },
        {
          title: '限流防护盾',
          desc: '多层节流与配额执行，自动保护上游资源，从不超限。',
        },
        {
          title: '合规就绪',
          desc: '所有上游接入均通过合法授权账号运营，符合各平台服务条款，日志审计就绪。',
        },
      ],
    },
    topup: {
      title: '充值余额',
      usdt_title: 'USDT TRC-20 充值',
      usdt_address: 'USDT TRC-20 地址',
      usdt_copy: '复制地址',
      usdt_copied: '已复制！',
      usdt_bonus: '使用 USDT 充值，每笔享受 10% Token 加赠。',
      usdt_notice: '仅向此地址发送 TRC-20 USDT，其他资产将永久丢失。',
      other_title: '其他支付方式',
      other_desc:
        '支持 Visa / Mastercard / 支付宝 / 微信支付，通过本地客服获取付款链接。',
      contact: '联系客服',
      qr_label: '扫码支付',
    },
    apikeys: {
      title: 'API 密钥',
      subtitle: '为你的项目和预算生成独立子密钥。',
      create: '创建新密钥',
      name_placeholder: '密钥名称（如 my-app-prod）',
      modal_title: '新建 API 密钥',
      modal_create: '生成密钥',
      modal_cancel: '取消',
      copy: '复制',
      copied: '已复制！',
      revoke: '吊销',
      no_keys: '暂无 API 密钥，创建第一个密钥开始使用。',
      key_warning: '此密钥仅显示一次，请安全保存，无法找回。',
      created: '创建时间',
      last_used: '最后使用',
      never: '从未',
      status_active: '激活',
      status_revoked: '已吊销',
    },
    dashboard: {
      tab_topup: '充值',
      tab_keys: 'API 密钥',
      balance: 'Token 余额',
      balance_unit: '个 Token',
      welcome: '欢迎回来',
    },
    footer: {
      platform_title: '平台',
      platform_links: ['文档', '价格', '状态', '更新日志'],
      legal_title: '法律',
      legal_links: ['服务条款', '隐私政策', '使用规范'],
      about_title: '关于',
      disclaimer:
        'ApexFlowHub 是 AI API 网关与用量管理平台。用户对其合规使用负责。所有上游模型接入均通过合法授权账号依据服务提供商条款运营。',
      copy: '© 2026 ApexFlow Studio. ApexFlowHub 品牌与原创资产版权所有。',
      powered: 'Powered by ApexFlow Studio.',
      built: 'Built on New API.',
      newapi_credit: 'New API 前端设计与开发由 New API 贡献者完成。',
      newapi_link: 'https://github.com/songquanpeng/one-api',
    },
  },
};
