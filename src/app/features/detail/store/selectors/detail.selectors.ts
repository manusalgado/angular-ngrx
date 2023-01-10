import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailState } from '../state/detail.state';

export const heroeSelector = createFeatureSelector<DetailState>('detailModule');

export const heroe = createSelector(
    heroeSelector,
  (state: DetailState) => state.heroe
);
