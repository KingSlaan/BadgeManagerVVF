import { Component, signal } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ProgressBarComponent,
  ProgressComponent,
  ProgressStackedComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ProgressStackedComponent, ProgressComponent, ProgressBarComponent]
})
export class AppProgressComponent {

  readonly value = signal(10);
  readonly variant= signal<'striped'|undefined>(undefined);

  constructor() {
    setTimeout(() => {
      this.value.set(100);
      this.variant.set('striped');
    }, 3000);
  }

}
