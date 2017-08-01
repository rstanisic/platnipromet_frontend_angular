import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http} from '@angular/http';
import { Client } from './client';
import { Address } from './address';
import { Account } from './account';
import { Transaction } from './transaction';
import { Bank } from './bank';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class ClientService {
    private clientsUrl = 'http://localhost:8080/platnipromet/clients';
    private clientAddressUrl= 'http://localhost:8080/platnipromet/clients/clientaddress';
    private clientAccountsUrl= 'http://localhost:8080/platnipromet/clients/clientaccounts';
    private payInTransUrl='http://localhost:8080/platnipromet/transactions/payinclienttrans';
    private payOutTransUrl='http://localhost:8080/platnipromet/transactions/payoutclienttrans';
    private transactionsUrl='http://localhost:8080/platnipromet/transactions';
    private banksUrl='http://localhost:8080/platnipromet/banks';
    private accountsUrl='http://localhost:8080/platnipromet/accounts';
    private addAccountUrl='http://localhost:8080/platnipromet/accounts/client';

    constructor(private http: Http) {
    }

    getClients(): Promise<Client[]> {
        return this.http.get(this.clientsUrl).toPromise()
            .then((response) => response.json() as Client[])
            .catch(this.handleError);
    }



    getAccounts(id:number): Promise<Account[]>{
      const url = `${this.clientAccountsUrl}/${id}`;
      return this.http.get(url).toPromise()
           .then((response)=>response.json() as Account[])
           .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getClient(id: number): Promise<Client> {
       const url = `${this.clientsUrl}/${id}`;
       return this.http.get(url)
           .toPromise()
           .then(response => response.json() as Client)
           .catch(this.handleError);
   }
   getAddress(id:number): Promise<Address>{
     const url = `${this.clientAddressUrl}/${id}`;
     return this.http.get(url)
     .toPromise()
     .then(response=>response.json() as Address)
     .catch(this.handleError);
   }
   getPayInTrans(id:number): Promise<Transaction[]>{
     const url =`${this.payInTransUrl}/${id}`;
     return this.http.get(url)
     .toPromise()
     .then(response=>response.json() as Transaction[])
     .catch(this.handleError);
   }
   getPayOutTrans(id:number): Promise<Transaction[]>{
     const url =`${this.payOutTransUrl}/${id}`;
     return this.http.get(url)
     .toPromise()
     .then(response=>response.json() as Transaction[])
     .catch(this.handleError);
}
updateClient(client: Client): Promise<Client> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      const url = `${this.clientsUrl}/${client.id}`;
      return this.http
          .put(url, JSON.stringify(client), options)
          .toPromise()
          .then(() => client)
          .catch(this.handleError);
  }
 createClient(client:Client): Promise<Client> {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http
            .post(this.clientsUrl, JSON.stringify(client), options)
            .toPromise()
            .then(res => res.json() as Client)
            .catch(this.handleError);
}

createTransaction(transaction:Transaction):Promise <Transaction>{
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({headers: headers});
  return this.http
  .post(this.transactionsUrl,JSON.stringify(transaction),options)
  .toPromise()
  .then(res=>res.json() as Transaction)
  .catch(this.handleError);
}
deleteClient(id: number): Promise<void> {
      const url = `${this.clientsUrl}/${id}`;
      return this.http.delete(url)
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
  }
  deleteAccount(id:number):Promise<void>{
    const url=`${this.accountsUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(()=>null)
    .catch(this.handleError);
  }

  getTransactions() :Promise <Transaction[]>{
    return this.http.get(this.transactionsUrl).toPromise()
    .then((response)=>response.json() as Transaction[])
    .catch(this.handleError);
  }
  getBanks() : Promise <Bank[]>{
    return this.http.get(this.banksUrl).toPromise()
    .then((response)=>response.json() as Bank[])
    .catch(this.handleError);
  }
}
