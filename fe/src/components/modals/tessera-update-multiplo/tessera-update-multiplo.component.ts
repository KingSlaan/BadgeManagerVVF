import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, ColComponent, FormControlDirective, FormDirective, FormSelectDirective, GutterDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowDirective, TableDirective } from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { AutocompleteSelectComponent } from '@docs-components/autocomplete-select/autocomplete-select.component';
import { DatepickerComponent } from '@docs-components/datepicker/datepicker.component';

@Component({
  selector: 'app-tessera-update-multiplo',
  imports: [
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    IconDirective,
    AutocompleteSelectComponent,
    GutterDirective,
    RowDirective,
    ReactiveFormsModule,
    FormsModule,
    DatepickerComponent,
    ColComponent,
    FormDirective,
  ],
  templateUrl: './tessera-update-multiplo.component.html',
  styleUrl: './tessera-update-multiplo.component.scss',
})
export class TesseraUpdateMultiploComponent {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() tesseraSelectedHistory: any = [];
  @Input() sediList: any = [];
  @Output() saved = new EventEmitter<void>();

  private _mode = '';

  @Input()
  set mode(value: string) {
    this._mode = value;
    this.updateValidatorsByMode();
  }

  get mode(): string {
    return this._mode;
  }


  form = new FormGroup({
    sede: new FormControl(''),
    codTipoTessera: new FormControl(''),
    dataOraInizioAssegnazione: new FormControl<string | null>(null),
    dataOraFineAssegnazione: new FormControl<string | null>(null),
    dataOraIndisponibilita: new FormControl<string | null>(null),
  });

  icons = { cilX };

  getTitle(mode: string) {
    switch (mode) {
      case 'cambia-sede':
        return "Cambia Sede Massivo"
      case 'cambia-validita':
        return "Cambia Validità Massivo"
      case 'indisponibilita':
        return "Indisponibilità Tessera Massiva"

      default:
        return "Modifica Tessere"
    }
  }

  private updateValidatorsByMode(): void {
    const sede = this.form.controls.sede;
    const dataInizio = this.form.controls.dataOraInizioAssegnazione;
    const dataFine = this.form.controls.dataOraFineAssegnazione;
    const dataIndisponibilita = this.form.controls.dataOraIndisponibilita;

    sede.clearValidators();
    dataInizio.clearValidators();
    dataFine.clearValidators();
    dataIndisponibilita.clearValidators();

    if (this.mode === 'cambia-sede') {
      sede.setValidators([Validators.required]);
    }

    if (this.mode === 'cambia-validita') {
      dataInizio.setValidators([Validators.required]);
      dataFine.setValidators([Validators.required]);
    }

    if (this.mode === 'indisponibilita') {
      dataIndisponibilita.setValidators([Validators.required]);
    }

    sede.updateValueAndValidity({ emitEvent: false });
    dataInizio.updateValueAndValidity({ emitEvent: false });
    dataFine.updateValueAndValidity({ emitEvent: false });
    dataIndisponibilita.updateValueAndValidity({ emitEvent: false });
  }

  close() {
    this.form.reset();

    this.visibleChange.emit(false);
  }

  confirm() {
    this.updateValidatorsByMode();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saved.emit();
    this.visibleChange.emit(false);
  }
}
