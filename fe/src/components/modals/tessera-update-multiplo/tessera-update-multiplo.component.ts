import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ButtonDirective, ModalBodyComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, TableDirective } from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-tessera-update-multiplo',
  imports: [
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    IconDirective
  ],
  templateUrl: './tessera-update-multiplo.component.html',
  styleUrl: './tessera-update-multiplo.component.scss',
})
export class TesseraUpdateMultiploComponent {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() tesseraSelectedHistory: any = [];

  icons = { cilX };

  close() {
    this.visibleChange.emit(false);
  }

  confirm() {
    // do something here if needed
    this.visibleChange.emit(false);
  }
}
