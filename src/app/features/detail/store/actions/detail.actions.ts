import { createAction, props } from '@ngrx/store';
import { Heroe } from 'src/app/shared/entities/entities';

export const getHeroeAction = createAction(
  '[Detail] get heroe',
  props<{id: number}>());

export const getHeroeSuccessAction = createAction(
  '[Detail] get heroe success',
  props<{heroe: Heroe}>());

export const DetailActions = {
    getHeroeAction,
    getHeroeSuccessAction
};