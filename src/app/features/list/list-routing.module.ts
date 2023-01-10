import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainer } from './list.container';

const routes: Routes = [
  {
    path: '',
    component: ListContainer,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
