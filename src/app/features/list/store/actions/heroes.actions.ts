import { createAction, props } from '@ngrx/store';
import { Heroe } from 'src/app/shared/entities/entities';

export const getHeroesAction = createAction(
  '[Heroes] get heroes');

export const getHeroesSuccessAction = createAction(
  '[Heroes] get heroes success',
  props<{heroes: Heroe[]}>());

export const HeroesActions = {
    getHeroesAction,
    getHeroesSuccessAction
};