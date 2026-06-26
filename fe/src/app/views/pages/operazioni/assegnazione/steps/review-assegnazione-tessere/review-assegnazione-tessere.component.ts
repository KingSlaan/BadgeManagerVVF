import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { ButtonDirective } from '@coreui/angular';

import { DataGridComponent } from '@docs-components/data-grid/data-grid.component';
import { AutocompleteSelectComponent } from '@docs-components/autocomplete-select/autocomplete-select.component';

import { DataGridColumn } from 'src/interfaces/datagrid';
import { ApplicaAssegnazioneBody, Dipendente } from 'src/interfaces/tessere';

import { finalize } from 'rxjs';
import { TessereService } from 'src/app/services/tessere.service';
import { DatepickerComponent } from '@docs-components/datepicker/datepicker.component';
import { DATAGRID_CONSTANTS_NO_SERVER } from 'src/constants/datagrid.constants';

@Component({
  selector: 'app-review-assegnazione-tessere',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonDirective,
    DataGridComponent,
    AutocompleteSelectComponent,
    DatepickerComponent
  ],
  templateUrl: './review-assegnazione-tessere.component.html',
})
export class ReviewAssegnazioneTessereComponent {
  private fb = inject(NonNullableFormBuilder);
  private tessereService = inject(TessereService);

  loading = false;

  @Input({ required: true }) rows: Dipendente[] = [];
  @Input({ required: true }) sediList: any[] = [];

  @Output()
  reviewCompleted = new EventEmitter<void>();

  form = this.fb.group({
    sede: [null as any, Validators.required],
    dataInizioAssegnazione: ['', Validators.required],
    dataFineAssegnazione: ['', Validators.required],
  });

  columns: DataGridColumn[] = [
    { field: 'codFiscale', header: 'Codice Fiscale' },
    { field: 'nome', header: 'Nome' },
    { field: 'cognome', header: 'Cognome' },
    { field: 'idTessera', header: 'ID Tessera Proposta' },
  ];

  paginationConfig = DATAGRID_CONSTANTS_NO_SERVER;

  confermaReview(): void {

    if (this.form.invalid || this.rows.length === 0) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const request: ApplicaAssegnazioneBody = {
      sede: this.form.controls.sede.value,
      dataInizioAssegnazione:
        this.form.controls.dataInizioAssegnazione.value,
      dataFineAssegnazione:
        this.form.controls.dataFineAssegnazione.value,
      tessere: this.rows,
    };

    this.tessereService
      .confermaAssegnazioni(request)
      .pipe(
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: () => {
          this.reviewCompleted.emit();
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
