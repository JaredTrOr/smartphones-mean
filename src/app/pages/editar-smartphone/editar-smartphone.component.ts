import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Smartphone } from '../../models/Smartphone';
import { SmartphoneService } from '../../services/smartphone.service';

@Component({
  selector: 'app-editar-smartphone',
  templateUrl: './editar-smartphone.component.html',
  styleUrl: './editar-smartphone.component.css'
})
export class EditarSmartphoneComponent implements OnInit {

  // propiedades
  smartphoneForm!: FormGroup;
  sent = false;
  smartphoneMarca: string[] = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google', 'Realme', 'Oppo', 'Vivo', 'Motorola', 'Otro'];
  smartphoneMemoriaRAM: string[] = ['4GB', '6GB', '8GB', '12GB'];
  smartphoneAlmacenamiento: string[] = ['64GB', '128GB', '256GB', '512GB', '1TB'];
  smartphoneSO: string[] = ['Android', '¡OS'];
  smartphoneProcesador: string[] = ['Qualcomm Snapdragon', 'Samsung Exynos', 'Huawei Kirin', 'MediaTek', 'Apple A-Series', 'Google Tensor', 'Otro'];
  smartphoneHz: string[] = ['60Hhz', '90Hz', '120Hz', '144Hz'];

  smartphoneData!: Smartphone[];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private smartphoneService: SmartphoneService
  ){}

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.smartphoneService.getSmartphone(id!).subscribe(data => {
      this.smartphoneForm.patchValue(data.data)
    });
  }

  // método para generar el formulario
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

  // getter para acceder a los controles del formulario
  get myForm(){
    return this.smartphoneForm.controls;
  }

  // método para buscar el smartphone que se va a modificar
  getSmartphone(id: string){
    this.smartphoneService.getSmartphone(id).subscribe((data) =>{
      this.smartphoneForm.setValue({
        nombre: data['nombre'],
        marca: data['marca'],
        modelo: data['modelo'],
        color: data['color'],
        memoriaRAM: data['memoriaRAM'],
        almacenamiento: data['almacenamiento'],
        sistemaOperativo: data['sistemaOperativo'],
        procesador: data['procesador'],
        tasaDeRefresco: data['tasaDeRefresco']
      });
    })
  }

  // método para enviar el formulario
  onSubmit(): false | void{
    this.sent = true;
    if(!this.smartphoneForm.valid){
      return false;
    }else{
      if(window.confirm('¿Estás seguro que lo deseas modificar?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        if(id !== null) {
        this.smartphoneService.updateSmartphone(id,this.smartphoneForm.value)
        .subscribe({
          complete: () => {
            this.router.navigateByUrl('listar-smartphones');
            console.log('Actualización realizada');
          },
          error: (e) => {
            console.log(e);
          }
        });
      } else {
        console.error('El ID lo esta tomando como nulo');
        return false;
        }
      }
    }
  }

}
