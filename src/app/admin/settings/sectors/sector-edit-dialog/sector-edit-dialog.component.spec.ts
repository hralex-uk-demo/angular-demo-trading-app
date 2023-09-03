import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorEditDialogComponent } from './sector-edit-dialog.component';

describe('SectorEditDialogComponent', () => {
  let component: SectorEditDialogComponent;
  let fixture: ComponentFixture<SectorEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
