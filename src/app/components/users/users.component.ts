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
  public loaded: boolean = false;
  public enableAdd: boolean = true;
  public currentClasses = {};

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'EmoChick',
        lastName: 'Rose',
        age: 72,
        address: {
          street: '7784 Envoy Way',
          city: 'Citrus Heights',
          state: 'CA',
        },
        image: 'http://lorempixel.com/600/600/people/9',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2020 09:30:00'),
      },
      {
        firstName: 'Daisy',
        lastName: 'Dallas',
        age: 52,
        address: {
          street: '123 Flouaston Paradise',
          city: 'New York City',
          state: 'NY',
        },
        image: 'http://lorempixel.com/600/600/people/6',
        isActive: false,
        balance: 150,
        registered: new Date('03/05/2020 06:30:00'),
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
        image: 'http://lorempixel.com/600/600/people/5',
        isActive: true,
        balance: 550,
        registered: new Date('05/11/2020 02:30:00'),
      },
    ];

    this.loaded = true;

    // Call for function below
    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
    });

    // Call for function below
    this.setCurrentClasses();
  }

  /* Functions ----------------------- */
  // Add User
  public addUser(user: IUser) {
    this.users.push(user);
  }

  // Set current classes
  public setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd, // Add this class is enableAdd is true
      'uppercase-text': this.enableAdd, // Add this class is enableAdd is true
    };
  }
}
