import { Component, HostListener, inject, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit { 
  title = 'portfolio';
  private router = inject(Router); 

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    });
  }

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
