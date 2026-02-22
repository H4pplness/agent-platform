import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/i18n/i18n.service';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-multi-agent',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
  templateUrl: './multi-agent.component.html',
})
export class MultiAgentComponent {
  i18n = inject(I18nService);

  capabilities = [
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

  useCases = [
    { label: 'Supply Chain Coordination', emoji: '🔗' },
    { label: 'Multi-System Order Processing', emoji: '🛒' },
    { label: 'Cross-Department Reporting', emoji: '📊' },
    { label: 'IT Operations & Incident Response', emoji: '⚙️' },
    { label: 'Financial Consolidation', emoji: '💰' },
    { label: 'Compliance & Audit Automation', emoji: '🔒' },
  ];

  howItWorks = [
    {
      step: '01',
      title: 'Map your systems',
      desc: 'Work with our team to map all systems involved — ERP, CRM, SCM, custom apps — and define how data flows between them.',
    },
    {
      step: '02',
      title: 'Assign agent roles',
      desc: 'Each agent is assigned a specific role, system access, and permission scope. Agents know exactly what they can and cannot do.',
    },
    {
      step: '03',
      title: 'Design the pipeline',
      desc: 'Define the end-to-end workflow: triggers, agent coordination logic, fallback paths, and success conditions.',
    },
    {
      step: '04',
      title: 'Monitor at enterprise scale',
      desc: 'Centralized dashboard shows every agent\'s status, pipeline health, SLA adherence, and full audit trail.',
    },
  ];
}
