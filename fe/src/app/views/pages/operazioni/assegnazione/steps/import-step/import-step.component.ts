import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { ButtonDirective, SpinnerComponent } from '@coreui/angular';
import { TessereService } from 'src/app/services/tessere.service';
import { cilCloudDownload, cilCloudUpload } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-import-step',
  standalone: true,
  imports: [ButtonDirective, SpinnerComponent, IconDirective],
  templateUrl: './import-step.component.html',
})
export class ImportStepComponent {
  private readonly tessereService = inject(TessereService);
  private toastService = inject(ToastService);

  @Output() importCompleted = new EventEmitter<any[]>();

  icons = { cilCloudDownload, cilCloudUpload };

  loading = signal(false);
  rows = signal<any[]>([]);
  error = signal<string | null>(null);

  downloadTemplate(): void {
    this.tessereService.downloadTemplate().subscribe(blob => {
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'template-assegnazione.xlsx';
      a.click();

      URL.revokeObjectURL(url);

      this.toastService.success('Template scaricato con successo');
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    this.loading.set(true);
    this.error.set(null);

    this.tessereService.importExcel(file).subscribe({
      next: rows => {
        const result = rows.data ?? [];
        this.rows.set(result);
        this.importCompleted.emit(result);
        this.loading.set(false);

        this.toastService.success('File elaborato con successo');

      },
      error: () => {
        this.rows.set([]);
        this.importCompleted.emit([]);
        this.error.set('Errore durante importazione Excel.');
        this.loading.set(false);
      }
    });
  }
}
