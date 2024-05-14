import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss'],
})
export class PartnerListComponent {
  displayedColumns: string[] = [
    'partnerName',
    'partnerType',
    'supportNumber',
    'supportEmail',
    'lastUpdatedBy',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private _liveAnnouncer: LiveAnnouncer, private router: Router) {
    this.dataSource = new MatTableDataSource([
      {
        partnerName: 'Delta Airlines',
        partnerType: 'Airline',
        supportNumber: '(629) 555-0129',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Mariott International',
        partnerType: 'Hotel',
        supportNumber: '(907) 555-0101',
        supportEmail: 'email123@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Walmart',
        partnerType: 'Cruiseline',
        supportNumber: '(307) 555-0133',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'National Car Rental',
        partnerType: 'Airline',
        supportNumber: '(505) 555-0125',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Norwegian Cruise Line',
        partnerType: 'Autorental',
        supportNumber: '(907) 555-0101',
        supportEmail: 'email123@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },
      {
        partnerName: 'Walmart',
        partnerType: 'Cruiseline',
        supportNumber: '(307) 555-0133',
        supportEmail: 'email@gmail.com',
        lastUpdatedBy: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
      },

      // Add more data rows as needed
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  edit(row: any): void {
    // Perform edit action for the row
    this.router.navigate(['partners/create']);
  }

  delete(row: any): void {
    // Perform delete action for the row
    console.log('Delete:', row);
  }
  getClassName(statusParam: string) {
    return `status-${statusParam.toLowerCase()}`;
  }
  showDetail() {
    this.router.navigate(['partners/detail']);
  }
}
