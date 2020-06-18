import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtukudziComponent } from './mtukudzi.component';

describe('MtukudziComponent', () => {
  let component: MtukudziComponent;
  let fixture: ComponentFixture<MtukudziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtukudziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtukudziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
