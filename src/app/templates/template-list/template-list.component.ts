import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent {
  displayedColumns: string[] = [
    'name',
    'descriptions',
    'rcxprocess',
    'partner',
    'format',
    'modifiedby',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource([
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Published',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Published',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Published',
      },
      {
        name: 'Template name',
        descriptions: 'description goes here for template desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'Revision',
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
