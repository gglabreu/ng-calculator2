import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage

  constructor() { 
    this.storage = window.localStorage
   }

}
