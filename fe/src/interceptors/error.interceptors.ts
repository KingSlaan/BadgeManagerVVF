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

import { HttpContextToken } from '@angular/common/http';

export const SKIP_ERROR_TOAST = new HttpContextToken<boolean>(() => false);

export const errorInterceptor: HttpInterceptorFn = (
  req,
  next
) => {

  const toast = inject(ToastService);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      let message: string | undefined;

      if (typeof error.error === 'string') {
        message = error.error;
      } else if (error.error?.message) {
        message = error.error.message;
      } else if (error.message) {
        message = error.message;
      }

      if (!req.context.get(SKIP_ERROR_TOAST)) {
        toast.httpError(error.status,message);
      }

      return throwError(() => error);
    })
  );
};
