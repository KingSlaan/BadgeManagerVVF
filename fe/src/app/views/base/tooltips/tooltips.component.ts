import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective,
  TooltipDirective
} from '@coreui/angular';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TooltipDirective, RouterLink, ButtonDirective]
})
export class TooltipsComponent {}
