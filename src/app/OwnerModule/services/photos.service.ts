import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  SERVER_URL: string = "http://localhost:8057/api/image/";

  constructor(private http: HttpClient) { }
  
  public upload(formData) {

    return this.http.post<any>(this.SERVER_URL, formData,  {
      reportProgress: true,
      observe: 'events'
    });
  }
  

 
}
