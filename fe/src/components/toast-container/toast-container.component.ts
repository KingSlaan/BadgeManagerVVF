import { ToastService } from './../../app/services/toast.service';
import { Component, inject } from '@angular/core';
import {
  ToastModule,
} from '@coreui/angular';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [
    CommonModule,
    ToastModule,
  ],
  templateUrl: './toast-container.component.html'
})
export class ToastContainerComponent {

  toastService = inject(ToastService);

  remove(id: number) {
    this.toastService.remove(id);
  }
}
