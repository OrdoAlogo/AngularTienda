import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasObservableComponent } from './pruebas-observable.component';

describe('PruebasObservableComponent', () => {
  let component: PruebasObservableComponent;
  let fixture: ComponentFixture<PruebasObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
