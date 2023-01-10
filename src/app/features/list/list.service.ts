import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Heroe } from 'src/app/shared/entities/entities';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public get(): Observable<{data: Heroe[]}> {
    const url = 'http://localhost:4000/api/heroes';
    return this.http.get<{data: Heroe[]}>(url);
  }

}