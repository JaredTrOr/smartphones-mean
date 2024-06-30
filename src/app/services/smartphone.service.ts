import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Smartphone } from '../models/smartphone';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  baseUri:string='';

  headers = new HttpHeaders()
  .set('Content-type','application/json');

  constructor(private http:HttpClient) { }

  //Método para agregar Smartphone
  addSmartphone(data:Smartphone): Observable<any>{
    let url=`${this.baseUri}/add`;
    return  this.http.post(url,data)
    .pipe(catchError(this.errorManager))
  }

  //Método para obtener todos los Smartphones
  getSmartphone(id: string): Observable<Smartphone> {
    let url=`${this.baseUri}/add/${id}`;
    return this.http.get<Smartphone>(url)
  }

  //Método para obtener Smartphone por id
  getSmartphones(){
    let url=`${this.baseUri}/smatphone`;
    return this.http.get(url);
  }

  //Método para actualizar
  updateSmartphones(){}

  //Método para eliminar Smartphone
  deleteSmartphone(){}

  errorManager(error: HttpErrorResponse){
    let errorMesagge='';
    if(error.error instanceof ErrorEvent){
      errorMesagge = error.error.message;
    }else{
      errorMesagge=`Error: ${error.status} Mensaje:${error.message}`;
    }
    console.log(errorMesagge);
    return throwError(()=>{
      return errorMesagge
    })
  }
}
