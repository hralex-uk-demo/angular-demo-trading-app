import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOverviewChartComponent } from './customers-overview-chart.component';

describe('CustomersOverviewChartComponent', () => {
  let component: CustomersOverviewChartComponent;
  let fixture: ComponentFixture<CustomersOverviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersOverviewChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersOverviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
