import { Component, OnInit } from '@angular/core';

import { IUser } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Properties
  public users: IUser[];
  public showExtended: boolean = true;
  public loaded: boolean = false ;

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Derick',
        lastName: 'Moncado',
        age: 32,
        address: {
          street: '7784 Envoy Way',
          city: 'Citrus Heights',
          state: 'CA',
        },
      },
      {
        firstName: 'Korbin',
        lastName: 'Dallas',
        age: 52,
        address: {
          street: '123 Flouaston Paradise',
          city: 'New York City',
          state: 'NY',
        },
      },
      {
        firstName: 'Ash',
        lastName: 'Ketchum',
        age: 17,
        address: {
          street: '1234 Some Street',
          city: 'Pallet Town',
          state: 'CA',
        },
      },
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
    })
  }

  // Add User
  addUser(user: IUser) {
    this.users.push(user);
  }

}
