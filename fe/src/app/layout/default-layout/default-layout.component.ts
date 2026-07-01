import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import {
  ColorModeService,
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems } from './_nav';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective
  ]
})
export class DefaultLayoutComponent {
  public navItems = [...navItems];

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly sidebarNarrow = signal(false);

  toggleSidebarNarrow(): void {
    this.sidebarNarrow.update(value => !value);
  }

  readonly logoWidth = computed(() => {
    return this.sidebarNarrow() ? 40 : 220;
  });

  readonly visibleNavItems = computed(() => {
    if (!this.sidebarNarrow()) {
      return this.navItems;
    }

    return this.navItems.map(item => {
      if (!item.children?.length) {
        return item;
      }

      const { children, ...parentOnlyItem } = item;

      return parentOnlyItem;
    });
  });


  readonly logoSrc = computed(() => {
    const theme = this.colorMode();
    const narrow = this.sidebarNarrow();

    if (theme === 'dark') {
      return narrow
        ? '../../../assets/images/IconDEFINITIVO_NewVersion_White.svg'
        : '../../../assets/images/BannerDEFINITIVO_NewVersion_White.svg';
    }

    return narrow
      ? '../../../assets/images/IconDEFINITIVO_NewVersion.svg'
      : '../../../assets/images/BannerDEFINITIVO_NewVersion.svg';
  });

}
