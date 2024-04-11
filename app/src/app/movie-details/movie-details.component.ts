import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MoviesService} from '../movies.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']

})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieSrv: MoviesService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieSrv.get(id).subscribe(  (movie:Movie) => {
      this.movie = movie;
    });
  }

}
