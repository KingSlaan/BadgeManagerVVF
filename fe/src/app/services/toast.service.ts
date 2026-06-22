import { Injectable, signal } from '@angular/core';
import { AppToast } from '../../interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private counter = 0;

  toasts = signal<AppToast[]>([]);

  show(toast: Omit<AppToast, 'id'>) {
    const id = ++this.counter;

    this.toasts.update(current => [
      ...current,
      {
        id,
        delay: 5000,
        color: 'info',
        ...toast
      }
    ]);
  }

  remove(id: number) {
    this.toasts.update(current =>
      current.filter(t => t.id !== id)
    );
  }

  success(message: string, title = 'Success') {
    this.show({
      title,
      message,
      color: 'success'
    });
  }

  error(message: string, title = 'Error') {
    this.show({
      title,
      message,
      color: 'danger'
    });
  }

  warning(message: string, title = 'Warning') {
    this.show({
      title,
      message,
      color: 'warning'
    });
  }

  info(message: string, title = 'Info') {
    this.show({
      title,
      message,
      color: 'info'
    });
  }

  httpError(status: number, message?: string) {

    switch (status) {

      case 0:
        this.error(
          'Cannot connect to server',
          'Network Error'
        );
        break;

      case 400:
        this.error(
          message || 'Bad request',
          '400 Errore'
        );
        break;

      case 401:
        this.error(
          message || 'Unauthorized',
          '401 Errore'
        );
        break;

      case 403:
        this.error(
          message || 'Access denied',
          '403 Errore'
        );
        break;

      case 404:
        this.error(
          message || 'Resource not found',
          '404 Errore'
        );
        break;

      case 500:
        this.error(
          message || 'Internal server error',
          '500 Errore'
        );
        break;

      default:
        this.error(
          message || 'Unexpected error occurred',
          `Errore ${status}`
        );
    }
  }
}
