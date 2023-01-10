import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailContainer } from './detail.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailService } from './detail.service';
import { DetailFacade } from './detail.facade';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './store/effects/detail.effects';
import { HttpClientModule } from '@angular/common/http';
import { DetailState } from './store/state/detail.state';
import { DetailRootReducer } from './store/reducers';

export const DETAIL_REQUEST_TOKEN = new InjectionToken<
  ActionReducer<DetailState>
>('Feature Detail Reducers');


@NgModule({
  declarations: [DetailContainer],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
    StoreModule.forFeature('detailModule', DETAIL_REQUEST_TOKEN),
    EffectsModule.forFeature([DetailEffects]),
    HttpClientModule
  ],
  exports: [DetailContainer],
  providers: [
    DetailService,
    DetailFacade,
    {provide: DETAIL_REQUEST_TOKEN, useValue: DetailRootReducer},
  ]
})
export class DetailModule { }
