import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  PopoverDirective,
  RowComponent,
  TooltipDirective
} from '@coreui/angular';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, ButtonDirective, NgTemplateOutlet, ModalToggleDirective, PopoverDirective, TooltipDirective]
})
export class ModalsComponent {

  public liveDemoVisible = false;

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
  }
}
