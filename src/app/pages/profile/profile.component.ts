import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 1,
      FirstName: 'Ahmad',
      LastName: 'Saadat',
      Prefix: 'saadat',
      Position: 'Tehran,Iran',
      Picture: '../assets/img/wall.jpg',
      BirthDate: new Date('1995/12/23'),
      HireDate: new Date('2023/07/23'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'I am a developer .\r\n\r\n more than 4 years develoepr .',
      Address: 'iran,Tehran.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
