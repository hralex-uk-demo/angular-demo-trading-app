import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-customers-overview-chart',
  template: '<div #chart></div>',
  styleUrls: ['./customers-overview-chart.component.css']
})
export class CustomersOverviewChartComponent implements OnInit {
  
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const userShareData = [
      { platform: 'iPhone', share: 50 },
      { platform: 'Android', share: 40 },
      { platform: 'Others', share: 10 }
    ];

    const width = 270;
    const height = 270;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal<string>()
      .domain(userShareData.map(d => d.platform))
      .range(['#1f77b4', '#ff7f0e', '#2ca02c']);

    const pie = d3.pie<any>().value(d => d.share);

    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg.selectAll('.arc')
      .data(pie(userShareData))
      .enter().append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.platform));

    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.platform);
  }


}