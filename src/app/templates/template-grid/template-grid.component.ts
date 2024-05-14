import { Component } from '@angular/core';

@Component({
  selector: 'app-template-grid',
  templateUrl: './template-grid.component.html',
  styleUrls: ['./template-grid.component.scss'],
})
export class TemplateGridComponent {
  dataSource: any = [];
  constructor() {
    this.dataSource = [
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Published',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Published',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      // Add more data rows as needed
    ];
  }

  public openPopup(): void {
    //this.dialog.open(popupDialogComponent);
  }
}
