import { Component, OnInit } from '@angular/core';
import { BIO } from '../name-card/name';
@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  bio:BIO[];

  constructor() { }

  ngOnInit() {
    this.bio=[{
      name:'firdaus',
      dept:'IT',
      id:1
    }]
  }

}
