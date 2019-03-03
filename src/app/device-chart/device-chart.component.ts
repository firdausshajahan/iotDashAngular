import { Component, OnInit,Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-device-chart',
  templateUrl: './device-chart.component.html',
  styleUrls: ['./device-chart.component.css']
})
export class DeviceChartComponent implements OnInit {
  @Input() getVal:any;
  chartOption:EChartOption;
  chartValue:any;

  constructor() { }

  ngOnInit() {

    if(this.chartValue==undefined){
      this.chartValue = 0;
      this.loadChart(this.chartValue);
    }else{
      this.chartValue = this.getVal.val;
      this.loadChart(this.chartValue);
    }

    
  }

  loadChart(valueChart){
    this.chartOption = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              name: 'WATT',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [
                  {
                    value: valueChart, 
                    name: 'WATT'}
              ]
          }
      ]
    }
  }


  ngOnChanges(){
    this.chartValue = this.getVal.val;
    this.loadChart(this.chartValue);
  }
}
