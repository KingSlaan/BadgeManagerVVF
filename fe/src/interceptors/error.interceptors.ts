import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { inject } from '@angular/core';

import {
  catchError,
  throwError
} from 'rxjs';

import { ToastService } from '../app/services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (
  req,
  next
) => {

  const toast = inject(ToastService);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      let message: string | undefined;

      /**
       * Backend custom error format
       */
      if (typeof error.error === 'string') {

        message = error.error;

      } else if (error.error?.message) {

        message = error.error.message;
      }

      toast.httpError(
        error.status,
        message
      );

      return throwError(() => error);
    })
  );
};
