import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent
} from '@coreui/angular';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class WidgetsComponent implements AfterContentInit {
  private changeDetectorRef = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
