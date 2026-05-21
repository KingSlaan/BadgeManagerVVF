import { Component } from '@angular/core';
import {
  BadgeComponent,
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, BadgeComponent, ButtonDirective, BorderDirective]
})
export class BadgesComponent {}
