import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService {
 
  private API_SERVER : string =  "http://localhost:8080/producs-type/"

  constructor(private httpClient: HttpClient) { }

  public getAllTypes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
