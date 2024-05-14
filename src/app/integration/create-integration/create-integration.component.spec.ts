import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntegrationComponent } from './create-integration.component';

describe('CreateIntegrationComponent', () => {
  let component: CreateIntegrationComponent;
  let fixture: ComponentFixture<CreateIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIntegrationComponent]
    });
    fixture = TestBed.createComponent(CreateIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
