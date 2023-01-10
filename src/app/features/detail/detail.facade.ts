import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/shared/entities/entities';
import { DetailActions } from './store/actions/detail.actions';
import { heroe } from './store/selectors/detail.selectors';
import { DetailState } from './store/state/detail.state';


@Injectable()
export class DetailFacade {

  constructor (
    private store: Store<DetailState>
  ) { }

  public heroe$: Observable<Heroe> = this.store.pipe(
    select(heroe)
  );

  public getHeroe(id: number): void {
    this.store.dispatch(DetailActions.getHeroeAction({id}));
  }

}