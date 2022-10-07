import { Movie, MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id! : number
  currentMovie! : Movie
  constructor(
    private service : MovieService,
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.service.getById(this.id).subscribe({
      next : (data : Movie) => {
        this.currentMovie = data
        console.log(this.currentMovie)
      }
    })
  }

}
