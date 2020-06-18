import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviiciComponent } from './aviici.component';

describe('AviiciComponent', () => {
  let component: AviiciComponent;
  let fixture: ComponentFixture<AviiciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviiciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
