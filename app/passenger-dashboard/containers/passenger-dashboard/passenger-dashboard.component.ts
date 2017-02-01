import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger">
      </passenger-detail> 
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() {}
  ngOnInit() {
    console.log('ngOnInit')
    this.passengers = [{
      id: 1,
      fullName: 'Stephen',
      checkedIn: true,
      checkedInDate: 1485194920162,
      children: null
    },
    {
      id: 2,
      fullName: 'Carl',
      checkedIn: false,
      checkedInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    },
    {
      id: 3,
      fullName: 'Louis',
      checkedIn: false,
      checkedInDate: null,
      children: null
    },
    {
      id: 4,
      fullName: 'Jay',
      checkedIn: false,
      checkedInDate: null,
      children: [{ name: 'Jessica', age: 11 }]
    }]
  }
}