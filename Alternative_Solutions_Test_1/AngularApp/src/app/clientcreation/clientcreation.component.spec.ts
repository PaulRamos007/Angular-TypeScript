import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcreationComponent } from './clientcreation.component';

describe('ClientcreationComponent', () => {
  let component: ClientcreationComponent;
  let fixture: ComponentFixture<ClientcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
