import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cardData: {title: string, path: string}[] = [
    {
      title: 'Mutant List',
      path: ''
    },
    {
      title: 'Register Mutant',
      path: '/register'
    },
    {
      title: 'Vehicles',
      path: '/vehicles'
    }
  ];

}
