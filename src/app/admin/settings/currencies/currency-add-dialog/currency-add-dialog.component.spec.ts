import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAddDialogComponent } from './currency-add-dialog.component';

describe('CurrencyAddDialogComponent', () => {
  let component: CurrencyAddDialogComponent;
  let fixture: ComponentFixture<CurrencyAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
