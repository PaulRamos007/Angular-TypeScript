import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEDetailsComponentComponent } from './idedetails-component.component';

describe('IDEDetailsComponentComponent', () => {
  let component: IDEDetailsComponentComponent;
  let fixture: ComponentFixture<IDEDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDEDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
