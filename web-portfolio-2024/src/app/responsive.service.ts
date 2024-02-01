import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobile = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkScreenWidth();
    window.addEventListener('resize', () => this.checkScreenWidth());
  }

  private checkScreenWidth(): void {
    const isMobile = window.innerWidth < 875;
    this.isMobile.next(isMobile);
  }

  getIsMobile(): Observable<boolean> {
    return this.isMobile.asObservable();
  }
}
