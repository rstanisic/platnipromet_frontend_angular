import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { ClientUpdateComponent } from './client-update.component';
import { ClientComponent } from './client.component';
import {TopClientsComponent } from './top-clients.component';
import { ClientDetailComponent } from './client-detail.component';
import { AddClientComponent } from './add-client.component';
import { AddressComponent } from './address.component';
import { PaymentComponent} from './payment.component';
import { PayInTransComponent } from './payin-trans.component';
import { TransactionComponent } from './transaction.component';
import { BankComponent } from './bank.component';


const routes : Routes = [
  {
    path: 'clients',
    component: ClientComponent
  },
  {
    path: 'topclients',
    component: TopClientsComponent
  },
  {
    path:'',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: 'update/:id',
    component: ClientUpdateComponent
  },
  {
    path: 'detail/:id',
    component: ClientDetailComponent
  },
  {
    path: 'addclient',
    component: AddClientComponent
  },

{
  path: 'payment',
  component : PaymentComponent
},
{
  path: 'payintrans/:id',
  component: PayInTransComponent
},
{
  path: 'transactions',
  component : TransactionComponent
},
{
  path: 'banks',
  component : BankComponent
},

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{

}
