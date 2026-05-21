import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormLabelDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormLabelDirective, FormControlDirective]
})
export class RangesComponent {}
