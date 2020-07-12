import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@components/components.module';
import {ReactiveFormsModule} from '@angular/forms';
import { PAGES_ROUTES } from './router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { DeudasComponent } from './deudas/deudas.component';


@NgModule({
  declarations: [InicioComponent, RegistroComponent, DeudasComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
