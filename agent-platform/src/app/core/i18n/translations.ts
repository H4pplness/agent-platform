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
  },
};
