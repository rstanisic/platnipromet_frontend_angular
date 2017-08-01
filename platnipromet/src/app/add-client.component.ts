import { Component,Input ,OnInit} from '@angular/core';
import { Client } from './client';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './client.service'

import 'rxjs/add/operator/switchMap';
//pozivamo ,a ne importujemo klasu

@Component({
selector: 'client-add',
templateUrl: './add-client.component.html',
styleUrls: ['./client-update.component.css'],
})
export class AddClientComponent{
@Input() client:Client;
  clients :Client[] = [];


constructor(
  private clientService: ClientService,
  private route : ActivatedRoute,
  private location: Location,
  ){
    this.client = {
   id:0,
   name: "",
   dateOfBirth: "",
   email: "",
   password: "",
   brojLk: 0,
   jmbg: 0,
   brojTel: ""
}
  }
goBack(): void {
  this.location.back();
}
addClient() : void {
  this.clientService.createClient(this.client)
  .then(client => {
    this.clients.push(client);
    this.client= null;
    console.log(client);
  });
  this.goBack();
}

}
