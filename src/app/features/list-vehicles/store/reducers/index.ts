import { combineReducers } from '@ngrx/store';
import { vehiclesReducer as vehicles } from './data/list-vehicles.reducers';

export const VehiclesListRootReducer = combineReducers({
    vehicles
});