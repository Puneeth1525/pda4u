import { Component, AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'connection-template-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.scss'],
})
export class ConnectionListComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'name',
    'descriptions',
    'partner',
    'encryption',
    'connectiontype',
    'username',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource([
      {
        name: 'Delta File',
        descriptions: 'description goes here for template desc...',
        encryption: 'Yes',
        partner: 'International Airlines Group(IAG)',
        connectiontype: 'SFTP',
        username: 'CoolUsername1',
      },
      {
        name: 'Mariott Files',
        descriptions: 'description goes here for template desc...',
        encryption: 'Yes',
        partner: 'Hertz Global',
        connectiontype: 'SFTP',
        username: 'John Doe',
      },
      {
        name: 'Walmart',
        descriptions: 'description goes here for template desc...',
        encryption: 'No',
        partner: 'Hertz Global',
        connectiontype: 'SFTP',
        username: 'John Doe',
      },
      {
        name: 'National Car - Files',
        descriptions: 'description goes here for template desc...',
        encryption: 'No',
        partner: 'United Airlines Holdings',
        connectiontype: 'AWS S3',
        username: 'CoolUsername1',
      },
      {
        name: 'Norwegian Cruise  - Files',
        descriptions: 'description goes here for template desc...',
        encryption: 'Yes',
        partner: 'American Airlines Group',
        connectiontype: 'SFTP',
        username: 'John Doe',
      },
      {
        name: 'Hertz Global',
        descriptions: 'description goes here for template desc...',
        encryption: 'No',
        partner: 'Cathay Pacific Airways',
        connectiontype: 'AWS S3',
        username: 'CoolUsername1',
      },
      // Add more data rows as needed
    ]);
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
    console.log('Edit:', row);
  }

  delete(row: any): void {
    // Perform delete action for the row
    console.log('Delete:', row);
  }
  getClassName(statusParam: string) {
    return `status-${statusParam.toLowerCase()}`;
  }
}
