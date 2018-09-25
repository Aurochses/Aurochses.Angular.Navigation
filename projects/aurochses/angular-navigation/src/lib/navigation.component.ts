import { Component, Input, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from './navigation.service';

@Component({
    selector: 'aur-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @Input()
    layout = 'vertical';

    @Input()
    navigation: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _navigationService: NavigationService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this._navigationService.getCurrentNavigation();

        // Subscribe to the current navigation changes
        this._navigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.navigation = this._navigationService.getCurrentNavigation();
            });
    }
}
