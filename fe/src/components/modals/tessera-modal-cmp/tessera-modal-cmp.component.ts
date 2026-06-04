import { ToastService } from 'src/app/services/toast.service';
import { UtilsService } from './../../../app/services/utils.service';
import { ACTION_CONSTANTS } from './../../../constants/action.constants';
import { Component, EventEmitter, inject, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,

  FormControlDirective, FormDirective, FormLabelDirective,
  ColComponent,
  GutterDirective,
  RowDirective,
  FormSelectDirective
} from '@coreui/angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cilX } from '@coreui/icons';
import { Tessera, tesseraEmpty } from 'src/interfaces/tessere';
import { DatepickerComponent } from '@docs-components/datepicker/datepicker.component';
import { TessereService } from 'src/app/services/tessere.service';
import { MESSAGES_CONSTANTS } from '../../../constants/messages.constants';

@Component({
  selector: 'app-tessera-modal-cmp',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    IconDirective,

    ColComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    GutterDirective,
    RowDirective,
    ReactiveFormsModule,
    FormsModule,
    DatepickerComponent,
    FormSelectDirective
  ],
  templateUrl: './tessera-modal-cmp.component.html',
  styleUrl: './tessera-modal-cmp.component.scss',
})
export class TesseraModalCmpComponent {
  private tessereService = inject(TessereService);
  private utilsService = inject(UtilsService);
  private toast = inject(ToastService);

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() mode = ACTION_CONSTANTS.CREATE;
  @Input() tesseraSelected: Tessera = tesseraEmpty;
  @Output() saved = new EventEmitter<void>();

  formTessera = new FormGroup({
    idTessera: new FormControl(''),
    codiceInterno: new FormControl(''),
    codiceFiscale: new FormControl(''),
    nome: new FormControl(''),
    cognome: new FormControl(''),
    sede: new FormControl(''),
    codTipoTessera: new FormControl(''),
    dataOraInizioAssegnazione: new FormControl<string | null>(null),
    dataOraFineAssegnazione: new FormControl<string | null>(null),
    dataOraIndisponibilita: new FormControl<string | null>(null),
  });

  icons = { cilX };

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tesseraSelected'] && this.tesseraSelected) {
      this.formTessera.patchValue(this.tesseraSelected);
    }

    this.applyModeRules();
  }

  private applyModeRules(): void {
    const disabledFieldsByMode: Record<string, string[]> = {
      disabled: [
        'idTessera',
        'codiceInterno',
        'codiceFiscale',
        'nome',
        'cognome',
        'sede',
        'codTipoTessera',
        'dataOraInizioAssegnazione',
        'dataOraFineAssegnazione'
      ],
      remove: [
        'idTessera',
        'codiceInterno',
        'codiceFiscale',
        'nome',
        'cognome',
        'sede',
        'codTipoTessera',
        'dataOraInizioAssegnazione',
        'dataOraIndisponibilita'
      ],
      edit: [
        'nome',
        'cognome',
      ],
      assign: [
        'idTessera',
        'codiceInterno',
        'nome',
        'cognome',
        // 'sede',
        'dataOraIndisponibilita'
      ],
      add: [],
    };

    Object.keys(this.formTessera.controls).forEach((field) => {
      this.formTessera.get(field)?.enable({ emitEvent: false });
    });

    disabledFieldsByMode[this.mode]?.forEach((field) => {
      this.formTessera.get(field)?.disable({ emitEvent: false });
    });
  }

  getTitle(mode: string) {
    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN:
        return "Assegna Tessera"
        break;
      case ACTION_CONSTANTS.EDIT:
        return "Modifica Tessera"
        break;
      case ACTION_CONSTANTS.REMOVE:
        return "Revoca Tessera"
        break;
      case ACTION_CONSTANTS.DISABLED:
        return "Invalida Tessera"
        break;

      default:
        return "Modifica Tessera"
        break;
    }
  }

  checkDisabled(key: string, mode: string): boolean {
    const checkFields: Record<string, Record<string, boolean>> = {
      idTessera: {
        edit: true,
        remove: false
      },
      codiceInterno: {
        edit: true,
        remove: false
      }
    };

    return checkFields[key]?.[mode] ?? false;
  }

  close() {
    this.visibleChange.emit(false);
  }

  confirm(mode: string) {
    let request = {};

    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN:
        request = {
          idTessera: this.tesseraSelected.idTessera,
          codiceFiscale: this.formTessera.controls.codiceFiscale.value,
          sede: this.formTessera.controls.sede.value,
          codTipoTessera: this.formTessera.controls.codTipoTessera.value,
          dataInizioAssegnazione: this.formTessera.controls.dataOraInizioAssegnazione.value,
          dataFineAssegnazione: this.formTessera.controls.dataOraFineAssegnazione.value
        }

        this.tessereService.assegnaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data: any) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_ASSEGNA_TESSERA);

            this.visibleChange.emit(false);
          },
          error: (err: any) => {
            this.toast.success(MESSAGES_CONSTANTS.ERRORE_GENERICO_MSG);
            console.error('Error loading tessere', err);
          },
        });

        break;
      // case ACTION_CONSTANTS.EDIT:
      //   break;
      case ACTION_CONSTANTS.REMOVE:
        request = {
          dataOraFineAssegnazione: this.formTessera.controls.dataOraFineAssegnazione.value
        }

        this.tessereService.revocaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data: any) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_REVOCA_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err: any) => {
            this.toast.success(MESSAGES_CONSTANTS.ERRORE_GENERICO_MSG);
            console.error('Error loading tessere', err);
          },
        });
        break;
      case ACTION_CONSTANTS.DISABLED:
        request = {
          dataOraIndisponibilita: this.formTessera.controls.dataOraIndisponibilita.value
        }

        this.tessereService.invalidaTessera(this.tesseraSelected.idTessera, request).subscribe({
          next: (data: any) => {
            this.saved.emit();
            this.toast.success(MESSAGES_CONSTANTS.SUCCESSO_INVALIDA_TESSERA);
            this.visibleChange.emit(false);
          },
          error: (err: any) => {
            this.toast.success(MESSAGES_CONSTANTS.ERRORE_GENERICO_MSG);
            console.error('Error loading tessere', err);
          },
        });
        break;

      default:
        break;
    }
    // this.visibleChange.emit(false);
  }
}
