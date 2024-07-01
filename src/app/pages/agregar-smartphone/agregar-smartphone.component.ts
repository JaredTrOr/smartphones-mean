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
  smartphoneMarca: any = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Realme', 'Oppo', 'Vivo', 'Motorola'];
  smartphoneMemoriaRAM: any = ['4GB', '6GB', '8GB', '12GB'];
  smartphoneAlmacenamiento: any = ['64GB', '128GB', '256GB', '512GB', '1TB'];
  smartphoneSO: any = ['Android', '¡OS'];
  smartphoneProcesador: any = ['Qualcomm Snapdragon', 'Samsung Exynos', 'Huawei Kirin', 'MediaTek', 'Apple A-Series', 'Google Tensor'];
  smartphoneHz: any = ['60Hhz', '90Hz', '120Hz', '144Hz'];


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
      nombre: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9 ]+$')
        ]
      ],
      marca: ['',[Validators.required]],
      modelo: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9 ]+$')
        ]
      ],
      color: ['',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ]
      ],
      memoriaRAM: ['',[Validators.required]],
      almacenamiento: ['',[Validators.required]],
      sistemaOperativo: ['',[Validators.required]],
      procesador: ['',[Validators.required]],
      tasaDeRefresco: ['',[Validators.required]]
    });
  }

  // metodo para asignar la marca seleccionada por el usuario
  updateMarca(d: string){
    this.smartphoneForm.get('marca')?.setValue(d,{
      onlySelf:true,
    });
  }

  updateMemoria(d: string){
    this.smartphoneForm.get('memoriaRAM')?.setValue(d, {
      onlySelf:true
    });
  }

  updateAlmacenamiento(d: string){
    this.smartphoneForm.get('almacenamiento')?.setValue(d, {
      onlySelf:true
    });
  }

  updateSO(d: string){
    this.smartphoneForm.get('sistemaOperativo')?.setValue(d, {
      onlySelf:true
    });
  }

  updateProcesador(d: string){
    this.smartphoneForm.get('procesador')?.setValue(d, {
      onlySelf:true
    });
  }

  updateHz(d: string){
    this.smartphoneForm.get('tasaRefresco')?.setValue(d, {
      onlySelf:true
    });
  }

  get myForm(){
    return this.smartphoneForm.controls;
  }

  // método para enviar el formulario
  onSubmit(){
    this.sent = true;
    if(!this.smartphoneForm.valid){
      return false;
    }else{
      return this.smartphoneService.addSmartphone(this.smartphoneForm.value)
      .subscribe({
        complete: () =>{
          console.log('Se agregó un empleado')
          this.ngZone.run(()=>{
            this.router.navigateByUrl('/listar-empleados');
            console.log('Actualización de smartphone');
          });
        },
        error: (err) => {
          console.error('Error al agregar smartphone: ',err);
        }
      });
    }
  }
}
