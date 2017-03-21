import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class SharedService{
  state: String;
  stateChange: Observable<String>;
  stateChangeObserver: Observer<String>;

  constructor() {
    this.stateChange=  new Observable((observer:Observer<String>) => {
      this.stateChangeObserver = observer;
    });
  }

  setState(state:String) {
    this.state = state;
    this.stateChangeObserver.next(this.state);
  }
}
