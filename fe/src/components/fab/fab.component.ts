import { Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cilChevronTop, cilChevronBottom } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-scroll-top-fab',
  standalone: true,
  imports: [CommonModule, IconDirective, DragDropModule],
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent {
  @Input() showAfter = 300;

  visibleTop = signal(false);
  visibleBottom = signal(true);

  topFabPosition = { x: 0, y: 0 };
  bottomFabPosition = { x: 0, y: 0 };

  private readonly TOP_FAB_KEY = 'fab-top-position';
  private readonly BOTTOM_FAB_KEY = 'fab-bottom-position';

  icons = { cilChevronTop, cilChevronBottom };

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateVisibility();
  }

  @HostListener('window:reset-fab-positions')
  onResetFabPositions(): void {
    this.topFabPosition = { x: 0, y: 0 };
    this.bottomFabPosition = { x: 0, y: 0 };

    localStorage.removeItem(this.TOP_FAB_KEY);
    localStorage.removeItem(this.BOTTOM_FAB_KEY);
  }

  ngOnInit(): void {
    this.restorePositions();
    this.updateVisibility();
  }

  private restorePositions(): void {
    const top = localStorage.getItem(this.TOP_FAB_KEY);
    if (top) {
      this.topFabPosition = JSON.parse(top);
    }

    const bottom = localStorage.getItem(this.BOTTOM_FAB_KEY);
    if (bottom) {
      this.bottomFabPosition = JSON.parse(bottom);
    }
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

  dragging = false;

  onDragEnded(event: CdkDragEnd, fab: 'top' | 'bottom'): void {
    const pos = event.source.getFreeDragPosition();

    if (fab === 'top') {
      this.topFabPosition = pos;

      localStorage.setItem(
        this.TOP_FAB_KEY,
        JSON.stringify(pos)
      );
    } else {
      this.bottomFabPosition = pos;

      localStorage.setItem(
        this.BOTTOM_FAB_KEY,
        JSON.stringify(pos)
      );
    }

    setTimeout(() => {
      this.dragging = false;
    });
  }

  handleTopClick(): void {
    if (this.dragging) return;
    this.scrollToTop();
  }

  handleBottomClick(): void {
    if (this.dragging) return;
    this.scrollToBottom();
  }
}
