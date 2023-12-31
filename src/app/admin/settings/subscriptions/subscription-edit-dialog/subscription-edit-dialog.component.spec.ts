import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionEditDialogComponent } from './subscription-edit-dialog.component';

describe('SubscriptionEditDialogComponent', () => {
  let component: SubscriptionEditDialogComponent;
  let fixture: ComponentFixture<SubscriptionEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
