import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarSmartphoneComponent } from './pages/agregar-smartphone/agregar-smartphone.component';
import { ListarSmartphonesComponent } from './pages/listar-smartphones/listar-smartphones.component';
import { EditarSmartphoneComponent } from './pages/editar-smartphone/editar-smartphone.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agregar-smartphone'},
  {path: 'agregar-smartphone', title: 'Agreagar smartphone', component: AgregarSmartphoneComponent},
  {path: 'listar-smartphones' ,title: 'Listar smartphones',component: ListarSmartphonesComponent},
  {path: 'editar-smartphone/:id', title: 'Editar smarphone' ,component: EditarSmartphoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
