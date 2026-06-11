import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormControlDirective, FormDirective, RowComponent } from '@coreui/angular';
import { AutocompleteSelectComponent } from '@docs-components/autocomplete-select/autocomplete-select.component';

@Component({
  selector: 'app-stampa-documenti',
  imports: [
    ReactiveFormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormDirective,
    FormControlDirective,
    ButtonDirective
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent {

  sediOptions = [
    { label: 'Roma', value: 'RM' },
    { label: 'Milano', value: 'MI' },
    { label: 'Napoli', value: 'NA' }
  ];

  form = new FormGroup({
    sede: new FormControl(null)
  });

  save() {

  }

}
