import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  baseUrl: string = 'http:localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'aplication/json');

  constructor(private http:HttpClient) { }

  agregarSmartphone(data):Observable<any>{
    let url = `${this.baseUrl}/agregar`;
    return this.http.post(url,data).pipe(catchError(this.errorManager));
  }
}
