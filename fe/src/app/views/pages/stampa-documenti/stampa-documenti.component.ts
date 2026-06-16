import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, GutterDirective, RowDirective } from '@coreui/angular';
import { DatepickerComponent } from '../../../../components/datepicker/datepicker.component';
import { SediStateService } from '../../../../states/sedi-state.service';
import { AutocompleteOption, AutocompleteSelectComponent } from '../../../../components/autocomplete-select/autocomplete-select.component';
import { DataGridRequest } from 'src/interfaces/datagrid';
import { SediService } from 'src/app/services/sedi.service';
import { map, Observable, tap } from 'rxjs';
import { TessereService } from 'src/app/services/tessere.service';
import { JsonPipe } from '@angular/common';
import { UtilsService } from 'src/app/services/utils.service';
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
    AutocompleteSelectComponent,
    JsonPipe
  ],
  templateUrl: './stampa-documenti.component.html',
  styleUrl: './stampa-documenti.component.scss',
})
export class StampaDocumentiComponent implements OnInit {

  private sediState = inject(SediStateService);
  private tessereService = inject(TessereService);
  private utilsService = inject(UtilsService);

  sediOptions = this.sediState.sediOptionsValue;

  form = new FormGroup({
    oggetto: new FormControl(''),
    numProtocollo: new FormControl(''),
    dataProtocollo: new FormControl(''),
    sede: new FormControl(''),
    utenti: new FormControl<string[]>([]),
  });

  ngOnInit(): void {
    this.sediState.loadSediDescValue();
  }

  createBodyForDownload() {
    return {
      descrizioneSede: this.form.controls.sede.value,
      oggettoMail: this.form.controls.oggetto.value,
      nrProtocollo: this.form.controls.numProtocollo.value,
      data: this.form.controls.dataProtocollo.value,
      nominativi: this.form.controls.utenti.value?.map((utente: any) => ({
        cognome: utente.cognome,
        nome: utente.nome,
        codFis: utente.codiceFiscale
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
    const request: DataGridRequest = {
      filters: [
        {
          field: "cognome",
          operator: "contains",
          value: term || ""
        },
      ],
      pagination: {
        page: 0,
        pageSize: 50
      }
    };

    return this.tessereService.getTessere(request).pipe(
      tap(tessere => console.log('SEDI API RESULT:', tessere.data)),
      map(tessere =>
        tessere.data.map((tessera: any) => ({
          label: `${tessera.cognome} ${tessera.nome}`,
          value: tessera,

          // optional, useful for template
          data: tessera
        }))
      ),
      tap(options => console.log('AUTOCOMPLETE OPTIONS:', options))
    );
  };

}
