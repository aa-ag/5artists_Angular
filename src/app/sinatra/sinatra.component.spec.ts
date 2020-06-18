import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinatraComponent } from './sinatra.component';

describe('SinatraComponent', () => {
  let component: SinatraComponent;
  let fixture: ComponentFixture<SinatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
