import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  i18n = inject(I18nService);

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
