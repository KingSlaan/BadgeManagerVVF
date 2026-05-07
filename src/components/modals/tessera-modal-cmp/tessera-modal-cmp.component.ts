import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,

  FormControlDirective, FormDirective, FormLabelDirective, FormTextDirective,
  ColComponent,
  GutterDirective,
  RowDirective
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cilXCircle } from '@coreui/icons';

@Component({
  selector: 'app-tessera-modal-cmp',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    IconDirective,

    ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GutterDirective,
  RowDirective
  ],
  templateUrl: './tessera-modal-cmp.component.html',
  styleUrl: './tessera-modal-cmp.component.scss',
})
export class TesseraModalCmpComponent {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  icons = { cilXCircle };

  close() {
    this.visibleChange.emit(false);
  }

  confirm() {
    // do something here if needed
    this.visibleChange.emit(false);
  }
}
