import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailsModel } from '../models/details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _http: HttpClient) { }
 

  baseUrl = 'http://localhost:8057/api/publishListing'; 

  addDetails(details: DetailsModel): Observable<DetailsModel> {
          var data={details:details};
        return this._http.post<DetailsModel>(this.baseUrl, JSON.stringify(data), {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }
}
