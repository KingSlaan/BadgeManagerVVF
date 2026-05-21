import { Component } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent, SpinnerComponent } from '@coreui/angular';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, SpinnerComponent, ButtonDirective]
})
export class SpinnersComponent {}
