import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'products',
    redirectTo: 'products/business-agent',
    pathMatch: 'full',
  },
  {
    path: 'products/business-agent',
    loadComponent: () =>
      import('./pages/products/business-agent/business-agent.component').then(m => m.BusinessAgentComponent),
  },
  {
    path: 'products/multi-agent',
    loadComponent: () =>
      import('./pages/products/multi-agent/multi-agent.component').then(m => m.MultiAgentComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/docs/docs.component').then(m => m.DocsComponent),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./pages/news/news.component').then(m => m.NewsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  { path: '**', redirectTo: '' },
];
