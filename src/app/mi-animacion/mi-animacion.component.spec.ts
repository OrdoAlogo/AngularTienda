import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAnimacionComponent } from './mi-animacion.component';

describe('MiAnimacionComponent', () => {
  let component: MiAnimacionComponent;
  let fixture: ComponentFixture<MiAnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiAnimacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
