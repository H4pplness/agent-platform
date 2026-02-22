import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  i18n = inject(I18nService);

  businessCapabilities = [
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      color: 'bg-blue-100 text-blue-600',
      title: 'Workflow Automation',
      desc: 'Visually design and automate complex business processes step-by-step. Drag-and-drop builder, no engineering skills required.',
    },
    {
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'bg-violet-100 text-violet-600',
      title: 'API Integration',
      desc: 'Connect to any internal or third-party API in minutes. Pre-built connectors for 100+ popular services including Salesforce, SAP, and more.',
    },
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'bg-green-100 text-green-600',
      title: 'Website Agent Embed',
      desc: 'Embed an AI agent directly into your website. It handles customer interactions, form submissions, and triggers workflows automatically.',
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'bg-amber-100 text-amber-600',
      title: 'Real-time Monitoring',
      desc: 'Track every workflow execution live. Get error alerts, performance dashboards, and full audit logs for compliance.',
    },
  ];

  businessUseCases = [
    { label: 'Customer Support Automation', emoji: '🎧' },
    { label: 'Invoice & Document Processing', emoji: '📄' },
    { label: 'Sales Pipeline Automation', emoji: '📈' },
    { label: 'HR Onboarding Workflows', emoji: '👥' },
    { label: 'Inventory Management', emoji: '📦' },
    { label: 'Marketing Campaign Ops', emoji: '📣' },
  ];

  multiCapabilities = [
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'bg-indigo-100 text-indigo-600',
      title: 'Cross-System Orchestration',
      desc: 'Agents natively communicate across ERP, CRM, SCM, and custom platforms — eliminating manual handoffs between departments.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'bg-amber-100 text-amber-600',
      title: 'End-to-End Automation',
      desc: 'From trigger to outcome — fully automated pipelines that span multiple systems, teams, and business units without human intervention.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'bg-green-100 text-green-600',
      title: 'Fault-Tolerant by Design',
      desc: 'Built-in retry logic, rollback policies, and conflict resolution keep complex multi-agent pipelines reliable under production load.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: 'bg-rose-100 text-rose-600',
      title: 'Role-Based Agent Control',
      desc: 'Assign each agent a specific role, permission scope, and system access — keeping complex pipelines auditable and secure.',
    },
  ];

  multiUseCases = [
    { label: 'Supply Chain Coordination', emoji: '🔗' },
    { label: 'Multi-System Order Processing', emoji: '🛒' },
    { label: 'Cross-Department Reporting', emoji: '📊' },
    { label: 'IT Operations & Incident Response', emoji: '⚙️' },
    { label: 'Financial Consolidation', emoji: '💰' },
    { label: 'Compliance & Audit Automation', emoji: '🔒' },
  ];

  comparisonRows = [
    { label: 'Best for', a: 'SMEs & mid-size teams', b: 'Large enterprises' },
    { label: 'Number of systems', a: 'Single system focus', b: 'Multiple systems at once' },
    { label: 'Workflow scope', a: 'Department-level', b: 'Cross-department / company-wide' },
    { label: 'Setup complexity', a: 'Low — no-code builder', b: 'Medium — requires system mapping' },
    { label: 'API integration', a: '✓', b: '✓' },
    { label: 'Website agent embed', a: '✓', b: '✓' },
    { label: 'Agent coordination', a: '—', b: '✓' },
    { label: 'End-to-end pipelines', a: '—', b: '✓' },
    { label: 'Role-based agent control', a: '—', b: '✓' },
  ];
}
