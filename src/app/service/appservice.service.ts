import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }
  // writeUser(http:string){
  //   localStorage.setItem('http',http)
  // }  
  addPaymentIntentStripe(
    id: string,
    name: string,
    email: string,
    price: number,
    currency: string,
    description: string

  ) {
    let uploadData = {
      id: id,
      name: name,
      email: email,
      price: price,
      currency: currency,
      description: description
    };
    const url = environment.baseUrl + '/payment-intent';
    console.log(uploadData);
    return this.http.post<any>(url, JSON.stringify(uploadData), {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    })
      .pipe(tap(resData => {
        console.log(resData);
        return resData;
      }));
  }

  storePaymentIntent(
    itemId: string,
    itemName: string,
    buyerEmail: string,
    itemPrice: number,
    currency: string,
    description: string,
    intent_id: string
  ) {
    let uploadData = {
      itemId: itemId,
      itemName: itemName,
      intentId: intent_id,
      currency: currency,
      buyerEmail: buyerEmail,
      itemPrice: itemPrice,
      itemDescription: description
    };
    const url = environment.baseUrl + '/store-intent';
    console.log(uploadData);
    return this.http.post<any>(url, JSON.stringify(uploadData), {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    })
      .pipe(tap(resData => {
        console.log(resData);
        return resData;
      }));
  }
}
