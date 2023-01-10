import { combineReducers } from '@ngrx/store';
import { heroeReducer as heroe } from './data/heroe.reducer';

export const DetailRootReducer = combineReducers({
  heroe
});