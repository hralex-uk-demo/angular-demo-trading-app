import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAddDialogComponent } from './sector-add-dialog.component';

describe('SectorAddDialogComponent', () => {
  let component: SectorAddDialogComponent;
  let fixture: ComponentFixture<SectorAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
