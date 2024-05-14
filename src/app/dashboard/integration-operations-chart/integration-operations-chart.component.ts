import { Component } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { getInstanceByDom, connect } from 'echarts';

@Component({
  selector: 'app-integration-operations-chart',
  templateUrl: './integration-operations-chart.component.html',
  styleUrls: ['./integration-operations-chart.component.scss'],
})
export class IntegrationOperationsChartComponent {
  options: EChartsOption = {
    color: ['#D92D20', '#039855', '#0F61B3'],
    legend: { left: 'left', pageButtonPosition: 'start', icon: 'circle' },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        name: 'TimeFrame',
        nameLocation: 'middle',
        nameGap: 25,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        name: 'Total',
        nameLocation: 'middle',
        nameGap: 35,
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Failed',
        type: 'bar',
        barWidth: '8%',
        data: [8, 2, 7, 3, 5, 9, 12],
        barGap: '70%',
        barCategoryGap: '70%',
      },
      {
        name: 'Succeeded',
        type: 'bar',
        barWidth: '8%',
        data: [19, 12, 17, 30, 23, 20, 22],
        barGap: '70%',
        barCategoryGap: '70%',
      },
      {
        name: 'Processing',
        type: 'bar',
        barWidth: '8%',
        data: [11, 17, 15, 13, 13, 10, 6],
        barGap: '70%',
        barCategoryGap: '70%',
      },
    ],
  };
}
