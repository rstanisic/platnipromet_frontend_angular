import { AccountNumber } from './account.number';

export class Transaction{
  id: number ;
  dateOfTransaction:string;
  payerInfo: string;
  purposeOfPayment:string;
  recipientInfo:string;
  amount:number;
  toAccount:AccountNumber;
  fromAccount:AccountNumber;
}
