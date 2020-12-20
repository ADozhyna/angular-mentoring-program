import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoaderService {

  private isShowed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public spinnerShow(): void {
    this.isShowed.next(true);
  }

  public spinnerHide(): void {
    this.isShowed.next(false);
  }

  get isShow(): BehaviorSubject<boolean> {
    return this.isShowed;
  }
}
