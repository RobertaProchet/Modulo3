import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';

/*
interface Movie {
    title: string;
    year:  number;
    cover: string
}


const MOVIES: Array<Movie> = [
  {
    title: 'Titanic',
    year: 1997,
    cover: 'https://m.media-amazon.com/images/I/81n3QXOwA1L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'As Branquelas',
    year: 2004,
    cover: 'https://m.media-amazon.com/images/S/pv-target-images/1352596ce2d70043fbad4ad5fe22dcdbc3c5ad03e7ff6c8692032219910f9970.jpg'
  },
  {
    title: 'Os Vingadores Ultimato',
    year: 2019,
    cover: 'https://m.media-amazon.com/images/I/91J7VHbAwBL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'X-Men Apocalipse',
    year: 2016,
    cover: 'https://m.media-amazon.com/images/I/A1whoLUEeVL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'Tempestade Infinita',
    year: 2022,
    cover: 'https://m.media-amazon.com/images/S/pv-target-images/5c168bceb93dece76b7898944f6387a4a7a7b8930056a88d40cf9c96f3f09db3.jpg'
  },
  {
    title: 'A Caverna: Perigo Subterrâneo',
    year: 2016,
    cover: 'https://m.media-amazon.com/images/S/pv-target-images/99d09b7cc675d3a2d27b9aea2f2a714eade077c8f3748259b2f20b560a62540e.jpg'
  }
];
*/

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

  movies: Array<Movie> | undefined;
  searchPattern: string = '';

  constructor(
    private moviesSrv: MoviesService,
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesSrv.load(this.searchPattern).subscribe( (movies :Movie[] ) => {
      this.movies = movies;
    })
  }

  
  clearSearch(): void {
    this.searchPattern = '';
  }
  
  
  onSearchChange(): void {
    this.loadMovies();
  }



}
