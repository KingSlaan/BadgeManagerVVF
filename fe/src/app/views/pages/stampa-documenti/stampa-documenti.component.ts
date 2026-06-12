import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, GutterDirective, RowDirective } from '@coreui/angular';
import { DatepickerComponent } from '../../../../components/datepicker/datepicker.component';
import { SediStateService } from '../../../../states/sedi-state.service';
import { AutocompleteSelectComponent } from '../../../../components/autocomplete-select/autocomplete-select.component';
@Component({
  selector: 'app-stampa-documenti',
  imports: [
    ReactiveFormsModule,
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
    DatepickerComponent,
    FormSelectDirective,
    AutocompleteSelectComponent
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent implements OnInit {

  private sediState = inject(SediStateService);

  sediOptions = this.sediState.sediOptions;

  form = new FormGroup({
    oggetto: new FormControl(''),
    numProtocollo: new FormControl(''),
    dataProtocollo: new FormControl(''),
    sede: new FormControl(''),
    tipoTemplate: new FormControl(''),
    qntBadge: new FormControl(null),
  });

  ngOnInit(): void {
    this.sediState.loadSedi();
  }

  creaFileRisposta() {

  }

}
