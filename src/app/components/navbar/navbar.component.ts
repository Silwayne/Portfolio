import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  constructor(public translation: TranslationService) {}

  changeLanguage(lang: 'de' | 'en') {
    this.translation.setLanguage(lang);
    this.closeMenu();
  }
}
