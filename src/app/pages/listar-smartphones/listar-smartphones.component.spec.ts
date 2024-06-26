import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSmartphonesComponent } from './listar-smartphones.component';

describe('ListarSmartphonesComponent', () => {
  let component: ListarSmartphonesComponent;
  let fixture: ComponentFixture<ListarSmartphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSmartphonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
