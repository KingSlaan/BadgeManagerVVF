import { ApiResponse } from 'src/interfaces/api-response';
import { StepperComponent, AppStepperContentDirective, AppStepperStep } from './../../../../../components/stepper/stepper.component';
import { Component, inject, OnInit } from '@angular/core';
import { CardBodyComponent, CardComponent } from '@coreui/angular';
import { ImportStepComponent } from './steps/import-step/import-step.component';
import { ReviewImportRowsComponent } from './steps/review-import-rows/review-import-rows.component';
import { ReviewAssegnazioneTessereComponent } from './steps/review-assegnazione-tessere/review-assegnazione-tessere.component';
import { Dipendente } from 'src/interfaces/tessere';
import { SediStateService } from 'src/states/sedi-state.service';
import { AssegnazioneCompletataComponent } from './steps/assegnazione-completata/assegnazione-completata.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assegnazione',
  imports: [
    StepperComponent,
    AppStepperContentDirective,
    CardBodyComponent,
    CardComponent,
    ImportStepComponent,
    ReviewImportRowsComponent,
    ReviewAssegnazioneTessereComponent,
    AssegnazioneCompletataComponent
  ],
  templateUrl: './assegnazione.component.html',
  styleUrl: './assegnazione.component.scss',
})
export class AssegnazioneComponent implements OnInit {

  private sediState = inject(SediStateService);
  private router = inject(Router);

  activeStepIndex = 0;

  importedRows: any[] = [];
  proposedRows: Dipendente[] = [];
  sediOptions = this.sediState.sediOptions;
  reviewTessereData: any;

  steps: AppStepperStep[] = [
    {
      id: 'import',
      label: 'Import',
      description: 'Importa Dipendenti da Excel',
      valid: false,
      canLeave: false,
    },
    {
      id: 'review',
      label: 'Review',
      description: 'Verifica import Dipendenti',
      canEnter: false,
    },
    {
      id: 'review-tessere',
      label: 'Review Tessere',
      description: 'Verifica Assegnazione Potenziale',
      canEnter: false,
    },
    {
      id: 'confirm',
      label: 'Conferma',
      description: 'Conferma',
      canEnter: false,
    },
  ];

  ngOnInit(): void {
    this.sediState.loadSedi();
  }

  onImportCompleted(rows: Dipendente[]): void {
    this.importedRows = rows ?? [];

    const hasRows = this.importedRows.length > 0;

    this.steps = this.steps.map(step => {
      if (step.id === 'import') {
        return {
          ...step,
          valid: hasRows,
          completed: hasRows,
          canLeave: hasRows,
        };
      }

      if (step.id === 'review') {
        return {
          ...step,
          canEnter: hasRows,
        };
      }

      return step;
    });

    if (hasRows) {
      this.activeStepIndex = 1;
    }
  }

  onProposalCompleted(rows: Dipendente[]): void {
    this.proposedRows = rows ?? [];

    const hasRows = this.proposedRows.length > 0;

    this.steps = this.steps.map(step => {
      if (step.id === 'review') {
        return {
          ...step,
          valid: hasRows,
          completed: hasRows,
          canLeave: hasRows,
        };
      }

      if (step.id === 'review-tessere') {
        return {
          ...step,
          canEnter: hasRows,
        };
      }

      return step;
    });

    if (hasRows) {
      this.activeStepIndex = 2;
    }
  }

  onReviewTessereCompleted(): void {

    this.steps = this.steps.map(step => {
      if (step.id === 'review-tessere') {
        return {
          ...step,
          valid: true,
          completed: true,
          canLeave: true,
        };
      }

      if (step.id === 'confirm') {
        return {
          ...step,
          canEnter: true,
        };
      }

      return step;
    });

    this.activeStepIndex = 3;
  }

  save(): void {
    this.router.navigate(['/liste/tessere']);
  }

}
