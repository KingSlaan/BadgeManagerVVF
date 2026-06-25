import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, FormControlDirective } from '@coreui/angular';
import { DataGridComponent } from '@docs-components/data-grid/data-grid.component';
import { DataGridColumn } from 'src/interfaces/datagrid';
import { finalize } from 'rxjs';
import { TessereService } from 'src/app/services/tessere.service';

@Component({
  selector: 'app-review-import-rows',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormControlDirective,
    ButtonDirective,
    DataGridComponent,
  ],
  templateUrl: './review-import-rows.component.html',
})
export class ReviewImportRowsComponent {
  private fb = inject(NonNullableFormBuilder);
  private tessereService = inject(TessereService);

  @Input({ required: true }) rows: any[] = [];

  @Output() proposalCompleted = new EventEmitter<any[]>();

  loading = false;

  form = this.fb.group({
    numeroPartenzaTopDown: ['', Validators.required],
  });

  columns: DataGridColumn[] = [
    { field: 'codFiscale', header: 'Codice Fiscale' },
    { field: 'nome', header: 'Nome' },
    { field: 'cognome', header: 'Cognome' }
  ];

  proponiAssegnazioni(): void {
    if (this.form.invalid || this.rows.length === 0) {
      this.form.markAllAsTouched();
      return;
    }

    const numeroPartenzaTopDown = this.form.controls.numeroPartenzaTopDown.value;

    this.loading = true;

    this.tessereService.proponiAssegnazioni({
      numeroPartenzaTopDown,
      dipendenti: this.rows,
    })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: response => {
          const data = response?.data ?? [];
          this.proposalCompleted.emit(data);
        },
        error: error => {
          console.error('Errore proposta assegnazioni', error);
        },
      });
  }
}
