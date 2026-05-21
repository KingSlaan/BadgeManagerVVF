import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, NavComponent, NavItemComponent, NavLinkDirective, RouterLink, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class NavsComponent {}
