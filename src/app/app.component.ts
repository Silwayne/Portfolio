import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTopBtn = document.querySelector('.scroll-top') as HTMLElement;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
    }

    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
}
