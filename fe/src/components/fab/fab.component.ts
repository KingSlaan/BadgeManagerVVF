import {
  Component,
  HostListener,
  Input,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { cilChevronTop } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-scroll-top-fab',
  standalone: true,
  imports: [CommonModule, IconDirective],
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class ScrollTopFabComponent {
  @Input() showAfter = 300;

  visible = signal(false);

  icons = { cilChevronTop };

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || 0;

    this.visible.set(scrollTop > this.showAfter);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
