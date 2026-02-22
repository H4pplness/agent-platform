import { Component, computed, inject } from '@angular/core';
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

  private capabilityMeta = [
    { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'bg-blue-100 text-blue-600' },
    { icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'bg-green-100 text-green-600' },
    { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'bg-violet-100 text-violet-600' },
    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'bg-amber-100 text-amber-600' },
  ];

  readonly statValues = ['100+', '<10 min', 'Zero', '99.9%'];
  readonly stepNumbers = ['01', '02', '03', '04'];

  capabilities = computed(() =>
    this.capabilityMeta.map((m, i) => ({
      ...m,
      ...this.i18n.t().productPages.businessAgent.capabilities.items[i],
    }))
  );

  howItWorks = computed(() =>
    this.stepNumbers.map((step, i) => ({
      step,
      ...this.i18n.t().productPages.businessAgent.howItWorks.steps[i],
    }))
  );
}
