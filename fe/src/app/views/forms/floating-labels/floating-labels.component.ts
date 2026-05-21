import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-floating-labels',
  templateUrl: './floating-labels.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormControlDirective, FormLabelDirective, ReactiveFormsModule, FormsModule, FormDirective, FormSelectDirective, GutterDirective]
})
export class FloatingLabelsComponent {}
