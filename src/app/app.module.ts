import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarSmartphoneComponent } from './pages/agregar-smartphone/agregar-smartphone.component';
import { EditarSmartphoneComponent } from './pages/editar-smartphone/editar-smartphone.component';
import { ListarSmartphonesComponent } from './pages/listar-smartphones/listar-smartphones.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarSmartphonesComponent,
    AgregarSmartphoneComponent,
    EditarSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
