import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { loadingInterceptor } from '../interceptors/loading.interceptors';
import { errorInterceptor } from '../interceptors/error.interceptors';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from '../strategies/app-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    },
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation(),
    ),
    IconSetService,
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor,
        errorInterceptor
      ])
    )
  ]
};

