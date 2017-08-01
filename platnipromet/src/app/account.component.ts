import { Component,Input,OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { ClientService } from './client.service';
import { Client } from './client';
import { Location } from '@angular/common';
import { Account } from './account';

@Component ({
selector : "my-account",
templateUrl : 'account.component.html',
styleUrls : ['./account.component.css']

})
export class AccountComponent{
  @Input() account : Account;
  @Input() client : Client;
  accounts : Account[];

  constructor(
    private clientService : ClientService,
    private route : ActivatedRoute,
    private location: Location
  ){}

  getAccounts() : void{
    this.clientService.getAccounts(this.client.id).then(accounts=>this.accounts=accounts);
  }

}
