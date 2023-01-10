import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { ListVehiclesService } from '../../list-vehicles.service';
import { VehiclesActions } from '../actions/list-vehicles.actions';

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private service: ListVehiclesService
  ) { }

    vehicles$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(VehiclesActions.getVehiclesAction),
        exhaustMap(() => this.service.get()
        .pipe(
          map(({data}) => {
            return VehiclesActions.getVehiclesSuccessAction({vehicles: data});
          }),
          catchError(() => EMPTY)
        ))
      ));

}