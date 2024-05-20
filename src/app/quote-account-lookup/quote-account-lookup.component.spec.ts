import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAccountLookupComponent } from './quote-account-lookup.component';

describe('QuoteAccountLookupComponent', () => {
  let component: QuoteAccountLookupComponent;
  let fixture: ComponentFixture<QuoteAccountLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteAccountLookupComponent]
    });
    fixture = TestBed.createComponent(QuoteAccountLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
