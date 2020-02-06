import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrofeusComponent } from './gtrofeus.component';

describe('GtrofeusComponent', () => {
  let component: GtrofeusComponent;
  let fixture: ComponentFixture<GtrofeusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrofeusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrofeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
