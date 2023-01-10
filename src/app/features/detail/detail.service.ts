import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/shared/entities/entities';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  public heroe(id: number): Observable<{data: Heroe}> {
    const url = `http://localhost:4000/api/heroes/${id}`;
    return this.http.get<{data: Heroe}>(url);
  }

}