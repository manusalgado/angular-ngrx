import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContainer } from './detail.container';

const routes: Routes = [
  {
    path: '',
    component: DetailContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
