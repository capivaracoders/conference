import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Online2020NovComponent } from './online2020-nov.component';

describe('OnlineComponent', () => {
  let component: Online2020NovComponent;
  let fixture: ComponentFixture<Online2020NovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Online2020NovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Online2020NovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
