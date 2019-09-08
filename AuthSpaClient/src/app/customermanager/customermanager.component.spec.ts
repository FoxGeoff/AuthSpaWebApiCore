import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermanagerComponent } from './customermanager.component';

describe('CustomermanagerComponent', () => {
  let component: CustomermanagerComponent;
  let fixture: ComponentFixture<CustomermanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
