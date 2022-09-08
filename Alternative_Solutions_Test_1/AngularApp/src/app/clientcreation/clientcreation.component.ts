import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-clientcreation',
  templateUrl: './clientcreation.component.html',
  styleUrls: ['./clientcreation.component.css'],
})
export class ClientcreationComponent implements OnInit {
  client: Client = new Client();
  message: string = '';

  constructor(public clientService: ClientServiceService) {}

  ngOnInit(): void {}

  createClient(): void {
    this.clientService.createClient(this.client).subscribe((result) => {
      if (result) {
        this.message = 'Client created successfully';
        this.client = new Client();
      }
    });
  }
}
