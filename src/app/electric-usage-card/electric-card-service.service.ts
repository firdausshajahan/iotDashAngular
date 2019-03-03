import { Injectable,Output,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectricCardServiceService {
  
  @Output() selectedRow: EventEmitter<any> = new EventEmitter();
  constructor() { }

  getListIOT() { 
    return [
      {
        id:1,
        deviceName:'TV LCD',
        usage:'85W',
        status:'1',
        val:85
      },
      {
        id:2,
        deviceName:'light bulb',
        usage:'60W',
        status:'1',
        val:1
      },
      {
        id:3,
        deviceName:'Coffee Maker',
        usage:'800W',
        status:'0',
        val:800
      },
      {
        id:4,
        deviceName:'Mi Box',
        usage:'5W',
        status:'1',
        val:5
      }
    ]; 
  } 

  passDataViaService(data){
    this.selectedRow.emit(data);
  }


}
