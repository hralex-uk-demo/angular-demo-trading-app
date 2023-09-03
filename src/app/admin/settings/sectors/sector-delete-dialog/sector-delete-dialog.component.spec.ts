import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDeleteDialogComponent } from './sector-delete-dialog.component';

describe('SectorDeleteDialogComponent', () => {
  let component: SectorDeleteDialogComponent;
  let fixture: ComponentFixture<SectorDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
