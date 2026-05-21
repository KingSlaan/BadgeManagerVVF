import { Component, OnInit, signal } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, PopoverDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective, PopoverDirective]
})
export class PopoversComponent implements OnInit {

  readonly visible = signal(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.visible.update(visible => !visible);
    }, 3000);
  }

}
