import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './client.service'
import { Transaction } from './transaction';

import 'rxjs/add/operator/switchMap';
//pozivamo ,a ne importujemo klasu

@Component({
selector: 'my-payment',
templateUrl: './payment.component.html',
styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit{

@Input() transaction : Transaction;
transactions : Transaction[];
constructor(
  private clientService: ClientService,
  private route : ActivatedRoute,
  private location: Location
)
{}
ngOnInit() : void {
  this.clientService.getTransactions().then(transactions=> this.transactions=transactions);
}
goBack(): void {
  this.location.back();
}

addTransaction() : void{
  this.clientService.createTransaction(this.transaction)
  .then(transaction=>{
    this.transactions.push(transaction);
      this.transaction=null;
  });
  this.goBack();
}


}
