import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { SaldoBancoComponent } from './saldo-banco/saldo-banco.component';



@NgModule({
  declarations: [
    PrestamosComponent,
    SaldoBancoComponent
  ],
  exports: [
    SaldoBancoComponent,
    PrestamosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
