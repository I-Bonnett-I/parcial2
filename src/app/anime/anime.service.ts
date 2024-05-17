import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './anime';

import { environment } from '../../environments/environment.development';

@Injectable({
 providedIn: 'root'
})
export class AnimeService {

constructor(private http: HttpClient) { }
private apiUrl = environment.baseUrl;

getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }
}
