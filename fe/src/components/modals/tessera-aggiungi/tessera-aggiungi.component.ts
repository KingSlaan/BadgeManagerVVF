import { TessereInserimentoFormComponent } from './../../tessere-inserimento-form/tessere-inserimento-form.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'; import {
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective
} from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-tessera-aggiungi',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    IconDirective,
    TessereInserimentoFormComponent
  ],
  templateUrl: './tessera-aggiungi.component.html',
  styleUrl: './tessera-aggiungi.component.scss',
})
export class TesseraAggiungiComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<void>();

  @ViewChild(TessereInserimentoFormComponent)
  formComponent?: TessereInserimentoFormComponent;

  icons = { cilX };

  close(): void {
    this.formComponent?.reset();
    this.visibleChange.emit(false);
  }

  onSaved(): void {
    this.saved.emit();
    this.visibleChange.emit(false);
  }
}
