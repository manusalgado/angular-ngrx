import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ListRoutingModule } from './list-routing.module';
import { ListContainer } from './list.container';
import { HeroeState } from './store/state/list.state';
import { HeroesRootReducer } from './store/reducers';
import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroesFacade } from './list.facade';
import { HeroesEffects } from './store/effects/heroes.effects';
import { SharedModule } from 'src/app/shared/shared.module';

export const LIST_REQUEST_TOKEN = new InjectionToken<
  ActionReducer<HeroeState>
>('Feature List Reducers');

@NgModule({
  declarations: [ListContainer],
  imports: [
    CommonModule,
    ListRoutingModule,
    StoreModule.forFeature('listModule', LIST_REQUEST_TOKEN),
    EffectsModule.forFeature([HeroesEffects]),
    HttpClientModule,
    SharedModule
  ],
  exports: [ListContainer],
  providers: [
    {provide: LIST_REQUEST_TOKEN, useValue: HeroesRootReducer},
    ListService,
    HeroesFacade
  ]
})
export class ListModule { }
