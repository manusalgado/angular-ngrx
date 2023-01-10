import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';

@NgModule({
  declarations: [CardButtonComponent, TitleComponent, TableComponent, HeroeDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardButtonComponent, TitleComponent, TableComponent, HeroeDetailComponent]
})
export class SharedModule { }
