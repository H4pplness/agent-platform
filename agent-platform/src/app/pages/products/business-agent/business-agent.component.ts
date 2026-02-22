import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/i18n/i18n.service';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-business-agent',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
  templateUrl: './business-agent.component.html',
})
export class BusinessAgentComponent {
  i18n = inject(I18nService);

  capabilities = [
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

  useCases = [
    { label: 'Customer Support Automation', emoji: '🎧' },
    { label: 'Invoice & Document Processing', emoji: '📄' },
    { label: 'Sales Pipeline Automation', emoji: '📈' },
    { label: 'HR Onboarding Workflows', emoji: '👥' },
    { label: 'Inventory Management', emoji: '📦' },
    { label: 'Marketing Campaign Ops', emoji: '📣' },
  ];

  howItWorks = [
    {
      step: '01',
      title: 'Connect your system',
      desc: 'Use our visual connector to link Business Agent to your existing tools — CRM, ERP, databases, or any REST API.',
    },
    {
      step: '02',
      title: 'Design your workflow',
      desc: 'Use the drag-and-drop builder to define triggers, conditions, and actions. No coding required.',
    },
    {
      step: '03',
      title: 'Deploy in one click',
      desc: 'Publish your agent and it starts running immediately. Monitor executions from the live dashboard.',
    },
    {
      step: '04',
      title: 'Iterate and improve',
      desc: 'Use built-in analytics to identify bottlenecks and optimize your workflows continuously.',
    },
  ];
}
