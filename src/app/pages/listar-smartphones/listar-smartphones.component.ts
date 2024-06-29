import { Component } from '@angular/core';
import { Smartphone } from '../../models/smartphone';
import { SmartphoneService } from '../../services/smartphone.service';

@Component({
  selector: 'app-listar-smartphones',
  templateUrl: './listar-smartphones.component.html',
  styleUrl: './listar-smartphones.component.css'
})
export class ListarSmartphonesComponent {

  listaSmartphones: Smartphone[] = [];

  constructor(
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit() {
    this.smartphoneService.getSmartphones()
    .subscribe(
      // Correct data
      data => {
        console.log(data);
      },
    );


  }

}
