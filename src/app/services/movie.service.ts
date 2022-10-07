import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "http://localhost:53448/api/"
  constructor(
    private client : HttpClient
  ) { }

  getAll() : Observable<Movie[]> {
    return this.client.get<Movie[]>(this.url+"movie")
  }

  getById(id : number) : Observable<Movie>{
    let myHeaders = new HttpHeaders({
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    })
    return this.client.get<Movie>(this.url+"movie/"+id, {headers : myHeaders})
  }
}

export interface Movie{
  id : number
  title : string
}
