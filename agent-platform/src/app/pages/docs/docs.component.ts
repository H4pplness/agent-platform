import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n/i18n.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  i18n = inject(I18nService);

  activeProduct = signal<'business' | 'multi'>('business');

  selectProduct(p: 'business' | 'multi') {
    this.activeProduct.set(p);
  }

  businessQuickStart = [
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-blue-100 text-blue-600',
      title: 'What is Business Agent?',
      desc: 'Understand the core concepts — agents, workflows, triggers and actions — in plain language.',
      time: '5 min read',
    },
    {
      icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5',
      color: 'bg-green-100 text-green-600',
      title: 'Deploy Your First Workflow',
      desc: 'Step-by-step guide to building and deploying your first automated workflow from scratch.',
      time: '10 min read',
    },
    {
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'bg-violet-100 text-violet-600',
      title: 'Connect Your First API',
      desc: 'Learn how to integrate an external API into your agent workflow using our visual connector.',
      time: '8 min read',
    },
  ];

  businessCategories = [
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-blue-100 text-blue-600',
      label: 'Getting Started',
      desc: 'Installation, core concepts, and your first workflow.',
      count: 5,
    },
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      color: 'bg-green-100 text-green-600',
      label: 'Workflow Builder',
      desc: 'Triggers, conditions, actions, and branching logic.',
      count: 12,
    },
    {
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'bg-violet-100 text-violet-600',
      label: 'API Integration',
      desc: 'REST, GraphQL, webhooks, and pre-built connectors.',
      count: 18,
    },
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'bg-amber-100 text-amber-600',
      label: 'Website Agent Embed',
      desc: 'Embed agents in your site with a single script tag.',
      count: 9,
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'bg-sky-100 text-sky-600',
      label: 'Monitoring & Logs',
      desc: 'Real-time dashboards, alerts, and audit logs.',
      count: 7,
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'bg-red-100 text-red-600',
      label: 'Security & Compliance',
      desc: 'SSO, RBAC, encryption, and SOC 2 compliance.',
      count: 5,
    },
  ];

  multiQuickStart = [
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-indigo-100 text-indigo-600',
      title: 'What is a Multi-Agent System?',
      desc: 'Learn how multiple agents coordinate across your enterprise systems and why it matters.',
      time: '5 min read',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'bg-violet-100 text-violet-600',
      title: 'Design Your First Pipeline',
      desc: 'Map your systems, assign agent roles, and launch your first cross-system automation pipeline.',
      time: '12 min read',
    },
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      color: 'bg-green-100 text-green-600',
      title: 'Connect Multiple Systems',
      desc: 'Step-by-step guide to connecting two or more enterprise systems and orchestrating agents between them.',
      time: '10 min read',
    },
  ];

  multiCategories = [
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-indigo-100 text-indigo-600',
      label: 'Getting Started',
      desc: 'Architecture overview, prerequisites, and first pipeline.',
      count: 4,
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'bg-violet-100 text-violet-600',
      label: 'Agent Orchestration',
      desc: 'Agent roles, message passing, and coordination patterns.',
      count: 15,
    },
    {
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'bg-blue-100 text-blue-600',
      label: 'System Connectors',
      desc: 'Connecting ERP, CRM, SCM, and custom platforms.',
      count: 20,
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'bg-amber-100 text-amber-600',
      label: 'Pipeline Design',
      desc: 'End-to-end pipeline patterns, branching, and parallelism.',
      count: 11,
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'bg-green-100 text-green-600',
      label: 'Fault Tolerance',
      desc: 'Retry policies, rollback, conflict resolution, and alerting.',
      count: 8,
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: 'bg-rose-100 text-rose-600',
      label: 'Enterprise Security',
      desc: 'Role-based agent control, audit trails, and compliance.',
      count: 6,
    },
  ];
}
