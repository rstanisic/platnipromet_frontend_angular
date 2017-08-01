import { Component,OnInit,Input } from '@angular/core';
import { ClientService } from './client.service';
import { Transaction } from './transaction';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { Location } from '@angular/common';
import { AccountNumber} from './account.number';
import { Client } from './client';

@Component({
  selector:'my-payInTrans',
  template:'./payin-trans.component.html',
  styleUrls: [ './payin-trans.component.css'],

})
export class PayInTransComponent implements OnInit{
  @Input() client:Client;
  accountNumber:AccountNumber;
  transactions:Transaction[];
  transaction:Transaction;
  constructor(
    private clientService : ClientService,
    private route : ActivatedRoute,
    private location: Location
  ){}

  ngOnInit() : void {
    this.route.params
    .switchMap((params: Params) => this.clientService.getPayInTrans(+params['id']))
    .subscribe(transactions => this.transactions = transactions);
  }

  getPayInTrans() : void {
    this.clientService.getPayInTrans(this.client.id).then(transactions=> this.transactions=transactions);
     }
}
