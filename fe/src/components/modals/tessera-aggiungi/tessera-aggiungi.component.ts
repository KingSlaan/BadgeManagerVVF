import { TessereService } from './../../../app/services/tessere.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertComponent, BadgeComponent, ButtonDirective, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, GutterDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowDirective, TableDirective, TooltipDirective } from '@coreui/angular';
import { cilMinus, cilPlus, cilX, cilCheckAlt } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

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
    BadgeComponent,
    AlertComponent
  ],
  templateUrl: './tessera-aggiungi.component.html',
  styleUrl: './tessera-aggiungi.component.scss',
})
export class TesseraAggiungiComponent {
  private tessereService = inject(TessereService);
  private toast = inject(ToastService);

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<void>();


  listaBadgeForm = new FormGroup({
    badgeValueStart: new FormControl(null),
    badgeValueEnd: new FormControl(null),
    listaBadgeString: new FormControl(''),
  });

  icons = { cilX, cilPlus, cilMinus, cilCheckAlt };

  badgeListArray: string[] | undefined = [];
  badgeListArrayFinal: any = [];

  checkImportDisabled() {
    return false;
  }

  close() {
    this.visibleChange.emit(false);
    this.badgeListArrayFinal = [];
    this.badgeListArray = [];
    this.listaBadgeForm.reset();
  }

  confirm() {
    this.tessereService.createTessere(this.badgeListArrayFinal).subscribe({
      next: (data: any) => {
        let dataReturn = data;
        this.toast.success('User saved successfully');
         this.saved.emit();
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
        this.toast.error('Errore nel sarvataggio delle tessere brother <br/> WEWEWE!!!', 'Inserimento Tessere');
      }
    });
    // do something here if needed
    // this.visibleChange.emit(false);
  }

  checkTessereValidity() {
    const invalidNum = this.badgeListArrayFinal?.filter((element: any) => element.options.valid === false);
    return !(this.badgeListArray?.length === this.badgeListArrayFinal?.length) || invalidNum.length > 0 || this.badgeListArrayFinal?.length === 0;
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

    if (this.badgeListArray) {
      if (this.badgeListArray?.filter(item => item === codInterno).length > 1) {
        valid = false;
        const indexesFound = this.getAllIndexes(this.badgeListArray, codInterno);
        console.log("indexesFound", indexesFound);
        errorMessages.push("Il codice interno è già presente nella lista, quindi è duplicato nei seguenti indici: " + indexesFound.join(","));
      }
    }

    return {
      valid: valid,
      errorMessages: errorMessages
    };
  }

  getAllIndexes(arr: Array<string>, val: string) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }

  createErrorMessages(errorMessages: Array<string>): string {
    if (errorMessages.length > 0) {
      return "Sono presenti i seguenti errori: " + errorMessages.join(" | ")
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
