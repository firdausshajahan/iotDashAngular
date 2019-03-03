import { Component, OnInit } from '@angular/core';
import { ElectricCardServiceService } from '../electric-usage-card/electric-card-service.service'; 

@Component({
  selector: 'app-pass-service',
  templateUrl: './pass-service.component.html',
  styleUrls: ['./pass-service.component.css']
})
export class PassServiceComponent implements OnInit {
  title:any;

  constructor(private electricService:ElectricCardServiceService) { }

  ngOnInit() {

    this.electricService.selectedRow.subscribe(data => {
      console.log(JSON.stringify(data));
      this.title = data.deviceName;
    });

  }

}
