import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiamentoComponent } from './adiamento.component';

describe('AdiamentoComponent', () => {
  let component: AdiamentoComponent;
  let fixture: ComponentFixture<AdiamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
