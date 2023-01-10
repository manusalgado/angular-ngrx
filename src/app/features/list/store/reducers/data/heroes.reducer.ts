import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { HeroesActions } from '../../actions/heroes.actions';
import { Heroe } from 'src/app/shared/entities/entities';

export interface HeroesState extends EntityState<Heroe> { }

export function getHeroeId(heroe: Heroe): string {
  return heroe.id.toString();
}

export const heroesAdapter: EntityAdapter<Heroe> = createEntityAdapter<Heroe>({
  selectId: getHeroeId
});

export const initialState: HeroesState = heroesAdapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(HeroesActions.getHeroesSuccessAction, (state, {heroes}) => {
    return heroesAdapter.setAll(heroes, state);
  })
);

export function heroesReducer(state: any, action: Action): HeroesState {
  return reducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = heroesAdapter.getSelectors();