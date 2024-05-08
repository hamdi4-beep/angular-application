import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    this.log('Initializing the Logger Service.')
  }

  log<T>(msg: T) {
    console.log('Log Message:', msg)
  }
}
