import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAddDialogComponent } from './subscription-add-dialog.component';

describe('SubscriptionAddDialogComponent', () => {
  let component: SubscriptionAddDialogComponent;
  let fixture: ComponentFixture<SubscriptionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
