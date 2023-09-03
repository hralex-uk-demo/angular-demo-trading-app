import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAddDialogComponent } from './exchange-add-dialog.component';

describe('ExchangeAddDialogComponent', () => {
  let component: ExchangeAddDialogComponent;
  let fixture: ComponentFixture<ExchangeAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
