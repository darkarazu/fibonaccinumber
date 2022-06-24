import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _username: string = '';
  private dealer: BehaviorSubject<string> = new BehaviorSubject(this._username);
  dealer$: Observable<string> = this.dealer.asObservable();

  constructor() { }

  setUsername(value: string) {
    this._username = value;
    this.dealer.next(value);
  }

}
