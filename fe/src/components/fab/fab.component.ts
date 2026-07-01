import { Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cilChevronTop, cilChevronBottom } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-scroll-top-fab',
  standalone: true,
  imports: [CommonModule, IconDirective],
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent {
  @Input() showAfter = 300;

  visibleTop = signal(false);
  visibleBottom = signal(true);

  icons = { cilChevronTop, cilChevronBottom };

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateVisibility();
  }

  ngOnInit(): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isAtBottom = scrollTop + viewportHeight >= documentHeight - 20;

    this.visibleTop.set(scrollTop > this.showAfter);
    this.visibleBottom.set(!isAtBottom);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}
