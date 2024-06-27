import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSmartphoneComponent } from './editar-smartphone.component';

describe('EditarSmartphoneComponent', () => {
  let component: EditarSmartphoneComponent;
  let fixture: ComponentFixture<EditarSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSmartphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
