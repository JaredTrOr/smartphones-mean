import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SmartphoneService } from '../../services/smartphone.service';

@Component({
  selector: 'app-agregar-smartphone',
  templateUrl: './agregar-smartphone.component.html',
  styleUrl: './agregar-smartphone.component.css'
})
export class AgregarSmartphoneComponent implements OnInit {

  // propiedades
  smartphoneForm!: FormGroup;
  sent = false;
  smartphoneSO: any = [
    'Android',
    '¡OS',
    'Harmony OS',
    'One UI',
    'MIUI / HyperOS',
    'MagicOS',
    'Nothing OS',
    'ColorOS',
    'Realme UI'
  ];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private smartphoneService: SmartphoneService
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    
  }

  // formulario
  mainForm(){
    this.smartphoneForm = this.formBuilder.group({

    })
  }
}
