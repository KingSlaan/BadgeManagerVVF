import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  AlertComponent,
  BadgeComponent,
  ButtonDirective,
  ColComponent,
  FormControlDirective,
  FormDirective,
  GutterDirective,
  RowDirective,
  TableDirective,
  TooltipDirective
} from '@coreui/angular';
import { cilCheckAlt, cilX } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TessereService } from './../../app/services/tessere.service';
import { ToastService } from './../../app/services/toast.service';

@Component({
  selector: 'app-tessera-inserimento-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonDirective,
    ColComponent,
    FormControlDirective,
    FormDirective,
    GutterDirective,
    RowDirective,
    TableDirective,
    TooltipDirective,
    BadgeComponent,
    AlertComponent,
    IconDirective
  ],
  templateUrl: './tessere-inserimento-form.component.html',
})
export class TessereInserimentoFormComponent {
  private tessereService = inject(TessereService);
  private toast = inject(ToastService);

  @Output() saved = new EventEmitter<void>();

  readonly icons = { cilX, cilCheckAlt };

  beError = signal('');

  listaBadgeForm = new FormGroup({
    badgeValueStart: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0)
    ]),
    badgeValueEnd: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0)
    ]),
    listaBadgeString: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
  });

  badgeListArray: string[] = [];
  badgeListArrayFinal: any[] = [];

  reset(): void {
    this.beError.set('');
    this.badgeListArrayFinal = [];
    this.badgeListArray = [];
    this.listaBadgeForm.reset();
  }

  confirm(): void {
    this.tessereService.createTessere(this.badgeListArrayFinal).subscribe({
      next: () => {
        this.toast.success('Tessere create correttamente');
        this.saved.emit();
        this.reset();
      },
      error: (err: any) => {
        console.error('Error creating tessere', err);
        this.beError.set(err?.error?.messaggio ?? 'Errore durante la creazione delle tessere');
      }
    });
  }

  checkImportDisabled(): boolean {
    return this.listaBadgeForm.controls.badgeValueStart.invalid ||
      this.listaBadgeForm.controls.badgeValueEnd.invalid ||
      this.listaBadgeForm.controls.listaBadgeString.invalid;
  }

  checkTessereValidity(): boolean {
    const invalidNum = this.badgeListArrayFinal.filter(
      element => element.options.valid === false
    );

    return this.badgeListArray.length !== this.badgeListArrayFinal.length ||
      invalidNum.length > 0 ||
      this.badgeListArrayFinal.length === 0 ||
      this.listaBadgeForm.invalid;
  }

  createBadgeList(): void {
    const start = this.listaBadgeForm.controls.badgeValueStart.value;
    const end = this.listaBadgeForm.controls.badgeValueEnd.value;

    this.badgeListArray = this.listaBadgeForm.controls.listaBadgeString.value
      .trim()
      .split(/\n/)
      .map(value => value.trim())
      .filter(Boolean);

    this.badgeListArrayFinal = [];

    if (start === null || end === null) {
      return;
    }

    let countIndex = 0;

    for (let index = start; index <= end; index++) {
      const codiceInterno = this.badgeListArray[countIndex] || '';

      this.badgeListArrayFinal.push({
        idTessera: index,
        codiceInterno,
        options: this.checkTesseraValid(codiceInterno)
      });

      countIndex += 1;
    }
  }

  checkTesseraValid(codInterno: string): { valid: boolean; errorMessages: string[] } {
    const regex = /^[0-9]{20}$/;
    const errorMessages: string[] = [];
    let valid = true;

    if (!regex.test(codInterno)) {
      valid = false;
      errorMessages.push('Il codice interno deve essere composto di 20 numeri');
    }

    if (this.badgeListArray.filter(item => item === codInterno).length > 1) {
      valid = false;
      const indexesFound = this.getAllIndexes(this.badgeListArray, codInterno);
      errorMessages.push(
        'Il codice interno è già presente nella lista, quindi è duplicato nei seguenti indici: ' +
        indexesFound.join(',')
      );
    }

    return { valid, errorMessages };
  }

  preventNegative(event: KeyboardEvent): void {
    const blocked = ['-', '+', 'e', 'E'];

    if (blocked.includes(event.key)) {
      event.preventDefault();
    }
  }

  createErrorMessages(errorMessages: string[]): string {
    return errorMessages.length > 0
      ? 'Sono presenti i seguenti errori: ' + errorMessages.join(' | ')
      : '';
  }

  private getAllIndexes(arr: string[], val: string): number[] {
    const indexes: number[] = [];
    let i = -1;

    while ((i = arr.indexOf(val, i + 1)) !== -1) {
      indexes.push(i);
    }

    return indexes;
  }
}
