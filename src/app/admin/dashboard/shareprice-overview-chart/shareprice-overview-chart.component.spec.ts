import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepriceOverviewChartComponent } from './shareprice-overview-chart.component';

describe('SharepriceOverviewChartComponent', () => {
  let component: SharepriceOverviewChartComponent;
  let fixture: ComponentFixture<SharepriceOverviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharepriceOverviewChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharepriceOverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
