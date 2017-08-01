import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
selector: 'my-app',
template:`
<div class="header">
<h1>Platni Promet</h1>
</div>
<div class="absolute">
 <nav>
   <a routerLink="/clients" routerLinkActive="active">List Of Clients</a>
  <a routerLink="/topclients" routerLinkActive="active">List of Top Clients</a>
  <a routerLink="/transactions" routerLinkActive="active">List of Transactions</a>
  <a routerLink="/banks" routerLinkActive="active">List Of Banks</a>
  <router-outlet></router-outlet>
</nav>
</div>
`,
styleUrls:['./app.component.css'],

})
export class AppComponent{

}
//u bootstrap-u podeseno da kad se pokrene otvara AppComponent
//selector koji je to tag'<my-app>'
//template sablon kako ce app izgledati

//{{}} interpolacija sta god da pise u name u klasi AppComponent
//videce se u interfejsu
//znaci AppComponent ce biti interfejs aplikacije
