import { Movie, MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id! : number
  currentMovie! : Movie
  fg! : FormGroup
  constructor(
    private service : MovieService,
    private ar : ActivatedRoute,
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.service.getById(this.id).subscribe({
      next : (data : Movie) => {
        this.currentMovie = data
        console.log(this.currentMovie)
      }
    })

    this.fg = this.builder.group({
      liste: this.builder.array([])
    })
  }

  getArray() {
    return this.fg.get("liste") as FormArray
  }
  ajout(){
    let array : FormArray = this.getArray()
    array.push(new FormControl())
  }

}
