import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditDialogComponent } from './currency-edit-dialog.component';

describe('CurrencyEditDialogComponent', () => {
  let component: CurrencyEditDialogComponent;
  let fixture: ComponentFixture<CurrencyEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
