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
        firstName: 'Derick',
        lastName: 'Moncado',
        age: 72,
        address: {
          street: '7784 Envoy Way',
          city: 'Citrus Heights',
          state: 'CA',
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
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
