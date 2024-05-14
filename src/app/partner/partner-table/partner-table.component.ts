import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PartnerTableComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  dataSource: MatTableDataSource<any>;
  data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data rows as needed
  ];
  displayedColumns: string[] = [
    'partnerName',
    'partnerType',
    'supportNumber',
    'supportEmail',
    'lastUpdatedBy',
    'actions',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource([
      {
        partnerName: 'Delta Airlines',
        partnerType: 'Airline',
        supportNumber: '(629) 555-0129',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Delta Airlines',
        partnerType: 'Airline',
        supportNumber: '(629) 555-0129',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Delta Airlines',
        partnerType: 'Airline',
        supportNumber: '(629) 555-0129',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      // Add more data rows as needed
    ]);
  }
  viewList() {
    this.router.navigate(['list'], { relativeTo: this.route });
  }
  viewGrid() {
    this.router.navigate(['grid'], { relativeTo: this.route });
  }
  createTemplate() {
    this.router.navigate(['partners/create']);
  }
}
