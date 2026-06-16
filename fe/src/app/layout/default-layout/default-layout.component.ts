import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import {
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

  readonly sidebarNarrow = signal(false);

  toggleSidebarNarrow(): void {
    this.sidebarNarrow.update(value => !value);
  }

  readonly logoWidth = computed(() => {
    return this.sidebarNarrow() ? 40 : 220;
  });


  readonly logoSrc = computed(() => {
    const theme = document.documentElement.getAttribute('data-coreui-theme');
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
