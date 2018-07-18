import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServbenComponent } from './servben.component';

describe('ServbenComponent', () => {
  let component: ServbenComponent;
  let fixture: ComponentFixture<ServbenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServbenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
