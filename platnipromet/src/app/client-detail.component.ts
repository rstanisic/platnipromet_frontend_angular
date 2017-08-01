import { Component,Input,OnInit } from '@angular/core';
import { Client } from './client';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './client.service';
import { Account } from './account';
import { Address } from './address';
import { Transaction } from './transaction';
import { AccountNumber } from './account.number';


import 'rxjs/add/operator/switchMap';
//pozivamo ,a ne importujemo klasu

@Component({
selector: 'client-detail',
templateUrl: './client-detail.component.html',
styleUrls : [ './client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit{
@Input() client : Client;
@Input() address : Address;
@Input() account : Account;
@Input() transaction:Transaction;
@Input() accountNumber:AccountNumber;
selectedAddress:Address;
selectedAccount:Account;
selectedAccountNumber:AccountNumber;
accounts :Account[];
transactions:Transaction[];
payOutTrans:Transaction[];


constructor(
  private clientService: ClientService,
  private route : ActivatedRoute,
  private location: Location,
  private router : Router
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
onSelectAddress(address : Address) : void{
  this.selectedAddress=address;
}
onSelectAccount(account:Account): void{
  this.selectedAccount=account;
}
onSelectAccountNumber(accountNumber:AccountNumber): void {
  this.selectedAccountNumber=accountNumber;
}
getAddress(): void {
  this.clientService.getAddress(this.client.id).then(address=> this.address=address);
}

getAccounts() : void{
  this.clientService.getAccounts(this.client.id).then(accounts=>this.accounts=accounts);
}

addressClick():void{
  this.onSelectAddress(this.address);
  this.getAddress();
}
goToPay() : void{
  this.router.navigate(['/payment']);
}
getPayInTrans(id:number) : void {
  this.clientService.getPayInTrans(this.client.id).then(transactions=> this.transactions=transactions);
    this.router.navigate(['/payintrans',this.client.id]);
   }
   deleteAccount(account: Account): void {
     this.clientService
     .deleteAccount(this.account.id)
     .then(() =>
   {
     this.accounts = this.accounts.filter(ac => ac !== account);
     if (this.account=== account) {
       this.account= null;
     }
   });
   this.goBack();
}

}
