import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../core/i18n/i18n.service';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  i18n = inject(I18nService);

  // ── Pricing ──────────────────────────────────────────────────
  isYearly = signal(false);

  planMeta = [
    { monthlyPrice: 19, yearlyPrice: 15, isPro: false },
    { monthlyPrice: 49, yearlyPrice: 39, isPro: true },
  ];

  toggleBilling() {
    this.isYearly.update(v => !v);
  }

  // ── Features (icon + color chỉ, text lấy từ translations) ───
  featureIcons = [
    { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'bg-blue-100 text-blue-600' },
    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'bg-amber-100 text-amber-600' },
    { icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'bg-green-100 text-green-600' },
    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'bg-violet-100 text-violet-600' },
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'bg-red-100 text-red-600' },
    { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-sky-100 text-sky-600' },
  ];

  // ── Testimonials (data cố định, text không dịch vì là quote khách hàng) ─
  testimonials: Testimonial[] = [
    { name: 'Sarah Johnson', role: 'Head of Operations', company: 'TechFlow Inc.', avatar: 'https://i.pravatar.cc/96?img=1' },
    { name: 'Marcus Chen', role: 'CTO', company: 'Nexus Labs', avatar: 'https://i.pravatar.cc/96?img=3' },
    { name: 'Amelia Torres', role: 'Product Manager', company: 'GrowthSpark', avatar: 'https://i.pravatar.cc/96?img=5' },
    { name: 'David Kim', role: 'Lead Developer', company: 'ByteForge', avatar: 'https://i.pravatar.cc/96?img=12' },
    { name: 'Priya Patel', role: 'VP of Marketing', company: 'BrandWave', avatar: 'https://i.pravatar.cc/96?img=9' },
    { name: 'Tom Reynolds', role: 'Founder & CEO', company: 'Automate.io', avatar: 'https://i.pravatar.cc/96?img=15' },
  ];

  stars = Array(5).fill(0);

  currentIndex = signal(0);
  readonly visibleCount = 3;

  get maxIndex() {
    return this.testimonials.length - this.visibleCount;
  }

  prevSlide() {
    this.currentIndex.update(i => Math.max(0, i - 1));
  }

  nextSlide() {
    this.currentIndex.update(i => Math.min(this.maxIndex, i + 1));
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}
