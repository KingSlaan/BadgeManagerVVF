import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { SediService } from '../app/services/sedi.service';
import { Sede } from '../interfaces/sedi';

export interface SelectOption {
  label: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class SediStateService {
  private sediService = inject(SediService);

  private readonly _sedi = signal<Sede[]>([]);
  private readonly _loading = signal(false);
  private readonly _loaded = signal(false);

  readonly sedi = this._sedi.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly loaded = this._loaded.asReadonly();

  readonly sediOptions = computed<SelectOption[]>(() =>
    this._sedi().map(sede => ({
      label: sede.descrizione,
      value: sede.codice,
    }))
  );

  loadSedi(forceReload = false): void {
    if (this._loaded() && !forceReload) {
      return;
    }

    this._loading.set(true);

    this.sediService.getSediList()
      .pipe(finalize(() => this._loading.set(false)))
      .subscribe({
        next: response => {
          this._sedi.set(response.data ?? []);
          this._loaded.set(true);
        },
        error: () => {
          this._sedi.set([]);
          this._loaded.set(false);
        },
      });
  }

  refreshSedi(): void {
    this.loadSedi(true);
  }

  clearSedi(): void {
    this._sedi.set([]);
    this._loaded.set(false);
  }
}
