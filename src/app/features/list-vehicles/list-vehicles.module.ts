import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVehiclesRoutingModule } from './list-vehicles-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListVehicleContainer } from './list-vehicles.container';
import { ListVehiclesService } from './list-vehicles.service';
import { ListVehiclesFacade } from './list-vehicle.facade';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListVeviclesState } from './store/state/list-vehicle.state';
import { VehiclesListRootReducer } from './store/reducers';
import { VehiclesEffects } from './store/effects/list-vehicles.effects';

export const LIST_VEHICLES_REQUEST_TOKEN = new InjectionToken<
  ActionReducer<ListVeviclesState>
>('Feature List Reducers');


@NgModule({
  declarations: [ListVehicleContainer],
  imports: [
    CommonModule,
    ListVehiclesRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('listVehiclesModule', LIST_VEHICLES_REQUEST_TOKEN),
    EffectsModule.forFeature([VehiclesEffects]),
  ],
  providers: [
    ListVehiclesService,
    ListVehiclesFacade,
    {provide: LIST_VEHICLES_REQUEST_TOKEN, useValue: VehiclesListRootReducer},
  ]
})
export class ListVehiclesModule { }
