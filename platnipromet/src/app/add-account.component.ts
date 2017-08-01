import { Component,Input ,OnInit} from '@angular/core';
import { Account } from './account';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from './client.service'

import 'rxjs/add/operator/switchMap';
//pozivamo ,a ne importujemo klasu

@Component({
selector: 'account-add',
templateUrl: './add-account.component.html',
styleUrls: ['./client-update.component.css'],
})
export class AddAccounComponent{
@Input() account:Account;
  accounts:Account[];

constructor(
  private clientService: ClientService,
  private route : ActivatedRoute,
  private location: Location

){}



goBack(): void {
  this.location.back();
}



}
