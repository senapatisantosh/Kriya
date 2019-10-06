import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';

@Component({
  selector: 'app-htc-statistics',
  templateUrl: './htc-statistics.component.html',
  styleUrls: ['./htc-statistics.component.css']
})
export class HtcStatisticsComponent implements OnInit {

  // Set custom color for the calendar heatmap
  color = '#23669a';

  // Set overview type (choices are year, month and day)
  overview = 'year';

  constructor() { }

  ngOnInit() {
  }

  private now = moment().endOf('day').toDate();
  private time_ago = moment().startOf('day').subtract(4, 'year').toDate();
  data = d3.timeDays(this.time_ago, this.now).map((dateElement: any, index: number) => {
    return {
      date: dateElement,
      details: Array.apply(null, new Array(Math.floor(Math.random() * 15))).map((e: number, i: number, arr: any) => {
        return {
          'name': 'Component ' + Math.ceil(Math.random() * 10),
          'date': function () {
            var projectDate = new Date(dateElement.getTime());
            projectDate.setHours(Math.floor(Math.random() * 24))
            projectDate.setMinutes(Math.floor(Math.random() * 60));
            return projectDate;
          }(),
          'value': 3600 * ((arr.length - i) / 5) + Math.floor(Math.random() * 3600) * Math.round(Math.random() * (index / 365))
        }
      }),
      init: function () {
        this.total = this.details.reduce((prev: number, e: any) => {
          return prev + e.value;
        }, 0);
        return this;
      }
    }.init();
  });

  // Click handler function
  print(val: object): void {
    console.log(val);
  }

  // On change handler
  handleOnChange(val: object): void {
    console.log('onChange', val)
  }

  gaugeType = "semi";
  gaugeValue = 45.7;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  thresholdConfig = {
    '0': {color: '#23669a'},
    '10': {color: '#23669a'},
    '30': {color: '#23669a'}
};

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Issue'
    },
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Resolution'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  
}
