import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarSmartphonesComponent } from './pages/listar-smartphones/listar-smartphones.component';
import { AgregarSmartphoneComponent } from './pages/agregar-smartphone/agregar-smartphone.component';
import { EditarSmartphoneComponent } from './pages/editar-smartphone/editar-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarSmartphonesComponent,
    AgregarSmartphoneComponent,
    EditarSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
