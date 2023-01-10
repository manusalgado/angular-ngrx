import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/data/heroes.reducer';
import { HeroeState } from '../state/list.state';

export const usersSelector = createFeatureSelector<HeroeState>('listModule');

export const getHeroes = createSelector(
  usersSelector,
  (state: HeroeState) => state.heroes
);

export const selectAllHeroes = createSelector(getHeroes, fromReducer.selectAll);