import { Component } from '@angular/core';

import { NavigationService } from '@aurochses/angular-navigation';

import { navigation } from './navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private _navigationService: NavigationService,
  ) {
    // Register the navigation to the service
    this._navigationService.register('main', navigation);

    // Set the main navigation as our current navigation
    this._navigationService.setCurrentNavigation('main');
  }
}
