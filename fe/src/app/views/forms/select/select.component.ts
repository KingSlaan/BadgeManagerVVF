import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormSelectDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormSelectDirective, ReactiveFormsModule]
})
export class SelectComponent {}
