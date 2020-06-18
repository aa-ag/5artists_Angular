import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichterComponent } from './richter.component';

describe('RichterComponent', () => {
  let component: RichterComponent;
  let fixture: ComponentFixture<RichterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
