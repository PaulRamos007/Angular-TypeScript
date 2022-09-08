import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDE } from '../models/ide';

@Injectable({
  providedIn: 'root',
})
export class IDEService {
  ides: Array<IDE>;

  constructor() {}

  public createIDE(ide: IDE): Observable<number> {
    ide.id = this.ides.length + 1;
    this.ides.push(ide);

    localStorage.setItem('ides', JSON.stringify(this.ides));

    return of(ide.id);
  }

  public getIDEs(): Observable<IDE[]> {
    let local = localStorage.getItem('ides');

    if (local) this.ides = <IDE[]>JSON.parse(local);

    return of(this.ides);
  }

  public getIDE(id: number): Observable<IDE> {
    let local = JSON.parse(localStorage.getItem('ides'));

    if (local) {
      let uniqueIDE = local.ides.find((ide) => ide.id === id);
      return of(uniqueIDE);
    } else {
      return of(null);
    }
  }

  public saveIDE(ide: IDE): Observable<boolean> {
    if (!ide) return of(false);

    this.ides.push(ide);
    localStorage.setItem('ides', JSON.stringify(this.ides));

    return of(true);
  }

  public search(companyName: string): Observable<IDE[]> {
    let query = this.ides.filter((f) => f.company === companyName);

    return of(query);
  }
}
