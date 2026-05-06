import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class Loading {
  private requestCount = signal(0);

  isLoading = computed(() => this.requestCount() > 0);

  show() {
    this.requestCount.update((count) => count + 1);
  }

  hide() {
    setTimeout(() => {}, 3000);
    this.requestCount.update((count) => Math.max(0, count - 1));
  }
}
