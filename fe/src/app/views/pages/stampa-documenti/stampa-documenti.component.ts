import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteSelectComponent } from '@docs-components/autocomplete-select/autocomplete-select.component';

@Component({
  selector: 'app-stampa-documenti',
  imports: [
    ReactiveFormsModule
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

}
