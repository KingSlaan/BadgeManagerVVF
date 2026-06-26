import { Component, signal } from '@angular/core';
import { HomeMenuCard } from './../../../../../interfaces/home-menu-card';
import { HomeMenuComponent } from './../../../../../components/home-menu/home-menu.component';
import { cilBuilding, cilCreditCard, cilPeople, cilUser } from '@coreui/icons';

@Component({
  selector: 'app-liste-home',
  imports: [
    HomeMenuComponent
  ],
  templateUrl: './liste-home.component.html',
  styleUrl: './liste-home.component.scss',
})
export class ListeHomeComponent {

  cards: HomeMenuCard[] = [
    {
      title: 'Tessere',
      description: 'Gestione badge',
      route: '/liste/tessere',
      icon: cilCreditCard
    },
    {
      title: 'Sedi',
      description: 'Gestione sedi',
      route: '/liste/sedi',
      icon: cilBuilding
    },
    {
      title: 'Persone',
      description: 'Gestione persone',
      route: '/liste/persone',
      icon: cilPeople
    },
    {
      title: 'Utenti',
      description: 'Gestione utenti',
      route: '/liste/utenti',
      icon: cilUser
    },
  ];

}
