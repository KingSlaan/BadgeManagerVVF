import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective } from '@coreui/angular';
import { cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { Tessera, tesseraEmpty } from 'src/interfaces/tessere';

@Component({
  selector: 'app-tessera-history',
  imports: [
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    IconDirective
  ],
  templateUrl: './tessera-history.component.html',
  styleUrl: './tessera-history.component.scss',
})
export class TesseraHistoryComponent {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() tesseraSelected: Tessera = tesseraEmpty;


  icons = { cilX };

  close() {
    this.visibleChange.emit(false);
  }

  confirm() {
    // do something here if needed
    this.visibleChange.emit(false);
  }
}
