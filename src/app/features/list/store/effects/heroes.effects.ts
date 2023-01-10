import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { ListService } from '../../list.service';
import { HeroesActions } from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private service: ListService
  ) { }

    heroes$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(HeroesActions.getHeroesAction),
        exhaustMap(() => this.service.get()
        .pipe(
          map(({data}) => {
            return HeroesActions.getHeroesSuccessAction({heroes: data});
          }),
          catchError(() => EMPTY)
        ))
      ));

}