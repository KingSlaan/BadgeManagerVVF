import { VersionService } from './../../../services/version.service';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { VersionInfo } from '../../../../interfaces/version-info';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
  imports: [DatePipe]
})
export class DefaultFooterComponent extends FooterComponent implements AfterViewInit {
  constructor() {
    super();
  }

  private versionService = inject(VersionService);

  versionInfo: VersionInfo = {
    "version": "0.0.0-Catan",
    "environment": "development",
    "buildDate": ""
  };

  ngAfterViewInit(): void {
    this.versionService.getVersion().subscribe(data => {
      setTimeout(() => {
        this.versionInfo = data;
      });
    });
  }


}
