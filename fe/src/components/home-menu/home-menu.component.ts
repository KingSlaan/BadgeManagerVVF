import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { HomeMenuCard, HomeMenuSection } from '../../interfaces/home-menu-card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [RouterLink, IconDirective,NgTemplateOutlet],
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.scss',
})
export class HomeMenuComponent {
  cards = input<HomeMenuCard[]>([]);
  sections = input<HomeMenuSection[]>([]);
}
