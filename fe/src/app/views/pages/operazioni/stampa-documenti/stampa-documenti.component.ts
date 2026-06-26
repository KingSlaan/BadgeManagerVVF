import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, GutterDirective, RowDirective } from '@coreui/angular';
import { DatepickerComponent } from '../../../../../components/datepicker/datepicker.component';
import { SediStateService } from '../../../../../states/sedi-state.service';
import { AutocompleteOption, AutocompleteSelectComponent } from '../../../../../components/autocomplete-select/autocomplete-select.component';
import { DataGridState } from '../../../../../interfaces/datagrid';
import { map, Observable, tap } from 'rxjs';
import { TessereService } from '../../../../services/tessere.service';
import { UtilsService } from '../../../../services/utils.service';
import { ToastService } from 'src/app/services/toast.service';
import { IconDirective } from '@coreui/icons-angular';
import { cilCloudUpload } from '@coreui/icons';

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
    AutocompleteSelectComponent,
    IconDirective,
    FormSelectDirective
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent implements OnInit {

  icons = { cilCloudUpload };

  private sediState = inject(SediStateService);
  private tessereService = inject(TessereService);
  public utilsService = inject(UtilsService);
  public toastService = inject(ToastService);

  sediOptions = this.sediState.sediOptionsValue;

  form = new FormGroup({
    tipoStampa: new FormControl('', [Validators.required]),
    oggetto: new FormControl('', [Validators.required]),
    numProtocollo: new FormControl('', [Validators.required]),
    dataProtocollo: new FormControl('', [Validators.required]),
    sede: new FormControl('', [Validators.required]),
    utenti: new FormControl<AutocompleteOption[]>([]),
    qntBadge: new FormControl<number | null>(null),
  });

  ngOnInit(): void {
    this.sediState.loadSedi();

    this.updateValidatorsByTipoStampa(this.form.controls.tipoStampa.value);

    this.form.controls.tipoStampa.valueChanges.subscribe(tipoStampa => {
      this.updateValidatorsByTipoStampa(tipoStampa);
    });
  }

  private updateValidatorsByTipoStampa(tipoStampa: string | null): void {
    const utenti = this.form.controls.utenti;
    const qntBadge = this.form.controls.qntBadge;

    utenti.clearValidators();
    qntBadge.clearValidators();

    if (tipoStampa === 'centrale') {
      utenti.setValidators([
        Validators.required,
        Validators.minLength(1)
      ]);

      qntBadge.setValue(0, { emitEvent: false });
    }

    if (tipoStampa === 'territorio') {
      qntBadge.setValidators([
        Validators.required,
        Validators.min(1)
      ]);

      utenti.setValue([], { emitEvent: false });
    }

    utenti.updateValueAndValidity({ emitEvent: false });
    qntBadge.updateValueAndValidity({ emitEvent: false });
  }

  utenteKey = (option: AutocompleteOption): string => {
    return option.data.idTessera;
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    this.tessereService.importTessereExcel(file).subscribe({
      next: rows => {
        const options = (rows.data ?? []).map((utente: any) =>
          this.toUtenteOption(utente)
        );

        this.form.controls.utenti.setValue(options);

        this.toastService.success('File elaborato con successo');
      }
    });
  }

  preventNegative(event: KeyboardEvent): void {
    const blocked = ['-', '+', 'e', 'E'];

    if (blocked.includes(event.key)) {
      event.preventDefault();
    }
  }

  createBodyForDownload() {
    return {
      descrizioneSede: this.form.controls.sede.value,
      oggettoMail: this.form.controls.oggetto.value,
      nrProtocollo: this.form.controls.numProtocollo.value,
      data: this.form.controls.dataProtocollo.value,
      nominativi: this.form.controls.utenti.value?.map(option => ({
        cognome: option.data.cognome,
        nome: option.data.nome,
        codFis: option.data.codiceFiscale
      }))
    };
  }

  creaFileRispostaWord() {
    let request = this.createBodyForDownload();

    this.utilsService.getStampaWord(request).subscribe({
      next: response => {
        const blob = response.body!;

        let fileName = 'DocumentoRisposta.docx';

        const disposition = response.headers.get('Content-Disposition');
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) {
            fileName = match[1];
          }
        }

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(url);
      }
    });
  }

  creaFileRispostaPDF() {
    let request = this.createBodyForDownload();

    this.utilsService.getStampaPDF(request).subscribe({
      next: response => {

        const blob = response.body!;
        const contentDisposition = response.headers.get('Content-Disposition');

        let fileName = 'DocumentoRisposta.pdf';

        if (contentDisposition) {
          const match = /filename="?([^"]+)"?/.exec(contentDisposition);
          if (match) {
            fileName = match[1];
          }
        }

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(url);
      }
    });
  }

  searchTessere = (term: string): Observable<AutocompleteOption[]> => {
    const request: DataGridState = {
      filters: [
        {
          field: 'cognome',
          operator: 'contains',
          value: term || ''
        }
      ],
      pagination: {
        page: 1,
        pageSize: 50
      },
      sorting: null
    };

    return this.tessereService.getTessere(request).pipe(
      map(response => response.data.map(tessera => this.toUtenteOption(tessera)))
    );
  };

  private toUtenteOption(tessera: any): AutocompleteOption {
    return {
      label: `${tessera.cognome} ${tessera.nome}`,
      value: tessera.idTessera,
      data: tessera
    };
  }

}
