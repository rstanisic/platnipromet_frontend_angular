import { Component,OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service'

@Component({
selector:'my-topclients',
templateUrl: './top-clients.component.html',
styleUrls: [ './top-clients.component.css'],
})
export class TopClientsComponent implements OnInit{
  clients : Client[]=[];

  constructor(private clientService: ClientService){}

  ngOnInit() : void {

    this.clientService.getClients().then(clients=> this.clients=clients);
  }
}
