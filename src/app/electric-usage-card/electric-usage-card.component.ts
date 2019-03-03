import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { ElectricCardServiceService } from './electric-card-service.service'; 
@Component({
  selector: 'app-electric-usage-card',
  templateUrl: './electric-usage-card.component.html',
  styleUrls: ['./electric-usage-card.component.css']
})
export class ElectricUsageCardComponent implements OnInit {
  table:any;
  @Output() selectRow = new EventEmitter<string>();

  constructor(private iotService: ElectricCardServiceService) { }

  ngOnInit() {
    this.table = this.iotService.getListIOT();
    this.setChart(this.table[0]); 
    this.iotService.passDataViaService(this.table[0]);
  }

  setChart(rowInput){
    this.selectRow.emit(rowInput);
    this.iotService.passDataViaService(rowInput);
  }

}
