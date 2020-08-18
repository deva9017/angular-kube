import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { PaymentDetailsModel } from '../models/paymentdetails.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentdetailsService {

  constructor(private _http: HttpClient) { }
  // public addPaymentDetails(obj: any): Observable<any> {
  //   return this._http.post("https://jsonplaceholder.typicode.com/posts", obj);
  // }
  getBanks(): Observable<any>{
    return this._http.get("http://localhost:8057/api/banks");
  }
  getBranches(bank): Observable<any>{
    return this._http.get("http://localhost:8057/api/branches?bank="+bank);

  }
  getBranchIfsc(bankname,branch): Observable<any>{
    const opts = { params: new HttpParams({fromString: "bankname="+bankname+"&"+"branch="+branch}) };
    return this._http.get("http://localhost:8057/api/bankdetails/",opts);
    
  }
  
  baseUrl = 'http://localhost:8057/api/publishListing'; 

  addPaymentDetails(payment: PaymentDetailsModel): Observable<PaymentDetailsModel> {
          var data={payment:payment};
        return this._http.post<PaymentDetailsModel>(this.baseUrl, JSON.stringify(data), {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}
