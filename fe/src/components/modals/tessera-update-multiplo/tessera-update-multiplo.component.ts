import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, ColComponent, FormControlDirective, FormDirective, FormSelectDirective, GutterDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowDirective, TableDirective } from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { AutocompleteSelectComponent } from '@docs-components/autocomplete-select/autocomplete-select.component';
import { DatepickerComponent } from '@docs-components/datepicker/datepicker.component';
import { TessereService } from 'src/app/services/tessere.service';
import { ToastService } from 'src/app/services/toast.service';
import { Tessera, TessereMassiva } from 'src/interfaces/tessere';

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
  @Input() tessereSelected: any = [];
  @Input() sediList: any = [];
  @Output() saved = new EventEmitter<void>();

  private tessereService = inject(TessereService);
  private toast = inject(ToastService);

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

  bulkUpdate(): void {
    // let indispArr = rows.filter(item => item.stato == TESSERE_STATUS_MESSAGES.INDISPONIBILE);
    // let indispArrId = indispArr.map(item => item.idTessera);

    // let libereArr = rows.filter(item => item.stato == TESSERE_STATUS_MESSAGES.LIBERA);
    // let libereArrId = libereArr.map(item => item.idTessera);

    // if (indispArr.length > 0 || libereArr.length > 0) {

    //   let tessereIndStr = indispArr.length > 0 ? '<br/><strong> Tessere indisponibili: ' + indispArrId.join(" , ") + '</strong>' : '';
    //   let tessereLibStr = libereArr.length > 0 ? '<br/><strong> Tessere libere: ' + libereArrId.join(" , ") + '</strong>' : '';

    //   this.toast.error(`Nella lista sono presenti tessere indisponibili o libere. ${tessereIndStr} ${tessereLibStr}`);
    //   return;
    // }
    let body: TessereMassiva = {
      idTessere: []
    };

    let idTessere = this.tessereSelected.map((item: Tessera) => item.idTessera);
    body = {...body, idTessere: idTessere};

    switch (this.mode) {
      case 'cambia-sede':
        body = { ...body, sede: this.form.controls.sede.value || '' }
        break;
      case 'cambia-validita':
        body = { ...body, dataOraFineAssegnazione: this.form.controls.dataOraFineAssegnazione.value || '' }
        break;
      case 'indisponibilita':
        body = { ...body, dataOraIndisponibilita: this.form.controls.dataOraIndisponibilita.value || '' }
        break;
    }


    this.tessereService.invalidaMassivo(body).subscribe({
      next: (data: any) => {
        this.toast.success('Update massivo eseguito correttamente')
        this.saved.emit();
        this.visibleChange.emit(false);
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });

  }

  private updateValidatorsByMode(): void {
    const sede = this.form.controls.sede;
    const dataFine = this.form.controls.dataOraFineAssegnazione;
    const dataIndisponibilita = this.form.controls.dataOraIndisponibilita;

    sede.clearValidators();
    dataFine.clearValidators();
    dataIndisponibilita.clearValidators();

    if (this.mode === 'cambia-sede') {
      sede.setValidators([Validators.required]);
    }

    if (this.mode === 'cambia-validita') {
      dataFine.setValidators([Validators.required]);
    }

    if (this.mode === 'indisponibilita') {
      dataIndisponibilita.setValidators([Validators.required]);
    }

    sede.updateValueAndValidity({ emitEvent: false });
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

    this.bulkUpdate();
  }
}
