import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  constructor() { }
  getRegis() {
    return ['User 1', 'User 2', 'User 3']
  }
}
