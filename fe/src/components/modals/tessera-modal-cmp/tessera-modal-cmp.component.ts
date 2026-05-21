import { ACTION_CONSTANTS } from './../../../constants/action.constants';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,

  FormControlDirective, FormDirective, FormLabelDirective,
  ColComponent,
  GutterDirective,
  RowDirective
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cilX } from '@coreui/icons';

@Component({
  selector: 'app-tessera-modal-cmp',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
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
  @Input() mode = ACTION_CONSTANTS.CREATE;

  icons = { cilX };

  getTitle(mode: string) {
    switch (mode) {
      case ACTION_CONSTANTS.ASSIGN:
        return "Assegna Tessera"
        break;
      case ACTION_CONSTANTS.EDIT:
        return "Modifica Tessera"
        break;
      case ACTION_CONSTANTS.REMOVE:
        return "Revoca Tessera"
        break;

      default:
        return "Modifica Tessera"
        break;
    }
  }

  checkDisabled(key: string, mode: string): boolean {
    const checkFields: Record<string, Record<string, boolean>> = {
      idTessera: {
        edit: true,
        remove: false
      },
      codiceInterno: {
        edit: true,
        remove: false
      }
    };

    return checkFields[key]?.[mode] ?? false;
  }

  close() {
    this.visibleChange.emit(false);
  }

  confirm() {
    // do something here if needed
    this.visibleChange.emit(false);
  }
}
