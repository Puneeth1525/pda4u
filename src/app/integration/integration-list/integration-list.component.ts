import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-integration-list',
  templateUrl: './integration-list.component.html',
  styleUrls: ['./integration-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntegrationListComponent implements AfterViewInit {
  displayedColumns: any = [
    'integration_name',
    'description',
    'partner_name',
    'template_name',
    'status',
    'actions',
  ];
  dataSource: any = [
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 5',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Published',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
    {
      integration_name: 'Integration 1',
      description: 'This is integration description for integration',
      partner_name: 'Partner Name',
      template_name: 'Template 2',
      status: 'Revision',
      actions: ['copy', 'delete', 'edit'],
    },
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  tableDataSource: any;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
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
