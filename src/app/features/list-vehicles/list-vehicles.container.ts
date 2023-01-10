import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData, TableTitle } from 'src/app/shared/components/table/table.interfaces';
import { Vehicle } from 'src/app/shared/entities/entities';
import { ListVehiclesFacade } from './list-vehicle.facade';

@Component({
  selector: 'list-vehicle-container',
  templateUrl: './list-vehicles.container.html'
})
export class ListVehicleContainer implements OnInit {

  public tableData: TableData[] = [];
    public tableTitle: TableTitle[] = [{
        name: 'Name',
        type: 'Type',
        condition: 'Condition',
        image: 'Image'
    }];

  constructor (
    private facade: ListVehiclesFacade
  ) { }

  ngOnInit(): void {
    this.getVehicles();
    this.vehicles$.subscribe((data) => {
      if (data && data.length) {
          data.map((vehicle) => {
              const {name, id, vehicle_type, heroes_id} = vehicle;
              this.tableData = [...this.tableData, {
                  name,
                  type: vehicle_type,
                  id,
                  path: `/detail/${id}`
              }]                    
          })
      }
    })
  }
  get vehicles$(): Observable<Vehicle[]> {
    return this.facade.vehicles$;
  }

  public getVehicles(): void {
    this.facade.getVehicles();
  }

}
