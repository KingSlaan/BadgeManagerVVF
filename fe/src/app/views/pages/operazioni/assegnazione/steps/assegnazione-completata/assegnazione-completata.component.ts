import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { cilCheckCircle } from '@coreui/icons';

@Component({
  selector: 'app-assegnazione-completata',
  standalone: true,
  imports: [IconDirective],
  templateUrl: './assegnazione-completata.component.html',
  styleUrl: './assegnazione-completata.component.scss',
})
export class AssegnazioneCompletataComponent {
  icons = { cilCheckCircle };
}
