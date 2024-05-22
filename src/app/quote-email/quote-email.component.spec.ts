import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEmailComponent } from './quote-email.component';

describe('QuoteEmailComponent', () => {
  let component: QuoteEmailComponent;
  let fixture: ComponentFixture<QuoteEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteEmailComponent]
    });
    fixture = TestBed.createComponent(QuoteEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
