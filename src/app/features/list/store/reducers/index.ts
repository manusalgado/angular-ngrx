import { combineReducers } from '@ngrx/store';
import { heroesReducer as heroes } from './data/heroes.reducer';


export const HeroesRootReducer = combineReducers({
    heroes
});