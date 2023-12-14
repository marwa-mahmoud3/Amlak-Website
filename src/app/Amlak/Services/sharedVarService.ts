import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedVarService {

  private selectedLanguage : BehaviorSubject<any>;


  constructor() {
    this.selectedLanguage = new BehaviorSubject<any>({});
  }

  getLanguage(): Observable<any>{
    return this.selectedLanguage.asObservable();
  }
  setLanguage(newValue:any): void {
    this.selectedLanguage.next(newValue);
  }
}