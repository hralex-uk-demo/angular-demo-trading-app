import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDeleteDialogComponent } from './exchange-delete-dialog.component';

describe('ExchangeDeleteDialogComponent', () => {
  let component: ExchangeDeleteDialogComponent;
  let fixture: ComponentFixture<ExchangeDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
