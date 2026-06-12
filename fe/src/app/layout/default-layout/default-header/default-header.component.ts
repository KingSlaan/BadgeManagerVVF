import { NgClass, NgTemplateOutlet, } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  signal,
  OnInit,
  OnDestroy
} from '@angular/core';
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
import versionInfo from '../../../../assets/version.json';
import { IconDirective } from '@coreui/icons-angular';
import { AuthService } from '../../../services/auth.service';
import { cilClock } from '@coreui/icons';

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
    RouterLink,
    NgClass
  ]
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit, OnDestroy {

  iconsStatic = { cilClock };

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

  readonly version = versionInfo;

  readonly currentTime = signal(new Date());

  private timer?: ReturnType<typeof setInterval>;

  get envClass(): string {
    return `env-badge env-${this.version.environment}`;
  }

  get envLabel(): string {
    switch (this.version.environment) {
      case 'production':
      case 'prod':
        return 'PROD';

      case 'test':
        return 'TEST';

      default:
        return 'DEV';
    }
  }

  constructor() {
    super();
  }

  sidebarId = input('sidebar1');

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  get formattedDateTime(): string {
    return this.currentTime().toLocaleString('it-IT', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
