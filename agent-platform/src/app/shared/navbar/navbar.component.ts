import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import { ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  i18n = inject(I18nService);
  theme = inject(ThemeService);
  private router = inject(Router);

  get isProductsActive() {
    return this.router.url.startsWith('/products');
  }

  get useWhiteText() {
    if (!this.isScrolled()) {
      // Navbar transparent: landing (/) and products pages have dark/colourful hero backgrounds
      return this.router.url === '/' || this.router.url.startsWith('/products');
    }
    // Navbar solid: white in light mode, slate-900 in dark mode
    return this.theme.isDark();
  }

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isProductsOpen = signal(false);
  isMobileProductsOpen = signal(false);

  private closeProductsTimer: ReturnType<typeof setTimeout> | null = null;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
    if (!this.isMobileMenuOpen()) {
      this.isMobileProductsOpen.set(false);
    }
  }

  openProducts() {
    if (this.closeProductsTimer !== null) {
      clearTimeout(this.closeProductsTimer);
      this.closeProductsTimer = null;
    }
    this.isProductsOpen.set(true);
  }

  closeProducts() {
    this.closeProductsTimer = setTimeout(() => {
      this.isProductsOpen.set(false);
    }, 150);
  }

  toggleMobileProducts() {
    this.isMobileProductsOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.isMobileProductsOpen.set(false);
  }
}
