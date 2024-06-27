import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSmartphoneComponent } from './agregar-smartphone.component';

describe('AgregarSmartphoneComponent', () => {
  let component: AgregarSmartphoneComponent;
  let fixture: ComponentFixture<AgregarSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarSmartphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
