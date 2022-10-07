import { AuthService } from './../../services/auth.service';
import { Movie, MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  movieList : Movie[] = []
  constructor(
    private _service : MovieService,
    private _router : Router,
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe({
      next : (data : Movie[]) => this.movieList = data
    })
  }

  godetail(id : number) {
    this._router.navigate(["detail", id])

  }

  login() {
    this._auth.login("steve.lorent@bstorm.be", "test1234")
  }

}
