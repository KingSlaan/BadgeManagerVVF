import { Component } from '@angular/core';
import {
  AlignDirective,
  BorderDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableActiveDirective,
  TableColorDirective,
  TableDirective
} from '@coreui/angular';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class TablesComponent {}
