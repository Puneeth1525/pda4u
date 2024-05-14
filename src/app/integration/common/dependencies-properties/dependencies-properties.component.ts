import { CreateEditDependencyComponent } from './../create-edit-dependency/create-edit-dependency.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dependencies-properties',
  templateUrl: './dependencies-properties.component.html',
  styleUrls: ['./dependencies-properties.component.scss']
})
export class DependenciesPropertiesComponent implements AfterViewInit {
  displayedColumns: any = [
    'dependency_name',
    'dependency_type',
    'integration_dependencies',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  dataSource: MatTableDataSource<any>;
  defaultActiveSort: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    // this.defaultActiveSort = this.displayedColumns[0];
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource([
        {
          dependency_name: 'Dependencies on integration 1234',
          dependency_type: 'One must be succeeded',
          integration_dependencies: 'integration 1, integration 2, integration 3',
          actions:''
        },
        {
          dependency_name: 'Integration Previous run On',
          dependency_type: 'All Must Succeeded',
          integration_dependencies: 'integration 3',
          actions:''
        },
        {
          dependency_name: '3 Integration to prior to run',
          dependency_type: 'All Must Succeeded',
          integration_dependencies: 'integration 1, integration 3',
          actions:''
        },
        {
          dependency_name: '1 Integration to prior to run',
          dependency_type: 'All Must Succeeded',
          integration_dependencies: 'integration 2, integration 3',
          actions:''
        },
      ]
    );
    this.dataSource.sort = this.sort;
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
    const dialogRef = this.dialog.open(CreateEditDependencyComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
