import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskTopComponent } from './desk-top.component';

describe('DeskTopComponent', () => {
  let component: DeskTopComponent;
  let fixture: ComponentFixture<DeskTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
