import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDeleteDialogComponent } from './stock-delete-dialog.component';

describe('StockDeleteDialogComponent', () => {
  let component: StockDeleteDialogComponent;
  let fixture: ComponentFixture<StockDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
