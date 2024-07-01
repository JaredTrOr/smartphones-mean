import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../../models/Smartphone';
import { SmartphoneService } from '../../services/smartphone.service';

@Component({
  selector: 'app-listar-smartphones',
  templateUrl: './listar-smartphones.component.html',
  styleUrl: './listar-smartphones.component.css'
})
export class ListarSmartphonesComponent  implements OnInit{

  smartphones: any[] = [];

  constructor(private smartphoneService: SmartphoneService) {
  }

  //Obtener Smartphone desde el OnInit
  ngOnInit() {
    this.smartphoneService.getSmartphones()
    .subscribe((data:any)=>{
      this.smartphones=data;
    }, error => {
      console.error('Error al obtener los smartphones: ',error);
    });
  }

  //Método para eliminar Smartphone
  eliminarSmartphone(smartphone: any, index:number){
    if(window.confirm("¿Seguro que desea Eliminar el Smartphone?")){
      this.smartphoneService.deleteSmartphone(smartphone._id)
      .subscribe((data)=>{
        this.smartphones.splice(index,1)
      })
    }
  }
}
