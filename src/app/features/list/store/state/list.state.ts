import { HeroesState } from '../reducers/data/heroes.reducer';

export type HeroeState = Readonly <{
  heroes: HeroesState;
}>;