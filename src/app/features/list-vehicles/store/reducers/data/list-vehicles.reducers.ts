import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { VehiclesActions } from '../../actions/list-vehicles.actions';
import { Vehicle } from 'src/app/shared/entities/entities';

export interface VehiclesState extends EntityState<Vehicle> { }

export function getVehicleId(vehicle: Vehicle): string {
  return vehicle.id.toString();
}

export const vehiclesAdapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: getVehicleId
});

export const initialState: VehiclesState = vehiclesAdapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(VehiclesActions.getVehiclesSuccessAction, (state, {vehicles}) => {
    return vehiclesAdapter.setAll(vehicles, state);
  })
);

export function vehiclesReducer(state: any, action: Action): VehiclesState {
  return reducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = vehiclesAdapter.getSelectors();