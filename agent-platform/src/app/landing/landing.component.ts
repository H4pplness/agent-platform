import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../core/i18n/i18n.service';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit, OnDestroy {
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
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      company: 'TechFlow Inc.',
      avatar: 'https://i.pravatar.cc/96?img=1',
      comment: 'AgentAI helped us automate repetitive support tasks and cut response time by more than half.',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO',
      company: 'Nexus Labs',
      avatar: 'https://i.pravatar.cc/96?img=3',
      comment: 'The multi-agent workflow is stable and easy to monitor. Setup took less than a day for our team.',
    },
    {
      name: 'Amelia Torres',
      role: 'Product Manager',
      company: 'GrowthSpark',
      avatar: 'https://i.pravatar.cc/96?img=5',
      comment: 'Great UI and strong API support. We launched our first production automation in one sprint.',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      company: 'ByteForge',
      avatar: 'https://i.pravatar.cc/96?img=12',
      comment: 'Performance is impressive even under heavy load. Logs and analytics make debugging straightforward.',
    },
    {
      name: 'Priya Patel',
      role: 'VP of Marketing',
      company: 'BrandWave',
      avatar: 'https://i.pravatar.cc/96?img=9',
      comment: 'We use AgentAI for campaign ops and lead routing. Productivity improved noticeably across the team.',
    },
    {
      name: 'Tom Reynolds',
      role: 'Founder & CEO',
      company: 'Automate.io',
      avatar: 'https://i.pravatar.cc/96?img=15',
      comment: 'Reliable, scalable, and easy for non-technical users. It quickly became a core part of our workflow.',
    },
  ];

  stars = Array(5).fill(0);

  currentIndex = signal(0);
  visibleCount = signal(3);

  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private resizeHandler!: () => void;

  // ── Full-page smooth scroll ───────────────────────────────────
  private readonly pageSections = ['hero', 'features', 'testimonials', 'pricing'];
  private currentPageIndex = 0;
  private isPageScrolling = false;
  private scrollAnimId: number | null = null;
  private wheelHandler!: (e: WheelEvent) => void;
  private touchStartY = 0;
  private touchHandler!: (e: TouchEvent) => void;
  private touchMoveHandler!: (e: TouchEvent) => void;

  get maxIndex() {
    return this.testimonials.length - this.visibleCount();
  }

  private updateVisibleCount() {
    const w = window.innerWidth;
    const n = w < 640 ? 1 : w < 1024 ? 2 : 3;
    this.visibleCount.set(n);
    if (this.currentIndex() > this.testimonials.length - n) {
      this.currentIndex.set(this.testimonials.length - n);
    }
  }

  ngOnInit() {
    this.startAutoPlay();
    this.initPageScroll();
    this.updateVisibleCount();
    this.resizeHandler = () => this.updateVisibleCount();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    window.removeEventListener('resize', this.resizeHandler);
    this.destroyPageScroll();
  }

  private initPageScroll() {
    this.wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if (this.isPageScrolling) return;

      const section = document.getElementById(this.pageSections[this.currentPageIndex]);
      if (!section) return;

      const scrollingDown = e.deltaY > 0;
      const tol = 4; // pixel tolerance
      const hasOverflow = section.scrollHeight > section.clientHeight + tol;

      if (hasOverflow) {
        const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - tol;
        const atTop    = section.scrollTop <= tol;

        if (scrollingDown && !atBottom) { section.scrollTop += e.deltaY; return; }
        if (!scrollingDown && !atTop)   { section.scrollTop += e.deltaY; return; }
      }

      this.navigateToPage(this.currentPageIndex + (scrollingDown ? 1 : -1));
    };

    this.touchHandler = (e: TouchEvent) => {
      this.touchStartY = e.touches[0].clientY;
    };

    this.touchMoveHandler = (e: TouchEvent) => {
      if (this.isPageScrolling) return;
      const diff = this.touchStartY - e.touches[0].clientY;
      if (Math.abs(diff) < 30) return;

      const section = document.getElementById(this.pageSections[this.currentPageIndex]);
      if (!section) return;

      const scrollingDown = diff > 0;
      const tol = 4;
      const hasOverflow = section.scrollHeight > section.clientHeight + tol;

      if (hasOverflow) {
        const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - tol;
        const atTop    = section.scrollTop <= tol;

        if (scrollingDown && !atBottom) {
          e.preventDefault();
          section.scrollTop += diff;
          this.touchStartY = e.touches[0].clientY;
          return;
        }
        if (!scrollingDown && !atTop) {
          e.preventDefault();
          section.scrollTop += diff;
          this.touchStartY = e.touches[0].clientY;
          return;
        }
      }

      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
      this.navigateToPage(this.currentPageIndex + (scrollingDown ? 1 : -1));
    };

    window.addEventListener('wheel', this.wheelHandler, { passive: false });
    window.addEventListener('touchstart', this.touchHandler, { passive: true });
    window.addEventListener('touchmove', this.touchMoveHandler, { passive: false });
  }

  private destroyPageScroll() {
    window.removeEventListener('wheel', this.wheelHandler);
    window.removeEventListener('touchstart', this.touchHandler);
    window.removeEventListener('touchmove', this.touchMoveHandler);
    if (this.scrollAnimId !== null) cancelAnimationFrame(this.scrollAnimId);
  }

  private navigateToPage(index: number) {
    const clamped = Math.max(0, Math.min(this.pageSections.length - 1, index));
    if (clamped === this.currentPageIndex) return;

    const goingDown = clamped > this.currentPageIndex;
    this.currentPageIndex = clamped;

    const el = document.getElementById(this.pageSections[clamped]);
    if (!el) return;

    // Đặt vị trí scroll nội bộ của section đích:
    // - xuống → bắt đầu từ đầu section
    // - lên   → bắt đầu từ cuối section (để người dùng thấy phần cuối trước)
    el.scrollTop = goingDown ? 0 : el.scrollHeight;

    const navbarH = 64;
    const targetY = el.getBoundingClientRect().top + window.scrollY - navbarH;
    this.smoothScroll(targetY, 500);
  }

  private smoothScroll(targetY: number, duration: number) {
    if (this.scrollAnimId !== null) cancelAnimationFrame(this.scrollAnimId);
    this.isPageScrolling = true;

    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime: number | null = null;

    // easeInOutQuart – fast start/end, very smooth mid-curve
    const ease = (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diff * ease(progress));
      if (progress < 1) {
        this.scrollAnimId = requestAnimationFrame(step);
      } else {
        this.isPageScrolling = false;
        this.scrollAnimId = null;
      }
    };

    this.scrollAnimId = requestAnimationFrame(step);
  }

  startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.currentIndex.update(i => (i >= this.maxIndex ? 0 : i + 1));
    }, 3000);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer !== null) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
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
