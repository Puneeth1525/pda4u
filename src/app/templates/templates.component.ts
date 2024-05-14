import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

export interface Options {
  id: string;
  name: string;
}
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplatesComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  dataSource: MatTableDataSource<any>;
  rcxProcess: any = [];
  duration: any = [];
  lastModifiedBy: any = [];
  partner: any = [];
  data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data rows as needed
  ];
  displayedColumns: string[] = [
    'name',
    'descriptions',
    'rcxprocess',
    'partner',
    'encryption',
    'format',
    'modifiedby',
    'status',
    'actions',
  ];

  protected partnersOptions: Options[] = [
    { name: 'Walmart', id: '11' },
    { name: 'Norwegian Cruise Line', id: '12' },
    { name: 'National Car Rental', id: '13' },
    { name: 'Marriott International', id: '14' },
    { name: 'Delta Airlines', id: '15' },
    { name: 'Cax ', id: '16' },
    { name: 'Starbucks', id: '17' },
    { name: 'Ebay', id: '18' },
    { name: 'Hilton', id: '19' },
    { name: 'Hotel Indigo', id: '20' },
  ];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource([
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      // Add more data rows as needed
    ]);
  }
  showListView: boolean = true;

  viewGrid() {
    this.showListView = false;
  }

  viewList() {
    this.showListView = true;
  }

  createTemplate() {
    this.router.navigate(['templates/create']);
  }

  callBack() {
  }
}
