import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = "http://localhost:53448/api/"

  constructor(
    private client : HttpClient
  ) { }

  login(email : string, pwd : string) {
    this.client.post<User>(this.url+"auth/auth", {email, password : pwd}).subscribe({
      next : (data : User) => {
        localStorage.setItem('token', data.token)
      }
    })
  }
}

export interface User {
  id : number
  token : string
  firstname : string
}
