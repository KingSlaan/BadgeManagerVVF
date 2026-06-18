import { ListeCard } from './../../../../interfaces/liste-card';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-liste-home',
  imports: [
    RouterLink,
    IconDirective
  ],
  templateUrl: './liste-home.component.html',
  styleUrl: './liste-home.component.scss',
})
export class ListeHomeComponent {

  cards = signal<ListeCard[]>([
    {
      title: 'Tessere',
      description: 'Gestione badge',
      route: '/liste/lista-tessere',
      icon: 'cilCreditCard'
    },
    {
      title: 'Utenti',
      description: 'Gestione utenti',
      route: '/liste/lista-utenti',
      icon: 'cilUser'
    },
    {
      title: 'Sedi',
      description: 'Gestione sedi',
      route: '/liste/lista-sedi',
      icon: 'cilBuilding'
    }
  ]);

}
