import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { HomeMenuCard } from '../../interfaces/home-menu-card';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [RouterLink, IconDirective],
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.scss',
})
export class HomeMenuComponent {
  cards = input.required<HomeMenuCard[]>();
}
