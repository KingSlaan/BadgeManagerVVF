import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BadgeComponent, ButtonDirective, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, GutterDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowDirective, TableDirective, TooltipDirective } from '@coreui/angular';
import { cilMinus, cilPlus, cilXCircle, cilX, cilCheckAlt } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tessera-aggiungi',
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
    RowDirective,
    ReactiveFormsModule,
    TableDirective,
    TooltipDirective,
    BadgeComponent
  ],
  templateUrl: './tessera-aggiungi.component.html',
  styleUrl: './tessera-aggiungi.component.scss',
})
export class TesseraAggiungiComponent {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  listaBadgeForm = new FormGroup({
    badgeValueStart: new FormControl(null),
    badgeValueEnd: new FormControl(null),
    listaBadgeString: new FormControl(''),
  });

  icons = { cilXCircle, cilPlus, cilMinus, cilCheckAlt, cilX };

  badgeListArray: string[] | undefined = [];
  badgeListArrayFinal: any = [];

  checkImportDIsabled() {
    return false;
  }

  close() {
    this.visibleChange.emit(false);
    this.badgeListArrayFinal = [];
    this.badgeListArray = [];
    this.listaBadgeForm.reset();
  }

  confirm() {
    // do something here if needed
    this.visibleChange.emit(false);
  }

  checkTesseraValid(codInterno: string) {
    const regex = /^[0-9]{20}$/;
    let errorMessages: Array<string> = [];
    let valid = true;

    if (codInterno.length !== 20) {
      valid = false;
      errorMessages.push("Il codice interno deve essere di lunghezza 20");
    }
    if (!regex.test(codInterno)) {
      valid = false;
      errorMessages.push("Il codice interno deve essere composto di 20 numeri");
    }

    console.log("codInterno",this.badgeListArray?.filter(item => item == "a") ?? false);
    if (this.badgeListArray) {
      if (this.badgeListArray?.filter(item => item === codInterno).length > 1) {
        valid = false;
        errorMessages.push("Il codice interno è già presente nella lista, quindi è duplicato");
      }
    }


    return {
      valid: valid,
      errorMessages: errorMessages
    };
  }

  createErrorMessages(errorMessages: Array<string>): string {
    if (errorMessages.length > 0) {
      return "Sono presenti i seguenti errori: " + errorMessages.join(", ")
    }
    return "";
  }

  createBadgeList() {
    this.badgeListArray = this.listaBadgeForm.controls.listaBadgeString.value?.trim().split(/\n/);
    this.badgeListArrayFinal = [];
    if (this.listaBadgeForm.controls.badgeValueStart.value !== null && this.listaBadgeForm.controls.badgeValueEnd.value !== null) {
      let countIndex = 0;
      for (let index = this.listaBadgeForm.controls.badgeValueStart.value; index <= this.listaBadgeForm.controls.badgeValueEnd.value; index++) {
        let codInterno = this.badgeListArray?.[countIndex] || "";

        this.badgeListArrayFinal.push({
          idTessera: index,
          codiceInterno: codInterno,
          options: this.checkTesseraValid(codInterno)
        });
        countIndex += 1;
      }
    }
  }
}
