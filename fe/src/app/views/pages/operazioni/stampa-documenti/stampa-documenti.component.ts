import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, GutterDirective, RowDirective } from '@coreui/angular';
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
import { PersoneService } from 'src/app/services/persone.service';

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
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent implements OnInit {

  @ViewChild('utentiAutocomplete')
  private utentiAutocomplete!: AutocompleteSelectComponent;

  @ViewChild('personeAutocomplete')
  private personeAutocomplete!: AutocompleteSelectComponent;

  icons = { cilCloudUpload };

  private sediState = inject(SediStateService);
  private tessereService = inject(TessereService);
  private personeService = inject(PersoneService);
  public utilsService = inject(UtilsService);
  public toastService = inject(ToastService);

  sediOptions = this.sediState.sediOptionsValue;
  sediOptionsStd = this.sediState.sediOptions;

  form = new FormGroup({
    tipoStampa: new FormControl('', [Validators.required]),
    oggetto: new FormControl('', [Validators.required]),
    numProtocollo: new FormControl('', [Validators.required]),
    dataProtocollo: new FormControl('', [Validators.required]),
    sede: new FormControl('', [Validators.required]),
    filtraSede: new FormControl(true),
    utenti: new FormControl<AutocompleteOption[]>([]),
    persone: new FormControl<AutocompleteOption[]>([]),
    qntBadge: new FormControl<number | null>(null),
  });

  ngOnInit(): void {
    this.sediState.loadSedi();

    this.updateValidatorsByTipoStampa(this.form.controls.tipoStampa.value);

    this.form.controls.tipoStampa.valueChanges.subscribe(tipoStampa => {
      this.updateValidatorsByTipoStampa(tipoStampa);
    });

    this.form.controls.filtraSede.valueChanges.subscribe(() => {
      this.refreshTessere();
      this.refreshPersone();
    });
    this.form.controls.sede.valueChanges.subscribe(() => {
      this.refreshTessere();
      this.refreshPersone();
    });
  }

  private updateValidatorsByTipoStampa(tipoStampa: string | null): void {
    const utenti = this.form.controls.utenti;
    const persone = this.form.controls.persone;
    const qntBadge = this.form.controls.qntBadge;

    utenti.clearValidators();
    persone.clearValidators();
    qntBadge.clearValidators();

    if (tipoStampa === 'nominativa') {
      persone.setValidators([
        Validators.required,
        Validators.minLength(1)
      ]);

      utenti.setValue([], { emitEvent: false });
      qntBadge.setValue(null, { emitEvent: false });
    }

    if (tipoStampa === 'nominativa_assegnata') {
      utenti.setValidators([
        Validators.required,
        Validators.minLength(1)
      ]);

      persone.setValue([], { emitEvent: false });
      qntBadge.setValue(null, { emitEvent: false });
    }

    if (tipoStampa === 'sostitutiva') {
      qntBadge.setValidators([
        Validators.required,
        Validators.min(1)
      ]);

      utenti.setValue([], { emitEvent: false });
      persone.setValue([], { emitEvent: false });
    }

    utenti.updateValueAndValidity({ emitEvent: false });
    persone.updateValueAndValidity({ emitEvent: false });
    qntBadge.updateValueAndValidity({ emitEvent: false });
  }

  utenteKey = (option: AutocompleteOption): string => {
    return option.data.idTessera;
  };

  personeKey = (option: AutocompleteOption): string => {
    return option.data.codFiscale;
  };

  debug() {
    console.log(this.form.invalid)
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    this.tessereService.importTessereExcel(file).subscribe({
      next: rows => {
        let funcOption: any;

        if (this.form.controls.tipoStampa.value === 'nominativa') {
          funcOption = this.toPersoneOption;
        } else if (this.form.controls.tipoStampa.value === 'nominativa_assegnata') {
          funcOption = this.toUtenteOption
        }

        const options = (rows.data ?? []).map((utente: any) =>
          funcOption(utente)
        );

        if (this.form.controls.tipoStampa.value === 'nominativa') {
          this.form.controls.persone.setValue(options);
        } else if (this.form.controls.tipoStampa.value === 'nominativa_assegnata') {
          this.form.controls.utenti.setValue(options);
        }

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
    const tipoStampa = this.form.controls.tipoStampa.value;
    let nominativi: any[] = [];

    let request: any = {
      descrizioneSede: this.form.controls.sede.value,
      oggettoMail: this.form.controls.oggetto.value,
      nrProtocollo: this.form.controls.numProtocollo.value,
      data: this.form.controls.dataProtocollo.value,
      isSostitutiva: tipoStampa === 'sostitutiva',
    };

    if (tipoStampa === 'nominativa') {
      nominativi = (this.form.controls.persone.value ?? []).map(option => ({
        cognome: option.data.cognome,
        nome: option.data.nome,
        codFis: option.data.codFiscale,
      }));
      request = { ...request, nominativi }

    }

    if (tipoStampa === 'nominativa_assegnata') {
      nominativi = (this.form.controls.utenti.value ?? []).map(option => ({
        cognome: option.data.cognome,
        nome: option.data.nome,
        codFis: option.data.codiceFiscale,
      }));
      request = { ...request, nominativi }

    }

    if (tipoStampa === 'sostitutiva') {
      request = { ...request, numeroBadge: this.form.controls.qntBadge.value }
    }

    return request;
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
    let request: DataGridState = {
      filters: [
        {
          field: 'cognome',
          operator: 'contains',
          value: term || ''
        },
        {
          field: 'stato',
          operator: 'in',
          value: ["occupata"]
        },
      ],
      pagination: {
        page: 1,
        pageSize: 50
      },
      sorting: {
        direction: "desc",
        field: "idTessera"
      }
    };

    if (this.form.controls.filtraSede.value && this.form.controls.sede.value) {
      let sede = this.sediOptionsStd().filter(item => item.label === this.form.controls.sede.value);
      request.filters = [...request.filters, {
        field: 'sede',
        value: sede[0].value,
        operator: 'equals',
      }]
    }

    return this.tessereService.getTessere(request).pipe(
      map(response => response.data.map(tessera => this.toUtenteOption(tessera)))
    );
  };

  searchPersone = (term: string): Observable<AutocompleteOption[]> => {
    let request: DataGridState = {
      filters: [
        {
          field: 'cognome',
          operator: 'contains',
          value: term || ''
        },
      ],
      pagination: {
        page: 1,
        pageSize: 50
      },
      sorting: {
        direction: "desc",
        field: "idTessera"
      }
    };

    if (this.form.controls.filtraSede.value && this.form.controls.sede.value) {
      let sede = this.sediOptionsStd().filter(item => item.label === this.form.controls.sede.value);
      request.filters = [...request.filters, {
        field: 'idSede',
        value: sede[0].value,
        operator: 'equals',
      }]
    }

    return this.personeService.getAnagrafiche(request).pipe(
      map(response => response.data.map(tessera => this.toPersoneOption(tessera)))
    );
  };

  refreshTessere(): void {
    if (
      !this.form.controls.filtraSede.value ||
      !this.form.controls.sede.value
    ) {
      return;
    }

    if (this.form.controls.tipoStampa.value !== 'nominativa_assegnata') {
      return
    }

    this.utentiAutocomplete.refresh();
  }

  refreshPersone(): void {
    if (
      !this.form.controls.filtraSede.value ||
      !this.form.controls.sede.value
    ) {
      return;
    }

    if (this.form.controls.tipoStampa.value !== 'nominativa') {
      return
    }

    this.personeAutocomplete.refresh();
  }

  private toUtenteOption(tessera: any): AutocompleteOption {
    return {
      label: `${tessera.cognome} ${tessera.nome}`,
      value: tessera.idTessera,
      data: tessera
    };
  }
  private toPersoneOption(persona: any): AutocompleteOption {
    return {
      label: `${persona.cognome} ${persona.nome}`,
      value: persona.codFiscale,
      data: persona
    };
  }

}
