import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
private apiUrl = 'https://v2.jokeapi.dev/joke/Any'

  constructor(private http:HttpClient) { }
  getJokes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
