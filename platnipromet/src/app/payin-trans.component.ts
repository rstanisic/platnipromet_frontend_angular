import { Component,OnInit,Input } from '@angular/core';
import { ClientService } from './client.service';
import { Transaction } from './transaction';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { Location } from '@angular/common';
import { AccountNumber} from './account.number';
import { Client } from './client';


@Component({
  selector:'my-payInTrans',
  templateUrl:'./payin-trans.component.html',
  styleUrls: [ './payin-trans.component.css'],

})
export class PayInTransComponent implements OnInit{
  accountNumber:AccountNumber;
  transactions:Transaction[]=[];
@Input() transaction:Transaction;
  @Input() client:Client;
  constructor(
    private clientService : ClientService,
    private route : ActivatedRoute,
    private location: Location,
    private router : Router
  ){}
  ngOnInit() : void {
    this.route.params
    .switchMap((params: Params) => this.clientService.getClient(+params['id']))
    .subscribe(client => this.client = client);
  }
  getPayInTrans() : void {
    this.clientService.getPayInTrans(this.client.id).then(transactions=> this.transactions=transactions);
    this.router.navigate(['/payintrans',this.client.id]);
      }
     goBack(): void {
       this.location.back();
     }
}
