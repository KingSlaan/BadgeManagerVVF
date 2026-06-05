import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  SidebarToggleDirective,
  AvatarComponent
} from '@coreui/angular';

import { IconDirective } from '@coreui/icons-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  imports: [
    AvatarComponent,
    ContainerComponent,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink
  ]
})
export class DefaultHeaderComponent extends HeaderComponent {

  private authService = inject(AuthService);

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  constructor() {
    super();
  }

  sidebarId = input('sidebar1');

  logout(): void {
    this.authService.logout();
  }

}
