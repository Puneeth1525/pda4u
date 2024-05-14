import { CreateEditAlertComponent } from './../create-edit-alert/create-edit-alert.component';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts-properties',
  templateUrl: './alerts-properties.component.html',
  styleUrls: ['./alerts-properties.component.scss'],
})
export class AlertsPropertiesComponent implements AfterViewInit {
  options = ['Option 1', 'Option 2', 'Option 3'];
  displayedColumns: any = [
    'alert_name',
    'alert_type',
    'notification_email_address',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  defaultActiveSort: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    // this.defaultActiveSort = this.displayedColumns[0];
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource([
        {
          alert_name: 'Alert for Failure',
          alert_type: 'end',
          notification_email_address: 'test@gmail.com',
          actions:''
        },
        {
          alert_name: 'Alert for Failure',
          alert_type: 'end',
          notification_email_address: 'test@gmail.com',
          actions:''
        },
        {
          alert_name: 'Alert for Failure',
          alert_type: 'end',
          notification_email_address: 'test@gmail.com',
          actions:''
        },
        {
          alert_name: 'Alert for Failure',
          alert_type: 'end',
          notification_email_address: 'test@gmail.com',
          actions:''
        },
      ]
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.defaultActiveSort = this.displayedColumns[0];
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

  getString(input: String) {
    return `${
      input.charAt(0).toUpperCase() + input.slice(1).replace('_', ' ')
    }`;
  }

  transform(value: any) {
    return Array.from(value);
  }

  normalField(item: string) {
    return this.actionField(item)
      ? false
      : this.statusField(item)
      ? false
      : true;
  }

  actionField(item: string) {
    return item === 'actions' ? true : false;
  }

  statusField(item: string) {
    return item === 'status' ? true : false;
  }

  formatLabel(totalMinutes: number): string {
    if (totalMinutes) {
      if (totalMinutes > 60) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours} hr ${minutes} min`;
      } else {
        let fullDuration =
          totalMinutes === 60 ? `${totalMinutes} hr` : `${totalMinutes} min`;
        // this.duration = fullDuration;
        return fullDuration;
      }
    } else {
      return '';
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateEditAlertComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
