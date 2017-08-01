//ova komponenta nam sluzi da napravimo novi tag u
//html-u  kao tag my-apps .da usitnimo kod
import { Component,Input,OnInit } from '@angular/core';
import { Client } from './client';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './client.service'

import 'rxjs/add/operator/switchMap';
//pozivamo ,a ne importujemo klasu

@Component({
selector: 'client-update',
templateUrl: './client-update.component.html',
styleUrls : [ './client-update.component.css'],
})
export class ClientUpdateComponent implements OnInit{
@Input() client : Client;
constructor(
  private clientService: ClientService,
  private route : ActivatedRoute,
  private location: Location
)
{}
ngOnInit() : void {
  this.route.params
  .switchMap((params: Params) => this.clientService.getClient(+params['id']))
  .subscribe(client => this.client = client);
}

goBack(): void {
  this.location.back();
}
updateClient(): void {
  this.clientService.updateClient(this.client)
  .then(()=>this.goBack());
}

}
