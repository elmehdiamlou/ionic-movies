import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string;
  baseURL: string;
  imagesURL: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
    this.baseURL = environment.baseURL;
    this.imagesURL = environment.imagesURL;
  }

  getTopRatedMovies(page = 1): Observable<MovieService> {
    return this.http.get<MovieService>(
      `${this.baseURL}/movie/popular?page=${page}&api_key=${this.apiKey}`
    );
  }

  getMoviesByName(name): Observable<MovieService> {
    return this.http.get<MovieService>(
      `${this.baseURL}/search/movie?query=${name}&api_key=${this.apiKey}`
    );
  }
}
