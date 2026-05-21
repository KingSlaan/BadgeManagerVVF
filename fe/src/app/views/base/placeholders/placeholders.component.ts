import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BgColorDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  ColDirective,
  PlaceholderAnimationDirective,
  PlaceholderDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-placeholders',
  templateUrl: './placeholders.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, CardImgDirective, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, RouterLink, PlaceholderAnimationDirective, PlaceholderDirective, BgColorDirective]
})
export class PlaceholdersComponent {}
