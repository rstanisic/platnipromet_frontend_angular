import { NgModule,NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ClientUpdateComponent } from './client-update.component';
import { ClientComponent } from './client.component';
import {TopClientsComponent } from './top-clients.component';
import { ClientDetailComponent} from './client-detail.component';
import { AddClientComponent } from './add-client.component';
import { AddressComponent } from './address.component';
import { PaymentComponent } from './payment.component';
import { PayInTransComponent } from './payin-trans.component';
import { TransactionComponent } from './transaction.component';
import { BankComponent } from './bank.component';

import { ClientService } from './client.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule ,
                  AppRoutingModule,
                  HttpModule
                ],
  declarations: [ AppComponent,
                  ClientUpdateComponent,
                  ClientComponent,
                  TopClientsComponent,
                  ClientDetailComponent,
                  AddClientComponent,
                  AddressComponent,
                  PaymentComponent,
                  PayInTransComponent,
                  TransactionComponent,
                  BankComponent
                ],
                schemas:[
                  NO_ERRORS_SCHEMA
                ],
  bootstrap:    [ AppComponent ],
  providers: [{provide:ClientService,useClass: ClientService}],
//provajduj clijentservise koristeci slow.. tj
//napravi SCS umetni je kao CS
//ovo se koristi za asihrono ponasanje i stavi se neki gith koji kaze ucitava se...
/*kad se ubaci u app.modulu vazi za svuda*/
})
export class AppModule { }
