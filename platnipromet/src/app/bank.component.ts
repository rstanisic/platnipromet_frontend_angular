import { Component,OnInit } from '@angular/core';
import { Bank } from './bank';
import { ClientService } from './client.service';
import { Location } from '@angular/common';


@Component({
selector:'my-banks',
templateUrl: './bank.component.html',
styleUrls: [ './bank.component.css'],
})
export class BankComponent implements OnInit{
  banks : Bank[]=[]

  constructor(private clientService: ClientService,
              private location: Location
  ){}

  ngOnInit() : void {

    this.clientService.getBanks().then(banks=> this.banks=banks);
  }
  goBack(): void {
    this.location.back();
}
}
