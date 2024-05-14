import { Component } from '@angular/core';

@Component({
  selector: 'app-integration-grid',
  templateUrl: './integration-grid.component.html',
  styleUrls: ['./integration-grid.component.scss'],
})
export class IntegrationGridComponent {
  dataSource: any = [];
  constructor() {
    this.dataSource = [
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Revision',
      },
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Published',
      },
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Revision',
      },
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Published',
      },
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Revision',
      },
      {
        name: 'Integration name that is decently long here will goes here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        template: 'Template Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        status: 'Revision',
      },
      // Add more data rows as needed
    ];
  }

  public openPopup(): void {
    //this.dialog.open(popupDialogComponent);
  }
}
