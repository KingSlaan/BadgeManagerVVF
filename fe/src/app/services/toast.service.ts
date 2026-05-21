import { Injectable, signal } from '@angular/core';
import { AppToast } from '../interfaces/toast';

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
}
