import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  Directive
} from '@angular/core';
import { ButtonDirective } from '@coreui/angular';

export interface AppStepperStep {
  id: string;
  label: string;
  description?: string;
  icon?: string;

  disabled?: boolean;
  completed?: boolean;
  valid?: boolean;

  canEnter?: boolean;
  canLeave?: boolean;
}

@Directive({
  selector: 'ng-template[appStepperContent]',
  standalone: true,
})
export class AppStepperContentDirective {
  @Input('appStepperContent') stepId!: string;

  constructor(public template: TemplateRef<unknown>) { }
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input({ required: true }) steps: AppStepperStep[] = [];

  @Input() activeIndex = 0;
  @Input() linear = true;
  @Input() showFooter = true;
  @Input() nextLabel = 'Avanti';
  @Input() backLabel = 'Indietro';
  @Input() finishLabel = 'Fine';

  @Output() activeIndexChange = new EventEmitter<number>();
  @Output() stepChange = new EventEmitter<AppStepperStep>();
  @Output() finish = new EventEmitter<void>();

  @ContentChildren(AppStepperContentDirective)
  contents!: QueryList<AppStepperContentDirective>;

  get activeStep(): AppStepperStep | undefined {
    return this.steps[this.activeIndex];
  }

  get isFirst(): boolean {
    return this.activeIndex === 0;
  }

  get isLast(): boolean {
    return this.activeIndex === this.steps.length - 1;
  }

  get activeTemplate(): TemplateRef<unknown> | null {
    const stepId = this.activeStep?.id;
    return this.contents?.find(c => c.stepId === stepId)?.template ?? null;
  }

  get canGoNext(): boolean {
    if (this.isLast) {
      return this.activeStep?.canLeave !== false && this.activeStep?.valid !== false;
    }

    return this.canGoTo(this.activeIndex + 1);
  }

  canGoTo(index: number): boolean {
    const targetStep = this.steps[index];

    if (!targetStep || targetStep.disabled || targetStep.canEnter === false) {
      return false;
    }

    if (!this.linear) {
      return true;
    }

    if (index <= this.activeIndex) {
      return true;
    }

    const currentStep = this.steps[this.activeIndex];

    if (currentStep?.canLeave === false || currentStep?.valid === false) {
      return false;
    }

    return this.steps
      .slice(0, index)
      .every(step =>
        !step.disabled &&
        step.valid !== false &&
        step.canEnter !== false &&
        step.canLeave !== false
      );
  }

  goTo(index: number): void {
    if (!this.canGoTo(index)) {
      return;
    }

    this.activeIndex = index;
    this.activeIndexChange.emit(index);
    this.stepChange.emit(this.steps[index]);
  }

  get canFinish(): boolean {
    return this.steps.every(step =>
      !step.disabled &&
      step.valid !== false &&
      step.canEnter !== false &&
      step.canLeave !== false
    );
  }

  back(): void {
    this.goTo(this.activeIndex - 1);
  }

  next(): void {
    if (!this.canGoNext) {
      return;
    }

    if (this.isLast) {
      if (this.canFinish) {
        this.finish.emit();
      }

      return;
    }

    this.goTo(this.activeIndex + 1);
  }
}
