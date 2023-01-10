import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterContainer } from './register.container';


@NgModule({
  declarations: [RegisterContainer],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
