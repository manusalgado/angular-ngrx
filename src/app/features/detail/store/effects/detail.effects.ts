import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { DetailService } from '../../detail.service';
import { DetailActions } from '../actions/detail.actions';

@Injectable()
export class DetailEffects {
  constructor(
    private actions$: Actions,
    private service: DetailService
  ) { }

    heroe$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(DetailActions.getHeroeAction),
        exhaustMap(({id}) => this.service.heroe(id)
        .pipe(
          map(({data}) => {
            return DetailActions.getHeroeSuccessAction({heroe: data});
          }),
          catchError(() => EMPTY)
        ))
      ));

}