import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ColDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowComponent,
  RowDirective
} from '@coreui/angular';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, RowDirective, GutterDirective, ColDirective]
})
export class FormControlsComponent {

  public favoriteColor = signal('#26ab3c');

}
