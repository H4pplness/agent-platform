import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    {
      title: 'Product',
      items: ['Features', 'Pricing', 'Roadmap', 'Changelog', 'Documentation'],
    },
    {
      title: 'Company',
      items: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      items: ['API Reference', 'Status', 'Community', 'Tutorials', 'Templates'],
    },
    {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
    },
  ];
}
