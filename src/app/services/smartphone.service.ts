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
  getSmartphones(){
    let url=`${this.baseUri}/smatphones`;
    return this.http.get(url);
  }

   //Método para obtener Smartphone por id
  getSmartphone(id: string): Observable<Smartphone> {
    let url=`${this.baseUri}/get/${id}`;
    return this.http.get<Smartphone>(url)
  }


  //Método para actualizar
  updateSmartphone(id: string, data: Smartphone): Observable<Smartphone>{
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put<Smartphone>(url,data);
  }

  //Método para eliminar Smartphone
  deleteSmartphone(id: string): Observable<any>{
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete<Smartphone>(url);
  }

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
