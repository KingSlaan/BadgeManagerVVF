import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,

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
  @Input() mode = "create";

  icons = { cilXCircle };

  getTitle(mode: string) {
    switch (mode) {
      case "assign":
        return "Assegna Tessera"
        break;
      case "edit":
        return "Modifica Tessera"
        break;
      case "remove":
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
        add: false,
        remove: false
      },
      nome: {
        edit: true,
        add: true,
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
