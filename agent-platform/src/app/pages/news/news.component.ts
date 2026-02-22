import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n/i18n.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  i18n = inject(I18nService);

  placeholderPosts = [
    { tag: 'Product Update', date: 'Jan 2026', color: 'bg-blue-100 text-blue-700' },
    { tag: 'Company News', date: 'Dec 2025', color: 'bg-green-100 text-green-700' },
    { tag: 'Engineering', date: 'Dec 2025', color: 'bg-violet-100 text-violet-700' },
    { tag: 'Product Update', date: 'Nov 2025', color: 'bg-blue-100 text-blue-700' },
    { tag: 'Tutorial', date: 'Nov 2025', color: 'bg-amber-100 text-amber-700' },
    { tag: 'Company News', date: 'Oct 2025', color: 'bg-green-100 text-green-700' },
  ];
}
