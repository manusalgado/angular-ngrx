import { createAction, props } from '@ngrx/store';
import { Heroe, Vehicle } from 'src/app/shared/entities/entities';

export const getVehiclesAction = createAction(
  '[Vehicles] get Vehicles');

export const getVehiclesSuccessAction = createAction(
  '[Vehicles] get Vehicles success',
  props<{vehicles: Vehicle[]}>());

export const VehiclesActions = {
    getVehiclesAction,
    getVehiclesSuccessAction
};