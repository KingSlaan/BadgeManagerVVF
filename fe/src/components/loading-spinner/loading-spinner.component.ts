import { Component, inject } from '@angular/core';
import {
  SpinnerModule
} from '@coreui/angular';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-loading-spinner',
  imports: [
    SpinnerModule
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {

  loadingService = inject(LoadingService);

}
