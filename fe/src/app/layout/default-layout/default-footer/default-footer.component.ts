import { VersionService } from './../../../services/version.service';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { VersionInfo, VersionInfoBE } from '../../../../interfaces/version-info';
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

  versionInfo = signal<VersionInfo>({
    "version": "0.0.0-Catan",
    "environment": "development",
    "buildDate": ""
  });

  versionInfoBE = signal<VersionInfoBE>({
    "appName": "Applicativo Badge VVF",
    "version": "0.0.0",
    "buildDate": ""
  });


  ngAfterViewInit(): void {
    this.versionService.getVersion().subscribe(data => {
      setTimeout(() => {
        this.versionInfo.set((data ?? {}));
      });
    });

    this.versionService.getVersionBE().subscribe({
      next: (data: any) => {
        this.versionInfoBE.set((data.data ?? {}));
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });
  }


}
