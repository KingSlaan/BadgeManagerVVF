import {
  Injectable,
  computed,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /**
   * Number of active loading operations
   */
  private requests = signal(0);

  /**
   * True if at least one loading is active
   */
  readonly isLoading = computed(() => this.requests() > 0);

  /**
   * Current number of active loadings
   */
  readonly activeRequests = computed(() => this.requests());

  show() {
    this.requests.update(value => value + 1);
  }

  hide() {
    this.requests.update(value => Math.max(0, value - 1));
  }

  reset() {
    this.requests.set(0);
  }
}
