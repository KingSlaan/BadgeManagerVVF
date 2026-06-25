import { CardBodyComponent, CardComponent, CardFooterComponent } from '@coreui/angular';
import { TessereInserimentoFormComponent } from './../../../../../components/tessere-inserimento-form/tessere-inserimento-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  standalone: true,
  imports: [
    TessereInserimentoFormComponent,
    CardComponent,
    CardBodyComponent,
  ],
  templateUrl: './inserimento.component.html',
})
export class InserimentoComponent {
  onSaved(): void {
    // reload data, navigate, or show page-specific logic if needed
  }
}
