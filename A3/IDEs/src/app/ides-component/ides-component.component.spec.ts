import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEsComponentComponent } from './ides-component.component';

describe('IDEsComponentComponent', () => {
  let component: IDEsComponentComponent;
  let fixture: ComponentFixture<IDEsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDEsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
