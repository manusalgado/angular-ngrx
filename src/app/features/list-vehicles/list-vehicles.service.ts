import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/entities/entities';


@Injectable({
  providedIn: 'root'
})
export class ListVehiclesService {

  constructor(private http: HttpClient) { }

  public get(): Observable<{data: Vehicle[]}> {
    const url = 'http://localhost:4000/api/vehicles';
    return this.http.get<{data: Vehicle[]}>(url);
  }

}