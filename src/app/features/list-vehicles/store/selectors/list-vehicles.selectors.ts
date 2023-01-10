import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/data/list-vehicles.reducers';
import { ListVeviclesState } from '../state/list-vehicle.state';

export const vehiclesSelector = createFeatureSelector<ListVeviclesState>('listVehiclesModule');

export const getVehicles = createSelector(
    vehiclesSelector,
  (state: ListVeviclesState) => state.vehicles
);

export const selectAllVehicles = createSelector(getVehicles, fromReducer.selectAll);