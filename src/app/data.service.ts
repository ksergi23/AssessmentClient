import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbUrl = 'http://localhost:3000/disney';


  constructor(private http: HttpClient) { }
  
  getList() : Observable<any[]> {
    return this.http.get<any>(`${this.dbUrl}/getall`,httpOptions); 
   }

   
  makeList(body): Observable<any[]> {
    
    return this.http.post<any[]>(`${this.dbUrl}/create`, body,httpOptions)
  }

  updateList(body, id): Observable<any>{
    return this.http.put<any>(`${this.dbUrl}/update/${id}`, body, httpOptions)
  }

  deleteList(id): Observable<any[]> {

    return this.http.delete<any>(`${this.dbUrl}/delete/${id}`, httpOptions)


  }



}
