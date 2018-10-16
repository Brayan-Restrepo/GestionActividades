import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActividadesComponent } from './components/user/views/actividades/actividades.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/user/shared/navbar/navbar.component';
import { PublicComponent } from './components/user/views/public/public.component';
import { ApiService } from './services/api.service';
import { PublicService } from './services/public/public.service';

const APP_SERVICES = [ApiService, PublicService];

@NgModule({
  declarations: [
    AppComponent,
    ActividadesComponent,
    NavbarComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    NgbModule.forRoot()
  ],
  providers: [
    APP_SERVICES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
