import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [{
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
    }];
  }
}