import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeEditDialogComponent } from './exchange-edit-dialog.component';

describe('ExchangeEditDialogComponent', () => {
  let component: ExchangeEditDialogComponent;
  let fixture: ComponentFixture<ExchangeEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
