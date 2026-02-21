import { Injectable, computed, signal } from '@angular/core';
import { Language, Translations, translations } from './translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Language>('en');

  t = computed<Translations>(() => translations[this.lang()]);

  setLang(lang: Language) {
    this.lang.set(lang);
  }

  toggle() {
    this.lang.update(l => (l === 'en' ? 'vi' : 'en'));
  }
}
