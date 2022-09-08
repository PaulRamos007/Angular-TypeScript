import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  constructor() {}

  errors: string[] = [];
  private clients: Client[] = [];

  protected validateRequiredFields(client: Client): boolean {
    this.errors = [];

    if (client.firstName == null) {
      this.errors.push('Please provide a valid  first name');
    }
    if (client.lastName == null) {
      this.errors.push('Please provide a valid  last name');
    }
    if (!client.height || isNaN(client.height) || client.height <= 0) {
      this.errors.push('Please provide a valid height');
    }
    if (!client.weight || isNaN(client.weight) || client.weight <= 0) {
      this.errors.push('Please provide a valid weight');
    }

    return this.errors.length == 0;
  }

  public createClient(client: Client): Observable<boolean> {
    if (!this.validateRequiredFields(client)) return of(false);

    this.clients.push(client);
    this.calculateBMI(client);

    localStorage.setItem('clients', JSON.stringify(this.clients));

    return of(true);
  }

  getClients(): Observable<Client[]> {
    let local = localStorage.getItem('clients');

    if (local) this.clients = <Client[]>JSON.parse(local);

    return of(this.clients);
  }

  calculateBMI(client: Client) {
    return (client.bmi =
      (client.weight / client.height) * client.height).toFixed(2);
  }
}
