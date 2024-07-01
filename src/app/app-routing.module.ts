import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarSmartphoneComponent } from './pages/agregar-smartphone/agregar-smartphone.component';
import { ListarSmartphonesComponent } from './pages/listar-smartphones/listar-smartphones.component';
import { EditarSmartphoneComponent } from './pages/editar-smartphone/editar-smartphone.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agregar-smartphone'},
  {path: 'agregar-smartphone', component: AgregarSmartphoneComponent},
  {path: 'listar-smartphones', component: ListarSmartphonesComponent},
  {path: 'editar-smartphone/:id', component: EditarSmartphoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
