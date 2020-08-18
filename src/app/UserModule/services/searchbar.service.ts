import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  // getAllFunctionHalls: any;

  constructor(private http: HttpClient) { }
  getAllFunctionHalls():Observable<any>
  {
    return this.http.get('http://localhost:8057/api/functionhalls');
  }
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get('http://localhost:8057/api/functionhallsBy/?city='+city);
  }
 
}

