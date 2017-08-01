import { Component,OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { ClientService } from './client.service';
import { Location } from '@angular/common';


@Component({
selector:'my-transactions',
templateUrl: './transaction.component.html',
styleUrls: [ './transaction.component.css'],
})
export class TransactionComponent implements OnInit{
  transactions : Transaction[]=[];

  constructor(private clientService: ClientService,
              private location: Location
  ){}

  ngOnInit() : void {

    this.clientService.getTransactions().then(transactions=> this.transactions=transactions);
  }
  goBack(): void {
    this.location.back();
}
}
