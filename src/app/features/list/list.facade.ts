import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/shared/entities/entities';
import { HeroesActions } from './store/actions/heroes.actions';
import { selectAllHeroes } from './store/selectors/heroes.selectos';

import { HeroeState } from './store/state/list.state';


@Injectable()
export class HeroesFacade {

  constructor (
    private store: Store<HeroeState>
  ) { }

  public heroes$: Observable<Heroe[]> = this.store.pipe(
    select(selectAllHeroes)
  );

  public getHeroes(): void {
    this.store.dispatch(HeroesActions.getHeroesAction());
  }

}