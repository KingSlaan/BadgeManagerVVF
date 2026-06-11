import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, GutterDirective, RowComponent, RowDirective } from '@coreui/angular';
import { DatepickerComponent } from '@docs-components/datepicker/datepicker.component';
@Component({
  selector: 'app-stampa-documenti',
  imports: [
    ReactiveFormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    ButtonDirective,
    GutterDirective,
    RowDirective,
    FormsModule,
    DatepickerComponent
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent {

  form = new FormGroup({
    oggetto: new FormControl(''),
    numProtocollo: new FormControl(''),
    dataProtocollo: new FormControl(''),
    sede: new FormControl(''),
    tipoTemplate: new FormControl(''),
    qntBadge: new FormControl(0),
  });

  creaFileRisposta() {

  }

}
