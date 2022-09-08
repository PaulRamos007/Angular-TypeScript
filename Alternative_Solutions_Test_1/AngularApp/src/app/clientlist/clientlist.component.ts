import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
  constructor(private clientService: ClientServiceService) {}

  clients: Client[] = [];

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }
}
