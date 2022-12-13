import { Component, OnInit, Input } from '@angular/core';
import { MOVIES} from '../mock-films'
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements  OnInit {

  ngOnInit(): void {
}

movies=MOVIES;
selectedMovie?: Movie;

  
onSelect(movie: Movie): void {
  this.selectedMovie=movie;
}
constructor() { }
 

}


