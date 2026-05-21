import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CollapseDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    RouterLink,
    DropdownDividerDirective,
    NavbarComponent,
    ContainerComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    ReactiveFormsModule,
    FormDirective,
    FormControlDirective,
    ButtonGroupComponent
  ]
})
export class DropdownsComponent {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

}
