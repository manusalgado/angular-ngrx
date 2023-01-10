import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/entities/entities';
import { VehiclesActions } from './store/actions/list-vehicles.actions';
import { selectAllVehicles } from './store/selectors/list-vehicles.selectors';
import { ListVeviclesState } from './store/state/list-vehicle.state';



@Injectable()
export class ListVehiclesFacade {

  constructor (
    private store: Store<ListVeviclesState>
  ) { }

  public vehicles$: Observable<Vehicle[]> = this.store.pipe(
    select(selectAllVehicles)
  );

  public getVehicles(): void {
    this.store.dispatch(VehiclesActions.getVehiclesAction());
  }

}