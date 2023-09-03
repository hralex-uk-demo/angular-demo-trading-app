import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDeleteDialogComponent } from './currency-delete-dialog.component';

describe('CurrencyDeleteDialogComponent', () => {
  let component: CurrencyDeleteDialogComponent;
  let fixture: ComponentFixture<CurrencyDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
