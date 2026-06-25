import { Component, EventEmitter, inject, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, FormControlDirective } from '@coreui/angular';
import { DataGridComponent } from '@docs-components/data-grid/data-grid.component';
import { DataGridColumn } from 'src/interfaces/datagrid';
import { finalize } from 'rxjs';
import { TessereService } from 'src/app/services/tessere.service';
import { cilX } from '@coreui/icons';
import { Dipendente } from 'src/interfaces/tessere';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-review-import-rows',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormControlDirective,
    ButtonDirective,
    DataGridComponent,
    IconDirective
  ],
  templateUrl: './review-import-rows.component.html',
})
export class ReviewImportRowsComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  private tessereService = inject(TessereService);

  icons = { cilX };

  @Input({ required: true }) rows: any[] = [];

  @Output() proposalCompleted = new EventEmitter<any[]>();

  @ViewChild('actionTemplate', {
    static: true,
  })
  actionTemplate!: TemplateRef<any>;

  loading = false;

  form = this.fb.group({
    numeroPartenzaTopDown: ['', Validators.required],
  });

  columns: DataGridColumn[] = [];

  ngOnInit() {
    this.columns = [
      { field: 'codFiscale', header: 'Codice Fiscale' },
      { field: 'nome', header: 'Nome' },
      { field: 'cognome', header: 'Cognome' },
      {
        field: 'actions',
        header: '',
        template: this.actionTemplate,
      }
    ];
  }

  removeRow(row: Dipendente): void {
    this.rows = this.rows.filter(r => r.codFiscale !== row.codFiscale);
  }

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
