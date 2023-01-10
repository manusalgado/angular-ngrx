import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';
import { Heroe } from 'src/app/shared/entities/entities';

import { DetailActions } from '../../actions/detail.actions';

export const initialState: Heroe = {id: 0, name: '', heroe_type: '', condition: '', cities_id: 0, image_url: ''};

const reducer = createReducer(
  initialState,
  on(DetailActions.getHeroeSuccessAction, (state, {heroe}) => (heroe))
);

export const heroeReducer = produce((state: any, action: Action): Heroe => {
  return reducer(state, action);
});