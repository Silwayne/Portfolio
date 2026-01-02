declare var particlesJS: any;
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  ngAfterViewInit() {
  particlesJS('particles', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
      opacity: { value: 0.8, random: true },
      size: { value: 2, random: true },
      line_linked: {
        enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1
      },
      move: { enable: true, speed: 2, random: true }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'push' },
        onClick: { enable: true, mode: 'push' },
        resize: true
      }
    },
    retina_detect: true
  });
}

constructor(public translation: TranslationService) {}

}
