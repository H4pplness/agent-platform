import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n/i18n.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  i18n = inject(I18nService);

  stats = [
    { value: '2022', label: 'Founded' },
    { value: '40+', label: 'Team Members' },
    { value: '500+', label: 'Customers' },
    { value: '$12M', label: 'Raised' },
  ];

  teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Co-founder & CEO',
      avatar: 'https://i.pravatar.cc/120?img=11',
      bio: 'Former ML lead at Google. Spent 8 years scaling AI infrastructure before starting AgentAI.',
    },
    {
      name: 'Jamie Liu',
      role: 'Co-founder & CTO',
      avatar: 'https://i.pravatar.cc/120?img=7',
      bio: '10 years in distributed systems at Amazon and Cloudflare. Obsessed with developer experience.',
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Product',
      avatar: 'https://i.pravatar.cc/120?img=5',
      bio: 'Ex-Notion PM. Shipped features used by millions. Believes great products feel inevitable.',
    },
    {
      name: 'David Park',
      role: 'Head of Engineering',
      avatar: 'https://i.pravatar.cc/120?img=12',
      bio: 'Built and shipped core systems at Stripe and Linear. Loves clean architecture.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Design',
      avatar: 'https://i.pravatar.cc/120?img=9',
      bio: 'Design systems expert from Figma. Makes complexity feel effortless for users.',
    },
    {
      name: 'Tom Chen',
      role: 'Head of Growth',
      avatar: 'https://i.pravatar.cc/120?img=3',
      bio: 'Scaled 3 B2B SaaS companies from zero to 1M+ users. Numbers-driven and customer-obsessed.',
    },
    {
      name: 'Emma Wilson',
      role: 'Lead ML Engineer',
      avatar: 'https://i.pravatar.cc/120?img=16',
      bio: 'PhD in NLP from Stanford. Turns cutting-edge research into production-ready AI features.',
    },
    {
      name: 'Ryan Torres',
      role: 'Head of Customer Success',
      avatar: 'https://i.pravatar.cc/120?img=15',
      bio: 'Helped 200+ enterprise teams adopt automation at scale. Fluent in 4 languages.',
    },
  ];

  coreValues = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'bg-amber-100 text-amber-600',
      title: 'Move Fast',
      desc: 'We ship weekly. Speed is our sharpest competitive edge — learn fast, fail small, iterate quickly.',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      color: 'bg-blue-100 text-blue-600',
      title: 'Customer First',
      desc: 'Every product decision starts with the customer. We listen obsessively, then build what actually matters.',
    },
    {
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      color: 'bg-green-100 text-green-600',
      title: 'Quality Matters',
      desc: 'We take pride in the craft. Every feature is built to last — because great software is a long-term investment.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: 'bg-red-100 text-red-600',
      title: 'Trust & Transparency',
      desc: 'We are honest with customers and teammates. No hidden agendas, no dark patterns, no surprises on the bill.',
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      color: 'bg-violet-100 text-violet-600',
      title: 'Curious & Bold',
      desc: 'We ask uncomfortable questions, challenge assumptions, and are not afraid to rebuild something if a better way exists.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'bg-sky-100 text-sky-600',
      title: 'Global Impact',
      desc: 'We build for the world. Our platform is designed for teams in any industry, any timezone, any language.',
    },
  ];

  milestones = [
    {
      year: '2022',
      quarter: 'Q1',
      title: 'Company Founded',
      desc: 'Alex and Jamie left Google and Amazon to build the AI automation platform they always wanted but couldn\'t find.',
      highlight: true,
      icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: 'Seed Round — $2M',
      desc: 'Closed a $2M seed round from top angels and early-stage investors who shared our vision for agentic AI.',
      highlight: false,
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      year: '2023',
      quarter: 'Q1',
      title: 'Public Beta Launch',
      desc: 'Opened the platform to 500 hand-picked early adopters. The waitlist grew to 10,000 signups in just two weeks.',
      highlight: false,
      icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'Series A — $10M',
      desc: 'Raised $10M Series A to accelerate product development, expand the team, and enter new enterprise markets.',
      highlight: true,
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: '100 Enterprise Customers',
      desc: 'Onboarded our 100th enterprise customer. Team grew to 40 people across offices in 3 countries.',
      highlight: false,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Multi-Agent Engine v2',
      desc: 'Launched our flagship multi-agent orchestration engine — enabling teams to coordinate hundreds of AI agents simultaneously.',
      highlight: true,
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: '500+ Customers Worldwide',
      desc: 'Now serving 500+ teams in 30+ countries. 99.9% uptime achieved. Ranked #1 in AI Automation on G2.',
      highlight: false,
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];
}
