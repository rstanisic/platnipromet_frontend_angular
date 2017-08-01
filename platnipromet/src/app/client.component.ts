import { Component } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Address } from './address';
import { Location } from '@angular/common';

@Component({
  selector: 'my-clients',
  templateUrl: './client.component.html',

  styleUrls: ['./client.component.css'],

})
export class  ClientComponent implements OnInit  {
   clients : Client [];
   selectedClient : Client;
   address:Address;
   constructor(
     private clientService : ClientService,
     private router : Router,
       private location: Location,
       private route : ActivatedRoute
   )
   {}

  getClients(): void {
    this.clientService.getClients().then(clients=> this.clients=clients);
  }
  //napravi funkciju koja prima nekog clienta onda(then) moze da traje ...
  ngOnInit() : void {
    this.getClients();
  }

   onSelect(client: Client) : void {
   this.selectedClient = client;
   }
   goToUpdate() : void {
     this.router.navigate(['/update',this.selectedClient.id]);
   }
   goToDetail() : void {
     this.router.navigate(['/detail',this.selectedClient.id]);
   }
   goToAddClient() : void{
     this.router.navigate(['/addclient']);
   }
   deleteClient(client: Client): void {

     this.clientService
     .deleteClient(this.selectedClient.id)
     .then(() =>
   {
     this.clients = this.clients.filter(c => c !== client);
     if (this.selectedClient=== client) {
       this.selectedClient= null;
     }
   });
this.goBack();
   }
   goBack(): void {
     this.location.back();
   }
}
