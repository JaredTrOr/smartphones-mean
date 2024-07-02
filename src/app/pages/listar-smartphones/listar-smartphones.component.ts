import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../../models/Smartphone';
import { SmartphoneService } from '../../services/smartphone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-smartphones',
  templateUrl: './listar-smartphones.component.html',
  styleUrl: './listar-smartphones.component.css'
})
export class ListarSmartphonesComponent  implements OnInit{

  smartphones: Smartphone[] = [];

  cargando = true;
  haySmartphones = true;

  constructor(private smartphoneService: SmartphoneService) {
  }

  //Obtener Smartphone desde el OnInit
  ngOnInit() {
    this.smartphoneService.getSmartphones()
    .subscribe((data:any)=>{

      this.cargando = false;

      if(data.success) {

        //Si no hay smartphones
        if (!data.data.length) this.haySmartphones = false;

        //Si si hay
        else {
          this.smartphones=data.data;
        }
      }

    }, error => {
      console.error('Error al obtener los smartphones: ',error);
    });
  }

  //Método para eliminar Smartphone
  eliminarSmartphone(smartphone: Smartphone, index:number){

    Swal.fire({
      title: "¿Seguro que quieres eliminar este smartphone?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.smartphoneService.deleteSmartphone(smartphone._id!)
        .subscribe((data)=>{
          this.smartphones.splice(index,1)
          Swal.fire("El smartphone se ha eliminado exitosamente", "", "success");
        })
      } 
    });
  }
}
