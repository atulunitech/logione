import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

// start
barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartLabels: Label[] = [
    'PDW1',
    'PDW2',
    'PDW3',
    'PDW4',
    'PDW5',
    'PDW6',
    'PDW7',
    'PDW8',
    'PDW9',
    'PDW10',
  ];
  barChartData: ChartDataSets[] = [
    {
      label: 'X',
      data: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
      backgroundColor: [
        '#FE012B',
        '#FE012B',
        '#FFC102',
        '#FFC102',
        '#FE012B',
        '#FE012B',
        '#FFC102',
        '#FFC102',
        '#FE012B',
        '#4E8774',

        
      ],
      hoverBackgroundColor: ['green', 'red', 'green', 'red'],
    },
  ];
  barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
        label: (tooltipItem) => (tooltipItem.yLabel == 1 ? 'No' : 'Yes'),
        labelColor: (tooltipItem) => {
          let color = tooltipItem.yLabel == 1 ? 'red' : 'green';
          return { borderColor: color, backgroundColor: color };
        },
      },
    },
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            callback: (value) => {
              if (value == 0) {
                return '';
              }
              return value == 1 ? '25k' : '50k';
            },
          },
        },
      ],
    },
  };
// end


// start
// Doughnut
public doughnutChartLabels: Label[] = ["At Risk Of Delay", "Running Delayed","Running On Time"];
public doughnutChartData: MultiDataSet = [[25, 25,50]];
public colors = [
  {backgroundColor:['#3B3B3B','#FF8B2E','#FFB900']}
];
public doughnutChartType: ChartType = "doughnut";
options = {
  legend: {
    display: false,
    labels: {
      usePointStyle: true
    },
    onClick: (_event: any, legendItem: any) => {
      console.log("This is working!");
    }
  },
  tooltips: {
    enabled: true
  },
  onClick: (_evt: any, item: any) => {
    console.log('Clicked!')
  },
  onHover: (_evt: any, item: any) => {
              console.log("hover")
  }
};

// end

ngAfterViewInit():void{
  
}
}
