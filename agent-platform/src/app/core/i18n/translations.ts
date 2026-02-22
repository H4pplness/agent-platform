export type Language = 'en' | 'vi';

export interface Translations {
  navbar: {
    home: string;
    products: string;
    docs: string;
    news: string;
    about: string;
    signIn: string;
    getStarted: string;
    productItems: { name: string; desc: string; route: string }[];
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    dashboard: {
      url: string;
      sidebar: string[];
      stats: { label: string; val: string; color: string }[];
      agents: { name: string; status: string; tasks: number }[];
      statusRunning: string;
      statusIdle: string;
      taskCompleted: string;
      justNow: string;
    };
    stats: { value: string; label: string }[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    save: string;
    billedYearly: string;
    savePerYear: string;
    plans: {
      name: string;
      description: string;
      features: string[];
      cta: string;
    }[];
    mostPopular: string;
    enterprise: string;
    contactSales: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; items: string[] }[];
    copyright: string;
    madeWith: string;
    madeFor: string;
  };
  pages: {
    products: {
      badge: string;
      title: string;
      subtitle: string;
      comingSoon: string;
    };
    docs: {
      badge: string;
      title: string;
      subtitle: string;
      comingSoon: string;
    };
    news: {
      badge: string;
      title: string;
      subtitle: string;
      comingSoon: string;
    };
    about: {
      badge: string;
      title: string;
      subtitle: string;
      comingSoon: string;
    };
  };
  productPages: {
    businessAgent: {
      hero: { tag: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; stats: { label: string }[] };
      capabilities: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
      howItWorks: { badge: string; title: string; steps: { title: string; desc: string }[] };
      useCases: { badge: string; title: string; subtitle: string; items: { label: string; emoji: string }[] };
      testimonial: { quote: string; author: string; role: string };
      cta: { title: string; subtitle: string; primary: string; secondary: string };
    };
    multiAgent: {
      hero: { tag: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; stats: { label: string }[] };
      capabilities: { badge: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
      howItWorks: { badge: string; title: string; steps: { title: string; desc: string }[] };
      useCases: { badge: string; title: string; subtitle: string; items: { label: string; emoji: string }[] };
      testimonial: { quote: string; author: string; role: string };
      cta: { title: string; subtitle: string; primary: string; secondary: string };
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: 'Home',
      products: 'Products',
      docs: 'Docs',
      news: 'News',
      about: 'About',
      signIn: 'Sign In',
      getStarted: 'Get Started Free',
      productItems: [
        { name: 'Business Agent', desc: 'AI automation for your existing business systems', route: '/products/business-agent' },
        { name: 'Multi-Agent System', desc: 'Coordinate AI agents across your entire enterprise', route: '/products/multi-agent' },
      ],
    },

    hero: {
      badge: 'New: v2.0 Released — Now with Multi-Agent Support',
      titleLine1: 'Build Intelligent',
      titleLine2: 'AI Agents',
      titleLine3: 'at Scale',
      subtitle: 'The most powerful AI platform to create, manage and deploy intelligent agents. Automate your workflows and supercharge your team\'s productivity.',
      ctaPrimary: 'Get Started Free',
      ctaSecondary: 'Watch Demo',
      dashboard: {
        url: 'app.agentai.io/dashboard',
        sidebar: ['Dashboard', 'Agents', 'Tasks', 'Analytics', 'Settings'],
        stats: [
          { label: 'Active Agents', val: '12', color: 'text-blue-600' },
          { label: 'Tasks Today', val: '1,847', color: 'text-green-600' },
          { label: 'Success Rate', val: '99.2%', color: 'text-violet-600' },
          { label: 'Cost Saved', val: '$342', color: 'text-amber-600' },
        ],
        agents: [
          { name: 'Email Responder', status: 'Running', tasks: 234 },
          { name: 'Data Scraper', status: 'Running', tasks: 891 },
          { name: 'Report Builder', status: 'Idle', tasks: 56 },
        ],
        statusRunning: 'Running',
        statusIdle: 'Idle',
        taskCompleted: 'Task Completed',
        justNow: 'just now',
      },
      stats: [
        { value: '500+', label: 'Teams Worldwide' },
        { value: '10M+', label: 'Tasks Automated' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '<100ms', label: 'Avg Latency' },
      ],
    },

    features: {
      badge: 'Features',
      title: 'Everything you need to build\npowerful AI workflows',
      subtitle: 'From simple automations to complex multi-agent systems — AgentAI has the tools to make it happen, fast.',
      items: [
        {
          title: 'AI Agent Builder',
          description: 'Visually build and configure intelligent AI agents with our drag-and-drop interface. No coding required.',
        },
        {
          title: 'Fast Execution',
          description: 'Run thousands of tasks simultaneously with sub-second latency. Powered by distributed infrastructure.',
        },
        {
          title: '100+ Integrations',
          description: 'Connect with your favorite tools — Slack, GitHub, Notion, Salesforce and many more out of the box.',
        },
        {
          title: 'Analytics Dashboard',
          description: 'Track agent performance, task completion rates, and costs in real-time with beautiful dashboards.',
        },
        {
          title: 'Enterprise Security',
          description: 'SOC 2 Type II certified with end-to-end encryption, SSO, RBAC, and audit logs for compliance.',
        },
        {
          title: 'Multi-Cloud Deploy',
          description: 'Deploy agents to AWS, GCP, Azure or on-premise. Full control over where your data lives.',
        },
      ],
    },

    testimonials: {
      badge: 'Testimonials',
      title: 'Loved by teams worldwide',
      subtitle: 'Join thousands of teams who use AgentAI to automate their workflows and scale their operations.',
    },

    pricing: {
      badge: 'Pricing',
      title: 'Simple, transparent pricing',
      subtitle: 'Choose the plan that works for you. No hidden fees, cancel anytime.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: 'Save 20%',
      billedYearly: 'Billed yearly — save',
      savePerYear: '/year',
      mostPopular: 'Most Popular',
      plans: [
        {
          name: 'Starter',
          description: 'Perfect for individuals and small teams getting started with AI automation.',
          features: [
            'Up to 5 AI Agents',
            '10,000 tasks/month',
            'Basic API access',
            '5 integrations',
            'Email support',
            'Community access',
          ],
          cta: 'Start for Free',
        },
        {
          name: 'Pro',
          description: 'For growing teams that need more power, scale, and advanced features.',
          features: [
            'Unlimited AI Agents',
            '1,000,000 tasks/month',
            'Advanced API access',
            'Unlimited integrations',
            'Priority support',
            'Custom domain',
            'Advanced analytics',
            'Team collaboration',
          ],
          cta: 'Get Pro Now',
        },
      ],
      enterprise: 'Need a custom plan for your enterprise?',
      contactSales: 'Contact our sales team →',
    },

    footer: {
      tagline: 'The AI platform for modern teams. Build, manage and deploy intelligent agents at scale.',
      columns: [
        {
          title: 'Product',
          items: ['Features', 'Pricing', 'Roadmap', 'Changelog', 'Documentation'],
        },
        {
          title: 'Company',
          items: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
        },
        {
          title: 'Resources',
          items: ['API Reference', 'Status', 'Community', 'Tutorials', 'Templates'],
        },
        {
          title: 'Legal',
          items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
        },
      ],
      copyright: 'AgentAI Platform. All rights reserved.',
      madeWith: 'Made with',
      madeFor: 'for the AI community',
    },

    pages: {
      products: {
        badge: 'Products',
        title: 'Our Products & Solutions',
        subtitle: 'Powerful tools designed to help your team build, automate, and scale with AI.',
        comingSoon: 'Coming Soon',
      },
      docs: {
        badge: 'Documentation',
        title: 'Developer Documentation',
        subtitle: 'Everything you need to integrate and build with AgentAI APIs and SDKs.',
        comingSoon: 'Coming Soon',
      },
      news: {
        badge: 'News & Updates',
        title: 'Latest from AgentAI',
        subtitle: 'Product updates, company news, and insights from our team.',
        comingSoon: 'Coming Soon',
      },
      about: {
        badge: 'About Us',
        title: 'Building the future of AI automation',
        subtitle: 'We\'re a team of engineers, designers and AI researchers on a mission to make intelligent automation accessible to everyone.',
        comingSoon: 'Coming Soon',
      },
    },

    productPages: {
      businessAgent: {
        hero: {
          tag: 'AI Automation Platform',
          subtitle: 'Integrate AI agents directly into your existing enterprise systems. Build custom automation workflows, connect any API, and embed intelligent agents into your website — without writing a single line of code.',
          ctaPrimary: 'Start Free Trial',
          ctaSecondary: 'Read Documentation →',
          stats: [
            { label: 'Pre-built connectors' },
            { label: 'Time to first workflow' },
            { label: 'Code required' },
            { label: 'Uptime SLA' },
          ],
        },
        capabilities: {
          badge: 'Capabilities',
          title: 'Everything you need to automate',
          subtitle: 'Four core pillars that make Business Agent the fastest way to bring AI into your existing operations.',
          items: [
            { title: 'Workflow Automation', desc: 'Visually build and deploy automated workflows. Connect steps, conditions, and integrations without limits.' },
            { title: 'API Integration', desc: 'Connect to any REST API, webhook, or internal system. Custom authentication, headers, and data mapping included.' },
            { title: 'Website Agent Embed', desc: 'Add an AI agent directly to your website with one line of embed code. No backend setup required.' },
            { title: 'Real-time Monitoring', desc: 'Track agent activity, success rates, and anomaly alerts in a live dashboard designed for operations teams.' },
          ],
        },
        howItWorks: {
          badge: 'How it works',
          title: 'Up and running in 4 steps',
          steps: [
            { title: 'Connect your systems', desc: 'Link your existing tools, APIs, and databases using our pre-built connectors or custom API setup.' },
            { title: 'Design the workflow', desc: 'Use the visual builder to define triggers, actions, and logic. No code — drag, drop, and configure.' },
            { title: 'Deploy the agent', desc: 'Go live in one click. Your agent starts working immediately, handling tasks 24/7 on your behalf.' },
            { title: 'Iterate and improve', desc: 'Use built-in analytics to see how your agent performs and refine it over time with zero downtime.' },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'What teams use Business Agent for',
          subtitle: 'From customer-facing automations to internal operations, Business Agent fits naturally into workflows across every department.',
          items: [
            { label: 'Customer Support', emoji: '🤝' },
            { label: 'Invoice Processing', emoji: '📄' },
            { label: 'Sales Pipeline', emoji: '📈' },
            { label: 'HR Onboarding', emoji: '🎯' },
            { label: 'Inventory Updates', emoji: '📦' },
            { label: 'Marketing Automation', emoji: '📣' },
          ],
        },
        testimonial: {
          quote: 'Business Agent helped us cut response time by more than half. We automated our entire support triage workflow in one afternoon.',
          author: 'Sarah Johnson',
          role: 'Head of Operations, TechFlow Inc.',
        },
        cta: {
          title: 'Ready to automate your first workflow?',
          subtitle: 'Start free — no credit card required. Deploy your first agent in under 10 minutes.',
          primary: 'Start Free Trial',
          secondary: 'Read Documentation →',
        },
      },

      multiAgent: {
        hero: {
          tag: 'Enterprise AI Platform',
          subtitle: 'For large enterprises with multiple systems that need to work in sync. AI agents coordinate across your ERP, CRM, SCM and custom platforms — delivering fully automated, end-to-end pipelines across every department.',
          ctaPrimary: 'Talk to Sales',
          ctaSecondary: 'Read Documentation →',
          stats: [
            { label: 'Agents in pipeline' },
            { label: 'System or platform' },
            { label: 'End-to-end automated' },
            { label: 'Enterprise certified' },
          ],
        },
        capabilities: {
          badge: 'Capabilities',
          title: 'Built for enterprise complexity',
          subtitle: 'Four core pillars that make Multi-Agent System the right choice for large-scale, cross-department automation.',
          items: [
            { title: 'Cross-System Orchestration', desc: 'Agents natively communicate across ERP, CRM, SCM, and custom platforms — eliminating manual handoffs between departments.' },
            { title: 'End-to-End Automation', desc: 'From trigger to outcome — fully automated pipelines that span multiple systems, teams, and business units without human intervention.' },
            { title: 'Fault-Tolerant by Design', desc: 'Built-in retry logic, rollback policies, and conflict resolution keep complex multi-agent pipelines reliable under production load.' },
            { title: 'Role-Based Agent Control', desc: 'Assign each agent a specific role, permission scope, and system access — keeping complex pipelines auditable and secure.' },
          ],
        },
        howItWorks: {
          badge: 'How it works',
          title: 'Enterprise deployment in 4 phases',
          steps: [
            { title: 'Map your systems', desc: 'Work with our team to map all systems involved — ERP, CRM, SCM, custom apps — and define how data flows between them.' },
            { title: 'Assign agent roles', desc: 'Each agent is assigned a specific role, system access, and permission scope. Agents know exactly what they can and cannot do.' },
            { title: 'Design the pipeline', desc: 'Define the end-to-end workflow: triggers, agent coordination logic, fallback paths, and success conditions.' },
            { title: 'Monitor at enterprise scale', desc: 'Centralized dashboard shows every agent\'s status, pipeline health, SLA adherence, and full audit trail.' },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'What enterprises use Multi-Agent for',
          subtitle: 'When a process spans multiple systems and teams, Multi-Agent System handles the orchestration — so your people can focus on decisions, not data movement.',
          items: [
            { label: 'Supply Chain Coordination', emoji: '🔗' },
            { label: 'Multi-System Order Processing', emoji: '🛒' },
            { label: 'Cross-Department Reporting', emoji: '📊' },
            { label: 'IT Operations & Incident Response', emoji: '⚙️' },
            { label: 'Financial Consolidation', emoji: '💰' },
            { label: 'Compliance & Audit Automation', emoji: '🔒' },
          ],
        },
        testimonial: {
          quote: 'The multi-agent workflow is stable and easy to monitor. It connects our ERP, CRM, and warehouse system seamlessly. Setup took less than a week.',
          author: 'Marcus Chen',
          role: 'CTO, Nexus Labs',
        },
        cta: {
          title: 'Ready to connect your enterprise?',
          subtitle: 'Talk to our enterprise team. We\'ll help you design the right multi-agent architecture for your systems.',
          primary: 'Talk to Sales',
          secondary: 'Read Documentation →',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // TIẾNG VIỆT
  // ─────────────────────────────────────────────────────────────
  vi: {
    navbar: {
      home: 'Trang chủ',
      products: 'Sản phẩm',
      docs: 'Tài liệu',
      news: 'Tin tức',
      about: 'Giới thiệu',
      signIn: 'Đăng nhập',
      getStarted: 'Bắt đầu miễn phí',
      productItems: [
        { name: 'Business Agent', desc: 'Tự động hóa AI cho các hệ thống doanh nghiệp hiện có', route: '/products/business-agent' },
        { name: 'Multi-Agent System', desc: 'Điều phối AI agents trên toàn bộ hệ thống doanh nghiệp', route: '/products/multi-agent' },
      ],
    },

    hero: {
      badge: 'Mới: v2.0 ra mắt — Hỗ trợ đa AI Agent',
      titleLine1: 'Xây dựng',
      titleLine2: 'AI Agents',
      titleLine3: 'thông minh, quy mô lớn',
      subtitle: 'Nền tảng AI mạnh mẽ nhất để tạo, quản lý và triển khai các agents thông minh. Tự động hóa quy trình và tăng năng suất đội nhóm của bạn.',
      ctaPrimary: 'Bắt đầu miễn phí',
      ctaSecondary: 'Xem Demo',
      dashboard: {
        url: 'app.agentai.io/bang-dieu-khien',
        sidebar: ['Tổng quan', 'Agents', 'Công việc', 'Phân tích', 'Cài đặt'],
        stats: [
          { label: 'Agents đang hoạt động', val: '12', color: 'text-blue-600' },
          { label: 'Công việc hôm nay', val: '1.847', color: 'text-green-600' },
          { label: 'Tỷ lệ thành công', val: '99.2%', color: 'text-violet-600' },
          { label: 'Chi phí tiết kiệm', val: '$342', color: 'text-amber-600' },
        ],
        agents: [
          { name: 'Trả lời Email', status: 'Đang chạy', tasks: 234 },
          { name: 'Thu thập Dữ liệu', status: 'Đang chạy', tasks: 891 },
          { name: 'Tạo Báo cáo', status: 'Rảnh', tasks: 56 },
        ],
        statusRunning: 'Đang chạy',
        statusIdle: 'Rảnh',
        taskCompleted: 'Hoàn thành',
        justNow: 'vừa xong',
      },
      stats: [
        { value: '500+', label: 'Đội nhóm toàn cầu' },
        { value: '10M+', label: 'Công việc tự động' },
        { value: '99.9%', label: 'Độ ổn định SLA' },
        { value: '<100ms', label: 'Độ trễ trung bình' },
      ],
    },

    features: {
      badge: 'Tính năng',
      title: 'Mọi thứ bạn cần để xây dựng\nquy trình AI mạnh mẽ',
      subtitle: 'Từ tự động hóa đơn giản đến hệ thống đa agent phức tạp — AgentAI có đầy đủ công cụ để triển khai nhanh chóng.',
      items: [
        {
          title: 'Xây dựng AI Agent',
          description: 'Trực quan xây dựng và cấu hình AI agents bằng giao diện kéo-thả. Không cần viết code.',
        },
        {
          title: 'Thực thi Nhanh',
          description: 'Chạy hàng nghìn công việc đồng thời với độ trễ dưới giây. Được hỗ trợ bởi hạ tầng phân tán.',
        },
        {
          title: '100+ Tích hợp',
          description: 'Kết nối với các công cụ yêu thích — Slack, GitHub, Notion, Salesforce và nhiều hơn nữa.',
        },
        {
          title: 'Bảng Phân tích',
          description: 'Theo dõi hiệu suất agent, tỷ lệ hoàn thành và chi phí theo thời gian thực với dashboard trực quan.',
        },
        {
          title: 'Bảo mật Doanh nghiệp',
          description: 'Chứng nhận SOC 2 Type II với mã hóa đầu cuối, SSO, RBAC và nhật ký kiểm toán đầy đủ.',
        },
        {
          title: 'Triển khai Đa đám mây',
          description: 'Triển khai agent lên AWS, GCP, Azure hoặc on-premise. Toàn quyền kiểm soát nơi lưu trữ dữ liệu.',
        },
      ],
    },

    testimonials: {
      badge: 'Đánh giá khách hàng',
      title: 'Được tin dùng bởi các đội nhóm toàn cầu',
      subtitle: 'Hàng nghìn đội nhóm sử dụng AgentAI để tự động hóa quy trình và mở rộng hoạt động kinh doanh.',
    },

    pricing: {
      badge: 'Bảng giá',
      title: 'Bảng giá đơn giản, minh bạch',
      subtitle: 'Chọn gói phù hợp với bạn. Không phí ẩn, hủy bất kỳ lúc nào.',
      monthly: 'Hàng tháng',
      yearly: 'Hàng năm',
      save: 'Tiết kiệm 20%',
      billedYearly: 'Thanh toán theo năm — tiết kiệm',
      savePerYear: '/năm',
      mostPopular: 'Phổ biến nhất',
      plans: [
        {
          name: 'Khởi đầu',
          description: 'Phù hợp cho cá nhân và nhóm nhỏ bắt đầu với tự động hóa AI.',
          features: [
            'Tối đa 5 AI Agents',
            '10.000 công việc/tháng',
            'Truy cập API cơ bản',
            '5 tích hợp',
            'Hỗ trợ qua Email',
            'Truy cập cộng đồng',
          ],
          cta: 'Bắt đầu miễn phí',
        },
        {
          name: 'Chuyên nghiệp',
          description: 'Dành cho đội nhóm đang phát triển cần sức mạnh và tính năng nâng cao.',
          features: [
            'Không giới hạn AI Agents',
            '1.000.000 công việc/tháng',
            'Truy cập API nâng cao',
            'Không giới hạn tích hợp',
            'Hỗ trợ ưu tiên',
            'Tên miền tùy chỉnh',
            'Phân tích nâng cao',
            'Cộng tác nhóm',
          ],
          cta: 'Đăng ký Chuyên nghiệp',
        },
      ],
      enterprise: 'Cần gói tùy chỉnh cho doanh nghiệp của bạn?',
      contactSales: 'Liên hệ đội bán hàng →',
    },

    footer: {
      tagline: 'Nền tảng AI cho các đội nhóm hiện đại. Xây dựng, quản lý và triển khai agents thông minh quy mô lớn.',
      columns: [
        {
          title: 'Sản phẩm',
          items: ['Tính năng', 'Bảng giá', 'Lộ trình', 'Nhật ký thay đổi', 'Tài liệu'],
        },
        {
          title: 'Công ty',
          items: ['Về chúng tôi', 'Blog', 'Tuyển dụng', 'Báo chí', 'Liên hệ'],
        },
        {
          title: 'Tài nguyên',
          items: ['Tài liệu API', 'Trạng thái', 'Cộng đồng', 'Hướng dẫn', 'Mẫu có sẵn'],
        },
        {
          title: 'Pháp lý',
          items: ['Chính sách bảo mật', 'Điều khoản dịch vụ', 'Chính sách Cookie', 'GDPR'],
        },
      ],
      copyright: 'AgentAI Platform. Tất cả quyền được bảo lưu.',
      madeWith: 'Làm với',
      madeFor: 'cho cộng đồng AI',
    },

    pages: {
      products: {
        badge: 'Sản phẩm',
        title: 'Sản phẩm & Giải pháp',
        subtitle: 'Các công cụ mạnh mẽ giúp đội nhóm của bạn xây dựng, tự động hóa và mở rộng với AI.',
        comingSoon: 'Sắp ra mắt',
      },
      docs: {
        badge: 'Tài liệu',
        title: 'Tài liệu dành cho lập trình viên',
        subtitle: 'Mọi thứ bạn cần để tích hợp và xây dựng với APIs và SDKs của AgentAI.',
        comingSoon: 'Sắp ra mắt',
      },
      news: {
        badge: 'Tin tức & Cập nhật',
        title: 'Tin tức mới nhất từ AgentAI',
        subtitle: 'Cập nhật sản phẩm, tin tức công ty và những hiểu biết từ đội ngũ của chúng tôi.',
        comingSoon: 'Sắp ra mắt',
      },
      about: {
        badge: 'Về chúng tôi',
        title: 'Xây dựng tương lai của tự động hóa AI',
        subtitle: 'Chúng tôi là đội ngũ kỹ sư, nhà thiết kế và nhà nghiên cứu AI với sứ mệnh làm cho tự động hóa thông minh trở nên dễ tiếp cận với mọi người.',
        comingSoon: 'Sắp ra mắt',
      },
    },

    productPages: {
      businessAgent: {
        hero: {
          tag: 'Nền tảng Tự động hóa AI',
          subtitle: 'Tích hợp AI agents trực tiếp vào hệ thống doanh nghiệp hiện có. Xây dựng quy trình tự động tùy chỉnh, kết nối bất kỳ API nào và nhúng agents thông minh vào website — không cần viết một dòng code.',
          ctaPrimary: 'Dùng thử miễn phí',
          ctaSecondary: 'Đọc tài liệu →',
          stats: [
            { label: 'Connectors có sẵn' },
            { label: 'Thời gian triển khai đầu tiên' },
            { label: 'Cần viết code' },
            { label: 'Độ ổn định SLA' },
          ],
        },
        capabilities: {
          badge: 'Tính năng',
          title: 'Tất cả những gì bạn cần để tự động hóa',
          subtitle: 'Bốn trụ cột cốt lõi giúp Business Agent trở thành cách nhanh nhất để đưa AI vào hoạt động kinh doanh hiện có.',
          items: [
            { title: 'Tự động hóa Quy trình', desc: 'Trực quan xây dựng và triển khai quy trình tự động. Kết nối các bước, điều kiện và tích hợp không giới hạn mà không cần code.' },
            { title: 'Tích hợp API', desc: 'Kết nối với bất kỳ REST API, webhook hoặc hệ thống nội bộ nào. Hỗ trợ xác thực tùy chỉnh, tiêu đề HTTP và ánh xạ dữ liệu.' },
            { title: 'Nhúng Agent vào Website', desc: 'Thêm AI agent trực tiếp lên website chỉ với một dòng mã nhúng. Không cần thiết lập backend.' },
            { title: 'Giám sát Thời gian thực', desc: 'Theo dõi hoạt động agent, tỷ lệ thành công và cảnh báo bất thường trên dashboard trực tiếp.' },
          ],
        },
        howItWorks: {
          badge: 'Cách hoạt động',
          title: 'Triển khai và chạy trong 4 bước',
          steps: [
            { title: 'Kết nối hệ thống', desc: 'Liên kết các công cụ, API và cơ sở dữ liệu hiện có bằng connectors có sẵn hoặc cài đặt API tùy chỉnh.' },
            { title: 'Thiết kế quy trình', desc: 'Dùng trình tạo trực quan để xác định trigger, hành động và logic. Không code — kéo, thả và cấu hình.' },
            { title: 'Triển khai agent', desc: 'Chạy thật chỉ với một cú click. Agent bắt đầu xử lý công việc ngay lập tức, 24/7 thay bạn.' },
            { title: 'Cải tiến liên tục', desc: 'Dùng phân tích tích hợp sẵn để theo dõi hiệu suất agent và tinh chỉnh không gián đoạn theo thời gian.' },
          ],
        },
        useCases: {
          badge: 'Trường hợp Sử dụng',
          title: 'Các đội nhóm dùng Business Agent để làm gì',
          subtitle: 'Từ tự động hóa hướng khách hàng đến vận hành nội bộ, Business Agent phù hợp với quy trình của mọi phòng ban.',
          items: [
            { label: 'Hỗ trợ Khách hàng', emoji: '🤝' },
            { label: 'Xử lý Hóa đơn', emoji: '📄' },
            { label: 'Quản lý Pipeline Bán hàng', emoji: '📈' },
            { label: 'Onboarding Nhân sự', emoji: '🎯' },
            { label: 'Cập nhật Kho hàng', emoji: '📦' },
            { label: 'Tự động hóa Marketing', emoji: '📣' },
          ],
        },
        testimonial: {
          quote: 'Business Agent helped us cut response time by more than half. We automated our entire support triage workflow in one afternoon.',
          author: 'Sarah Johnson',
          role: 'Trưởng vận hành, TechFlow Inc.',
        },
        cta: {
          title: 'Sẵn sàng tự động hóa quy trình đầu tiên?',
          subtitle: 'Bắt đầu miễn phí — không cần thẻ tín dụng. Triển khai agent đầu tiên trong dưới 10 phút.',
          primary: 'Dùng thử miễn phí',
          secondary: 'Đọc tài liệu →',
        },
      },

      multiAgent: {
        hero: {
          tag: 'Nền tảng AI Doanh nghiệp',
          subtitle: 'Dành cho doanh nghiệp lớn với nhiều hệ thống cần phối hợp đồng bộ. Các AI agents điều phối qua ERP, CRM, SCM và nền tảng tùy chỉnh — tự động hóa hoàn toàn từ đầu đến cuối trên mọi phòng ban.',
          ctaPrimary: 'Liên hệ Kinh doanh',
          ctaSecondary: 'Đọc tài liệu →',
          stats: [
            { label: 'Agents trong pipeline' },
            { label: 'Hệ thống hoặc nền tảng' },
            { label: 'Tự động hóa hoàn toàn' },
            { label: 'Chứng nhận Doanh nghiệp' },
          ],
        },
        capabilities: {
          badge: 'Tính năng',
          title: 'Xây dựng cho độ phức tạp doanh nghiệp',
          subtitle: 'Bốn trụ cột cốt lõi giúp Multi-Agent System là lựa chọn phù hợp cho tự động hóa quy mô lớn, liên phòng ban.',
          items: [
            { title: 'Điều phối Đa hệ thống', desc: 'Các agents giao tiếp trực tiếp qua ERP, CRM, SCM và nền tảng tùy chỉnh — loại bỏ bàn giao thủ công giữa các phòng ban.' },
            { title: 'Tự động hóa Đầu-cuối', desc: 'Từ trigger đến kết quả — pipeline hoàn toàn tự động trải dài qua nhiều hệ thống, đội nhóm và đơn vị kinh doanh.' },
            { title: 'Thiết kế Chịu lỗi', desc: 'Logic thử lại tích hợp, chính sách rollback và giải quyết xung đột giữ cho pipeline đa-agent ổn định dưới tải sản xuất.' },
            { title: 'Kiểm soát Agent theo Vai trò', desc: 'Gán cho mỗi agent một vai trò cụ thể, phạm vi quyền và quyền truy cập hệ thống — giữ cho pipeline phức tạp có thể kiểm toán và bảo mật.' },
          ],
        },
        howItWorks: {
          badge: 'Cách hoạt động',
          title: 'Triển khai doanh nghiệp trong 4 giai đoạn',
          steps: [
            { title: 'Lập bản đồ hệ thống', desc: 'Làm việc cùng đội ngũ để lập bản đồ tất cả hệ thống liên quan — ERP, CRM, SCM, ứng dụng tùy chỉnh — và xác định luồng dữ liệu.' },
            { title: 'Phân công vai trò agent', desc: 'Mỗi agent được gán vai trò cụ thể, quyền truy cập hệ thống và phạm vi quyền. Agents biết chính xác mình có thể và không thể làm gì.' },
            { title: 'Thiết kế pipeline', desc: 'Xác định quy trình từ đầu đến cuối: trigger, logic điều phối agent, đường dự phòng và điều kiện thành công.' },
            { title: 'Giám sát quy mô doanh nghiệp', desc: 'Dashboard trung tâm hiển thị trạng thái mỗi agent, sức khỏe pipeline, tuân thủ SLA và nhật ký kiểm toán đầy đủ.' },
          ],
        },
        useCases: {
          badge: 'Trường hợp Sử dụng',
          title: 'Doanh nghiệp dùng Multi-Agent để làm gì',
          subtitle: 'Khi một quy trình trải dài qua nhiều hệ thống và đội nhóm, Multi-Agent System xử lý việc điều phối — để nhân lực tập trung vào quyết định, không phải di chuyển dữ liệu.',
          items: [
            { label: 'Điều phối Chuỗi cung ứng', emoji: '🔗' },
            { label: 'Xử lý Đơn hàng Đa hệ thống', emoji: '🛒' },
            { label: 'Báo cáo Liên phòng ban', emoji: '📊' },
            { label: 'Vận hành IT & Xử lý sự cố', emoji: '⚙️' },
            { label: 'Hợp nhất Tài chính', emoji: '💰' },
            { label: 'Tự động hóa Tuân thủ & Kiểm toán', emoji: '🔒' },
          ],
        },
        testimonial: {
          quote: 'The multi-agent workflow is stable and easy to monitor. It connects our ERP, CRM, and warehouse system seamlessly. Setup took less than a week.',
          author: 'Marcus Chen',
          role: 'Giám đốc Công nghệ, Nexus Labs',
        },
        cta: {
          title: 'Sẵn sàng kết nối doanh nghiệp của bạn?',
          subtitle: 'Liên hệ đội doanh nghiệp của chúng tôi. Chúng tôi sẽ giúp bạn thiết kế kiến trúc multi-agent phù hợp.',
          primary: 'Liên hệ Kinh doanh',
          secondary: 'Đọc tài liệu →',
        },
      },
    },
  },
};
