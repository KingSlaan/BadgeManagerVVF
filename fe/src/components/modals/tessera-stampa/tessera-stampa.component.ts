import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, GutterDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowDirective, TableDirective } from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { TessereService } from 'src/app/services/tessere.service';
import { ToastService } from 'src/app/services/toast.service';
import { TESSERE_STATUS_MESSAGES } from 'src/constants/tessere-status.constants';
import { Tessera } from 'src/interfaces/tessere';

@Component({
  selector: 'app-tessera-stampa',
  imports: [
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    IconDirective,
    TableDirective,
    FormSelectDirective,
    GutterDirective,
    RowDirective,
    ReactiveFormsModule,
    FormsModule,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
  ],
  templateUrl: './tessera-stampa.component.html',
  styleUrl: './tessera-stampa.component.scss',
})
export class TesseraStampaComponent {

  private tessereService = inject(TessereService);
  private toast = inject(ToastService);

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() tessereToPrint: any = [];
  @Input() mode: any = [];

  icons = { cilX };

  form = new FormGroup({
    tipoStampa: new FormControl('', [Validators.required]),
  });

  bulkPrint(rows: Tessera[]): void {
    let indispArr = rows.filter(item => item.stato == TESSERE_STATUS_MESSAGES.INDISPONIBILE);
    let indispArrId = indispArr.map(item => item.idTessera);

    let libereArr = rows.filter(item => item.stato == TESSERE_STATUS_MESSAGES.LIBERA);
    let libereArrId = libereArr.map(item => item.idTessera);

    if (indispArr.length > 0 || libereArr.length > 0) {

      let tessereIndStr = indispArr.length > 0 ? '<br/><strong> Tessere indisponibili: ' + indispArrId.join(" , ") + '</strong>' : '';
      let tessereLibStr = libereArr.length > 0 ? '<br/><strong> Tessere libere: ' + libereArrId.join(" , ") + '</strong>' : '';

      this.toast.error(`Nella lista sono presenti tessere indisponibili o libere. ${tessereIndStr} ${tessereLibStr}`);
      return;
    }

    this.tessereService.stampaTessere(rows, this.form.controls.tipoStampa.value || 'pdf').subscribe({
      next: response => {
        const blob = response.body!;

        let fileName = 'DocumentoRisposta.pdf';

        const disposition = response.headers.get('Content-Disposition');
        if (disposition) {
          const match = disposition.match(/filename="?([^"]+)"?/);
          if (match) {
            fileName = match[1];
          }
        }

        const url = window.URL.createObjectURL(blob);

        window.open(url, '_blank', 'noopener,noreferrer');
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = fileName;
        // a.click();

        window.URL.revokeObjectURL(url);
      }
    });

    this.visibleChange.emit(false);

  }

  close() {
    this.form.reset();
    this.visibleChange.emit(false);
  }

}
