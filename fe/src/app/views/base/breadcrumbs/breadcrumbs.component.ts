import { Component, OnInit, signal } from '@angular/core';

import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbRouterComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  templateUrl: './breadcrumbs.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbRouterComponent]
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbItems = signal<any>([]);

  constructor() {}

  ngOnInit(): void {
    this.breadcrumbItems.set([
      { label: 'Home', url: '/', attributes: { title: 'Home' } },
      { label: 'Library', url: '/' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'CoreUI', url: '/' }
    ]);

    setTimeout(() => {
      this.breadcrumbItems.set([
        { label: 'CoreUI', url: '/' },
        { label: 'Data', url: '/dashboard/' },
        { label: 'Library', url: '/' },
        { label: 'Home', url: '/', attributes: { title: 'Home' } }
      ]);
    }, 5000);
  }
}
