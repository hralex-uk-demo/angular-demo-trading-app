import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-shareprice-overview-chart',
  template: '<div #chart></div>',
  styleUrls: ['./shareprice-overview-chart.component.css']
})
export class SharepriceOverviewChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [
      { category: 'ESG', value: 80 },
      { category: 'Dividend', value: 300 },
      { category: 'Technology', value: 200 },
      { category: 'Healthcare', value: 100 },
      { category: 'Others', value: 20 },
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleBand<string>()
      .domain(data.map(d => d.category))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear<number>()
      .domain([0, d3.max(data, d => d.value)!])
      .nice()
      .range([height, 0]);

    const color = d3.scaleOrdinal<string>()
      .domain(data.map(d => d.category))
      .range(d3.schemeCategory10);

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.category)!)
      .attr('y', d => y(d.value)!)
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value)!)
      .attr('fill', d => color(d.category));

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));
  }
}