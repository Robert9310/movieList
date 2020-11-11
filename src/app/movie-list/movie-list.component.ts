import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies : Movie[];
  yearInput : number;
  showMoviesList:boolean = false;
  showNotFound:boolean = false;
  messageNotFound: string ="";
  url:string = "https://jsonmock.hackerrank.com/api/movies";

  ngOnInit() {
  }

  searchMovie(year:number){
    
    const urlFilter:string = this.url+"?Year="+year; 

    fetch(urlFilter,{
      method:'GET',
    }).then(res=>{
      
      res.json().then(data=>{
        this.movies = data.data;
        if(data.total > 0){
          this.showMoviesList = true;
        }else{
          this.messageNotFound = "No Results Found";
          this.showMoviesList = false;
        }
      });
      
    })
    .then(err=>{
      this.messageNotFound = "Error";
    });
  }

}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
