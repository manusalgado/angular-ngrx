import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehicleContainer } from './list-vehicles.container';

const routes: Routes = [
  {
    path: '',
    component: ListVehicleContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListVehiclesRoutingModule { }
