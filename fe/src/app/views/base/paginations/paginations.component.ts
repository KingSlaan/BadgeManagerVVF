import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, PaginationComponent, PageItemComponent, PageLinkDirective, RouterLink]
})
export class PaginationsComponent {}
