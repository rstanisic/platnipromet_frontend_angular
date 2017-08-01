import { Component,Input,OnInit } from '@angular/core';
import { Address } from './address';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { ClientService } from './client.service';
import { Client } from './client';
import { Location } from '@angular/common';

@Component({

  selector: 'my-address',
  templateUrl : './address.component.html',
  styleUrls: ['./address.component.css']

})
export class AddressComponent{
@Input() address : Address;
@Input() client: Client;
selectedAddress:Address;

constructor(
  private clientService : ClientService,
  private route : ActivatedRoute,
  private location: Location
){}

getAddress(): void {
  this.clientService.getAddress(this.client.id).then(address=> this.address=address);
}
ngOnInit() : void {
  this.route.params
  .switchMap((params: Params) => this.clientService.getAddress(+params['id']))
  .subscribe(address => this.address = address);
}

goBack(): void {
  this.location.back();
}
onSelectAddress(address : Address) : void{
  this.selectedAddress=address;
}
}
